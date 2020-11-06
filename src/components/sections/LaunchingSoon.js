import React from "react";
import GenericSection from "./GenericSection";
import Image from '../elements/Image';

export default () => (
  <GenericSection topDivider className="illustration-section-07 has-bg-color">
    <div className="container-xs invert-color">
      <h4 className="mt-0">
      Launching in early 2021 🚀
      </h4>
      <p>
      We are in active development. We will be recruiting alpha testers during Q4 2020 from our Discord community. After fine-tuning our product, we will launch a first version in Q1 2021.  Read more about our development plans in <a href="https://medium.com/goodghosting/confession-time-whats-next-f5ac52aa517d" target="_blank"  rel="noopener noreferrer">this blog post</a>.
      </p>
          {/*
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
    </div>
  </GenericSection>
);
