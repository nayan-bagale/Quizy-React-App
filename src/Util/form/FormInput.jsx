const Input = ({ item }) => {
  const inputType = item.type === "string" ? "text" : item.type;
  return (
    <div key={item.name}>
      <label htmlFor={item.name}>{item.title}</label>
      <input
        className=" text-black"
        type={inputType}
        id={item.name}
        required={item.required}
      />
    </div>
  );
};

export default Input;