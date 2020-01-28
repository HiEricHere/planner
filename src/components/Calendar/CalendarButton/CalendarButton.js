import React from 'react';
import PropTypes from 'prop-types';

const CalendarButton = (props) => {
  const { click, action, text } = props;
  return (
    <button className="button-calendar" onClick={click} value={action} type="button">
      {text}
    </button>
  );
};

CalendarButton.propTypes = {
  click: PropTypes.func,
  action: PropTypes.string,
  text: PropTypes.string,
};

CalendarButton.defaultProps = {
  click: null,
  action: null,
  text: null,
};

export default CalendarButton;
