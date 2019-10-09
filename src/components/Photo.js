import React, { useEffect, useState } from "react";
import axios from "axios";

const Picture = () => {
  const [picture, setPicture] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [explanation, setExplanation] = useState("");

  useEffect(() => {
    function getPhoto() {
      axios
        .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
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
  }, []);

  return (
    <div>
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{explanation}</p>
      <img src={picture} alt="Nasa astronomy pic of the day" />
    </div>
  );
};
export default Picture;
