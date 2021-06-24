export default class ApiErrorDetail extends Error{
	/**
	 * @type {String}
	 */
	code;
	/**
	 * @type {String}
	 */
	message;
	/**
	 * @type {String}
	 */
	field;
	/**
	 * @type {*}
	 */
	value;


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
	 * 
	 * @param code
	 * @param message
	 * @param field
	 * @param value
	 * @return {ApiErrorDetail}
	 */
	static create(code, message, field, value){
		return new ApiErrorDetail(code, message, field, value);
	}
	
}