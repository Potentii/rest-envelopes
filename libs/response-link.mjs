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
     * @type {?string}
     */
    href;
    /**
     * @type {?string}
     */
    type;
    /**
     * @type {?string}
     */
    rel;



    /**
     *
     * @param {?string} href
     * @param {?string} type
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
        );
    }


    /**
     * Starts a new builder
     * @return {ResponseLinkBuilder}
     */
    static builder(){
        return new ResponseLinkBuilder();
    }
}




class ResponseLinkBuilder{
    /**
     * @type {string}
     */
    #href;
    /**
     * @type {?string}
     */
    #type;
    /**
     * @type {?string}
     */
    #rel;



    /**
     *
     * @param {?string} href
     * @return {ResponseLinkBuilder}
     */
    href(href){
        this.#href = href;
        return this;
    }
    /**
     *
     * @param {?string} type
     * @return {ResponseLinkBuilder}
     */
    type(type){
        this.#type = type;
        return this;
    }
    /**
     *
     * @param {?string} rel
     * @return {ResponseLinkBuilder}
     */
    rel(rel){
        this.#rel = rel;
        return this;
    }



    /**
     * Builds the object
     * @return {ResponseLink}
     */
    build(){
        return new ResponseLink(this.#href, this.#type, this.#rel);
    }
}
