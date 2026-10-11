/**
 * Standardized envelope for API requests encapsulating payload data.
 *
 * @template T Type of the payload data.
 */
declare class RequestEnvelope<T = unknown> {
	/**
	 * The request payload data.
	 */
	data: T | null | undefined;

	/**
	 * Creates a new instance of RequestEnvelope.
	 *
	 * @param data The request payload data.
	 */
	constructor(data: T | null | undefined);

	/**
	 * Converts a plain object into a new instance of this class.
	 *
	 * @template T Type of the payload data.
	 * @param obj Plain object or instance to convert.
	 * @returns A new RequestEnvelope instance, or null if obj is falsy.
	 */
	static from<T = unknown>(obj: RequestEnvelope<T> | { data: T } | any | null | undefined): RequestEnvelope<T> | null;

	/**
	 * Starts a new builder to construct a RequestEnvelope instance.
	 *
	 * @template T Type of the payload data.
	 * @returns A new RequestEnvelopeBuilder instance.
	 */
	static builder<T = unknown>(): RequestEnvelopeBuilder<T>;
}

/**
 * Builder for constructing RequestEnvelope instances.
 *
 * @template T Type of the payload data.
 */
declare class RequestEnvelopeBuilder<T = unknown> {
	/**
	 * The request payload data.
	 */
	#data: T | null | undefined;

	/**
	 * Creates a new instance of RequestEnvelopeBuilder.
	 */
	constructor();

	/**
	 * Sets the request payload data.
	 *
	 * @param data The request payload data.
	 * @returns The builder instance for chaining.
	 */
	data(data: T | null | undefined): RequestEnvelopeBuilder<T>;

	/**
	 * Builds the RequestEnvelope instance.
	 *
	 * @returns A new RequestEnvelope instance.
	 */
	build(): RequestEnvelope<T>;
}


export default RequestEnvelope;