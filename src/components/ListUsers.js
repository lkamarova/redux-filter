import { v4 } from "uuid";

const ListUsers = ({ list, handleDelete, handleEdit }) => {
  return (
    <div className="listWrap">
      <table id="list" className="list">
        <thead>
          <tr>
            <th>Наименование услуги</th>
            <th>Стоимость</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {list.map((el) => (
            <tr key={v4()}>
              <td>{el.name}</td>
              <td>{el.age}</td>
              <td><span className="material-icons" onClick={(ev) => {ev.preventDefault(); handleEdit(el)}}>edit</span> </td>
              <td><span className="material-icons" onClick={() => handleDelete(el.id)}>delete</span> </td>
            </tr>
          ))}
        </tbody>
      </table>
      {!list.length && <div className="noData">Пока нет ни одной услуги</div>}
    </div>
  );
};

export default ListUsers;
