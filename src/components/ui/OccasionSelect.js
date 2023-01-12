const OccasionSelect = ({ id, labelText, labelled = true, selectRef, fullSpan = false }) => {
  const occasions = ['Engagement', 'Birthday', 'Anniversary', 'Reunion', 'Others'];
  return (
    <div className={`form-group${fullSpan ? ' full-span' : ''}`}>
      <label htmlFor={id} className={`${!labelled ? 'sr-only ' : ''}highlight`}>
        {labelText}
      </label>
      <select id={id} ref={selectRef}>
        <option value=''>Ocassion</option>
        {occasions.map((ocassion, index) => (
          <option key={index} value={ocassion.toLowerCase()}>
            {ocassion}
          </option>
        ))}
      </select>
    </div>
  );
};
export default OccasionSelect;
