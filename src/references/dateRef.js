export const monthKey = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
};

const date = new Date();
export const currentDate = date.getDate();
export const currentMonthNum = date.getMonth();
export const currentMonth = monthKey[date.getMonth()];
export const currentYear = date.getFullYear();
