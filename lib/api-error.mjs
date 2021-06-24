export default class ApiError extends Error{
	/**
	 * @type {String}
	 */
	code;
	/**
	 * @type {String}
	 */
	message;
	/**
	 * @type {ApiErrorDetail[]}
	 */
	errors;
	
	constructor(code, message, errors){
		super(message);
		this.name = this.constructor.name;
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
	 * 
	 * @param code
	 * @param message
	 * @param errors
	 * @return {ApiError}
	 */
	static create(code, message, errors){
		return new ApiError(code, message, errors);
	}
	
}
