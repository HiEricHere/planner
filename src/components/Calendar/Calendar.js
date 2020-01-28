import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SELECT_YEAR, SELECT_MONTH } from '../../store/actions/calendarActions';

import CalendarClass from './CalendarClass';
import { monthKey, currentYear } from '../../references/dateRef';
import './Calendar.scss';

const Calendar = (props) => {
  // eslint-disable-next-line object-curly-newline
  const { year, month, selectYEAR, selectMONTH } = props;
  const prevYearCal = new CalendarClass(currentYear - 1);
  const currentYearCal = new CalendarClass(currentYear);
  const nextYearCal = new CalendarClass(currentYear + 1);

  const handleSelect = (event) => {
    const actionKey = {
      year: selectYEAR,
      month: selectMONTH,
    };
    actionKey[event.target.name](event.target.value);
  };

  return (
    <nav id="container-calendar">
      <h2>Date</h2>
      <div id="nav-calendar-macro">
        <select id="select-month" defaultValue={month} name="month" onChange={handleSelect}>
          {
            Object.entries(monthKey).map((monthElement) => (
              <option key={monthElement[0]} value={monthElement[1]}>
                {monthElement[1]}
              </option>
            ))
          }
        </select>
        <select id="select-year" defaultValue={currentYearCal.getYear()} name="year" onChange={handleSelect}>
          <option value={prevYearCal.getYear()}>{prevYearCal.getYear()}</option>
          <option value={currentYearCal.getYear()}>{currentYearCal.getYear()}</option>
          <option value={nextYearCal.getYear()}>{nextYearCal.getYear()}</option>
        </select>
      </div>
      <div id="nav-calendar-micro">
        <h6>{month}</h6>
        <ul id="day-list">
          <li>Su</li>
          <li>Mo</li>
          <li>Tu</li>
          <li>We</li>
          <li>Th</li>
          <li>Fr</li>
          <li>Sa</li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  year: state.calendarReducer.year,
  month: state.calendarReducer.month,
});

const mapDispatchToProps = (dispatch) => ({
  selectYEAR: (year) => dispatch(SELECT_YEAR(year)),
  selectMONTH: (month) => dispatch(SELECT_MONTH(month)),
});

Calendar.propTypes = {
  year: PropTypes.number,
  month: PropTypes.string,
  selectMONTH: PropTypes.func,
  selectYEAR: PropTypes.func,
};

Calendar.defaultProps = {
  year: null,
  month: null,
  selectMONTH: null,
  selectYEAR: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
