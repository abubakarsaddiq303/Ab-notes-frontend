import React, { useState } from "react";
import NoteList from "./NoteList";
import CreateNote from "./CreateNote";
import { Note } from "../models/note.model";

interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const [notes, setNotes] = useState<Note[]>([]);

  return (
    <>
      <CreateNote notes={notes} setNotes={setNotes} />

      <NoteList notes={notes} setNotes={setNotes} />
    </>
  );
};

export default Home;
