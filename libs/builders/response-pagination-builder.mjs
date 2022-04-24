import ResponsePagination from "../response-pagination.mjs";

export default class ResponsePaginationBuilder{
    /**
     *
     * @type {?number}
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
     * Creates a new builder
     * @return {ResponsePaginationBuilder}
     */
    static create(){
        return new ResponsePaginationBuilder();
    }



    /**
     *
     * @param {number} page
     * @return {ResponsePaginationBuilder}
     */
    withPage(page){
        this.#page = page;
        return this;
    }
    /**
     *
     * @param {number} pageSize
     * @return {ResponsePaginationBuilder}
     */
    withPageSize(pageSize){
        this.#pageSize = pageSize;
        return this;
    }
    /**
     *
     * @param {number} actualPageSize
     * @return {ResponsePaginationBuilder}
     */
    withActualPageSize(actualPageSize){
        this.#actualPageSize = actualPageSize;
        return this;
    }
    /**
     *
     * @param {number} pages
     * @return {ResponsePaginationBuilder}
     */
    withPages(pages){
        this.#pages = pages;
        return this;
    }
    /**
     *
     * @param {number} totalSize
     * @return {ResponsePaginationBuilder}
     */
    withTotalSize(totalSize){
        this.#totalSize = totalSize;
        return this;
    }



    /**
     * Builds the object
     * @return {ResponsePagination}
     */
    build(){
        return new ResponsePagination(this.#page, this.#pageSize, this.#actualPageSize, this.#pages, this.#totalSize);
    }
}

