import styled from "styled-components";
import { About } from "../styles";
import Toggle from './Toggle';
import { AnimateSharedLayout } from "framer-motion";


const FaqSection = () => {

  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title='How Did I Start?'>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, neque.
          </p>
          </div>

        </Toggle>

        <Toggle title='Daily Schedule'>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, neque.
          </p>
          </div>
        </Toggle>

        <Toggle title='Are you single, you delicious hunk of awesomeness?'>
          <div className="answer">
            <p>No, I am not single, I am in a very happy relationship.</p>
            <p>
              To the guy who keeps sending me pictures of him milking his goats asking me to "come over so I can feed you from this bottle like a baby": Please stop. I already called the Police.
          </p>
          </div>
        </Toggle>

        {/* <Toggle title='Products I Offer'>
          <div className="answer">
            <p>Lorem ipsum dolor sit amet.</p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus, neque.
          </p>
          </div>
        </Toggle> */}
      </AnimateSharedLayout>
    </Faq>
  );
};

//Styled Component
const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;