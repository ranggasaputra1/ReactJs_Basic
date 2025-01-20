import { useState } from "react";

export default function NoteForm({ onAddNote }) {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function HandleClick() {
    setText("");
    onAddNote(text);
  }

  return (
    <>
      <input
        type="text"
        placeholder="Add Note"
        value={text}
        onChange={handleChange}
      />
      <button onClick={HandleClick}>Add</button>
    </>
  );
}
