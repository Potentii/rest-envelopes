import ResponseLink from "../response-link.mjs";

export default class ResponseLinkBuilder{
    /**
     * @type {string}
     */
    #href;
    /**
     * @type {?EResponseLinkType}
     */
    #type;
    /**
     * @type {?string}
     */
    #rel;



    /**
     * Creates a new builder
     * @return {ResponseLinkBuilder}
     */
    static create(){
        return new ResponseLinkBuilder();
    }



    /**
     *
     * @param {string} href
     * @return {ResponseLinkBuilder}
     */
    withHref(href){
        this.#href = href;
        return this;
    }
    /**
     *
     * @param {EResponseLinkType} type
     * @return {ResponseLinkBuilder}
     */
    withType(type){
        this.#type = type;
        return this;
    }
    /**
     *
     * @param {string} rel
     * @return {ResponseLinkBuilder}
     */
    withRel(rel){
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

