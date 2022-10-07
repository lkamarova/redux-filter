import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddEditForm from "./AddEditForm";
import FilterName from "./FilterName";
import ListUsers from "./ListUsers";
import { addUser, deleteUser, editUser } from "./usersSlice";

const UsersPage = () => {
  const [mutableObj, setMutableObj] = useState(null);
  const [searchString, setSearchString] = useState("");

  const allUsers = useSelector((state) => state.list.users);
  const dispatch = useDispatch();

  const filteredWords = useMemo(() => {
    if (!searchString) {
      return allUsers;
    }
    return allUsers.filter((user) => user.name.includes(searchString));
  }, [searchString, allUsers]);

  console.log("filteredWords", filteredWords)

  const onAddNewUsers = (obj) => {
    dispatch(addUser(obj));
  };

  const onDeleteUser = (id) => {
    dispatch(deleteUser(id));
  };

  const onEditUser = (newObj) => {
    dispatch(editUser(newObj));
  };

  const onFilter = (value) => {
    setSearchString(value);
  };

  return (
    <div className="listServicesWrap">
      <FilterName value={searchString} onChange={onFilter} />

      <h3>Список пользователей</h3>

      <AddEditForm
        handleAdd={onAddNewUsers}
        handleEdit={onEditUser}
        defaultValue={mutableObj}
        handleCancelEdit={setMutableObj}
      />

      <ListUsers
        list={filteredWords}
        handleDelete={onDeleteUser}
        handleEdit={setMutableObj}
      />
    </div>
  );
};

export default UsersPage;
