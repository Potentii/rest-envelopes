import ApiErrorDetail from "./api-error-detail";

declare class ApiError extends Error{
    status: number|null|undefined;
    internalCode: string|null|undefined;
    code: string|null|undefined;
    message: string;
    track: string|null|undefined;
    errors: ApiErrorDetail[]|null;
    cause: Error|null;
    constructor(status: number|null|undefined, internalCode: string|null|undefined, code: string|null|undefined, message: string, track?: string|null|undefined, errors?: ApiErrorDetail|ApiErrorDetail[]|null, cause?: Error|null);
    static from(obj: ApiError|any|null): ApiError|null
    static create(status: number|null|undefined, internalCode: string|null|undefined, code: string|null|undefined, message: string, track?: string|null|undefined, errors?: ApiErrorDetail|ApiErrorDetail[]|null, cause?: Error|null): ApiError
    static builder(): ApiErrorBuilder
}

declare class ApiErrorBuilder{
    #status: number|null|undefined;
    #internalCode: string|null|undefined;
    #code: string|null|undefined;
    #message: string|null|undefined;
    #track: string|null|undefined;
    #errors: ApiErrorDetail[]|null;
    #cause: Error|null;
    constructor();
    status(status: number|null|undefined): ApiErrorBuilder;
    internalCode(internalCode: string|null|undefined): ApiErrorBuilder;
    code(code: string|null|undefined): ApiErrorBuilder;
    message(message: string|null|undefined): ApiErrorBuilder;
    track(track: string|null|undefined): ApiErrorBuilder;
    errors(errors: ApiErrorDetail[]|null): ApiErrorBuilder;
    error(error: ApiErrorDetail|null): ApiErrorBuilder;
    cause(cause: Error|null): ApiErrorBuilder;
    build(): ApiError;
}

export default ApiError;