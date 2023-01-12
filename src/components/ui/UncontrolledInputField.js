const UncontrolledInputField = ({ type = 'text', id, labelText, placeholder = labelText, labelled = true, inputVal, changeHandler, fullSpan = false }) => {
  return (
    <div className={`form-group${fullSpan ? ' full-span' : ''}`}>
      <label htmlFor={id} className={`${!labelled ? 'sr-only ' : ''}highlight`}>
        {labelText}
      </label>
      <input type={type} id={id} value={inputVal} onChange={changeHandler} placeholder={placeholder} />
    </div>
  );
};
export default UncontrolledInputField;
