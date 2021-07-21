import React from "react"
import "./Hangman.scss"

const Hangman = () => {
  return (
    <div className="hangman">
      <div className="gibbet">
        <div className="gibbet__lowBar"></div>
        <div className="gibbet__middleBar"></div>
        <div className="gibbet__topBar"></div>
        <div className="gibbet__line"></div>
      </div>
      <div className="man">
        <div className="man__head"></div>
        <div className="man__body"></div>
        <div className="man__rightArm"></div>
        <div className="man__leftArm"></div>
        <div className="man__rightLeg"></div>
        <div className="man__leftLeg"></div>
      </div>
    </div>
  )
}

export default Hangman
