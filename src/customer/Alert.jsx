const Alert = ({ homeAlertText }) => {
  const classNames = homeAlertText ? "visible" : "hidden"
  return (
    <div className={"alert " + classNames}>
      <p>{homeAlertText}</p>
    </div>
  );
};

export default Alert;