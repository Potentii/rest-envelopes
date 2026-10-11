/**
 * @template T
 */
export default class RequestEnvelope {

	/**
	 * @type {T}
	 */
	data;


	/**
	 *
	 * @param {T} data
	 */
	constructor(data) {
		this.data = data;
	}


	/**
	 * Converts a plain object into a new instance of this class
	 * @template T
	 * @param {RequestEnvelope<T>|object} obj
	 * @return {?RequestEnvelope<T>}
	 */
	static from(obj) {
		if (!obj) return null;
		return new RequestEnvelope(
			obj.data,
		);
	}


	/**
	 * Starts a new builder
	 * @template T
	 * @return {RequestEnvelopeBuilder<T>}
	 */
	static builder() {
		return new RequestEnvelopeBuilder();
	}
}


/**
 * @template T
 */
class RequestEnvelopeBuilder {

	/**
	 * @type {T}
	 */
	#data;


	/**
	 *
	 * @param {T} data
	 * @return {RequestEnvelopeBuilder}
	 */
	data(data) {
		this.#data = data;
		return this;
	}


	/**
	 * Builds the object
	 * @return {RequestEnvelope<T>}
	 */
	build() {
		return new RequestEnvelope(this.#data);
	}
}

