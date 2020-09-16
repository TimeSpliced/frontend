import React from "react";
import HeroSplit from "../components/sections/HeroSplit";
import Clients from "../components/sections/Clients";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import Pricing from "../components/sections/Pricing";
import Testimonial from "../components/sections/Testimonial";
import Cta from "../components/sections/Cta";
import HowItWorks from "../components/sections/HowItWorks";
import CountdownContainer from "./../components/elements/countdown-container";
import Button from './../components/elements/Button';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <HeroSplit invertMobile imageFill className="illustration-section-01" />

        <Clients topDivider bottomDivider />

        <FeaturesTiles />
        {/* <FeaturesSplit bottomDivider imageFill /> */}
        <HowItWorks />
        {/* <Pricing pricingSwitcher hasBgColor className="illustration-section-07" /> */}
        {/* <Testimonial className="illustration-section-05" /> */}
        <div className="container" style={{ padding: "5%", textAlign :" center" }}>
          {/* <h5>Next game starts in</h5> */}
          {/* <CountdownContainer
            timeTillDate="08 16 2020 , 6:00 am"
            timeFormat="MM DD YYYY, h:mm a"
          /> */}
          {/* <div style={{display : "flex", justifyContent : "center", margin : "2%"}}>

          <Button tag="a" color="primary" wideMobile href="#" >
            Start saving
          </Button>
          </div> */}
        </div>
        <Cta topDivider bottomDivider split className="reveal-from-top" />
        
      </React.Fragment>
    );
  }
}

export default Home;
