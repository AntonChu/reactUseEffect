import GetData from "../js/GetData";

export const List = ({ Click, GetData }) => {
  const list = GetData();
  console.log(list);
  
  if (!list) {
    return;
  } else {
    return (
      <ul className="persons-list">
        {list.map((el) => (
          <li key={el.id} onClick={Click}>{el.name}</li>
        ))}
      </ul>
    );
  }
};
