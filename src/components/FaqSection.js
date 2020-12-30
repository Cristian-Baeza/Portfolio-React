import styled from "styled-components";
import { About } from "../styles";
import Toggle from './Toggle';
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

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
              I have been in sponge mode for the last 6-9 months, learning and growing as much as I can. When I'm not trying to OnlyFans fund my software development career (that's a joke... or is it?) I am working, training jiujitsu and trying to keep Jeffrey (my giraffe) out of trouble.
              
          </p>
          </div>
        </Toggle>

        <Toggle title='Are you single, you delicious hunk of awesomeness?'>
          <div className="answer">
            <p>No, I am not single, I am in a very happy relationship. With a human. Not my giraffe.</p>
            <p>
              To the trucker who keeps sending me pictures of him rubbing his belly: <br />
              Please stop Chuck. I already called the Police.
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