import React, { useEffect, useState } from "react"

import Hangman from "./components/Hangman/Hangman"
import Keyboard from "./components/Keyboard/Keyboard"
import Word from "./components/Word/Word"

function App({ data }) {
  const [word, setWord] = useState("")

  const handleLetterSelect = (letter) => {
    handleLetterCheck(letter)
  }

  const handleLetterCheck = (letter) => {
    let checkWord = word
    const indexTab = []
    let searchLetterIndex = checkWord.indexOf(letter)
    if (searchLetterIndex === -1) {
      console.log("źle")
    } else {
      while (searchLetterIndex !== -1) {
        checkWord = checkWord.replace(checkWord[searchLetterIndex], " ")
        indexTab.push(searchLetterIndex)
        searchLetterIndex = checkWord.indexOf(letter)
      }
    }
    showSelectResult(letter, indexTab)
  }

  const showSelectResult = (letter, hitLettersArray) => {
    if (hitLettersArray.length) {
      //funkcja ukazująca trafione litery
      let letters = document.querySelectorAll(".word__letter")
      console.log(letters)
      hitLettersArray.map((index) => (letters[index].textContent = letter))
    }
  }
  useEffect(() => {
    setWord(data[Math.floor(Math.random() * data.length)])
  }, [data])

  return (
    <div className="App">
      <Hangman />
      <Word guessWord={word} />
      <Keyboard select={handleLetterSelect} />
    </div>
  )
}

export default App
