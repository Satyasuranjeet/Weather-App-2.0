import "./top.css";
const Top = (props) => {
  return (
    <div className="top">
      <div className="location">{props.loca }</div>
      <div className="Date">
        <div className="text">{props.date}</div>
      </div>
      <div className="weather-type">{props.weath}</div>
    </div>
  );
};
export default Top;
