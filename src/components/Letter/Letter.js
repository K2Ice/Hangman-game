import React, { useEffect, useState } from "react"

import "./Letter.scss"

const keyboardLetters = [
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

const Letter = ({ letterSelect, result }) => {
  const [letters, setLetters] = useState([...keyboardLetters])

  useEffect(() => {
    if (letters.length)
      document.addEventListener("keydown", (e) => {
        letters.forEach((element, index) => {
          if (element === e.key) {
            let lettersArray = [...letters]
            lettersArray.splice(index, 1)
            letterSelect(element)
            setLetters(lettersArray)
          }
        })
      })
  }, [])

  const lettersTab = letters.map((letter, index) => (
    <button
      key={`${index + 1000}`}
      className="keyboard__item"
      onClick={(event) => {
        event.target.disabled = true
        letterSelect(letter)
      }}
      disabled={result ? false : null}
    >
      {letter.toUpperCase()}
    </button>
  ))

  return <div className="keyboard__list">{lettersTab}</div>
}

export default Letter
