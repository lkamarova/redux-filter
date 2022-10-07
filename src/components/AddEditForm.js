import { useEffect, useState } from "react";
import { v4 } from "uuid";

const AddEditForm = ({
  handleAdd,
  handleEdit,
  defaultValue,
  handleCancelEdit,
}) => {
  const [name, setName] = useState(defaultValue?.name || "");
  const [age, setAge] = useState(defaultValue?.age || "");

  useEffect(() => {
    if (defaultValue) {
      setName(defaultValue.name);
      setAge(defaultValue.age);
    }
  }, [defaultValue]);

  const onSubmit = () => {
    const obj = {
      id: defaultValue?.id || v4(),
      name,
      age,
    };
    if (defaultValue) {
      handleEdit(obj);
    } else {
      handleAdd(obj);
    }

    setName("");
    setAge("");
  };

  const onEdit = () => {
    handleCancelEdit(null);
    setName("");
    setAge("");
  };

  return (
    <div className="formWrap">
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Фамилия И.О."
        value={name}
        onChange={(ev) => setName(ev.target.value)}
      />

      <input
        type="text"
        id="age"
        name="age"
        value={age}
        placeholder="Возраст"
        onChange={(ev) => setAge(ev.target.value)}
      />

      <button type="submit" onClick={onSubmit}>
        {defaultValue ? "Ок" : "Добавить"}
      </button>
      {defaultValue && (
        <button type="submit" onClick={onEdit}>
          {"Отмена"}
        </button>
      )}
    </div>
  );
};

export default AddEditForm;
