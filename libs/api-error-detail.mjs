export default class ApiErrorDetail extends Error{
	/**
	 * @type {string}
	 */
	code;
	/**
	 * @type {?string}
	 */
	message;
	/**
	 * @type {?string}
	 */
	field;
	/**
	 * @type {?*}
	 */
	value;



	/**
	 *
	 * @param {string} code
	 * @param {?string} message
	 * @param {?string} field
	 * @param {?*} value
	 */
	constructor(code, message, field, value){
		super(message);
		this.name = this.constructor.name;
		this.code = code;
		this.message = message;
		this.field = field;
		this.value = value;

		if('captureStackTrace' in Error)
			Error.captureStackTrace(this, ApiErrorDetail);
		else
			this.stack = (new Error()).stack;
	}



	/**
	 * Converts a plain object into a new instance of this class
	 * @param {ApiErrorDetail|object} obj
	 * @return {?ApiErrorDetail}
	 */
	static from(obj){
		if(!obj) return null;
		return new ApiErrorDetail(
			obj.code,
			obj.message,
			obj.field,
			obj.value,
		)
	}



	/**
	 * 
	 * @param {string} code
	 * @param {?string} message
	 * @param {?string} field
	 * @param {?*} value
	 * @return {ApiErrorDetail}
	 */
	static create(code, message, field, value){
		return new ApiErrorDetail(code, message, field, value);
	}
	
}