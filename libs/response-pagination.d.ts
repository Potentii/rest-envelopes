declare class ResponsePagination{
    page: number|null|undefined;
    pageSize: number|null|undefined;
    actualPageSize: number|null|undefined;
    pages: number|null|undefined;
    totalSize: number|null|undefined;
    constructor(page: number|null|undefined, pageSize: number|null|undefined, actualPageSize: number|null|undefined, pages: number|null|undefined, totalSize: number|null|undefined);
    static from(obj: ResponsePagination|any|null): ResponsePagination|null
    static builder(): ResponsePaginationBuilder
}



declare class ResponsePaginationBuilder{
    // @ts-ignore
    #page: number|null|undefined;
    // @ts-ignore
    #pageSize: number|null|undefined;
    // @ts-ignore
    #actualPageSize: number|null|undefined;
    // @ts-ignore
    #pages: number|null|undefined;
    // @ts-ignore
    #totalSize: number|null|undefined;
    constructor();
    page(page: number|null|undefined): ResponsePaginationBuilder;
    pageSize(pageSize: number|null|undefined): ResponsePaginationBuilder;
    actualPageSize(actualPageSize: number|null|undefined): ResponsePaginationBuilder;
    pages(pages: number|null|undefined): ResponsePaginationBuilder;
    totalSize(totalSize: number|null|undefined): ResponsePaginationBuilder;
    build(): ResponsePagination;
}

export default ResponsePagination;