const CommentBox = ({ id, labelled = true, labelText, placeholder = labelText, commentRef, fullSpan = false }) => {
  return (
    <div className={`form-group${fullSpan ? ' full-span' : ''}`}>
      <label htmlFor={id} className={`${!labelled ? 'sr-only ' : ''}highlight`}>
        {labelText}
      </label>
      <textarea id={id} cols='30' rows='4' placeholder={placeholder} ref={commentRef} style={{ width: '100%' }}></textarea>
    </div>
  );
};
export default CommentBox;
