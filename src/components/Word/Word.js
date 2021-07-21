import React from "react"

import "./Word.scss"

const Word = ({ guessWord }) => {
  const letters = [...guessWord].map((letter, index) => (
    <span key={`${index}+000`} className="word__letter">
      {}
    </span>
  ))

  return <div className="word">{letters}</div>
}

export default Word
