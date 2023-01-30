export default class StringUtils {
  /**
   * Email address validation
   * @param emailOrUndefined
   * @returns
   */
  public static isValidEmailAddress = (emailOrUndefined?: string): boolean => {
    const emailAddressRegExp =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if (!emailOrUndefined) {
      return false
    }
    return emailAddressRegExp.test(emailOrUndefined)
  }

  public static isValidPhoneNumber = (
    phoneNumberOrUndefined?: string
  ): boolean => {
    const phoneNumberRegExp = /^0{1}\d{8,13}$/

    if (!phoneNumberOrUndefined) {
      return false
    }
    return phoneNumberRegExp.test(phoneNumberOrUndefined)
  }

  private static URLValidationRegExp =
    /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/
  /**
   * URL regex validation
   * . The URL starts with either HTTP or HTTPS and
   * . then followed by :// and
   * . then it can have www.
   * . then followed by a subdomain of length (2, 256) and
   * . The last part contains the domain.
   * @param urlOrUndefined
   */
  public static isValidURL(urlOrUndefined: string) {
    if (!urlOrUndefined) {
      return false
    }
    return StringUtils.URLValidationRegExp.test(urlOrUndefined)
  }

  private static PostalCodeValidationRegExp = /^\d{7}$/
  public static isValidPostalCode(postalCode: string) {
    return StringUtils.PostalCodeValidationRegExp.test(postalCode)
  }

  private static NumberValidationRegExp = /^\d*$/
  public static isValidNumber(strNumber: string) {
    return StringUtils.NumberValidationRegExp.test(strNumber)
  }

  public static toCapitalizeCase = <T extends string>(str: T): Capitalize<T> =>
    `${str.charAt(0).toUpperCase()}${str.slice(1)}` as Capitalize<T>

  public static capitalizeToLowerCase = (str: string) =>
    `${str.charAt(0).toLowerCase()}${str.slice(1)}`
}
