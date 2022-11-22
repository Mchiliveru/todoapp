import React, { useState, useEffect } from "react";
import { TextField, Button, Divider } from "@mui/material";
import { db } from "./firebase";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import "./App.css";
import CustomDialog from "./components/dialog/CustomDialog";
import Dragable from "./components/dragable/Dragable";
import { useDispatch } from "react-redux";
import { updateTodoList } from "./redux/common.slice";

const data = query(collection(db, "todo"), orderBy("timestamp", "desc"));

function App() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    onSnapshot(data, (snapshot) => {
      const todoList = snapshot.docs.map((doc) => ({
        id: doc.id,
        item: doc.data(),
      }));
      dispatch(updateTodoList(todoList));
    });
  }, [dispatch]);

  const addTodo = (e) => {
    e.preventDefault();
    addDoc(collection(db, "todo"), {
      todoItem: input,
      timestamp: serverTimestamp(),
    });
    setInput("");
  };

  return (
    <div className="App">
      <h2> Add Task to list</h2>
      <form>
        <TextField
          id="outlined-basic"
          label="Add new task"
          variant="outlined"
          size="small"
          value={input}
          fullWidth={true}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={addTodo}
          disabled={!input}
          fullWidth
          style={{ marginTop: 10}}
        >
          Add task
        </Button>
      </form>
      <h2>THINGS TODO:</h2>
      <Divider />
      <Dragable />
      <CustomDialog />
    </div>
  );
}

export default App;
