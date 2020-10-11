import React from "react";

const Cookie = () => {
  return (
    <div
      role="dialog"
      ariaLive="polite"
      ariaLabel="cookieconsent"
      ariaDescribedby="cookieconsent:desc"
      classNameName="cc-window cc-banner cc-type-info cc-theme-block cc-bottom  sans_serif"
    >
      <span id="cookieconsent:desc" className="cc-message">
        Cruip uses cookies to ensure you get the best experience on our website.{" "}
        <a
          arialLabel="learn more about cookies"
          role="button"
          tabindex="0"
          className="cc-link"
          href="https://cruip.com/privacy-policy/"
          rel="noopener noreferrer nofollow"
          target="_blank"
        >
          Learn more
        </a>
      </span>
      <div className="cc-compliance">
        <a
          href="https://google.com"
          ariaLabel="dismiss cookie message"
          role="button"
          tabindex="0"
          className="cc-btn cc-dismiss"
        >
          I agree
        </a>
      </div>
    </div>
  );
};

export default Cookie;
