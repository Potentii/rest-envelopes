declare class RequestEnvelope{
    data: any|null|undefined;
    constructor(data: any|null|undefined);
    static from(obj: RequestEnvelope|any|null): RequestEnvelope|null
}

export default RequestEnvelope;