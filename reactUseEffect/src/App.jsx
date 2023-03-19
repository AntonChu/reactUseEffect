import { useEffect, useState } from "react";
import "./App.css";
import { List } from "./components/List";
import { Details } from "./components/Details";

const PersonalInfo = () => {
  const [info, setInfo] = useState(null);
  console.log(info);
  const [listData, setListData] = useState([]);

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



  return (
    <div className="wrapper">
      <List click={click} listData={listData} />
      <Details info={info} />
    </div>
  );
};

function App() {
  return <PersonalInfo />;
}

export default App;
