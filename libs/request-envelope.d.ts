declare class RequestEnvelope<T = unknown> {
	data: T | null | undefined;

	constructor(data: T | null | undefined);

	static from<T = unknown>(obj: RequestEnvelope<T> | { data: T } | any | null | undefined): RequestEnvelope<T> | null

	static builder<T = unknown>(): RequestEnvelopeBuilder<T>
}

declare class RequestEnvelopeBuilder<T = unknown> {
	#data: T | null | undefined;

	constructor();

	data(data: T | null | undefined): RequestEnvelopeBuilder<T>;

	build(): RequestEnvelope<T>;
}


export default RequestEnvelope;