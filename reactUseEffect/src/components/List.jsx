import GetData from "../js/GetData";

export const List = ({ Click }) => {
  const list = GetData(
    "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json"
  );
  console.log(list);  

  return (
    <ul className="persons-list">
      {list.map((el) => (
        <li key={el.id} onClick={Click}>{el.name}</li>
      ))}
    </ul>
  );
};
