/**
 * Pagination information of the requested page
 */
export default class ResponsePagination {
    /**
     * The current page number. The same as the client have requested.
     * @type {?number}
     */
    page;
    /**
     * The number of items on each page (as requested by the client).
     * @type {?number}
     */
    pageSize;
    /**
     * The actual number of items in this page. It should match the {@link pageSize}, unless it's the last page available, in this case, this property may be less than the {@link pageSize}.
     * @type {?number}
     */
    actualPageSize;
    /**
     * The total number of pages available.
     * @type {?number}
     */
    pages;
    /**
     * The total number of items available (summing all items of all pages).
     * @type {?number}
     */
    totalSize;



    /**
     *
     * @param {?number} page
     * @param {?number} pageSize
     * @param {?number} actualPageSize
     * @param {?number} pages
     * @param {?number} totalSize
     */
    constructor(page, pageSize, actualPageSize, pages, totalSize) {
        this.page = page;
        this.pageSize = pageSize;
        this.actualPageSize = actualPageSize;
        this.pages = pages;
        this.totalSize = totalSize;
    }



    /**
     * Converts a plain object into a new instance of this class
     * @param {ResponsePagination|object} obj
     * @return {?ResponsePagination}
     */
    static from(obj){
        if(!obj) return null;
        return new ResponsePagination(
            obj.page,
            obj.pageSize,
            obj.actualPageSize,
            obj.pages,
            obj.totalSize,
        )
    }
}
