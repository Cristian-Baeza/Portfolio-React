import React from "react"
import home1 from '../img/home1.png'
//Styled 
import styled from 'styled-components';
import { About, Description, Image, Hide } from "../styles";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>I work to make</h2>
          </Hide>
          <Hide>
            <h2>your <span>dreams</span> come</h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>Random text that i will edit later. This test will be the best. You will love it. The best. Best ever.</p>
        <button>Contact me</button>
      </Description>
      <Image>
        <img src={home1} alt="random guy with camera" />
      </Image>
    </About>
  )
}

//STYLED Components


export default AboutSection;