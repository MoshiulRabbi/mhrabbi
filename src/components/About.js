import React from "react"

import { Container, Title, Button } from "./common"


import profilee from "../assets/image/p.jpg"

import "./about.css"

const About = () => {
  return (
    <div id="about" className="about-area">
      <Container>
        <Title side="right" title="About Me" />
        <div className="about">
          <div className="about-details">
            <p>
            Hello, I am Moshiul Huq Rabbi.Exploring and Learning the concept of Computer.Terminal bug excites me.
            Currently Studying Computer Science (BSc)
            </p>
            <div className="about-action">
              <Button
                link="resumelink"
                target="_blank"
                bgColor="#00cf5d"
                title="Get Resume"
              />
              <Button clickEvent link="#skill" ml="15px" title="My Skills" />
            </div>
          </div>
          <div className="about-image">
            <div className="image">
              <img alt="profile" src={profilee} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { About }
