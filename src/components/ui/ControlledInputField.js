const ControlledInputField = ({
  type = 'text',
  id,
  labelText,
  placeholder = labelText,
  labelled = true,
  inputVal,
  formikVal,
  fullSpan = false,
  validated = false,
  formError,
}) => {
  return (
    <div className={`form-group${fullSpan ? ' full-span' : ''}`}>
      <label htmlFor={id} className={`${!labelled ? 'sr-only ' : ''}highlight`}>
        {labelText}
      </label>
      <input type={type} id={id} name={inputVal} placeholder={placeholder} {...formikVal} />
      {validated && <div className='form-error'>{formError}</div>}
    </div>
  );
};
export default ControlledInputField;
