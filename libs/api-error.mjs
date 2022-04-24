import ApiErrorDetail from "./api-error-detail.mjs";

export default class ApiError extends Error{
	/**
	 * @type {string}
	 */
	code;
	/**
	 * @type {?string}
	 */
	message;
	/**
	 * @type {?ApiErrorDetail[]}
	 */
	errors;



	/**
	 *
	 * @param {string} code
	 * @param {?string} message
	 * @param {?ApiErrorDetail|?(ApiErrorDetail[])} errors
	 */
	constructor(code, message, errors){
		super(message);
		this.name = this.constructor.name;
		this.message = message;
		this.code = code;
		
		if(!Array.isArray(errors) && errors)
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
			obj.code,
			obj.message,
			obj.errors?.map?.(ApiErrorDetail.from),
		)
	}



	/**
	 * 
	 * @param {string} code
	 * @param {?string} message
	 * @param {?ApiErrorDetail|?(ApiErrorDetail[])} errors
	 * @return {ApiError}
	 */
	static create(code, message, errors){
		return new ApiError(code, message, errors);
	}
	
}
