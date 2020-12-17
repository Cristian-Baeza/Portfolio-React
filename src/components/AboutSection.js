import React from "react"
import home1 from '../img/home1.png'
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";


const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>Hola!</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              Welcome to my<span> World</span>
            </motion.h2>
          </Hide>
          {/* <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide> */}
        </motion.div>
        <motion.p variants={fade}>
          Originally from Mexico City, I am currently a full time student at the University of Utah and interning at a software company. I am beyond grateful to have been awarded a scholarship to Code Platoon's full stack coding bootcamp starting in 2021.<br />
          <br />
          Always striving to keep a positive attitude, strong work ethic and a sense of humor. <br />
          Have a look around! Check out my projects and my website. If anything, I hope you at least get a good chuckle from it

</motion.p>
        <motion.button variants={fade}>
          Contact me
        </motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="wierdo hugging a minion" />
      </Image>
      <Wave />
    </About>
  )
}



export default AboutSection;