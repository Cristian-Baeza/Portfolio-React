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
            <motion.h2 variants={titleAnim}>I work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true.</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          This is a mugshot of me and Jeffrey after we tried to break out the animals at the zoo. His idea. He doesn't handle tequila well.</motion.p>
        <motion.button variants={fade}>
          Contact me
        </motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="random guy with camera" />
      </Image>
      <Wave />
    </About>
  )
}



export default AboutSection;