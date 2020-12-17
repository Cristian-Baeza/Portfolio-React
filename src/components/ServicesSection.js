//Import Icons
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

//Styles
import { About, Description, Image } from "../styles";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          Tech<span> and</span> Skills
        </h2>
        <Cards>

          <Card>
            <div className="icon">
              <img alt="icon" src={money} />
              <h3>Front End</h3>
            </div>
            <p>-JavaScript<br />
              -HTML<br />
            -CSS<br />
            -Boostrap<br />
            -React/Redux<br />
            </p>
          </Card>

          <Card>
            <div className="icon">
              <img alt="icon" src={diaphragm} />
              <h3>Backend</h3>
            </div>
            <p>-Node.js<br />
              -Express<br />
              -Mongo DB<br />
            </p>
          </Card>

          <Card>
            <div className="icon">
              <img alt="icon" src={teamwork} />
              <h3>Dev Tools</h3>
            </div>
            <p>-Git<br />
              -GitHub <br /> or "The Hub" as the cool kids call it<br /></p>
          </Card>

          <Card>
            <div className="icon">
              <img alt="icon" src={clock} />
              <h3>Mobile</h3>
            </div>
            <p>-React Native<br />
              -Android Studio<br />
            -Expo SDK<br />
            </p>
          </Card>

        </Cards>
      </Description>
      <Image>
        <img alt="mugshot" src={home2} /> This is a mugshot of me and Jeffrey after we tried to break out the animals at the zoo. His idea. He doesn't handle tequila well.
      </Image>
    </Services>
  );
};

// Styled components

const Services = styled(About)`// this inherits everything in About. and I can add extra css here 
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
    /* color: #e0b336; */
    font-weight: bold;
  }
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection