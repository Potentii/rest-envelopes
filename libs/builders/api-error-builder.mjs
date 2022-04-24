import ApiError from "../api-error.mjs";

export default class ApiErrorBuilder{
    /**
     * @type {string}
     */
    #code;
    /**
     * @type {?string}
     */
    #message;
    /**
     * @type {?ApiErrorDetail[]}
     */
    #errors;



    /**
     * Creates a new builder
     * @return {ApiErrorBuilder}
     */
    static create(){
        return new ApiErrorBuilder();
    }



    /**
     *
     * @param {string} code
     * @return {ApiErrorBuilder}
     */
    withCode(code){
        this.#code = code;
        return this;
    }
    /**
     *
     * @param {string} message
     * @return {ApiErrorBuilder}
     */
    withMessage(message){
        this.#message = message;
        return this;
    }
    /**
     *
     * @param {ApiErrorDetail[]} errors
     * @return {ApiErrorBuilder}
     */
    withErrors(errors){
        this.#errors = errors;
        return this;
    }
    /**
     *
     * @param {ApiErrorDetail} error
     * @return {ApiErrorBuilder}
     */
    withError(error){
        if(!Array.isArray(this.#errors))
            this.#errors = [];
        this.#errors.push(error);
        return this;
    }



    /**
     * Builds the object
     * @return {ApiError}
     */
    build(){
        return new ApiError(this.#code, this.#message, this.#errors);
    }
}

