import React from "react"
import home1 from '../img/home1.png'

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>I work to make</h2>
          </div>
          <div className="hide">
            <h2>your <span>dreams</span> come</h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
        <p>Random text that i will edit later. This test will be the best. You will love it. The best. Best ever.</p>
        <button>Contact me</button>
      </div>
      <div className="image">
        <img src={home1} alt="random guy with camera" />
      </div>
    </div>
  )
}

export default AboutSection;