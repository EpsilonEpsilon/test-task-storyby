class ResponseError extends Error {
  public statusCode?: number;
  public reason?: string;
  constructor(statusCode: number, reason?: string) {
    super(reason);
    this.statusCode = statusCode;
    this.reason = reason;
  }
}

export default ResponseError;
