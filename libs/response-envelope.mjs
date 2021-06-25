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
		// *Removing exception related fields:
		if(err){
			err.name = undefined;
			err.stack = undefined;
			err.errors?.forEach(detail => {
				detail.name = undefined;
				detail.stack = undefined;
			});
		}
		
		return new ResponseEnvelope(undefined, err);
	}
	
}