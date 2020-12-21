//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";
import ReactTooltip from "react-tooltip";


const ContactMe = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#1b1b1b" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
        </Hide>
      </Title>
      <div>

        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Send Me A Message</h2>
          </Social>
        </Hide>

        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            <h2>Email: <br />
              <button data-tip data-for="emailTip">
                <a href="mailto:cristian@giraffecoder.com">cristian@giraffecoder.com</a>
              </button>
              <ReactTooltip id="emailTip" place="right" type='light' effect="solid">
                Whaaat? He has a personalized email?? Oh yea I do
              </ReactTooltip>
            </h2>
          </Social>
        </Hide>

        <Hide>
          <Social variants={titleAnim}>
            <Circle />
            {/* <a target="_blank" href="https://github.com/Cristian-Baeza" >My gh</a> */}
            <h2>Social Media</h2>
          </Social>
        </Hide>

      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: white;
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #e0b336;
`;
const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
    color: white;
  }
  a{
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 2rem;
  }
  button{
    font-weight: bold;
    font-size: 1.1.rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #78523d;
    background:  #e0b336;
    color: black;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    &:hover{
        background-color: red;
        color: white;
    }
}
`;

export default ContactMe;