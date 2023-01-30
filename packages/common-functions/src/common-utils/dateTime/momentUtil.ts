import moment from "moment"
import {
  DayOfWeek,
  DayOfWeekValue,
} from "@spr-backend/common-enums/dist/basics/days"

enum format {
  "hh:mm" = "hh:mm",
  "HH:mm" = "HH:mm",
  "YYYY/MM/DD" = "YYYY/M/D",
  "YYYY/MM/DD HH:mm" = "YYYY/M/D HH:mm",
  "ddd" = "ddd",
  "MM/DD" = "M/D",
}

const formatDate = (date: number, format: string) => {
  return moment(date).format(format)
}

const parseDayOfWeek = (dayOfWeek: DayOfWeek): number => {
  return DayOfWeekValue[dayOfWeek]
}

const dateSpanStr = (
  usageStart: number | undefined,
  usageEnd: number | undefined
): string => {
  const startMoment = usageStart === undefined ? undefined : moment(usageStart)
  const endDateStr =
    startMoment && usageEnd
      ? startMoment.isSame(usageEnd, "day")
        ? moment(usageEnd).format(format["HH:mm"])
        : moment(usageEnd).format(format["YYYY/MM/DD HH:mm"])
      : ""
  const endTimeString = endDateStr.includes("23:59")
    ? endDateStr.replace("23:59", "24:00")
    : endDateStr
  return startMoment === undefined && endDateStr === ""
    ? ""
    : (startMoment ? startMoment.format(format["YYYY/MM/DD HH:mm"]) : "") +
        " 〜 " +
        endTimeString
}

const current = () => {
  return new Date().getTime()
}

const now = () => {
  return moment(current())
}

const fromNow = (fromDate: number) => {
  return moment(fromDate).fromNow()
}

const getDayBefore = (date: number) => {
  return moment(date).subtract(1, "days")
}

const getNum = (date: string, format: string) => {
  return moment(date, format).valueOf()
}

const getDate = (date: number | undefined): string => {
  return moment(date).format(format["YYYY/MM/DD HH:mm"])
}

const startOfDate = (date: number) => {
  return moment(date).startOf("date")
}

const endOfDate = (date: number) => {
  return moment(date).endOf("date")
}

const getYear = (date: number | string) => {
  return moment(date).format("YYYY")
}

const getDateReservationDisplay = (startAt: number, endAt: number): string => {
  const startString =
    moment(startAt).format(format["YYYY/MM/DD HH:mm"]) + " 〜 "
  const endString =
    moment(startAt).format(format["YYYY/MM/DD"]) ===
    moment(endAt).format(format["YYYY/MM/DD"])
      ? moment(endAt).format(momentUtil.format["HH:mm"])
      : moment(endAt).format(momentUtil.format["YYYY/MM/DD HH:mm"])
  return startString + endString
}

const getDayOfWeekShort = (date: number | string) => {
  return moment(date).format("dd")
}

const momentUtil = {
  format,
  current,
  now,
  startOfDate,
  endOfDate,
  parseDayOfWeek,
  DAY_OF_WEEK: DayOfWeekValue,
  dateSpanStr,
  fromNow,
  formatDate,
  getNum,
  getDate,
  getYear,
  getDateReservationDisplay,
  getDayOfWeekShort,
  getDayBefore,
}

export default momentUtil
