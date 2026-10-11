import ApiErrorDetail from "./api-error-detail";

/**
 * Standardized API error representation encapsulating status code, error codes, tracking identifiers, sub-errors, and root causes.
 */
declare class ApiError extends Error {
	/**
	 * HTTP status code associated with the error.
	 */
	status: number | null | undefined;

	/**
	 * Internal business or system error code.
	 */
	internalCode: string | null | undefined;

	/**
	 * Public error code.
	 */
	code: string | null | undefined;

	/**
	 * Error message describing the error.
	 */
	message: string;

	/**
	 * Tracking identifier or trace ID for logging and debugging.
	 */
	track: string | null | undefined;

	/**
	 * List of detailed sub-errors or validation errors.
	 */
	errors: ApiErrorDetail[] | null;

	/**
	 * Underlying error cause, if any.
	 */
	cause: Error | null;

	/**
	 * Creates a new instance of ApiError.
	 *
	 * @param status The HTTP status code.
	 * @param internalCode The internal error code.
	 * @param code The public error code.
	 * @param message The descriptive error message.
	 * @param track The tracking identifier or trace ID.
	 * @param errors The detailed sub-error or list of sub-errors.
	 * @param cause The underlying error cause.
	 */
	constructor(status: number | null | undefined, internalCode: string | null | undefined, code: string | null | undefined, message: string, track?: string | null | undefined, errors?: ApiErrorDetail | ApiErrorDetail[] | null, cause?: Error | null);

	/**
	 * Converts a plain object into a new instance of this class.
	 *
	 * @param obj Plain object or instance to convert.
	 * @returns A new ApiError instance, or null if obj is falsy.
	 */
	static from(obj: ApiError | any | null): ApiError | null;

	/**
	 * Creates a new instance of ApiError.
	 *
	 * @param status The HTTP status code.
	 * @param internalCode The internal error code.
	 * @param code The public error code.
	 * @param message The descriptive error message.
	 * @param track The tracking identifier or trace ID.
	 * @param errors The detailed sub-error or list of sub-errors.
	 * @param cause The underlying error cause.
	 * @returns A new ApiError instance.
	 */
	static create(status: number | null | undefined, internalCode: string | null | undefined, code: string | null | undefined, message: string, track?: string | null | undefined, errors?: ApiErrorDetail | ApiErrorDetail[] | null, cause?: Error | null): ApiError;

	/**
	 * Starts a new builder to construct an ApiError instance.
	 *
	 * @returns A new ApiErrorBuilder instance.
	 */
	static builder(): ApiErrorBuilder;
}

/**
 * Builder for constructing ApiError instances.
 */
declare class ApiErrorBuilder {
	/**
	 * HTTP status code associated with the error.
	 */
	#status: number | null | undefined;

	/**
	 * Internal business or system error code.
	 */
	#internalCode: string | null | undefined;

	/**
	 * Public error code.
	 */
	#code: string | null | undefined;

	/**
	 * Error message describing the error.
	 */
	#message: string | null | undefined;

	/**
	 * Tracking identifier or trace ID for logging and debugging.
	 */
	#track: string | null | undefined;

	/**
	 * List of detailed sub-errors or validation errors.
	 */
	#errors: ApiErrorDetail[] | null;

	/**
	 * Underlying error cause, if any.
	 */
	#cause: Error | null;

	/**
	 * Creates a new instance of ApiErrorBuilder.
	 */
	constructor();

	/**
	 * Sets the HTTP status code.
	 *
	 * @param status The HTTP status code.
	 * @returns The builder instance for chaining.
	 */
	status(status: number | null | undefined): ApiErrorBuilder;

	/**
	 * Sets the internal error code.
	 *
	 * @param internalCode The internal error code.
	 * @returns The builder instance for chaining.
	 */
	internalCode(internalCode: string | null | undefined): ApiErrorBuilder;

	/**
	 * Sets the public error code.
	 *
	 * @param code The public error code.
	 * @returns The builder instance for chaining.
	 */
	code(code: string | null | undefined): ApiErrorBuilder;

	/**
	 * Sets the error message.
	 *
	 * @param message The descriptive error message.
	 * @returns The builder instance for chaining.
	 */
	message(message: string | null | undefined): ApiErrorBuilder;

	/**
	 * Sets the tracking identifier or trace ID.
	 *
	 * @param track The tracking identifier.
	 * @returns The builder instance for chaining.
	 */
	track(track: string | null | undefined): ApiErrorBuilder;

	/**
	 * Sets the list of detailed sub-errors.
	 *
	 * @param errors The array of ApiErrorDetail instances.
	 * @returns The builder instance for chaining.
	 */
	errors(errors: ApiErrorDetail[] | null): ApiErrorBuilder;

	/**
	 * Appends an error detail to the list of detailed sub-errors.
	 *
	 * @param error The ApiErrorDetail instance to add.
	 * @returns The builder instance for chaining.
	 */
	error(error: ApiErrorDetail | null): ApiErrorBuilder;

	/**
	 * Sets the underlying error cause.
	 *
	 * @param cause The underlying Error instance.
	 * @returns The builder instance for chaining.
	 */
	cause(cause: Error | null): ApiErrorBuilder;

	/**
	 * Builds the ApiError instance.
	 *
	 * @returns A new ApiError instance.
	 */
	build(): ApiError;
}

export default ApiError;