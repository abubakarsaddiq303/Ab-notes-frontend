import React, { useState } from "react";
import Notes from "./Notes";
import axios from "axios";
import { Note } from "../models/note.model";
import styles from "../styles/NoteList.module.css";

interface IShowDeleteProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const ShowDelete: React.FunctionComponent<IShowDeleteProps> = ({
  notes,
  setNotes,
}) => {
  const [data, setData] = React.useState<[]>([]);

  async function handleDelete(note: object) {
    console.log(note);
    // setNotes(notes.filter((note) => note.id !== id));
    // await axios
    //   .post("http://localhost:5000/DeleteUser/", { note })
    //   .then((res) => {
    //     console.log(res.data);
    //     // setDeleteData(res.data.handleDelete);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  }

  React.useEffect(() => {
    async function getData() {
      await axios
        .get("https://ab-notes-backend.vercel.app/getdelete/")
        .then((res) => {
          console.log(res.data);
          setData(res.data.getdeleteData);
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

export default ShowDelete;
