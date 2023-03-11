import GetData from "../js/GetData";

export const Details = ({ info }) => {
  if (!info.id) {
    return;
  }

  const person = GetData(
    `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`
  );

  return (
    <div className="person-card">
      <div className="img-box">
        <img className="img" src={person.avatar} />
      </div>
      <div className="person-info">{person.name}</div>
      <div className="person-info">{person.city}</div>
      <div className="person-info">{person.company}</div>
      <div className="person-info">{person.position}</div>
    </div>
  );
};
