import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";
//Animations
import { motion } from "framer-motion";
import {
  sliderContainer,
  slider,
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
} from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";


const MyWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <Work
      style={{ background: "#1b1b1b" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>

      <Movie>
        <motion.h2 variants={fade} style={{ color: "white" }}>The Gym Website</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/gym-website">
          <Hide>
            <motion.img variants={photoAnim} src='https://ik.imagekit.io/0jty0e7po/bg2_7Z-hg-MaJ.png' alt="athlete" />
          </Hide>
        </Link>
      </Movie>

      <Movie ref={element} variants={fade} animate={controls} initial="hidden">
        <h2 style={{ color: "white" }}>The Music App</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/the-musicapp">
          <img src={theracer} alt="theracer" />
        </Link>
      </Movie>

      <Movie ref={element2} variants={fade} animate={controls2} initial="hidden">
        <h2 style={{ color: "white" }}>The Portfolio Website</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>
        <Link to="/work/portfolio-website">
          <img src={goodtimes} alt="goodtimes" />
        </Link>
      </Movie>
      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
  }
`;
const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
            height: 0.5rem;
    background: #e0b336;
    margin-bottom: 3rem;
  }
  img {
            width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #78523d;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ba7e5d;
`;
const Frame3 = styled(Frame1)`
  background: #d6870f;
`;
const Frame4 = styled(Frame1)`
  background: #e0b336;
`;

export default MyWork;