import { useEffect, useState } from "react";
import "./App.css";
import { List } from "./components/List";
import { Details } from "./components/Details";

const PersonalInfo = () => {
  const [info, setInfo] = useState(null);

  const Click = (event) => {
    const target = event.target['что-то'];
    setInfo({id: target.id, name: target.name})
  };

  useEffect(Details, [info.id])
//   async function GetData(url) {
//     const response = await fetch("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       return data.map(el => <div>{el.id}</div>);
//     });
// }

  // const getData = () => {
  //   let request = new XMLHttpRequest();
  //   request.open("GET", "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json");
  //   request.responseType = "json";
  //   request.send();
  //   request.onreadystatechange = function () {
  //     if (request.readyState === request.DONE) {
  //       console.log(request.response)
  //       return('done');
  //     }
  //   };
  // };

  return (
    <div className="wrapper">
      <List click={Click}/>
      <Details id={id}/>
    </div>
  );
};

function App() {
  return <PersonalInfo />;
}

export default App;
