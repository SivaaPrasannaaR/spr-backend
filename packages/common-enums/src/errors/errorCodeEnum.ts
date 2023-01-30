export enum ErrorCodeEnum {
  OK = "ok",
  CANCELLD = "cancelled",
  UNKNOWN = "unknown",
  INVALID_ARGUMENT = "invalid-argument",
  DEADLINE_EXCEEDED = "deadline-exceeded",
  NOT_FOUND = "not-found",
  ALREADY_EXISTS = "already-exists",
  PERMISSION_DENIED = "permission-denied",
  RESOURCE_EXHAUSTED = "resource-exhausted",
  FAILED_PRECONDITION = "failed-precondition",
  ABORTED = "aborted",
  OUT_OF_RANGE = "out-of-range",
  UNINPREMENTED = "unimplemented",
  INTERNAL = "internal",
  UNAVAILABLE = "unavailable",
  DATA_LOSS = "data-loss",
  UNAUTHENTICATED = "unauthenticated",
}

export default ErrorCodeEnum
