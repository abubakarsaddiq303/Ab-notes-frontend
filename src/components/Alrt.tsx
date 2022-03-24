import React from "react";
import styles from "../styles/Alrt.module.css";
import { Note } from "../models/note.model";

interface IAlrtProps {
  note: Note;
  handleDelete: (note: object) => void;
  setOpenAlrt: React.Dispatch<React.SetStateAction<boolean>>;
}

const Alrt: React.FunctionComponent<IAlrtProps> = ({
  handleDelete,
  note,
  setOpenAlrt,
}) => {
  return (
    <div className={styles.Alrt}>
      <div className={styles.conform}>
        <div className={styles.heading}>
          <h3>Are you sure?</h3>
        </div>
        <div className={styles.heading_p}>
          <p>would you like to delete?</p>
        </div>
        <div className={styles.buttons}>
          <div className={styles.btn_1}>
            <p onClick={() => handleDelete(note)}>Yes</p>
          </div>
          <div className={styles.btn_2}>
            <p onClick={() => setOpenAlrt(false)}>No</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Alrt;
