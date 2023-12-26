import ApiErrorDetail from "./api-error-detail.mjs";

export default class ApiError extends Error{

    /**
     * @type {?number}
     */
    status;
    /**
     * @type {?string}
     */
    internalCode;
	/**
	 * @type {?string}
	 */
	code;
	/**
	 * @type {?string}
	 */
	message;
    /**
     * @type {?string}
     */
    track;
	/**
	 * @type {?ApiErrorDetail[]}
	 */
	errors;
    /**
     * @type {?Error}
     */
    cause;



	/**
     *
     * @param {?number} status
     * @param {?string} internalCode
     * @param {?string} code
     * @param {?string} message
     * @param {?string} [track]
     * @param {?ApiErrorDetail|?(ApiErrorDetail[])} [errors]
     * @param {?Error} [cause]
     */
	constructor(status, internalCode, code, message, track, errors, cause){
		super(message);
		this.name = this.constructor.name;
        this.status = status;
        this.internalCode = internalCode;
        this.code = code;
		this.message = message;
        this.track = track;
		if(errors && !Array.isArray(errors))
			errors = [errors];
		this.errors = errors;
        this.cause = cause;
		
		if('captureStackTrace' in Error)
			Error.captureStackTrace(this, ApiError);
		else
			this.stack = (new Error()).stack;

        if(cause?.stack){
            if(!this.stack)
                this.stack = '';
            this.stack += `\nCaused by: ${cause?.stack}`;
        }
	}



	/**
	 * Converts a plain object into a new instance of this class
	 * @param {ApiError|object} obj
	 * @return {?ApiError}
	 */
	static from(obj){
		if(!obj) return null;
		return new ApiError(
            obj.status,
            obj.internalCode,
			obj.code,
			obj.message,
            obj.track,
			obj.errors?.map?.(ApiErrorDetail.from),
            obj.cause,
		);
	}



	/**
	 *
     * @param {?number} status
	 * @param {?string} internalCode
     * @param {?string} code
	 * @param {?string} message
     * @param {?string} [track]
	 * @param {?ApiErrorDetail|?(ApiErrorDetail[])} [errors]
     * @param {?Error} [cause]
	 * @return {ApiError}
	 */
	static create(status, internalCode, code, message, track, errors, cause){
		return new ApiError(status, internalCode, code, message, track, errors, cause);
	}


    /**
     * Starts a new builder
     * @return {ApiErrorBuilder}
     */
    static builder(){
        return new ApiErrorBuilder();
    }
	
}




class ApiErrorBuilder{
    /**
     * @type {?number}
     */
    #status;
    /**
     * @type {?string}
     */
    #internalCode;
    /**
     * @type {?string}
     */
    #code;
    /**
     * @type {?string}
     */
    #message;
    /**
     * @type {?string}
     */
    #track;
    /**
     * @type {?ApiErrorDetail[]}
     */
    #errors;
    /**
     * @type {?Error}
     */
    #cause;

    /**
     *
     * @param {?number} status
     * @return {ApiErrorBuilder}
     */
    status(status){
        this.#status = status;
        return this;
    }
    /**
     *
     * @param {?string} internalCode
     * @return {ApiErrorBuilder}
     */
    internalCode(internalCode){
        this.#internalCode = internalCode;
        return this;
    }
    /**
     *
     * @param {?string} code
     * @return {ApiErrorBuilder}
     */
    code(code){
        this.#code = code;
        return this;
    }
    /**
     *
     * @param {?string} message
     * @return {ApiErrorBuilder}
     */
    message(message){
        this.#message = message;
        return this;
    }
    /**
     *
     * @param {?string} track
     * @return {ApiErrorBuilder}
     */
    track(track){
        this.#track = track;
        return this;
    }
    /**
     *
     * @param {?ApiErrorDetail[]} errors
     * @return {ApiErrorBuilder}
     */
    errors(errors){
        this.#errors = errors;
        return this;
    }
    /**
     *
     * @param {?ApiErrorDetail} error
     * @return {ApiErrorBuilder}
     */
    error(error){
        if(!Array.isArray(this.#errors))
            this.#errors = [];
        this.#errors.push(error);
        return this;
    }
    /**
     *
     * @param {?Error} cause
     * @return {ApiErrorBuilder}
     */
    cause(cause){
        this.#cause = cause;
        return this;
    }



    /**
     * Builds the object
     * @return {ApiError}
     */
    build(){
        return new ApiError(this.#status, this.#internalCode, this.#code, this.#message, this.#track, this.#errors, this.#cause);
    }
}




