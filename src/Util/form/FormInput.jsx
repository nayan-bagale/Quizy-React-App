const Input = ({ item }) => {
  const inputType = item.type === "string" ? "text" : item.type;
  return (
    <div key={item.name} className=" flex flex-col gap-2">
      <label htmlFor={item.name}>{item.title}</label>
      <input
        className=" px-2 bg-transparent rounded-md w-full border"
        type={inputType}
        id={item.name}
        required={item.required}
      />
    </div>
  );
};

export default Input;
