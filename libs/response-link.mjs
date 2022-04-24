/**
 * @typedef {string} EResponseLinkType
 */

/**
 * Each HATEOAS link object of a response body
 *
 * @example
 * {
 *     "type": "GET",
 *     "href": "/api/payment/1234567/history"
 *     "rel": "payment-history"
 * }
 *
 * @see https://datatracker.ietf.org/doc/html/rfc8288
 */
export default class ResponseLink{
    /**
     * @type {string}
     */
    href;
    /**
     * @type {?EResponseLinkType}
     */
    type;
    /**
     * @type {?string}
     */
    rel;



    /**
     *
     * @param {string} href
     * @param {?EResponseLinkType} type
     * @param {?string} rel
     */
    constructor(href, type, rel) {
        this.href = href;
        this.type = type;
        this.rel = rel;
    }



    /**
     * Converts a plain object into a new instance of this class
     * @param {ResponseLink|object} obj
     * @return {?ResponseLink}
     */
    static from(obj){
        if(!obj) return null;
        return new ResponseLink(
            obj.href,
            obj.type,
            obj.rel,
        )
    }
}