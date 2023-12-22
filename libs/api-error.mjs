import ApiErrorDetail from "./api-error-detail.mjs";

export default class ApiError extends Error{

    /**
     * @type {?number}
     */
    status;
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
     * @param {?string} code
     * @param {?string} message
     * @param {?string} [track]
     * @param {?ApiErrorDetail|?(ApiErrorDetail[])} [errors]
     * @param {?Error} [cause]
     */
	constructor(status, code, message, track, errors, cause){
		super(message);
		this.name = this.constructor.name;
        this.status = status;
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
			obj.code,
			obj.message,
            obj.track,
			obj.errors?.map?.(ApiErrorDetail.from),
            obj.cause,
		)
	}



	/**
	 *
     * @param {?number} status
	 * @param {?string} code
	 * @param {?string} message
     * @param {?string} [track]
	 * @param {?ApiErrorDetail|?(ApiErrorDetail[])} [errors]
     * @param {?Error} [cause]
	 * @return {ApiError}
	 */
	static create(status, code, message, track, errors, cause){
		return new ApiError(status, code, message, track, errors, cause);
	}
	
}
