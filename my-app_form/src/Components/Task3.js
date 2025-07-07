import React from "react";
export function FlavorForm() {
  const [value, setValue] = React.useState('coconut');

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    alert('Ваш любимый вкус: ' + value);
    event.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Выберите ваш любимый вкус:
        <select value={value} onChange={handleChange}>
          <option value="grapefruit">Грейпфрут</option>
          <option value="lime">Лайм</option>
          <option value="coconut">Кокос</option>
          <option value="mango">Манго</option>
        </select>
      </label>
      <input type="submit" value="Отправить" />
    </form>
  );
}