import RequestEnvelope from "../request-envelope.mjs";

export default class RequestEnvelopeBuilder{
    /**
     * @type {?*|?(*[])}
     */
    #data;



    /**
     * Creates a new builder
     * @return {RequestEnvelopeBuilder}
     */
    static create(){
        return new RequestEnvelopeBuilder();
    }



    /**
     *
     * @param {?*|?(*[])} data
     * @return {RequestEnvelopeBuilder}
     */
    withData(data){
        this.#data = data;
        return this;
    }



    /**
     * Builds the object
     * @return {RequestEnvelope}
     */
    build(){
        return new RequestEnvelope(this.#data);
    }
}

