import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import cblogo from '../img/cblogo.png';
import ReactRoundedImage from "react-rounded-image";


const Nav = () => {
  const { pathname } = useLocation();

  return (
    <StyledNav>
      <h1>
        <span id='name' style={{ color: 'black' }}>CRISTIAN BAEZA</span>
        <span id='name' style={{ color: '#78523d' }}>The Giraffe Coder</span>
        <Link id="logo" to="/">
          <ReactRoundedImage
            image={cblogo}
            roundedColor="#321124"
            imageWidth="120"
            imageHeight="100"
            roundedSize="10"
          />
          {/* <span style={{ color: 'black' }}>CRISTIAN BAEZA</span> */}
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Me</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/work">My Work</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/work" ? "50%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact">Contact Me</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
          />
        </li>
      </ul>
    </StyledNav >
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #e0b336; 
  position: sticky;
  top: 0;
  z-index: 10;
  box-shadow: 0 0.5rem 0.5rem #e0b336;
  
  a {
    color: black;
    font-weight: bold;
    font-size: larger;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: Arial, cursive;
    font-weight: lighter;
    float: left; //
    margin: 0px 10px 0px 0px;//
  }
  #name{
    display: inline-block;
    margin: 40px 50px 0px 0px;
    
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #name{
      display: flex; 
    }
    #logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #78523d;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;

export default Nav;