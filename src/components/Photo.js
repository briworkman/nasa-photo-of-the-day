import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Picture = () => {
  const [picture, setPicture] = useState("");
  const [date, setDate] = useState("");
  const [title, setTitle] = useState("");
  const [explanation, setExplanation] = useState("");

  const [newDate, setNewDate] = useState("");

  const DateButton = styled.button`
    border: none;
    background-color: #02030f;
    color: white;
    display: flex;
    flex-direction: column;
    font-family: "Space Mono", monospace;
    margin: 0 auto;
    font-size: 16px;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  `;

  const Image = styled.img`
    max-height: 500px;
    border: 3px solid white;
  `;

  const Dropdown = styled.div`
    position: relative;
    display: inline-block;
  `;

  const DropdownContent = styled.div`
    display: none;
    background-color: #02030f;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    color: white;
  `;

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
      <Dropdown className="dropdown">
        <p>
          {date} <i className="fas fa-angle-down"></i>
        </p>
        <DropdownContent className="dropdown-content">
          <DateButton onClick={() => setNewDate("2018-10-09")}>
            One Year Ago
          </DateButton>
          <DateButton onClick={() => setNewDate("2014-10-09")}>
            Five Years Ago
          </DateButton>
          <DateButton onClick={() => setNewDate("2009-10-09")}>
            Ten Years Ago
          </DateButton>
        </DropdownContent>
      </Dropdown>
      <p>{explanation}</p>
      <Image src={picture} alt="Nasa astronomy pic of the day" />
    </div>
  );
};
export default Picture;
