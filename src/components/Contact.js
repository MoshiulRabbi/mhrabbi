import React from "react"

import { Container, Title, Button } from "./common"

import "./contact.css"

const Contact = () => {
  return (
    <div id="contact" className="contact-area">
      <Container>
        <Title side="right" title="Contact" />
        <div className="contact">
          <div className="contact-status">
            <h2>
              Get in Touch
            </h2>
            <div>
              <Button
                title="Direct Mail"
                mt="25px"
                bgColor="#00cf5d"
                color="#fff"
                link="mailto:moshiul15-12574@diu.edu.bd"
              />
            </div>
          </div>
          <div className="contact-details">
            <ul>
              <li>
                <h5>Email</h5>
                <p>
                moshiul15-12574@diu.edu.bd <span>(Recommended)</span>
                </p>
              </li>
              <li>
                <h5>Social</h5>
                <p>
                  Twitter - @mhra1313i <span>(Slow response)</span>
                </p>
                <p>
                Facebook - moshiul.rabbi <span>(Slow response)</span>
                </p>
              </li>
              <li>
                <h5>Address</h5>
                <p>Dhanmondi,Dhaka, Bangladesh - 1209</p>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  )
}

export { Contact }
