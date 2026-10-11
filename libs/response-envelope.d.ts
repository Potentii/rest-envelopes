import ResponseLink from "./response-link";
import ResponsePagination from "./response-pagination";
import ApiError from "./api-error";

/**
 * Standardized envelope for API responses encapsulating payload data, error details, pagination metadata, and HATEOAS navigational links.
 *
 * @template T Type of the payload data.
 */
declare class ResponseEnvelope<T = unknown> {
	/**
	 * The response payload data.
	 */
	data: T | null | undefined;

	/**
	 * The API error information, if an error occurred.
	 */
	error: ApiError | null;

	/**
	 * Pagination metadata for the response.
	 */
	pagination: ResponsePagination | null;

	/**
	 * List of HATEOAS navigational links.
	 */
	links: ResponseLink[] | null;

	/**
	 * Creates a new instance of ResponseEnvelope.
	 *
	 * @param data The response payload data.
	 * @param error The API error information.
	 * @param pagination The pagination metadata.
	 * @param links The HATEOAS navigational links.
	 */
	constructor(data: T | null | undefined, error: ApiError | null, pagination: ResponsePagination | null, links: ResponseLink[] | null);

	/**
	 * Indicates whether the envelope contains data.
	 *
	 * @returns True if data is present, false otherwise.
	 */
	get hasData(): boolean;

	/**
	 * Indicates whether the response payload data is an array.
	 *
	 * @returns True if data is an array, false otherwise.
	 */
	get isDataAnArray(): boolean;

	/**
	 * Indicates whether the response payload data is a non-null object.
	 *
	 * @returns True if data is an object, false otherwise.
	 */
	get isDataAnObject(): boolean;

	/**
	 * Indicates whether the envelope contains an error.
	 *
	 * @returns True if error is present, false otherwise.
	 */
	get hasError(): boolean;

	/**
	 * Indicates whether the envelope contains pagination metadata.
	 *
	 * @returns True if pagination is present, false otherwise.
	 */
	get hasPagination(): boolean;

	/**
	 * Indicates whether the envelope contains HATEOAS navigational links.
	 *
	 * @returns True if links array is non-empty, false otherwise.
	 */
	get hasLinks(): boolean;

	/**
	 * Converts a plain object into a new instance of this class.
	 *
	 * @template T Type of the payload data.
	 * @param obj Plain object or instance to convert.
	 * @returns A new ResponseEnvelope instance, or null if obj is falsy.
	 */
	static from<T = unknown>(obj: ResponseEnvelope<T> | {
		data: T
	} | any | null | undefined): ResponseEnvelope<T> | null;

	/**
	 * Starts a new builder to construct a ResponseEnvelope instance.
	 *
	 * @template T Type of the payload data.
	 * @returns A new ResponseEnvelopeBuilder instance.
	 */
	static builder<T = unknown>(): ResponseEnvelopeBuilder<T>;

	/**
	 * Creates a response envelope with payload data (typically used for successful responses).
	 *
	 * @template T Type of the payload data.
	 * @param data The response payload data.
	 * @returns A new ResponseEnvelope instance.
	 */
	static withData<T = unknown>(data: T | null | undefined): ResponseEnvelope<T>;

	/**
	 * Creates a response envelope with payload data and pagination metadata.
	 *
	 * @template T Type of the payload data.
	 * @param data The response payload data.
	 * @param pagination The pagination metadata.
	 * @returns A new ResponseEnvelope instance.
	 */
	static withDataAndPagination<T = unknown>(data: T | null | undefined, pagination: ResponsePagination): ResponseEnvelope<T>;

	/**
	 * Creates a response envelope with payload data, pagination metadata, and HATEOAS navigational links.
	 *
	 * @template T Type of the payload data.
	 * @param data The response payload data.
	 * @param pagination The pagination metadata.
	 * @param links The HATEOAS navigational links.
	 * @returns A new ResponseEnvelope instance.
	 */
	static withDataAndPaginationAndLinks<T = unknown>(data: T | null | undefined, pagination: ResponsePagination, links: ResponseLink[]): ResponseEnvelope<T>;

	/**
	 * Creates a response envelope with payload data and HATEOAS navigational links.
	 *
	 * @template T Type of the payload data.
	 * @param data The response payload data.
	 * @param links The HATEOAS navigational links.
	 * @returns A new ResponseEnvelope instance.
	 */
	static withDataAndLinks<T = unknown>(data: T | null | undefined, links: ResponseLink[]): ResponseEnvelope<T>;

	/**
	 * Creates a response envelope with an API error (cloned and sanitized).
	 *
	 * @template T Type of the payload data.
	 * @param err The API error.
	 * @returns A new ResponseEnvelope instance.
	 */
	static withError<T = unknown>(err: ApiError): ResponseEnvelope<T>;

	/**
	 * Creates a response envelope with an API error (cloned and sanitized) and HATEOAS navigational links.
	 *
	 * @template T Type of the payload data.
	 * @param err The API error.
	 * @param links The HATEOAS navigational links.
	 * @returns A new ResponseEnvelope instance.
	 */
	static withErrorAndLinks<T = unknown>(err: ApiError, links: ResponseLink[]): ResponseEnvelope<T>;
}


/**
 * Builder for constructing ResponseEnvelope instances.
 *
 * @template T Type of the payload data.
 */
declare class ResponseEnvelopeBuilder<T = unknown> {
	/**
	 * The response payload data.
	 */
	#data: T | null | undefined;

	/**
	 * The API error information.
	 */
	#error: ApiError | null;

	/**
	 * Pagination metadata for the response.
	 */
	#pagination: ResponsePagination | null;

	/**
	 * List of HATEOAS navigational links.
	 */
	#links: ResponseLink[] | null;

	/**
	 * Creates a new instance of ResponseEnvelopeBuilder.
	 */
	constructor();

	/**
	 * Sets the response payload data.
	 *
	 * @param data The response payload data.
	 * @returns The builder instance for chaining.
	 */
	data(data: T | null | undefined): ResponseEnvelopeBuilder<T>;

	/**
	 * Sets the API error information.
	 *
	 * @param error The API error information.
	 * @returns The builder instance for chaining.
	 */
	error(error: ApiError | null): ResponseEnvelopeBuilder<T>;

	/**
	 * Sets the pagination metadata.
	 *
	 * @param pagination The pagination metadata.
	 * @returns The builder instance for chaining.
	 */
	pagination(pagination: ResponsePagination | null): ResponseEnvelopeBuilder<T>;

	/**
	 * Sets the list of HATEOAS navigational links.
	 *
	 * @param links An array of ResponseLink instances.
	 * @returns The builder instance for chaining.
	 */
	links(links: ResponseLink[] | null): ResponseEnvelopeBuilder<T>;

	/**
	 * Appends a HATEOAS navigational link to the list of links.
	 *
	 * @param link The ResponseLink instance to add.
	 * @returns The builder instance for chaining.
	 */
	link(link: ResponseLink | null): ResponseEnvelopeBuilder<T>;

	/**
	 * Builds the ResponseEnvelope instance.
	 *
	 * @returns A new ResponseEnvelope instance.
	 */
	build(): ResponseEnvelope<T>;
}


export default ResponseEnvelope;