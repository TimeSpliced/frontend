import React from "react";
import GenericSection from "./GenericSection";
import Image from '../elements/Image';

export default () => (
  <GenericSection topDivider className="illustration-section-07 has-bg-color">
    <div className="container-xs invert-color">
      <h2 className="mt-0">
      How it works
      </h2>
      {/* <p>
        Lorem ipsum dolor sit amet, <a href="#0">consectetur adipiscing elit</a>
        , sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
      </p>
      <p>
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <figure>
        <Image
          className="image-larger"
          src={require("../../assets/images/image-placeholder.svg")}
          alt="Placeholder"
          width={712}
          height={400}
        />
        <figcaption className="text-color-low">
          A super-nice image{" "}
          <span role="img" aria-label="smile">
            😀
          </span>
        </figcaption>
      </figure> */}
      {/* <h4>Flexibility</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </p> */}
      <ol>
        <li><h5>Set your goals</h5>Customise your savings goal. Choose how much and how long you want to save for, how frequently, in which currency and your risk appetite.</li>
        <li><h5>Get added to a pool</h5>We match you with savers using the same timeframe. Joining a saving pool together for a fixed length of time.</li>
        <li><h5>Deposit</h5>Make regular deposits. Watch your savings grow. Whilst saving, you are free to withdraw your principal at any point.</li>
        <li><h5>Save regularly</h5>However, if you miss a payment you forfeit your chance to claim a slice of the interest generated.</li>
        <li><h5>Cash out!</h5>At the end of your pool’s timeframe, we calculate the number of successful regular savers. Interest generated over this time is split between all winners. Everyone else only gets their principal back.</li>
        <li><h5>Higher returns</h5>Successful savers enjoy their hard won, higher interest returns. The more people drop out, the greater the returns.</li>
      </ol>
      <h5>Optionally: add ETH</h5>
      <p>
Want to grow some ETH as well as stable tokens? Select this option to convert a percentage of each of your deposits to ETH. This is withdrawable at any point and does not affect your ability to claim interest.
      </p>
    </div>
  </GenericSection>
);
