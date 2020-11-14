import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const FooterNav = ({ className, ...props }) => {
  const classes = classNames("footer-nav", className);

  return (
    <nav {...props} className={classes}>
      <ul className="list-reset">

        <li>
          <p>boo@goodghosting.com</p>
        </li>
        {/* <li>
          <Link to="/about-us/">About us</Link>
        </li> */}
        <li>
          {/* <Link to="/2#faqs">FAQ's</Link> */}
        </li>
        <li>
      </ul>
    </nav>
  );
};

export default FooterNav;
