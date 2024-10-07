const Alert = ({visible}) => {
    const classNames = visible ? "visible" : "hidden"
  return (
    <div className={"alert "+classNames}>
      <p> New client has been added </p>
    </div>
  );
};

export default Alert;