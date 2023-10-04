const Options = ({ item }) => {
  return (
    <div>
      <label htmlFor={item.name}>{item.title}</label>
      <select name={item.name} id={item.name} className=" text-black">
        {item.options.map((option, i) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Options