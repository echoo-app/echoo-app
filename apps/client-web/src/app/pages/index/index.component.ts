import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NzLayoutModule} from 'ng-zorro-antd/layout';
import {NzMenuModule} from 'ng-zorro-antd/menu';
import {RouterModule} from '@angular/router';
import {NzIconModule} from 'ng-zorro-antd/icon';

@Component({
	selector: 'echoo-index',
	standalone: true,
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss'],
	imports: [CommonModule, RouterModule, NzLayoutModule, NzMenuModule, NzIconModule],
})
export class IndexComponent {}
