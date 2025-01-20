import { useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm";
import NoteList from "./NoteList";

let id = 0;
const initialNotes = [
  {
    id: id++,
    text: "Learn HTML",
    done: false,
  },
  {
    id: id++,
    text: "Learn Css",
    done: true,
  },
  {
    id: id++,
    text: "Learn JavaScript",
    done: false,
  },
  {
    id: id++,
    text: "Learn React Js",
    done: false,
  },
];

function notesReducer(notes, action) {
  if (action.type === "Add Note") {
    notes.push({
      id: id++,
      text: action.text,
      done: false,
    });
  } else if (action.type === "Change Note") {
    const index = notes.findIndex((note) => note.id === action.id);
    if (index !== -1) {
      notes[index].text = action.text;
      notes[index].done = action.done;
    }
  } else if (action.type === "Delete Note") {
    const index = notes.findIndex((note) => note.id === action.id);
    if (index !== -1) {
      notes.splice(index, 1);
    }
  }
  return notes;
}

export default function NoteApp() {
  const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);

  function handleAddNote(text) {
    dispatch({
      type: "Add Note",
      text: text,
    });
  }

  function handleChangeNote(note) {
    dispatch({
      type: "Change Note",
      id: note.id,
      text: note.text,
      done: note.done,
    });
  }

  function handleDeleteNote(note) {
    dispatch({
      type: "Delete Note",
      id: note.id,
    });
  }

  return (
    <div>
      <h1>Note App</h1>
      <NoteForm onAddNote={handleAddNote} />
      <NoteList
        notes={notes}
        onChange={handleChangeNote} // Perbaiki 'onchange' menjadi 'onChange'
        onDelete={handleDeleteNote}
      />
    </div>
  );
}
