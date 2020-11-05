import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import Button from '../elements/Button';
import { Link } from 'react-router-dom';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

class HeroSplit extends React.Component {

  componentDidMount() {
    // this is only to handle inline style on window resize
    window.onresize = function () {
      this.forceUpdate();
    }.bind(this);
  }

  render() {

    const {
      className,
      topOuterDivider,
      bottomOuterDivider,
      topDivider,
      bottomDivider,
      hasBgColor,
      invertColor,
      invertMobile,
      invertDesktop,
      alignTop,
      imageFill,
      ...props
    } = this.props;

    const outerClasses = classNames(
      'hero section',
      topOuterDivider && 'has-top-divider',
      bottomOuterDivider && 'has-bottom-divider',
      hasBgColor && 'has-bg-color',
      invertColor && 'invert-color',
      className
    );

    const innerClasses = classNames(
      'hero-inner section-inner',
      topDivider && 'has-top-divider',
      bottomDivider && 'has-bottom-divider'
    );

    const splitClasses = classNames(
      'split-wrap',
      invertMobile && 'invert-mobile',
      invertDesktop && 'invert-desktop',
      alignTop && 'align-top'
    );

    return (
      <section
        {...props}
        className={outerClasses}
      >
        <div className="container">
          <div className={innerClasses}>
            <div className={splitClasses}>
              <div className="split-item" style={inlineStyle()}>
                <div className="hero-content split-item-content center-content-mobile">
                  <h1 className="mt-0 mb-16 reveal-from-top" data-reveal-delay="150">
                    A better way to grow your savings
                  </h1>
                  <p className="mt-0 mb-32 reveal-from-top" data-reveal-delay="300">
                  The new addictive way to save. Our incetivized pool rewards regular savers with higher interest rates.<br/>Start building the financial habits you deserve today.
                  {/* Join our pool, hit your goals and get rewarded. Interest rates of over 7% are possible. The more people drop out, the higher your returns. */}
                  </p>
                  <div className="reveal-from-top" data-reveal-delay="450">

                    <Button tag="a" color="primary" wide="true" wideMobile="true">
                      <a className="cta-button" href="https://discord.com/invite/AWvcTFP">Join our discord</a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

// inline style
const inlineCss = {
  alignItems: 'flex-start',
  minHeight: '492px'
}

const inlineStyle = function () {
  if (window.innerWidth > 641) {
    return inlineCss;
  }
};

HeroSplit.propTypes = propTypes;
HeroSplit.defaultProps = defaultProps;

export default HeroSplit;
