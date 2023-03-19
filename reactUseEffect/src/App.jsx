import { useEffect, useState } from "react";
import "./App.css";
import { List } from "./components/List";
import { Details } from "./components/Details";

const PersonalInfo = () => {
  const [info, setInfo] = useState({id: null, name: null});
  const [listData, setListData] = useState([]);
  const [details, setDetails] = useState(null)

  const click = (item) => {
    setInfo(item);
  };

  useEffect(() => {
    const getData = async () => {
      const request = await fetch(
        "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json"
      );
      const response = await request.json();
      setListData(response);
    };
    getData();
  }, []);

  useEffect(() => {
    if (!info.id) {
      return;
    }

    const getData = async () => {
      const request = await fetch(
        `https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`
      );
      const responce = await request.json();
      console.log(responce);
      setDetails(responce);
    };
    getData();
  }, [info.id])

  return (
    <div className="wrapper">
      <List click={click} listData={listData} />
      <div className="person-wrapper">
        <Details details={details} />
      </div>
    </div>
  );
};

function App() {
  return <PersonalInfo />;
}

export default App;
