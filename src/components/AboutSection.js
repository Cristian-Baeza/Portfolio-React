import React from "react"
import { About, Description, Image, Hide } from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";
import { Link } from "react-router-dom";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}><span>Hola!</span></motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              Welcome to my<span> World</span>
            </motion.h2>
          </Hide>
          {/* <Hide>
            <motion.h2 variants={titleAnim}><span>Cristian Baeza</span></motion.h2>
          </Hide> */}
        </motion.div>
        <motion.p variants={fade}>
          Originally from 🇲🇽 Mexico City, I am a Marine Corps veteran and a recent graduate from Code Platoon's full-stack software engineer program. Currently pursuing my love for software development and teaching jiujitsu. Always striving to keep a positive attitude, strong work ethic and a sense of humor.<br />
          <br />
          Have a look around! Check out my projects and my website. I hope you at least get a good chuckle from it.
        </motion.p>

        <Link to="/contact">
          <motion.button variants={fade}>
            Contact me
        </motion.button>
        </Link>

      </Description>
      <Image>
        <motion.img variants={photoAnim} src={"https://ik.imagekit.io/0jty0e7po/home1_174ewKyr4.png"} alt="photo of me" />
      </Image>
      <Wave />
    </About>
  )
}



export default AboutSection;