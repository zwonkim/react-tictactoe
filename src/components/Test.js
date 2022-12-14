import { React, useState } from "react";

const Test = () => {
  const [value, setValue] = useState("");
  const [listArray, setListArray] = useState(["haha", "hoho"]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setListArray((prevList) => {
      return [...prevList, value];
    });
    setValue("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={value} onchange={(e) => setValue(e.target.value)} />
        <button type='submit'>Add</button>
      </form>
      {listArray.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
};

export default Test;
