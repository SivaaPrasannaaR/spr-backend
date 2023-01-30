const PasswordRegex = /^[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\]^_{|}~]{8,56}$/
const WordOfExceptionPasswordRegex =
  /[^a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\]^_{|}~]/

export const checkIsValidPassword = (passwordOrNot: string): boolean =>
  PasswordRegex.test(passwordOrNot)

export const checkHasExceptionPassword = (passwordOrNot: string) =>
  WordOfExceptionPasswordRegex.test(passwordOrNot)
