import GetData from "../js/GetData";

export const List = ({ click, listData }) => {

  return (
    <div className="person-wrapper">
      {listData.map(el => {
      return <div className="list-point" key={el.id} onClick={() => click(el)}>{el.name}</div>})}
    </div>
  )
};
