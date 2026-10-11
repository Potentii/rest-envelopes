declare class ResponseLink {
	href: string | null | undefined;
	type: string | null | undefined;
	rel: string | null | undefined;

	constructor(href: string | null | undefined, type: string | null | undefined, rel: string | null | undefined);

	static from(obj: ResponseLink | any | null): ResponseLink | null

	static builder(): ResponseLinkBuilder
}


declare class ResponseLinkBuilder {
	#href: string | null | undefined;
	#type: string | null | undefined;
	#rel: string | null | undefined;

	constructor();

	href(href: string | null | undefined): ResponseLinkBuilder;

	type(type: string | null | undefined): ResponseLinkBuilder;

	rel(rel: string | null | undefined): ResponseLinkBuilder;

	build(): ResponseLink;
}


export default ResponseLink;