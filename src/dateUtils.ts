
import * as datefns from "date-fns";
import { DATE_UNIT_TYPES } from "./constants";



export function getDurationFromType(number: number, type: DATE_UNIT_TYPES): Duration {
  // I find this solution messy, I tried to do {DATE_UNIT_TYPES[type] : number} so it could only
  // be in one line, however, I never got it to work, even though the documentation and
  // stackoverflow tells me it works.
  switch(type){
    case DATE_UNIT_TYPES.SECONDS: {
      return {seconds: number};
    }
    case DATE_UNIT_TYPES.MINUTES: {
      return {minutes: number};
    }
    case DATE_UNIT_TYPES.DAYS: {
      return {days: number};
    }
    case DATE_UNIT_TYPES.DAYS: {
      return {days: number};
    }
    case DATE_UNIT_TYPES.WEEKS: {
      return {weeks: number};
    }
    case DATE_UNIT_TYPES.MONTHS: {
      return {months: number};
    }
    case DATE_UNIT_TYPES.YEARS: {
      return {years: number};
    }
    default: {
      return undefined;
    }
  }
}

export function getCurrentYear(): number {
  return datefns.getYear(new Date());
}

export function add(date: Date, number: number, type: DATE_UNIT_TYPES = DATE_UNIT_TYPES.DAYS): Date {
  return datefns.add(date, getDurationFromType(number, type));
}

export function isWithinRange(date: Date, from: Date, to: Date): boolean {
  // When I wrote the tests for the moment library, he returned false for undefined dates or
  // if the date was the same for both from and to, which is debatable if it should return true or false
  if ((isSameDay(date,from) && isSameDay(date, to)) || (date === undefined || from === undefined || to === undefined)) {
    return false
  } else {
    return datefns.isWithinInterval(date, {start: from, end: to});
  }
}

export function isDateBefore(date: Date, compareDate: Date): boolean {
  return datefns.isBefore(date, compareDate);
}

export function isSameDay(date: Date, compareDate: Date): boolean {
  return datefns.isEqual(date, compareDate);
}