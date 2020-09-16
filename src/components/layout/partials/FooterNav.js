import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        {/* <li>
          <Link to="/contact/">Contact</Link>
        </li>
        <li>
          <Link to="/about-us/">About us</Link>
        </li> */}
        <li>
          {/* <Link to="/2#faqs">FAQ's</Link> */}
        </li>
        <li>
          <a href="https://gitcoin.co/grants/1112/goodghosting-a-defi-savings-game" target="_blank" rel="noopen">Support</a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;