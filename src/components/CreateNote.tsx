import React, { useRef, useState, useEffect } from "react";
import styles from "../styles/CreateNote.module.css";
import { Note } from "../models/note.model";
import { Alert, Form } from "react-bootstrap";
import axios from "axios";

interface ICreateNoteProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const CreateNote: React.FunctionComponent<ICreateNoteProps> = ({
  notes,
  setNotes,
}) => {
  const [color, setColor] = useState<string>("#ff0099");

  const [error, setError] = React.useState<string>("");

  const [data, setData] = useState<[]>([]);

  const titleRef = React.useRef<HTMLInputElement | null>(null);
  const textRef = React.useRef<HTMLTextAreaElement | null>(null);
  const colorRef = React.useRef<HTMLInputElement | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (titleRef.current?.value === "" || textRef.current?.value === "") {
      return setError("All field are mandatory");
    }

    setError("");
    const data = {
      title: (titleRef.current as HTMLInputElement).value,
      text: (textRef.current as HTMLTextAreaElement).value,
      color: (colorRef.current as HTMLInputElement).value,
    };

    (titleRef.current as HTMLInputElement).value = "";
    (textRef.current as HTMLTextAreaElement).value = "";

    await axios
      .post("http://localhost:5000/postuser/", data)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.create_note_main}>
      <div className={styles.create_data}>
        <div className={styles.Create_heading}>
          <h2> Create Notes</h2>
        </div>

        {error && <Alert className={styles.error}>{error}</Alert>}

        <Form className="form" onSubmit={(e) => handleSubmit(e)}>
          <div className={styles.create_title}>
            <input type="text" placeholder="Title" ref={titleRef} />
          </div>

          <div className={styles.create_note}>
            <textarea placeholder="Take a note..." ref={textRef} />
          </div>

          <div className={styles.create_color}>
            <label style={{ padding: "9px", fontSize: "x-larger" }}>
              pick color
            </label>

            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              ref={colorRef}
            />
          </div>

          <div className={styles.btn_create}>
            <button type="submit">Submit</button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default CreateNote;
