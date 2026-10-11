import ResponseLink from "./response-link";
import ResponsePagination from "./response-pagination";
import ApiError from "./api-error";

declare class ResponseEnvelope<T = unknown> {
	data: T | null | undefined;
	error: ApiError | null;
	pagination: ResponsePagination | null;
	links: ResponseLink[] | null;

	constructor(data: T | null | undefined, error: ApiError | null, pagination: ResponsePagination | null, links: ResponseLink[] | null);

	get hasData(): boolean;

	get isDataAnArray(): boolean;

	get isDataAnObject(): boolean;

	get hasError(): boolean;

	get hasPagination(): boolean;

	get hasLinks(): boolean;

	static from<T = unknown>(obj: ResponseEnvelope<T> | {
		data: T
	} | any | null | undefined): ResponseEnvelope<T> | null;

	static builder<T = unknown>(): ResponseEnvelopeBuilder

	static withData<T = unknown>(data: T | null | undefined): ResponseEnvelope<T>;

	static withDataAndPagination<T = unknown>(data: T | null | undefined, pagination: ResponsePagination): ResponseEnvelope<T>;

	static withDataAndPaginationAndLinks<T = unknown>(data: T | null | undefined, pagination: ResponsePagination, links: ResponseLink[]): ResponseEnvelope<T>;

	static withDataAndLinks<T = unknown>(data: T | null | undefined, links: ResponseLink[]): ResponseEnvelope<T>;

	static withError<T = unknown>(err: ApiError): ResponseEnvelope<T>;

	static withErrorAndLinks<T = unknown>(err: ApiError, links: ResponseLink[]): ResponseEnvelope<T>;
}


declare class ResponseEnvelopeBuilder<T = unknown> {
	#data: T | null | undefined;
	#error: ApiError | null;
	#pagination: ResponsePagination | null;
	#links: ResponseLink[] | null;

	constructor();

	data(data: T | null | undefined): ResponseEnvelopeBuilder<T>;

	error(error: ApiError | null): ResponseEnvelopeBuilder<T>;

	pagination(pagination: ResponsePagination | null): ResponseEnvelopeBuilder<T>;

	links(links: ResponseLink[] | null): ResponseEnvelopeBuilder<T>;

	link(link: ResponseLink | null): ResponseEnvelopeBuilder<T>;

	build(): ResponseEnvelope<T>;
}


export default ResponseEnvelope;