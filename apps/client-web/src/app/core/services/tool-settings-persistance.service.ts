import { inject, Injectable, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WebStorageServiceService } from '@echoo/web-storage-service';
import { UntilDestroy } from '@ngneat/until-destroy';
import type {
  ToolSettingItem,
  ToolSettings,
} from '../../data/types/tool-config';
import { APP_CONFIGS } from '../config';

/**
 * This service is used to persist settings for a tool.
 * Setting values can be accessed from query params or local storage.
 * If setting item appears in query parames, it will be used and local storage will be updated, otherwise local storage will be used and query params will be updated.
 */
@UntilDestroy({ checkProperties: true })
@Injectable({
  providedIn: 'root',
})
export class ToolSettingsPersistanceService<
  K extends string,
  T extends ToolSettings<K> = ToolSettings<K>
> {
  rt = inject(Router);
  art = inject(ActivatedRoute);
  appConfigs = inject(APP_CONFIGS);
  storeService = inject(WebStorageServiceService);
  vcr = inject(ViewContainerRef);

  settings?: T;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _temp: any;

  static fromDefaultSettings<K extends string>(
    settingValue: ToolSettings<K>
  ): ToolSettingsPersistanceService<K> {
    const service = new ToolSettingsPersistanceService<K>();
    service.settings = settingValue;
    service.listenToQueryParams();

    return service;
  }

  listenToQueryParams() {
    this.art.queryParams.subscribe((params) => {
      Object.keys(params).forEach((queryKey) => {
        const queryValue = params[queryKey];

        const settingItem = <ToolSettingItem<unknown>>(
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          this.toolSettings[queryKey]
        );

        if (queryValue && settingItem.asQueryParams) {
          this.set(queryKey as K, queryValue);
        }
      });
    });
  }

  get toolSettings() {
    return this.settings?.settings ?? {};
  }

  get appConfigKey() {
    return this.appConfigs.ToolsSettingsLocalStoreKey || 'XX';
  }

  get toolConfigKey() {
    return this.settings?.key;
  }

  get store() {
    // init an empty item in this.vault if it doesn't exist
    if (!this.storeService.get(this.appConfigKey)) {
      this.resetDefault();
    }

    if (!this._temp) {
      this._temp = this.storeService.get(this.appConfigKey);
    }
    return this._temp;
  }

  resetDefault() {
    this._temp = undefined;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const defaultSettings: { [key: string]: any } = {};
    if (!this.toolConfigKey) {
      return;
    }
    defaultSettings[this.toolConfigKey] = {};
    Object.keys(this.toolSettings).forEach((key) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      defaultSettings[this.toolConfigKey][key] = this.toolSettings[key].value;
    });
    this.storeService.set(this.appConfigKey, defaultSettings);
  }

  get(key: string) {
    if (!Object.keys(this.toolSettings || {}).includes(key as string)) {
      return;
    }
    if (!this.toolConfigKey) {
      return;
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    return this.store[this.toolConfigKey][key] || this.toolSettings[key];
  }

  set(key: K, value: string) {
    if (!Object.keys(this.toolSettings || {}).includes(key as string)) {
      return;
    }

    if (!this.toolConfigKey) {
      return;
    }

    this.store[this.toolConfigKey][key] = value;
    this.storeService.set(this.appConfigKey, this.store);

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (this.toolSettings[key].asQueryParams) {
      this.rt.navigate([], {
        relativeTo: this.art,
        queryParams: this.store[this.toolConfigKey],
      });
    }
  }
}
