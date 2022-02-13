import { isDate } from "moment";
import { DATE_UNIT_TYPES } from "../constants";
import { getCurrentYear, add, isWithinRange, isDateBefore, isSameDay } from "../dateUtils";


// Date Utils -> Coverage 100%

describe("Date Utils", () => {

  // getCurrentYear()

  it('should return the current year as a number', () => {
    const result = getCurrentYear();
    expect(result).toBe(2022);
  });

  // add(randomDate, incrementNumber, timeType)

  it('should add a certain date with 30 days and return date after 30 days', () => {
    let randomDate = new Date(1999,0,8,1,2,3,4);
    let incrementNumber = 30;
    let timeType = DATE_UNIT_TYPES.DAYS;
    let expectedDate = new Date(1999,1,7,1,2,3,4);
    const result = add(randomDate, incrementNumber, timeType);
    expect(result).toEqual(expectedDate);
  });

  it('should add a certain date with 0 days and return the same date', () => {
    let randomDate = new Date(1999,0,8,1,2,3,4);
    let incrementNumber = 0;
    let timeType = DATE_UNIT_TYPES.DAYS;
    let expectedDate = new Date(1999,0,8,1,2,3,4);
    const result = add(randomDate, incrementNumber, timeType);
    expect(result).toEqual(expectedDate);
  });

  it('should add a certain date with 59 seconds and return date after 59 seconds', () => {
    let randomDate = new Date(1999,0,8,1,2,3,4);
    let incrementNumber = 59;
    let timeType = DATE_UNIT_TYPES.SECONDS;
    let expectedDate = new Date(1999,0,8,1,3,2,4);
    const result = add(randomDate, incrementNumber, timeType);
    expect(result).toEqual(expectedDate);
  });

  it('should add a certain date with 59 minutes and return date after 59 minutes', () => {
    let randomDate = new Date(1999,0,8,1,2,3,4);
    let incrementNumber = 59;
    let timeType = DATE_UNIT_TYPES.MINUTES;
    let expectedDate = new Date(1999,0,8,2,1,3,4);
    const result = add(randomDate, incrementNumber, timeType);
    expect(result).toEqual(expectedDate);
  });

  it('should add a certain date with 5 years and return date after 5 years', () => {
    let randomDate = new Date(1999,0,8,1,2,3,4);
    let incrementNumber = 5;
    let timeType = DATE_UNIT_TYPES.YEARS;
    let expectedDate = new Date(2004,0,8,1,2,3,4);
    const result = add(randomDate, incrementNumber, timeType);
    expect(result).toEqual(expectedDate);
  });

  // isWithinRange(betweenDate, beforeDate, afterDate)

  it('should check a date that is between two dates and return true value', () => {
    let betweenDate = new Date(1999,0,8,1,2,3,4);
    let beforeDate = new Date(1997,0,28,1,2,3,4);
    let afterDate = new Date(2001,4,30,1,2,3,4);
    let result = isWithinRange(betweenDate, beforeDate, afterDate);
    expect(result).toBeTruthy();
  });

  it('should check a date that is not between two dates and return false value', () => {
    let betweenDate = new Date(1992,8,14,1,2,3,4);
    let beforeDate = new Date(1997,0,28,1,2,3,4);
    let afterDate = new Date(2001,4,30,1,2,3,4);
    let result = isWithinRange(betweenDate, beforeDate, afterDate);
    expect(result).toBeFalsy();
  });
  
  it('should check a date between two undefined dates returns false', () => {
    let betweenDate = new Date(1992,8,14,1,2,3,4);
    let beforeDate = undefined;
    let afterDate = undefined;
    let result = isWithinRange(betweenDate, beforeDate, afterDate);
    expect(result).toBeFalsy();
  });

  it('should check a date between same date as itself returns false', () => {
    let betweenDate = new Date(1999,0,8,1,2,3,4);
    let result = isWithinRange(betweenDate, betweenDate, betweenDate);
    expect(result).toBeFalsy();
  });

  // isDateBefore(randomDate, compareDate)

  it('should check a date with a date that came before it and return true', () => {
    let randomDate = new Date(1999,0,8,1,2,3,4);
    let beforeDate = new Date(1997,0,28,1,2,3,4);
    let result = isDateBefore(beforeDate, randomDate);
    expect(result).toBeTruthy();
  });

  it('should check a date with a date that came after it and return false', () => {
    let randomDate = new Date(1999,0,8,1,2,3,4);
    let beforeDate = new Date(2001,4,30,1,2,3,4);
    let result = isDateBefore(beforeDate, randomDate);
    expect(result).toBeFalsy();
  });

  it('should check a date with an undefined and return false', () => {
    let randomDate = new Date(1999,0,8,1,2,3,4);
    let beforeDate = undefined;
    let result = isDateBefore(beforeDate, randomDate);
    expect(result).toBeFalsy();
  });

  it('should check a date with itself and return false', () => {
    let randomDate = new Date(1999,0,8,1,2,3,4);
    let result = isDateBefore(randomDate, randomDate);
    expect(result).toBeFalsy();
  });

  // isSameDay(Date, compareDate)

  it('should check a date with itself and return true', () => {
    let randomDate = new Date(1999,0,8,1,2,3,4);
    let result = isSameDay(randomDate, randomDate);
    expect(result).toBeTruthy();
  });

  it('should check a date with another instance of itself and return true', () => {
    let randomDate = new Date(1999,0,8,1,2,3,4);
    let randomDate2 = new Date(1999,0,8,1,2,3,4);
    let result = isSameDay(randomDate, randomDate2);
    expect(result).toBeTruthy();
  });

  it('should check a date with a date that came before it and return false', () => {
    let randomDate = new Date(1999,0,8,1,2,3,4);
    let beforeDate = new Date(1997,0,28,1,2,3,4);
    let result = isSameDay(randomDate, beforeDate);
    expect(result).toBeFalsy();
  });

  it('should check a date with a date that came before it and return false', () => {
    let randomDate = new Date(1999,0,8,1,2,3,4);
    let afterDate = new Date(2001,4,30,1,2,3,4);
    let result = isSameDay(randomDate, afterDate);
    expect(result).toBeFalsy();
  });

  it('should check a date with an undefined and return false', () => {
    let randomDate = new Date(1999,0,8,1,2,3,4);
    let randomDate2 = undefined;
    let result = isSameDay(randomDate, randomDate2);
    expect(result).toBeFalsy();
  });
  
})
