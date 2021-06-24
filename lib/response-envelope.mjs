export default class ResponseEnvelope{

	/**
	 * @type {Object|Object[]}
	 */
	data;
	/**
	 * @type {ApiError}
	 */
	error;
	
	// pagination;


	constructor(data, error){
		this.data = data;
		this.error = error;
	}


	/**
	 * 
	 * @param {Object|Object[]} data
	 */
	static withData(data){
		return new ResponseEnvelope(data, undefined);
	}

	/**
	 *
	 * @param {ApiError} err
	 */
	static withError(err){
		return new ResponseEnvelope(undefined, err);
	}
	
}