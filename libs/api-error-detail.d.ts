declare class ApiErrorDetail extends Error{
    code: string|null|undefined;
    message: string|null|undefined;
    field: string|null|undefined;
    value: any|null|undefined;
    constructor(code: string|null|undefined, message: string|null|undefined, field: string|null|undefined, value: any|null|undefined);
    static from(obj: ApiErrorDetail|any|null): ApiErrorDetail|null
    static create(code: string|null|undefined, message: string|null|undefined, field: string|null|undefined, value: any|null|undefined): ApiErrorDetail
}

export default ApiErrorDetail;