import * as $protobuf from "protobufjs";
import Long = require("long");
/** Namespace itempackage. */
export namespace itempackage {

    /** Properties of an ItemResp. */
    interface IItemResp {

        /** ItemResp id */
        id?: (number|null);

        /** ItemResp name */
        name?: (string|null);
    }

    /** Represents an ItemResp. */
    class ItemResp implements IItemResp {

        /**
         * Constructs a new ItemResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: itempackage.IItemResp);

        /** ItemResp id. */
        public id: number;

        /** ItemResp name. */
        public name: string;

        /**
         * Creates a new ItemResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ItemResp instance
         */
        public static create(properties?: itempackage.IItemResp): itempackage.ItemResp;

        /**
         * Encodes the specified ItemResp message. Does not implicitly {@link itempackage.ItemResp.verify|verify} messages.
         * @param message ItemResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: itempackage.IItemResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ItemResp message, length delimited. Does not implicitly {@link itempackage.ItemResp.verify|verify} messages.
         * @param message ItemResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: itempackage.IItemResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ItemResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ItemResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): itempackage.ItemResp;

        /**
         * Decodes an ItemResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ItemResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): itempackage.ItemResp;

        /**
         * Verifies an ItemResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an ItemResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ItemResp
         */
        public static fromObject(object: { [k: string]: any }): itempackage.ItemResp;

        /**
         * Creates a plain object from an ItemResp message. Also converts values to other types if specified.
         * @param message ItemResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: itempackage.ItemResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ItemResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ItemResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace userpackage. */
export namespace userpackage {

    /** Properties of a UserResp. */
    interface IUserResp {

        /** UserResp id */
        id?: (number|null);

        /** UserResp name */
        name?: (string|null);

        /** UserResp email */
        email?: (string|null);

        /** UserResp isValid */
        isValid?: (boolean|null);
    }

    /** Represents a UserResp. */
    class UserResp implements IUserResp {

        /**
         * Constructs a new UserResp.
         * @param [properties] Properties to set
         */
        constructor(properties?: userpackage.IUserResp);

        /** UserResp id. */
        public id: number;

        /** UserResp name. */
        public name: string;

        /** UserResp email. */
        public email: string;

        /** UserResp isValid. */
        public isValid: boolean;

        /**
         * Creates a new UserResp instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserResp instance
         */
        public static create(properties?: userpackage.IUserResp): userpackage.UserResp;

        /**
         * Encodes the specified UserResp message. Does not implicitly {@link userpackage.UserResp.verify|verify} messages.
         * @param message UserResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: userpackage.IUserResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserResp message, length delimited. Does not implicitly {@link userpackage.UserResp.verify|verify} messages.
         * @param message UserResp message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: userpackage.IUserResp, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserResp message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): userpackage.UserResp;

        /**
         * Decodes a UserResp message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserResp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): userpackage.UserResp;

        /**
         * Verifies a UserResp message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserResp message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserResp
         */
        public static fromObject(object: { [k: string]: any }): userpackage.UserResp;

        /**
         * Creates a plain object from a UserResp message. Also converts values to other types if specified.
         * @param message UserResp
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: userpackage.UserResp, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserResp to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for UserResp
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
