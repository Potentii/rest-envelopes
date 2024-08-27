declare class ResponsePagination{
    page: number|string|null|undefined;
    pageSize: number|null|undefined;
    actualPageSize: number|null|undefined;
    pages: number|null|undefined;
    totalSize: number|null|undefined;
    next: number|string|null|undefined;
    prev: number|string|null|undefined;
    constructor(page: number|string|null|undefined, pageSize: number|null|undefined, actualPageSize: number|null|undefined, pages: number|null|undefined, totalSize: number|null|undefined, next: number|string|null|undefined, prev: number|string|null|undefined);
    static from(obj: ResponsePagination|any|null): ResponsePagination|null
    static builder(): ResponsePaginationBuilder
}



declare class ResponsePaginationBuilder{
    // @ts-ignore
    #page: number|string|null|undefined;
    // @ts-ignore
    #pageSize: number|null|undefined;
    // @ts-ignore
    #actualPageSize: number|null|undefined;
    // @ts-ignore
    #pages: number|null|undefined;
    // @ts-ignore
    #totalSize: number|null|undefined;
    // @ts-ignore
    #next: number|string|null|undefined;
    // @ts-ignore
    #prev: number|string|null|undefined;
    constructor();
    page(page: number|string|null|undefined): ResponsePaginationBuilder;
    pageSize(pageSize: number|null|undefined): ResponsePaginationBuilder;
    actualPageSize(actualPageSize: number|null|undefined): ResponsePaginationBuilder;
    pages(pages: number|null|undefined): ResponsePaginationBuilder;
    totalSize(totalSize: number|null|undefined): ResponsePaginationBuilder;
    next(next: number|string|null|undefined): ResponsePaginationBuilder;
    prev(prev: number|string|null|undefined): ResponsePaginationBuilder;
    build(): ResponsePagination;
}

export default ResponsePagination;