import React from "react";
import "./CardStyles.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import DeleteIcon from "@mui/icons-material/Delete";

function Card(props) {
  function onClick() {
    props.delete(props.index);
  }
  return (
    <div className="card-container">
      <div className="card-header-container">
        <div className="delete-container">
          <ArrowBackIosIcon sx={{ fontSize: 17 }} />
          <button className="card-delete" onClick={onClick}>
            Delete
          </button>
        </div>
        <h2>{props.title}</h2>
        <h3>{props.date}</h3>
      </div>
      <p>{props.content}</p>
      <DeleteIcon onClick={onClick} sx={{ display: "none" }} />
    </div>
  );
}

export default Card;
