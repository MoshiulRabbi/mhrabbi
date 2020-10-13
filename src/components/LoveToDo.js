import React from "react"

import { Container, Title } from "./common"

import quote from "../assets/image/quote.svg"
import coding from "../assets/image/coding.svg"
import reading from "../assets/image/reading.svg"
import edm from "../assets/image/edm.svg"


import "./lovetodo.css"

const LoveToDo = () => {
  return (
    <div className="love-to-do-area">
      <Container>
        <Title side="right" title="Love To Do" />
        <div className="love-to-do">
          <div className="stickpad">
            <img alt="" src={reading} />
            <h4>Reading</h4>
          </div>
          <div className="stickpad">
            <img alt="" src={quote} />
            <h4>Story and Epigram Writing</h4>
          </div>
          <div className="stickpad">
            <img alt="" src={coding} />
            <h4>Coding</h4>
          </div>
          <div className="stickpad">
            <img alt="" src={edm} />
            <h4>EDM Producing</h4>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { LoveToDo }
