// const OccasionSelect = ({ id, labelText, labelled = true, selectRef, fullSpan = false }) => {
const OccasionSelect = ({ id, labelText, labelled = true, selectRef, fullSpan = false, formikVal, validated = false, formError }) => {
  const occasions = ['Engagement', 'Birthday', 'Anniversary', 'Reunion', 'Others'];
  return (
    <div className={`form-group${fullSpan ? ' full-span' : ''}`}>
      <label htmlFor={id} className={`${!labelled ? 'sr-only ' : ''}highlight`}>
        {labelText}
      </label>
      <select id={id} name={selectRef} {...formikVal}>
        <option value=''>None</option>
        {occasions.map((ocassion, index) => (
          <option key={index} value={ocassion.toLowerCase()}>
            {ocassion}
          </option>
        ))}
      </select>
      {validated && <div className='form-error'>{formError}</div>}
    </div>
  );
};
export default OccasionSelect;
