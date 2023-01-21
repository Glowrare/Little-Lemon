const CountSelect = ({ id, labelText, labelled = true, selectRef, options, fullSpan = false, validated = false, formError, formikVal }) => {
  return (
    <div className={`form-group${fullSpan ? ' full-span' : ''}`}>
      <label htmlFor={id} className={`${!labelled ? 'sr-only ' : ''}highlight`}>
        {labelText}
      </label>
      <select id={id} name={selectRef} {...formikVal}>
        {options.map((opt, index) => (
          <option value={opt.value === '' ? opt.value : opt} key={index}>
            {opt.name ? opt.name : opt}
          </option>
        ))}
      </select>
      {validated && <div className='form-error'>{formError}</div>}
    </div>
  );
};
export default CountSelect;
