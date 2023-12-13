declare class ResponseLink{
    href: string|null|undefined;
    type: string|null|undefined;
    rel: string|null|undefined;
    constructor(href: string|null|undefined, type: string|null|undefined, rel: string|null|undefined);
    static from(obj: ResponseLink|any|null): ResponseLink|null
}

export default ResponseLink;