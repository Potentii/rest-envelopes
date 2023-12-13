import ResponseLink from "./response-link";
import ResponsePagination from "./response-pagination";
import ApiError from "./api-error";

declare class ResponseEnvelope{
    data: any|null|undefined;
    error: ApiError|null;
    pagination: ResponsePagination|null;
    links: ResponseLink[]|null;
    constructor(data: any|null|undefined, error: ApiError|null, pagination: ResponsePagination|null, links: ResponseLink[]|null);
    get hasData(): boolean;
    get isDataAnArray(): boolean;
    get isDataAnObject(): boolean;
    get hasError(): boolean;
    get hasPagination(): boolean;
    get hasLinks(): boolean;
    static from(obj: ResponseEnvelope|any|null): ResponseEnvelope|null;
    static withData(data: any|null|undefined): ResponseEnvelope;
    static withDataAndPagination(data: any|null|undefined, pagination: ResponsePagination): ResponseEnvelope;
    static withDataAndPaginationAndLinks(data: any|null|undefined, pagination: ResponsePagination, links: ResponseLink[]): ResponseEnvelope;
    static withDataAndLinks(data: any|null|undefined, links: ResponseLink[]): ResponseEnvelope;
    static withError(err: ApiError): ResponseEnvelope;
    static withErrorAndLinks(err: ApiError, links: ResponseLink[]): ResponseEnvelope;
}

export default ResponseEnvelope;