import React, { useState } from "react";
import "./CreateAreaStyles.css";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
    date: "",
  });
  const date = new Date();
  const Handelchange = (event) => {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
        date: date.toLocaleString(),
      };
    });
  };

  const onSubmit = () => {
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
      date: "",
    });
  };

  return (
    <div className="container-textarea">
      <input
        name="title"
        placeholder="titel"
        onChange={Handelchange}
        value={note.title}
        required
      ></input>
      <textarea
        name="content"
        placeholder="your Note"
        rows={6}
        onChange={Handelchange}
        value={note.content}
      ></textarea>
      <IconButton onClick={onSubmit}>
        <AddCircleIcon sx={{ fontSize: 40 }} className="arrowIcon" />
      </IconButton>
    </div>
  );
}
export default CreateArea;
