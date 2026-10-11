/**
 * Each HATEOAS link object of a response body.
 *
 * @example
 * {
 *     "type": "GET",
 *     "href": "/api/payment/1234567/history",
 *     "rel": "payment-history"
 * }
 *
 * @see https://datatracker.ietf.org/doc/html/rfc8288
 */
declare class ResponseLink {
	/**
	 * Target URI of the link.
	 */
	href: string | null | undefined;

	/**
	 * HTTP method or media type associated with the link action.
	 */
	type: string | null | undefined;

	/**
	 * Link relation type defining the relationship to the target resource.
	 */
	rel: string | null | undefined;

	/**
	 * Creates a new instance of ResponseLink.
	 *
	 * @param href Target URI of the link.
	 * @param type HTTP method or media type associated with the link.
	 * @param rel Link relation type.
	 */
	constructor(href: string | null | undefined, type: string | null | undefined, rel: string | null | undefined);

	/**
	 * Converts a plain object into a new instance of this class.
	 *
	 * @param obj Plain object or instance to convert.
	 * @returns A new ResponseLink instance, or null if obj is falsy.
	 */
	static from(obj: ResponseLink | any | null): ResponseLink | null;

	/**
	 * Starts a new builder to construct a ResponseLink instance.
	 *
	 * @returns A new ResponseLinkBuilder instance.
	 */
	static builder(): ResponseLinkBuilder;
}


/**
 * Builder for constructing ResponseLink instances.
 */
declare class ResponseLinkBuilder {
	/**
	 * Target URI of the link.
	 */
	#href: string | null | undefined;

	/**
	 * HTTP method or media type associated with the link action.
	 */
	#type: string | null | undefined;

	/**
	 * Link relation type defining the relationship to the target resource.
	 */
	#rel: string | null | undefined;

	/**
	 * Creates a new instance of ResponseLinkBuilder.
	 */
	constructor();

	/**
	 * Sets the target URI of the link.
	 *
	 * @param href The target URI.
	 * @returns The builder instance for chaining.
	 */
	href(href: string | null | undefined): ResponseLinkBuilder;

	/**
	 * Sets the HTTP method or media type associated with the link.
	 *
	 * @param type The HTTP method or media type.
	 * @returns The builder instance for chaining.
	 */
	type(type: string | null | undefined): ResponseLinkBuilder;

	/**
	 * Sets the link relation type.
	 *
	 * @param rel The link relation type.
	 * @returns The builder instance for chaining.
	 */
	rel(rel: string | null | undefined): ResponseLinkBuilder;

	/**
	 * Builds the ResponseLink instance.
	 *
	 * @returns A new ResponseLink instance.
	 */
	build(): ResponseLink;
}


export default ResponseLink;