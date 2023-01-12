const CountSelect = ({ id, labelText, labelled = true, selectRef, options, fullSpan = false }) => {
  return (
    <div className={`form-group${fullSpan ? ' full-span' : ''}`}>
      <label htmlFor={id} className={`${!labelled ? 'sr-only ' : ''}highlight`}>
        {labelText}
      </label>
      <select id={id} ref={selectRef}>
        {options.map((opt, index) => (
          <option value={opt} key={index}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
};
export default CountSelect;
