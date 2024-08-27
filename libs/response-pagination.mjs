/**
 * Pagination information of the requested page
 */
export default class ResponsePagination {

    /**
     * The current page number/ID/reference. The same as the client have requested.
     * @type {?number|?string}
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
     * The next page number/ID/reference, if any.
     * @type {?number|?string}
     */
    next;
    /**
     * The previous page number/ID/reference, if any.
     * @type {?number|?string}
     */
    prev;



    /**
     *
     * @param {?number|?string} page
     * @param {?number} pageSize
     * @param {?number} actualPageSize
     * @param {?number} pages
     * @param {?number} totalSize
     * @param {?number|?string} next
     * @param {?number|?string} prev
     */
    constructor(page, pageSize, actualPageSize, pages, totalSize, next, prev) {
        this.page = page;
        this.pageSize = pageSize;
        this.actualPageSize = actualPageSize;
        this.pages = pages;
        this.totalSize = totalSize;
        this.next = next;
        this.prev = prev;
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
            obj.next,
            obj.prev,
        );
    }


    /**
     * Starts a new builder
     * @return {ResponsePaginationBuilder}
     */
    static builder(){
        return new ResponsePaginationBuilder();
    }
}




class ResponsePaginationBuilder{
    /**
     *
     * @type {?number|?string}
     */
    #page;
    /**
     *
     * @type {?number}
     */
    #pageSize;
    /**
     *
     * @type {?number}
     */
    #actualPageSize;
    /**
     *
     * @type {?number}
     */
    #pages;
    /**
     *
     * @type {?number}
     */
    #totalSize;
    /**
     *
     * @type {?number|?string}
     */
    #next;
    /**
     *
     * @type {?number|?string}
     */
    #prev;




    /**
     * The current page number/ID/reference. The same as the client have requested.
     * @param {?number|?string} page
     * @return {ResponsePaginationBuilder}
     */
    page(page){
        this.#page = page;
        return this;
    }
    /**
     * The number of items on each page (as requested by the client).
     * @param {?number} pageSize
     * @return {ResponsePaginationBuilder}
     */
    pageSize(pageSize){
        this.#pageSize = pageSize;
        return this;
    }
    /**
     * The actual number of items in this page. It should match the {@link pageSize}, unless it's the last page available, in this case, this property may be less than the {@link pageSize}.
     * @param {?number} actualPageSize
     * @return {ResponsePaginationBuilder}
     */
    actualPageSize(actualPageSize){
        this.#actualPageSize = actualPageSize;
        return this;
    }
    /**
     * The total number of pages available.
     * @param {?number} pages
     * @return {ResponsePaginationBuilder}
     */
    pages(pages){
        this.#pages = pages;
        return this;
    }
    /**
     * The total number of items available (summing all items of all pages).
     * @param {?number} totalSize
     * @return {ResponsePaginationBuilder}
     */
    totalSize(totalSize){
        this.#totalSize = totalSize;
        return this;
    }
    /**
     * The current page number/ID/reference, if any.
     * @param {?number|?string} next
     * @return {ResponsePaginationBuilder}
     */
    next(next){
        this.#next = next;
        return this;
    }
    /**
     * The current page number/ID/reference, if any.
     * @param {?number|?string} prev
     * @return {ResponsePaginationBuilder}
     */
    prev(prev){
        this.#prev = prev;
        return this;
    }



    /**
     * Builds the object
     * @return {ResponsePagination}
     */
    build(){
        return new ResponsePagination(this.#page, this.#pageSize, this.#actualPageSize, this.#pages, this.#totalSize, this.#next, this.#prev);
    }
}


