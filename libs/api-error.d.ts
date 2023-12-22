import ApiErrorDetail from "./api-error-detail";

declare class ApiError extends Error{
    status: number|null|undefined;
    code: string|null|undefined;
    message: string|null|undefined;
    track: string|null|undefined;
    errors: ApiErrorDetail[]|null;
    cause: Error|null;
    constructor(status: number|null|undefined, code: string|null|undefined, message: string|null|undefined, track?: string|null|undefined, errors?: ApiErrorDetail|ApiErrorDetail[]|null, cause?: Error|null);
    static from(obj: ApiError|any|null): ApiError|null
    static create(status: number|null|undefined, code: string|null|undefined, message: string|null|undefined, track?: string|null|undefined, errors?: ApiErrorDetail|ApiErrorDetail[]|null, cause?: Error|null): ApiError
}

export default ApiError;