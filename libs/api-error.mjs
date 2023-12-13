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
	 *
     * @param {?number} status
	 * @param {?string} code
	 * @param {?string} message
     * @param {?string} [track]
	 * @param {?ApiErrorDetail|?(ApiErrorDetail[])} [errors]
	 */
	constructor(status, code, message, track, errors){
		super(message);
		this.name = this.constructor.name;
        this.status = status;
        this.code = code;
		this.message = message;
        this.track = track;
		
		if(errors && !Array.isArray(errors))
			errors = [errors];
		
		this.errors = errors;
		
		if('captureStackTrace' in Error)
			Error.captureStackTrace(this, ApiError);
		else
			this.stack = (new Error()).stack;
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
		)
	}



	/**
	 *
     * @param {?number} status
	 * @param {?string} code
	 * @param {?string} message
     * @param {?string} [track]
	 * @param {?ApiErrorDetail|?(ApiErrorDetail[])} [errors]
	 * @return {ApiError}
	 */
	static create(status, code, message, track, errors){
		return new ApiError(status, code, message, track, errors);
	}
	
}
