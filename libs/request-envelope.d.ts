declare class RequestEnvelope{
    data: any|null|undefined;
    constructor(data: any|null|undefined);
    static from(obj: RequestEnvelope|any|null): RequestEnvelope|null
    static builder(): RequestEnvelopeBuilder
}

declare class RequestEnvelopeBuilder{
    // @ts-ignore
    #data: any|null|undefined;
    constructor();
    data(data: any|null|undefined): RequestEnvelopeBuilder;
    build(): RequestEnvelope;
}


export default RequestEnvelope;