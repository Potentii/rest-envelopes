import ApiErrorDetail from "../api-error-detail.mjs";

export default class ApiErrorDetailBuilder{
    /**
     * @type {string}
     */
    #code;
    /**
     * @type {?string}
     */
    #message;
    /**
     * @type {?string}
     */
    #field;
    /**
     * @type {?*}
     */
    #value;



    /**
     * Creates a new builder
     * @return {ApiErrorDetailBuilder}
     */
    static create(){
        return new ApiErrorDetailBuilder();
    }



    /**
     *
     * @param {string} code
     * @return {ApiErrorDetailBuilder}
     */
    withCode(code){
        this.#code = code;
        return this;
    }
    /**
     *
     * @param {string} message
     * @return {ApiErrorDetailBuilder}
     */
    withMessage(message){
        this.#message = message;
        return this;
    }
    /**
     *
     * @param {string} field
     * @return {ApiErrorDetailBuilder}
     */
    withField(field){
        this.#field = field;
        return this;
    }
    /**
     *
     * @param {*} value
     * @return {ApiErrorDetailBuilder}
     */
    withValue(value){
        this.#value = value;
        return this;
    }



    /**
     * Builds the object
     * @return {ApiErrorDetail}
     */
    build(){
        return new ApiErrorDetail(this.#code, this.#message, this.#field, this.#value);
    }
}

