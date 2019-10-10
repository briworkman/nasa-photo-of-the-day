import React, { useEffect, useState } from "react";
import axios from "axios";

const Picture = () => {
  const [picture, setPicture] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [explanation, setExplanation] = useState("");

  const [newDate, setNewDate] = useState("");

  useEffect(() => {
    function getPhoto() {
      axios
        .get(
          `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${newDate}`
        )
        .then(response => {
          console.log(response.data);
          setPicture(response.data.url);
          setDate(response.data.date);
          setTitle(response.data.title);
          setExplanation(response.data.explanation);
        })

        .catch(error => console.log(error));
    }
    getPhoto();
  }, [newDate]);

  return (
    <div>
      <h2>{title}</h2>
      <div className="dropdown">
        <p>
          {date} <i className="fas fa-angle-down"></i>
        </p>
        <div className="dropdown-content">
          <button onClick={() => setNewDate("2018-10-09")}>One Year Ago</button>
          <button onClick={() => setNewDate("2014-10-09")}>
            Five Years Ago
          </button>
          <button onClick={() => setNewDate("2009-10-09")}>
            Ten Years Ago
          </button>
        </div>
      </div>
      <p>{explanation}</p>
      <img src={picture} alt="Nasa astronomy pic of the day" />
    </div>
  );
};
export default Picture;
