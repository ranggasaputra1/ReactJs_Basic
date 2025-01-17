import { useState } from "react";

export default function Counter() {
  let [counter, SetCounter] = useState(0);

  function handleClick() {
    SetCounter((c) => c + 1);
    SetCounter((c) => c + 1);
    SetCounter((c) => c + 1);
    console.log(counter);
  }

  return (
    <div>
      <div>
        <button onClick={handleClick}>Increment</button>
      </div>
      <h1>counter : {counter}</h1>
    </div>
  );
}
