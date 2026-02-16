import { useState } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="user-card">
      <h3>Count : {count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment Count
      </button>
      <h3>Name : {name}</h3>
      <h4>Location :{location}</h4>
      <h4>Contact : manoj.balineni04@gmail.com</h4>
    </div>
  );
};

export default User;
