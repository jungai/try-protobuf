/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.userpackage = (function() {

    /**
     * Namespace userpackage.
     * @exports userpackage
     * @namespace
     */
    var userpackage = {};

    userpackage.UserResp = (function() {

        /**
         * Properties of a UserResp.
         * @memberof userpackage
         * @interface IUserResp
         * @property {number|null} [id] UserResp id
         * @property {string|null} [name] UserResp name
         * @property {string|null} [email] UserResp email
         * @property {boolean|null} [isValid] UserResp isValid
         */

        /**
         * Constructs a new UserResp.
         * @memberof userpackage
         * @classdesc Represents a UserResp.
         * @implements IUserResp
         * @constructor
         * @param {userpackage.IUserResp=} [properties] Properties to set
         */
        function UserResp(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * UserResp id.
         * @member {number} id
         * @memberof userpackage.UserResp
         * @instance
         */
        UserResp.prototype.id = 0;

        /**
         * UserResp name.
         * @member {string} name
         * @memberof userpackage.UserResp
         * @instance
         */
        UserResp.prototype.name = "";

        /**
         * UserResp email.
         * @member {string} email
         * @memberof userpackage.UserResp
         * @instance
         */
        UserResp.prototype.email = "";

        /**
         * UserResp isValid.
         * @member {boolean} isValid
         * @memberof userpackage.UserResp
         * @instance
         */
        UserResp.prototype.isValid = false;

        /**
         * Creates a new UserResp instance using the specified properties.
         * @function create
         * @memberof userpackage.UserResp
         * @static
         * @param {userpackage.IUserResp=} [properties] Properties to set
         * @returns {userpackage.UserResp} UserResp instance
         */
        UserResp.create = function create(properties) {
            return new UserResp(properties);
        };

        /**
         * Encodes the specified UserResp message. Does not implicitly {@link userpackage.UserResp.verify|verify} messages.
         * @function encode
         * @memberof userpackage.UserResp
         * @static
         * @param {userpackage.IUserResp} message UserResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserResp.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.name);
            if (message.email != null && Object.hasOwnProperty.call(message, "email"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.email);
            if (message.isValid != null && Object.hasOwnProperty.call(message, "isValid"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.isValid);
            return writer;
        };

        /**
         * Encodes the specified UserResp message, length delimited. Does not implicitly {@link userpackage.UserResp.verify|verify} messages.
         * @function encodeDelimited
         * @memberof userpackage.UserResp
         * @static
         * @param {userpackage.IUserResp} message UserResp message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        UserResp.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a UserResp message from the specified reader or buffer.
         * @function decode
         * @memberof userpackage.UserResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {userpackage.UserResp} UserResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserResp.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.userpackage.UserResp();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.id = reader.int32();
                        break;
                    }
                case 2: {
                        message.name = reader.string();
                        break;
                    }
                case 3: {
                        message.email = reader.string();
                        break;
                    }
                case 4: {
                        message.isValid = reader.bool();
                        break;
                    }
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a UserResp message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof userpackage.UserResp
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {userpackage.UserResp} UserResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        UserResp.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a UserResp message.
         * @function verify
         * @memberof userpackage.UserResp
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        UserResp.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.email != null && message.hasOwnProperty("email"))
                if (!$util.isString(message.email))
                    return "email: string expected";
            if (message.isValid != null && message.hasOwnProperty("isValid"))
                if (typeof message.isValid !== "boolean")
                    return "isValid: boolean expected";
            return null;
        };

        /**
         * Creates a UserResp message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof userpackage.UserResp
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {userpackage.UserResp} UserResp
         */
        UserResp.fromObject = function fromObject(object) {
            if (object instanceof $root.userpackage.UserResp)
                return object;
            var message = new $root.userpackage.UserResp();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.name != null)
                message.name = String(object.name);
            if (object.email != null)
                message.email = String(object.email);
            if (object.isValid != null)
                message.isValid = Boolean(object.isValid);
            return message;
        };

        /**
         * Creates a plain object from a UserResp message. Also converts values to other types if specified.
         * @function toObject
         * @memberof userpackage.UserResp
         * @static
         * @param {userpackage.UserResp} message UserResp
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        UserResp.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.name = "";
                object.email = "";
                object.isValid = false;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.email != null && message.hasOwnProperty("email"))
                object.email = message.email;
            if (message.isValid != null && message.hasOwnProperty("isValid"))
                object.isValid = message.isValid;
            return object;
        };

        /**
         * Converts this UserResp to JSON.
         * @function toJSON
         * @memberof userpackage.UserResp
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        UserResp.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for UserResp
         * @function getTypeUrl
         * @memberof userpackage.UserResp
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        UserResp.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/userpackage.UserResp";
        };

        return UserResp;
    })();

    return userpackage;
})();

module.exports = $root;
