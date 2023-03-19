import GetData from "../js/GetData";

export const Details = ({ details }) => {
  if (!details) {
    return;
  }

  return (
    <div className="person-card">
      <div className="img-box">
        <img className="img" src={details.avatar} />
      </div>
      <div className="person-info name">{details.name}</div>
      <div className="person-info">City: {details.details.city}</div>
      <div className="person-info">Company: {details.details.company}</div>
      <div className="person-info">Position: {details.details.position}</div>
    </div>
  );
};
