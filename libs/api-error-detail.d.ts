declare class ApiErrorDetail extends Error {
	code: string | null | undefined;
	message: string;
	field: string | null | undefined;
	value: any | null | undefined;

	constructor(code: string | null | undefined, message: string, field: string | null | undefined, value: any | null | undefined);

	static from(obj: ApiErrorDetail | any | null): ApiErrorDetail | null

	static create(code: string | null | undefined, message: string, field: string | null | undefined, value: any | null | undefined): ApiErrorDetail

	static builder(): ApiErrorDetailBuilder
}


declare class ApiErrorDetailBuilder {
	#code: string | null | undefined;
	#message: string | null | undefined;
	#field: string | null | undefined;
	#value: any | null | undefined;

	constructor();

	code(code: string | null | undefined): ApiErrorDetailBuilder;

	message(message: string | null | undefined): ApiErrorDetailBuilder;

	field(field: string | null | undefined): ApiErrorDetailBuilder;

	value(value: any | null | undefined): ApiErrorDetailBuilder;

	build(): ApiErrorDetail;
}


export default ApiErrorDetail;