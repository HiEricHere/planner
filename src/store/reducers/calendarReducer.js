import { currentYear, currentMonth, currentDate } from '../../references/dateRef';

const initState = {
  year: currentYear,
  month: currentMonth,
  day: currentDate,
};

const calendarReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SELECT_YEAR':
      return { ...state, year: action.payload };
    case 'SELECT_MONTH':
      return { ...state, month: action.payload };
    case 'SELECT_DAY':
      return { ...state, day: action.payload };
    default:
      return state;
  }
};

export default calendarReducer;
