import ResponseLink from "./response-link.mjs";
import ResponsePagination from "./response-pagination.mjs";
import ApiError from "./api-error.mjs";

/**
 * @template T
 */
export default class ResponseEnvelope {

	/**
	 * @type {T}
	 */
	data;
	/**
	 * @type {?ApiError}
	 */
	error;
	/**
	 * @type {?ResponsePagination}
	 */
	pagination;
	/**
	 * @type {?ResponseLink[]}
	 */
	links;


	/**
	 *
	 * @param {T} data
	 * @param {?ApiError} error
	 * @param {?ResponsePagination} pagination
	 * @param {?ResponseLink[]} links
	 */
	constructor(data, error, pagination, links) {
		this.data = data;
		this.error = error;
		this.pagination = pagination;
		this.links = links;
	}


	/**
	 * Converts a plain object into a new instance of this class
	 * @template T
	 * @param {ResponseEnvelope<T>|object} obj
	 * @return {?ResponseEnvelope<T>}
	 */
	static from(obj) {
		if (!obj) return null;
		return new ResponseEnvelope(
			obj.data,
			obj.error ? ApiError.from(obj.error) : obj.error,
			obj.pagination ? ResponsePagination.from(obj.pagination) : obj.pagination,
			obj.links?.map?.(ResponseLink.from),
		);
	}


	/**
	 * Starts a new builder
	 * @template T
	 * @return {ResponseEnvelopeBuilder<T>}
	 */
	static builder() {
		return new ResponseEnvelopeBuilder();
	}


	/**
	 *
	 * @return {boolean}
	 */
	get hasData() {
		return !!this.data;
	}

	/**
	 *
	 * @return {boolean}
	 */
	get isDataAnArray() {
		return Array.isArray(this.data);
	}

	/**
	 *
	 * @return {boolean}
	 */
	get isDataAnObject() {
		return !!this.data && typeof this.data == 'object';
	}

	/**
	 *
	 * @return {boolean}
	 */
	get hasError() {
		return !!this.error;
	}

	/**
	 *
	 * @return {boolean}
	 */
	get hasPagination() {
		return !!this.pagination;
	}

	/**
	 *
	 * @return {boolean}
	 */
	get hasLinks() {
		return Array.isArray(this.links) && this.links.length > 0;
	}


	/**
	 * Creates a response envelope with some data
	 * Usually used in success cases.
	 * @param {T} data
	 * @return {ResponseEnvelope<T>}
	 */
	static withData(data,) {
		return new ResponseEnvelope(data, undefined, undefined, undefined);
	}

	/**
	 *
	 * @param {T} data
	 * @param {ResponsePagination} pagination
	 * @return {ResponseEnvelope<T>}
	 */
	static withDataAndPagination(data, pagination) {
		return new ResponseEnvelope(data, undefined, pagination, undefined);
	}

	/**
	 *
	 * @param {T} data
	 * @param {ResponsePagination} pagination
	 * @param {ResponseLink[]} links
	 * @return {ResponseEnvelope<T>}
	 */
	static withDataAndPaginationAndLinks(data, pagination, links) {
		return new ResponseEnvelope(data, undefined, pagination, links);
	}

	/**
	 *
	 * @param {T} data
	 * @param {ResponseLink[]} links
	 * @return {ResponseEnvelope<T>}
	 */
	static withDataAndLinks(data, links) {
		return new ResponseEnvelope(data, undefined, undefined, links);
	}


	/**
	 *
	 * @param {ApiError} err
	 * @return {ResponseEnvelope<T>}
	 */
	static withError(err) {
		return new ResponseEnvelope(undefined, cloneAndSanitizeError(err), undefined, undefined);
	}

	/**
	 *
	 * @param {ApiError} err
	 * @param {ResponseLink[]} links
	 * @return {ResponseEnvelope<T>}
	 */
	static withErrorAndLinks(err, links) {
		return new ResponseEnvelope(undefined, cloneAndSanitizeError(err), undefined, links);
	}
}


function sanitizeError(err) {
	err.name = undefined;
	err.stack = undefined;
	err.cause = undefined;
	err.internalCode = undefined;
	if (Array.isArray(err.errors)) {
		for (let subErr of err.errors) {
			subErr.errors = undefined;
			sanitizeError(subErr);
		}
	}
}


/**
 *
 * @param {?ApiError} err
 * @return {?ApiError|?object}
 */
function cloneAndSanitizeError(err) {
	if (err) {
		const errClone = JSON.parse(JSON.stringify(err));
		sanitizeError(errClone);
		return errClone;
	}
	return err;
}


/**
 * @template T
 */
class ResponseEnvelopeBuilder {
	/**
	 * @type {T}
	 */
	#data;
	/**
	 * @type {?ApiError}
	 */
	#error;
	/**
	 * @type {?ResponsePagination}
	 */
	#pagination;
	/**
	 * @type {?ResponseLink[]}
	 */
	#links;


	/**
	 *
	 * @param {T} data
	 * @return {ResponseEnvelopeBuilder<T>}
	 */
	data(data) {
		this.#data = data;
		return this;
	}

	/**
	 *
	 * @param {?ApiError} error
	 * @return {ResponseEnvelopeBuilder<T>}
	 */
	error(error) {
		this.#error = error;
		return this;
	}

	/**
	 *
	 * @param {?ResponsePagination} pagination
	 * @return {ResponseEnvelopeBuilder<T>}
	 */
	pagination(pagination) {
		this.#pagination = pagination;
		return this;
	}

	/**
	 *
	 * @param {?ResponseLink[]} links
	 * @return {ResponseEnvelopeBuilder<T>}
	 */
	links(links) {
		this.#links = links;
		return this;
	}

	/**
	 *
	 * @param {?ResponseLink} link
	 * @return {ResponseEnvelopeBuilder<T>}
	 */
	link(link) {
		if (!Array.isArray(this.#links))
			this.#links = [];
		this.#links.push(link);
		return this;
	}


	/**
	 * Builds the object
	 * @return {ResponseEnvelope<T>}
	 */
	build() {
		return new ResponseEnvelope(this.#data, this.#error, this.#pagination, this.#links);
	}
}




