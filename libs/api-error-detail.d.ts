/**
 * Detailed error information describing a specific sub-error or validation failure in an API error response.
 */
declare class ApiErrorDetail extends Error {
	/**
	 * Error code identifying the specific detail or error type.
	 */
	code: string | null | undefined;

	/**
	 * Error message describing the detail.
	 */
	message: string;

	/**
	 * The request or payload field associated with this error detail.
	 */
	field: string | null | undefined;

	/**
	 * The rejected value of the field that caused the error detail.
	 */
	value: any | null | undefined;

	/**
	 * Creates a new instance of ApiErrorDetail.
	 *
	 * @param code The error code identifying the specific detail.
	 * @param message The descriptive error message.
	 * @param field The field associated with the error detail.
	 * @param value The value associated with the error detail.
	 */
	constructor(code: string | null | undefined, message: string, field: string | null | undefined, value: any | null | undefined);

	/**
	 * Converts a plain object into a new instance of this class.
	 *
	 * @param obj Plain object or instance to convert.
	 * @returns A new ApiErrorDetail instance, or null if obj is falsy.
	 */
	static from(obj: ApiErrorDetail | any | null): ApiErrorDetail | null;

	/**
	 * Creates a new instance of ApiErrorDetail.
	 *
	 * @param code The error code identifying the specific detail.
	 * @param message The descriptive error message.
	 * @param field The field associated with the error detail.
	 * @param value The value associated with the error detail.
	 * @returns A new ApiErrorDetail instance.
	 */
	static create(code: string | null | undefined, message: string, field: string | null | undefined, value: any | null | undefined): ApiErrorDetail;

	/**
	 * Starts a new builder to construct an ApiErrorDetail instance.
	 *
	 * @returns A new ApiErrorDetailBuilder instance.
	 */
	static builder(): ApiErrorDetailBuilder;
}


/**
 * Builder for constructing ApiErrorDetail instances.
 */
declare class ApiErrorDetailBuilder {
	/**
	 * Error code identifying the specific detail or error type.
	 */
	#code: string | null | undefined;

	/**
	 * Error message describing the detail.
	 */
	#message: string | null | undefined;

	/**
	 * The request or payload field associated with this error detail.
	 */
	#field: string | null | undefined;

	/**
	 * The rejected value of the field that caused the error detail.
	 */
	#value: any | null | undefined;

	/**
	 * Creates a new instance of ApiErrorDetailBuilder.
	 */
	constructor();

	/**
	 * Sets the error code.
	 *
	 * @param code The error code.
	 * @returns The builder instance for chaining.
	 */
	code(code: string | null | undefined): ApiErrorDetailBuilder;

	/**
	 * Sets the error message.
	 *
	 * @param message The descriptive error message.
	 * @returns The builder instance for chaining.
	 */
	message(message: string | null | undefined): ApiErrorDetailBuilder;

	/**
	 * Sets the field associated with the error detail.
	 *
	 * @param field The field name.
	 * @returns The builder instance for chaining.
	 */
	field(field: string | null | undefined): ApiErrorDetailBuilder;

	/**
	 * Sets the value associated with the error detail.
	 *
	 * @param value The value of the field.
	 * @returns The builder instance for chaining.
	 */
	value(value: any | null | undefined): ApiErrorDetailBuilder;

	/**
	 * Builds the ApiErrorDetail instance.
	 *
	 * @returns A new ApiErrorDetail instance.
	 */
	build(): ApiErrorDetail;
}


export default ApiErrorDetail;