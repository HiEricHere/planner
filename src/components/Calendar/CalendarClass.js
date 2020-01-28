import Day from './Day';

class CalendarClass {
  constructor(year) {
    this.year = year;
    this.calendar = this.initCalendar();
  }

  generateMonth(month, calendarMap) {
    const daysOfMonth = [];
    let currentDay = new Date(this.year, month, 1).getDate();
    const lastDay = new Date(this.year, month + 1, 0).getDate();
    while (currentDay <= lastDay) {
      const dateData = new Date(this.year, month, currentDay);
      const newDay = new Day(
        dateData.toDateString().split(' ')[0],
        dateData.getDay(),
        dateData.getDate(),
      );
      daysOfMonth.push(newDay);
      currentDay += 1;
    }
    calendarMap.set(month, daysOfMonth);
    // is it necessary to return?
    // return calendarMap;
  }

  initCalendar() {
    const calendar = new Map();
    let month = 0;
    while (month < 12) {
      this.generateMonth(month, calendar);
      month += 1;
    }
    return calendar;
  }

  getMonth(month) {
    return this.calendar.get(month);
  }

  getYear() {
    return this.year;
  }
}

export default CalendarClass;
