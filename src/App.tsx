import "./App.css";
import { Note } from "./models/note.model";
import Header from "./components/Header";
import React, { useState } from "react";
import styles from "./styles/App.module.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ShowDelete from "./components/ShowDelete";
import Home from "./components/Home";

const App = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  return (
    <>
      <Router>
        <div className={styles.App}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/showdelete"
              element={<ShowDelete notes={notes} setNotes={setNotes} />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
};

export default App;
