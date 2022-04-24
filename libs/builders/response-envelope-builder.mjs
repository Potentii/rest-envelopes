import ResponseEnvelope from "../response-envelope.mjs";

export default class ResponseEnvelopeBuilder{
    /**
     * @type {?*|?(*[])}
     */
    #data;
    /**
     * @type {?ApiError}
     */
    #error;
    /**
     * @type {?ResponsePagination}
     */
    #pagination;
    /**
     * @type {?ResponseLink[]}
     */
    #links;



    /**
     * Creates a new builder
     * @return {ResponseEnvelopeBuilder}
     */
    static create(){
        return new ResponseEnvelopeBuilder();
    }



    /**
     *
     * @param {?*|?(*[])} data
     * @return {ResponseEnvelopeBuilder}
     */
    withData(data){
        this.#data = data;
        return this;
    }
    /**
     *
     * @param {ApiError} error
     * @return {ResponseEnvelopeBuilder}
     */
    withError(error){
        this.#error = error;
        return this;
    }
    /**
     *
     * @param {ResponsePagination} pagination
     * @return {ResponseEnvelopeBuilder}
     */
    withPagination(pagination){
        this.#pagination = pagination;
        return this;
    }
    /**
     *
     * @param {ResponseLink[]} links
     * @return {ResponseEnvelopeBuilder}
     */
    withLinks(links){
        this.#links = links;
        return this;
    }
    /**
     *
     * @param {ResponseLink} link
     * @return {ResponseEnvelopeBuilder}
     */
    withLink(link){
        if(!Array.isArray(this.#links))
            this.#links = [];
        this.#links.push(link);
        return this;
    }



    /**
     * Builds the object
     * @return {ResponseEnvelope}
     */
    build(){
        return new ResponseEnvelope(this.#data, this.#error, this.#pagination, this.#links);
    }
}

