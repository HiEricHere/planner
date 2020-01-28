export const SELECT_YEAR = (year) => ({ type: 'SELECT_YEAR', payload: parseInt(year, 10) });

export const SELECT_MONTH = (month) => ({ type: 'SELECT_MONTH', payload: month });

export const SELECT_DAY = (day) => ({ type: 'SELECT_DAY', payload: day });
