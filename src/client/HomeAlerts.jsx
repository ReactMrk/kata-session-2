const HomeAlerts = ({visible, text}) => {
    const classNames = visible ? "visible" : "hidden"
  return (
    <div className={"alert "+classNames}>
      <p>{text}</p>
    </div>
  );
};

export default HomeAlerts;