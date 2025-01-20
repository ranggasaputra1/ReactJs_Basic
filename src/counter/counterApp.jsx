import { useState } from "react";
import Counter from "./Counter";

export default function CounterApp() {
  const [show2, setShow2] = useState(true);

  function handleChange(e) {
    setShow2(e.target.checked);
  }
  return (
    <div>
      {show2 ? (
        <Counter key="Budi" name="Budi" />
      ) : (
        <Counter key="Eko" name="Eko" />
      )}
      <input type="checkbox" checked={show2} onChange={handleChange} />{" "}
      Tampilkan Counter 2
    </div>
  );
}
