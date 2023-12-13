declare class ResponsePagination{
    page: number|null|undefined;
    pageSize: number|null|undefined;
    actualPageSize: number|null|undefined;
    pages: number|null|undefined;
    totalSize: number|null|undefined;
    constructor(page: number|null|undefined, pageSize: number|null|undefined, actualPageSize: number|null|undefined, pages: number|null|undefined, totalSize: number|null|undefined);
    static from(obj: ResponsePagination|any|null): ResponsePagination|null
}

export default ResponsePagination;