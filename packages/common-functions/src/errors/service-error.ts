import ErrorCodeEnum from "@spr-backend/common-enums/dist/errors/errorCodeEnum"

export class ServiceError extends Error {
  public readonly code: ErrorCodeEnum
  public readonly details?: any

  constructor(code: ErrorCodeEnum, message: string, details?: any) {
    super(message)
    this.code = code
    this.details = details
  }
}
