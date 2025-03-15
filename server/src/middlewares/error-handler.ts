// create base class so we can easily check if an error is a custom one with `instanceof CustomError`
const CustomError = class extends Error {
  statusCode: number;
  meta: object;

  /**
   * Create error with specific message/meta
   * @param {String | Object} message
   * @param {number} code
   * @param {Object} meta
   */
  constructor(message: string, code: number, meta: object) {
    super(message);
    this.message = message;
    this.meta = meta;
    this.statusCode = code;
  }
};

/**
 * Create custom error class with a default message / code
 * @param {string} defaultMessage
 * @param {number} defaultCode
 * @returns {new (message?: string, meta?: object) => CustomError}
 */
const createCustomError = (defaultMessage: string, defaultCode: number) =>
  class extends CustomError {
    meta: object;
    /**
     * Create error with specific message/meta
     * @param {String | Object} message
     * @param {Object} meta
     */
    constructor(message?: string, meta?: object) {
      super(
        typeof message === "string" ? message : defaultMessage,
        defaultCode,
        meta ?? {}
      );
      this.meta = typeof message === "object" ? message : (meta ?? {});
    }
  };

export const AppError = {
  EventNotFound: createCustomError("Booking page not found.", 404),
};

// great error handling guide https://github.com/RajaJaganathan/express-error-handling
