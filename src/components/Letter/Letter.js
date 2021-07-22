import React from "react"

import "./Letter.scss"

const letters = [
  "a",
  "ą",
  "b",
  "c",
  "ć",
  "d",
  "e",
  "ę",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "ł",
  "m",
  "n",
  "ń",
  "o",
  "ó",
  "p",
  "q",
  "r",
  "s",
  "ś",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "ź",
  "ż",
]

const Letter = ({ letterSelect }) => {
  const lettersTab = letters.map((letter, index) => (
    <button
      key={`${index} + 1000`}
      className="keyboard__item"
      onClick={(event) => {
        event.target.disabled = true
        letterSelect(letter)
      }}
      disabled={false}
    >
      {letter.toUpperCase()}
    </button>
  ))
  return <div className="keyboard__list">{lettersTab}</div>
}

export default Letter
