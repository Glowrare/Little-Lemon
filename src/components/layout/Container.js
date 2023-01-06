const Container = ({ children, customStyles, customize = false }) => {
  return (
    <div className='container' style={customize ? customStyles : {}}>
      {children}
    </div>
  );
};
export default Container;
