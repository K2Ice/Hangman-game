import React, { useEffect, useState } from "react"

import Hangman from "./components/Hangman/Hangman"
import Keyboard from "./components/Keyboard/Keyboard"
import Word from "./components/Word/Word"

function App({ data }) {
  const [word, setWord] = useState("")
  const [hangmanElements, setHangmanElements] = useState([])
  const [result, setResult] = useState("")
  const [hitLetters, setHitLetters] = useState(0)

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
      hitLettersArray.map((index) => (letters[index].textContent = letter))
      setHitLetters(() => hitLetters + hitLettersArray.length)
      if (hitLetters + 1 === word.length) setResult("wygrałeś")
    } else if (!hitLettersArray.length && hangmanElements.length > 0) {
      const elements = [...hangmanElements]
      const changeElement = elements.splice(0, 1)
      changeElement[0].style.animationPlayState = "running"
      if (elements.length === 0) {
        //funkcja wyświetlająca informację o przegranej
        setResult("przegrałeś")
      } else {
        setHangmanElements(elements)
      }
    }
  }
  useEffect(() => {
    setWord(data[Math.floor(Math.random() * data.length)])
    const gibbetElements = document.querySelectorAll(".gibbet > div")
    const manElements = document.querySelectorAll(".man > div")
    setHangmanElements([...gibbetElements, ...manElements])
  }, [data])
  return (
    <div className="App">
      <Hangman />
      <Word guessWord={word} />
      <Keyboard select={handleLetterCheck} />
      {result}
    </div>
  )
}

export default App
