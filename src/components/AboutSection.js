import React from "react"
import home1 from '../img/home1.png'
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2>I work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2>true.</motion.h2>
          </Hide>
        </motion.div>
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