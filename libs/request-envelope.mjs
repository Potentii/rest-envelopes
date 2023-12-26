export default class RequestEnvelope{

	/**
	 * @type {?*|?(*[])}
	 */
	data;



	/**
	 *
	 * @param {?*|?(*[])} data
	 */
	constructor(data){
		this.data = data;
	}



	/**
	 * Converts a plain object into a new instance of this class
	 * @param {RequestEnvelope|object} obj
	 * @return {?RequestEnvelope}
	 */
	static from(obj){
		if(!obj) return null;
		return new RequestEnvelope(
			obj.data,
		);
	}


    /**
     * Starts a new builder
     * @return {RequestEnvelopeBuilder}
     */
    static builder(){
        return new RequestEnvelopeBuilder();
    }
}




class RequestEnvelopeBuilder{

    /**
     * @type {?*|?(*[])}
     */
    #data;



    /**
     *
     * @param {?*|?(*[])} data
     * @return {RequestEnvelopeBuilder}
     */
    data(data){
        this.#data = data;
        return this;
    }



    /**
     * Builds the object
     * @return {RequestEnvelope}
     */
    build(){
        return new RequestEnvelope(this.#data);
    }
}

