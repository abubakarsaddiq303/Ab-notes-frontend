import React from "react";
import styles from "../styles/Alrt.module.css";
import { Note } from "../models/note.model";
import warning from "../images/icons8-warning-48.png";

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
        <div className={styles.content}>
          <div className={styles.airt_img}>
            <img src={warning}></img>
          </div>
          <div className={styles.heading}>
            <h2>Confirm</h2>
          </div>
        </div>

        <div className={styles.heading_p}>
          <p>would you like to permanent delete?</p>
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
