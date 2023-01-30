/**
 * convert number with commas
 * ex. 1000000 -> 1,000,000
 * @param num
 * @returns
 */
export const formatWithCommas = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
