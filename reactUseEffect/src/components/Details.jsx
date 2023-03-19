import { response } from "express";
import GetData from "../js/GetData";

export const Details = ({ info }) => {
  if (!info) {
    return;
  }
  
  const response = '';
  const getData = async () => {
    const request = await fetch(
      `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`
    );
    response = await request.json();
  };
  getData();

  return (
    <div className="person-card">
      {/* <div className="img-box">
        <img className="img" src={person.avatar} />
      </div>
      <div className="person-info">{person.name}</div>
      <div className="person-info">{person.city}</div>
      <div className="person-info">{person.company}</div>
      <div className="person-info">{person.position}</div> */}
    </div>
  );
};
