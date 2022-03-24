import * as React from "react";
import { Note } from "../models/note.model";
import styles from "../styles/Notes.module.css";

interface INotesProps {
  note: Note;
  handleDelete: (note: object) => void;
}

const Notes: React.FunctionComponent<INotesProps> = ({
  note,
  handleDelete,
}) => {
  return (
    <div className={styles.note_card} style={{ backgroundColor: note.color }}>
      <div className={styles.card_data}>
        <div className={styles.card_title}>
          <h2>{note.title}</h2>
        </div>

        <div className={styles.card_text}>
          <p>{note.text}</p>
        </div>

        <div className={styles.card_subtitle}>
          <p>{note.date} </p>
        </div>

        <div className={styles.btn_card}>
          <button onClick={() => handleDelete(note)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Notes;
