import React, { useState } from "react";
import "./CardsStyles.css";
import CreateArea from "./CreateArea";
import Card from "./Card";
//import { Arraytest } from "./Array";

function Cards() {
  const [Array, setArray] = useState([]);
  function addCard(note) {
    setArray((prevCards) => {
      return [...prevCards, note];
    });
  }

  const handleDelete = (number) => {
    setArray((prevCards) => {
      return Array.filter((card, index) => {
        return index !== number;
      });
    });
  };

  return (
    <div className="container">
      {/* {console.log(Array)} */}
      <CreateArea onAdd={addCard} />
      <div className="cards-container">
        {Array.map((card, index) => {
          return (
            <Card
              key={index}
              index={index}
              title={card.title}
              content={card.content}
              date={card.date}
              delete={handleDelete}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
