import * as React from "react";
import styles from "../styles/NoteList.module.css";
import { Note } from "../models/note.model";
import Notes from "./Notes";
import axios from "axios";

interface INoteListProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NoteList: React.FunctionComponent<INoteListProps> = ({
  notes,
  setNotes,
}) => {
  const [deleteData, setDeleteData] = React.useState<[]>([]);

  async function handleDelete(note: object) {
    console.log(note);
    // setNotes(notes.filter((note) => note.id !== id));
    await axios
      .post("http://localhost:5000/DeleteUser/", { note })
      .then((res) => {
        console.log(res.data);
        // setDeleteData(res.data.handleDelete);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const [data, setData] = React.useState<[]>([]);

  React.useEffect(() => {
    async function getData() {
      await axios
        .get("https://ab-notes-backend.vercel.app/getuser/")
        .then((res) => {
          console.log(res.data);
          setData(res.data.getData);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    getData();
  }, []);

  const renderNotes = (): JSX.Element[] => {
    return data.map((note, index) => {
      return <Notes key={index} note={note} handleDelete={handleDelete} />;
    });
  };

  return (
    <div className={styles.notelist}>
      <div className={styles.row}>{renderNotes()}</div>
    </div>
  );
};

export default NoteList;
