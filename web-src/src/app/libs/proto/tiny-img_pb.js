// source: tiny-img.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = (function () {
    if (this) {
        return this;
    }
    if (typeof window !== 'undefined') {
        return window;
    }
    if (typeof global !== 'undefined') {
        return global;
    }
    if (typeof self !== 'undefined') {
        return self;
    }
    return Function('return this')();
}.call(null));

goog.exportSymbol('proto.devutils.tiny_img.InCompressImage', null, global);
goog.exportSymbol('proto.devutils.tiny_img.OutCompressImage', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.devutils.tiny_img.InCompressImage = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.devutils.tiny_img.InCompressImage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    /**
     * @public
     * @override
     */
    proto.devutils.tiny_img.InCompressImage.displayName = 'proto.devutils.tiny_img.InCompressImage';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.devutils.tiny_img.OutCompressImage = function (opt_data) {
    jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.devutils.tiny_img.OutCompressImage, jspb.Message);
if (goog.DEBUG && !COMPILED) {
    /**
     * @public
     * @override
     */
    proto.devutils.tiny_img.OutCompressImage.displayName = 'proto.devutils.tiny_img.OutCompressImage';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * Optional fields that are not set will be set to undefined.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
     * @param {boolean=} opt_includeInstance Deprecated. whether to include the
     *     JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.devutils.tiny_img.InCompressImage.prototype.toObject = function (opt_includeInstance) {
        return proto.devutils.tiny_img.InCompressImage.toObject(opt_includeInstance, this);
    };


    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Deprecated. Whether to include
     *     the JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.devutils.tiny_img.InCompressImage} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.devutils.tiny_img.InCompressImage.toObject = function (includeInstance, msg) {
        var f, obj = {
            data: msg.getData_asB64(),
            ext: jspb.Message.getFieldWithDefault(msg, 2, ""),
            quality: jspb.Message.getFieldWithDefault(msg, 3, 0)
        };

        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.devutils.tiny_img.InCompressImage}
 */
proto.devutils.tiny_img.InCompressImage.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.devutils.tiny_img.InCompressImage;
    return proto.devutils.tiny_img.InCompressImage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.devutils.tiny_img.InCompressImage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.devutils.tiny_img.InCompressImage}
 */
proto.devutils.tiny_img.InCompressImage.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {!Uint8Array} */ (reader.readBytes());
                msg.setData(value);
                break;
            case 2:
                var value = /** @type {string} */ (reader.readString());
                msg.setExt(value);
                break;
            case 3:
                var value = /** @type {number} */ (reader.readUint32());
                msg.setQuality(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.devutils.tiny_img.InCompressImage.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.devutils.tiny_img.InCompressImage.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.devutils.tiny_img.InCompressImage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.devutils.tiny_img.InCompressImage.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getData_asU8();
    if (f.length > 0) {
        writer.writeBytes(
            1,
            f
        );
    }
    f = message.getExt();
    if (f.length > 0) {
        writer.writeString(
            2,
            f
        );
    }
    f = message.getQuality();
    if (f !== 0) {
        writer.writeUint32(
            3,
            f
        );
    }
};


/**
 * optional bytes data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.devutils.tiny_img.InCompressImage.prototype.getData = function () {
    return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.devutils.tiny_img.InCompressImage.prototype.getData_asB64 = function () {
    return /** @type {string} */ (jspb.Message.bytesAsB64(
        this.getData()));
};


/**
 * optional bytes data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.devutils.tiny_img.InCompressImage.prototype.getData_asU8 = function () {
    return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
        this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.devutils.tiny_img.InCompressImage} returns this
 */
proto.devutils.tiny_img.InCompressImage.prototype.setData = function (value) {
    return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string ext = 2;
 * @return {string}
 */
proto.devutils.tiny_img.InCompressImage.prototype.getExt = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.devutils.tiny_img.InCompressImage} returns this
 */
proto.devutils.tiny_img.InCompressImage.prototype.setExt = function (value) {
    return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint32 quality = 3;
 * @return {number}
 */
proto.devutils.tiny_img.InCompressImage.prototype.getQuality = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.devutils.tiny_img.InCompressImage} returns this
 */
proto.devutils.tiny_img.InCompressImage.prototype.setQuality = function (value) {
    return jspb.Message.setProto3IntField(this, 3, value);
};


if (jspb.Message.GENERATE_TO_OBJECT) {
    /**
     * Creates an object representation of this proto.
     * Field names that are reserved in JavaScript and will be renamed to pb_name.
     * Optional fields that are not set will be set to undefined.
     * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
     * For the list of reserved names please see:
     *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
     * @param {boolean=} opt_includeInstance Deprecated. whether to include the
     *     JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @return {!Object}
     */
    proto.devutils.tiny_img.OutCompressImage.prototype.toObject = function (opt_includeInstance) {
        return proto.devutils.tiny_img.OutCompressImage.toObject(opt_includeInstance, this);
    };


    /**
     * Static version of the {@see toObject} method.
     * @param {boolean|undefined} includeInstance Deprecated. Whether to include
     *     the JSPB instance for transitional soy proto support:
     *     http://goto/soy-param-migration
     * @param {!proto.devutils.tiny_img.OutCompressImage} msg The msg instance to transform.
     * @return {!Object}
     * @suppress {unusedLocalVariables} f is only used for nested messages
     */
    proto.devutils.tiny_img.OutCompressImage.toObject = function (includeInstance, msg) {
        var f, obj = {
            data: msg.getData_asB64(),
            ext: jspb.Message.getFieldWithDefault(msg, 2, ""),
            size: jspb.Message.getFieldWithDefault(msg, 3, 0)
        };

        if (includeInstance) {
            obj.$jspbMessageInstance = msg;
        }
        return obj;
    };
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.devutils.tiny_img.OutCompressImage}
 */
proto.devutils.tiny_img.OutCompressImage.deserializeBinary = function (bytes) {
    var reader = new jspb.BinaryReader(bytes);
    var msg = new proto.devutils.tiny_img.OutCompressImage;
    return proto.devutils.tiny_img.OutCompressImage.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.devutils.tiny_img.OutCompressImage} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.devutils.tiny_img.OutCompressImage}
 */
proto.devutils.tiny_img.OutCompressImage.deserializeBinaryFromReader = function (msg, reader) {
    while (reader.nextField()) {
        if (reader.isEndGroup()) {
            break;
        }
        var field = reader.getFieldNumber();
        switch (field) {
            case 1:
                var value = /** @type {!Uint8Array} */ (reader.readBytes());
                msg.setData(value);
                break;
            case 2:
                var value = /** @type {string} */ (reader.readString());
                msg.setExt(value);
                break;
            case 3:
                var value = /** @type {number} */ (reader.readUint64());
                msg.setSize(value);
                break;
            default:
                reader.skipField();
                break;
        }
    }
    return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.devutils.tiny_img.OutCompressImage.prototype.serializeBinary = function () {
    var writer = new jspb.BinaryWriter();
    proto.devutils.tiny_img.OutCompressImage.serializeBinaryToWriter(this, writer);
    return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.devutils.tiny_img.OutCompressImage} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.devutils.tiny_img.OutCompressImage.serializeBinaryToWriter = function (message, writer) {
    var f = undefined;
    f = message.getData_asU8();
    if (f.length > 0) {
        writer.writeBytes(
            1,
            f
        );
    }
    f = message.getExt();
    if (f.length > 0) {
        writer.writeString(
            2,
            f
        );
    }
    f = message.getSize();
    if (f !== 0) {
        writer.writeUint64(
            3,
            f
        );
    }
};


/**
 * optional bytes data = 1;
 * @return {!(string|Uint8Array)}
 */
proto.devutils.tiny_img.OutCompressImage.prototype.getData = function () {
    return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes data = 1;
 * This is a type-conversion wrapper around `getData()`
 * @return {string}
 */
proto.devutils.tiny_img.OutCompressImage.prototype.getData_asB64 = function () {
    return /** @type {string} */ (jspb.Message.bytesAsB64(
        this.getData()));
};


/**
 * optional bytes data = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getData()`
 * @return {!Uint8Array}
 */
proto.devutils.tiny_img.OutCompressImage.prototype.getData_asU8 = function () {
    return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
        this.getData()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.devutils.tiny_img.OutCompressImage} returns this
 */
proto.devutils.tiny_img.OutCompressImage.prototype.setData = function (value) {
    return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional string ext = 2;
 * @return {string}
 */
proto.devutils.tiny_img.OutCompressImage.prototype.getExt = function () {
    return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.devutils.tiny_img.OutCompressImage} returns this
 */
proto.devutils.tiny_img.OutCompressImage.prototype.setExt = function (value) {
    return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional uint64 size = 3;
 * @return {number}
 */
proto.devutils.tiny_img.OutCompressImage.prototype.getSize = function () {
    return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.devutils.tiny_img.OutCompressImage} returns this
 */
proto.devutils.tiny_img.OutCompressImage.prototype.setSize = function (value) {
    return jspb.Message.setProto3IntField(this, 3, value);
};


goog.object.extend(exports, proto.devutils.tiny_img);
