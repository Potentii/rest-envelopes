/**
 * Pagination information of the requested page.
 */
declare class ResponsePagination {
	/**
	 * The current page number/ID/reference. The same as the client has requested.
	 */
	page: number | string | null | undefined;

	/**
	 * The number of items on each page (as requested by the client).
	 */
	pageSize: number | null | undefined;

	/**
	 * The actual number of items in this page. It should match the pageSize, unless it's the last page available, in which case this property may be less than the pageSize.
	 */
	actualPageSize: number | null | undefined;

	/**
	 * The total number of pages available.
	 */
	pages: number | null | undefined;

	/**
	 * The total number of items available (summing all items of all pages).
	 */
	totalSize: number | null | undefined;

	/**
	 * The next page number/ID/reference, if any.
	 */
	next: number | string | null | undefined;

	/**
	 * The previous page number/ID/reference, if any.
	 */
	prev: number | string | null | undefined;

	/**
	 * Creates a new instance of ResponsePagination.
	 *
	 * @param page The current page number/ID/reference.
	 * @param pageSize The number of items on each page.
	 * @param actualPageSize The actual number of items in this page.
	 * @param pages The total number of pages available.
	 * @param totalSize The total number of items available.
	 * @param next The next page number/ID/reference, if any.
	 * @param prev The previous page number/ID/reference, if any.
	 */
	constructor(page: number | string | null | undefined, pageSize: number | null | undefined, actualPageSize: number | null | undefined, pages: number | null | undefined, totalSize: number | null | undefined, next: number | string | null | undefined, prev: number | string | null | undefined);

	/**
	 * Converts a plain object into a new instance of this class.
	 *
	 * @param obj Plain object or instance to convert.
	 * @returns A new ResponsePagination instance, or null if obj is falsy.
	 */
	static from(obj: ResponsePagination | any | null): ResponsePagination | null;

	/**
	 * Starts a new builder to construct a ResponsePagination instance.
	 *
	 * @returns A new ResponsePaginationBuilder instance.
	 */
	static builder(): ResponsePaginationBuilder;
}


/**
 * Builder for constructing ResponsePagination instances.
 */
declare class ResponsePaginationBuilder {
	/**
	 * The current page number/ID/reference.
	 */
	#page: number | string | null | undefined;

	/**
	 * The number of items on each page.
	 */
	#pageSize: number | null | undefined;

	/**
	 * The actual number of items in this page.
	 */
	#actualPageSize: number | null | undefined;

	/**
	 * The total number of pages available.
	 */
	#pages: number | null | undefined;

	/**
	 * The total number of items available.
	 */
	#totalSize: number | null | undefined;

	/**
	 * The next page number/ID/reference, if any.
	 */
	#next: number | string | null | undefined;

	/**
	 * The previous page number/ID/reference, if any.
	 */
	#prev: number | string | null | undefined;

	/**
	 * Creates a new instance of ResponsePaginationBuilder.
	 */
	constructor();

	/**
	 * Sets the current page number/ID/reference.
	 *
	 * @param page The current page number/ID/reference.
	 * @returns The builder instance for chaining.
	 */
	page(page: number | string | null | undefined): ResponsePaginationBuilder;

	/**
	 * Sets the number of items on each page (as requested by the client).
	 *
	 * @param pageSize The number of items per page.
	 * @returns The builder instance for chaining.
	 */
	pageSize(pageSize: number | null | undefined): ResponsePaginationBuilder;

	/**
	 * Sets the actual number of items in this page.
	 *
	 * @param actualPageSize The actual number of items in this page.
	 * @returns The builder instance for chaining.
	 */
	actualPageSize(actualPageSize: number | null | undefined): ResponsePaginationBuilder;

	/**
	 * Sets the total number of pages available.
	 *
	 * @param pages The total number of pages.
	 * @returns The builder instance for chaining.
	 */
	pages(pages: number | null | undefined): ResponsePaginationBuilder;

	/**
	 * Sets the total number of items available (summing all items of all pages).
	 *
	 * @param totalSize The total number of items.
	 * @returns The builder instance for chaining.
	 */
	totalSize(totalSize: number | null | undefined): ResponsePaginationBuilder;

	/**
	 * Sets the next page number/ID/reference, if any.
	 *
	 * @param next The next page number/ID/reference.
	 * @returns The builder instance for chaining.
	 */
	next(next: number | string | null | undefined): ResponsePaginationBuilder;

	/**
	 * Sets the previous page number/ID/reference, if any.
	 *
	 * @param prev The previous page number/ID/reference.
	 * @returns The builder instance for chaining.
	 */
	prev(prev: number | string | null | undefined): ResponsePaginationBuilder;

	/**
	 * Builds the ResponsePagination instance.
	 *
	 * @returns A new ResponsePagination instance.
	 */
	build(): ResponsePagination;
}

export default ResponsePagination;