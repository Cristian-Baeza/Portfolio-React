import styled from "styled-components";
import { About } from "../styles";
import Toggle from './Toggle';
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";
import { Link } from 'react-router-dom';

const FaqSection = () => {
  const [element, controls] = useScroll();


  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        Any Questions? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title='How Did I Start?'>
          <div className="answer">
            <p>
              Twas the day after Covid and silence roamed the house, <br />
              unfulfilled by my work, my mind full of doubts. <br />

              I shall be productive! said my inner voice.<br />
              Investing in toilet paper seems like a good choice.<br />

              Maybe create a show about tigers in zoos?<br />
              No thats crazy, so much money I would lose.<br />

              Learn a programming language? That sounds like fun.<br />
              Wait. What? There's much more than one?<br />

              Learning C seems better than going for a run.<br />
              Aaaaand I'm tired of crying, on to the next one.<br />

              Ruby seems simple! It fits in my head.<br />
              Oh, the internet says the language is dead.<br />

              JavaScript seems ok, I hope its not like Java.<br />
              Hey! I actually don't feel like im sinking in lava.<br />

              This isn't so bad, it's actually quite fun!<br />
              So much more but my journey has just begun.<br />

            </p>
          </div>

        </Toggle>

        <Toggle title='What are you up to these days?'>
          <div className="answer">

            <p>
              I have been in sponge mode for the last 6-9 months, learning and growing as much as I can. Currently attending a full stack bootcamp for veterans called Code Platoon. Currently working on some projects, teaching jiujitsu part-time and trying to keep Jeffrey, my giraffe, out of trouble.
          </p>
          </div>
        </Toggle>

        <Toggle title='You seem pretty cool, can I contact you?'>
          <div className="answer">
            <p>Of course! I am more than happy to talk about my experiences in software. More than glad to help anyone and talk about bootcamps or starting a journey in software development. I owe where I am today to all the people that helped me when I got started and I believe it is important to pay it forward. You can find my contact info <Link className='link' to='/contact'>HERE</Link></p>

          </div>
        </Toggle>

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
  .link {
    color: #e0b336;
    font-size: 18px;
  }
`;

export default FaqSection;