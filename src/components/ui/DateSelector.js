import { useEffect } from 'react';

const DateSelector = ({ id, labelled = true, labelText, dateRef, enablePastDates = false, fullSpan = false, changeHandler }) => {
  useEffect(() => {
    if (!enablePastDates) {
      const dateToday = new Date();

      let month = dateToday.getMonth() + 1;
      let day = dateToday.getDate();
      let year = dateToday.getFullYear();
      if (month < 10) month = '0' + month.toString();
      if (day < 10) day = '0' + day.toString();

      const maxDate = year + '-' + month + '-' + day;

      dateRef?.current.setAttribute('min', maxDate);
    }
  }, [dateRef, enablePastDates]);
  return (
    <div className={`form-group${fullSpan ? ' full-span' : ''}`}>
      <label htmlFor={id} className={`${!labelled ? 'sr-only ' : ''}highlight`}>
        {labelText}
      </label>
      <input type='date' id={id} ref={dateRef} onChange={changeHandler} />
    </div>
  );
};
export default DateSelector;
