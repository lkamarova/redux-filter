const FilterName = ({ value, onChange }) => {
  
  return (
    <div className="filterWrap">
    <span>Введите имя пользователя</span>
    
      <input
        className="filter"
        type="search"
        id="name"
        name="name"
        placeholder="Поиск.."
        value={value}
        onChange={(ev) => onChange(ev.target.value)}
      />
    </div>
  );
};

export default FilterName;
