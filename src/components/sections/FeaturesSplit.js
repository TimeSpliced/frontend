import React from "react";
import classNames from "classnames";
import { SectionSplitProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionSplitProps.types,
};

const defaultProps = {
  ...SectionSplitProps.defaults,
};

class FeaturesSplit extends React.Component {
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
      "features-split section",
      topOuterDivider && "has-top-divider",
      bottomOuterDivider && "has-bottom-divider",
      hasBgColor && "has-bg-color",
      invertColor && "invert-color",
      className
    );

    const innerClasses = classNames(
      "features-split-inner section-inner",
      topDivider && "has-top-divider",
      bottomDivider && "has-bottom-divider"
    );

    const splitClasses = classNames(
      "split-wrap",
      invertMobile && "invert-mobile",
      invertDesktop && "invert-desktop",
      alignTop && "align-top"
    );

    const sectionHeader = {
      title: "It doesn't have to be boring",
      paragraph:
        "Our groundbreaking 'savers take it all' mechanism, gives you the ultimate push to save. The opportunity to get higher interest rates, without risking your principal. If you are motivated enough to make all deposits, you will earn more than you would by saving by yourself.",
    };

    return (
      <section {...props} className={outerClasses}>
        <div className="container">
          <div className={innerClasses}>
            <SectionHeader
              data={sectionHeader}
              className="center-content reveal-from-top"
            >
              <Image
                className="mb-24"
                src={require("./../../assets/images/features-split-icon.svg")}
                alt="Features split icon"
                width={80}
                height={80}
              />
            </SectionHeader>
            <div className={splitClasses}>
              <div className="split-item reveal-from-top">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16">Join our saving pool</h3>
                  <p className="m-0">
                    Fed up of always forgetting to save? Dive in and join our
                    saving pool.
                  </p>
                </div>
                <div
                  className={classNames(
                    "split-item-image center-content-mobile ",
                    imageFill && "split-item-image-fill bug-medium-img"
                  )}
                >
                  {/* <Image
                    src={require("./../../assets/images/features-split-image.svg")}
                    alt="Features split 01"
                    width={528}
                    height={396}
                  /> */}
                  <div style={rachImg}>
                    <Image
                      src={require("./../../assets/images/synchronized-swimming.svg")}
                      alt="Features split top 01"
                      width={624}
                      height={512}
                    />
                  </div>
                </div>
              </div>

              <div className="split-item reveal-from-top">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16">Make montly deposits</h3>
                  <p className="m-0">
                    Contribute a deposit every month. Feel proud as your balance
                    grows. You are free to remove your principle at any point.
                  </p>
                </div>
                <div
                  className={classNames(
                    "split-item-image center-content-mobile ",
                    imageFill && "split-item-image-fill bug-medium-img"
                  )}
                >
                  {/* <Image
                    src={require("./../../assets/images/features-split-image.svg")}
                    alt="Features split 02"
                    width={528}
                    height={396}
                  /> */}
                  <div style={rachImg}>
                    <Image
                      src={require("./../../assets/images/money.svg")}
                      alt="Features split top 02"
                      width={624}
                      height={512}
                    />
                  </div>
                </div>
              </div>

              <div className="split-item reveal-from-top">
                <div className="split-item-content center-content-mobile">
                  <h3 className="mt-0 mb-16">Get more interest</h3>
                  <p className="m-0">
                    Everyone gets their principle back, but the savvy savers who
                    made every payment, split the interest. Hit your goals to
                    get higher interest.
                  </p>
                </div>
                <div
                  className={classNames(
                    "split-item-image center-content-mobile ",
                    imageFill && "split-item-image-fill bug-medium-img"
                  )}
                >
                  {/* <Image
                    src={require("./../../assets/images/features-split-image.svg")}
                    alt="Features split 03"
                    width={528}
                    height={396}
                  /> */}
                  <div style={rachImg}>
                    <Image
                      src={require("./../../assets/images/celebrate.svg")}
                      alt="Features split top 03"
                      width={624}
                      height={512}
                    />
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
const rachImg = {
  // position: "absolute",
  padding: "30%",
  // top: "0",
  // left: "0",
};

const imgOddStyle = {
  position: "absolute",
  width: "118.18%",
  maxWidth: "118.18%",
  top: "-6.31%",
  left: "-16.48%",
};

const imgEvenStyle = {
  position: "absolute",
  width: "118.18%",
  maxWidth: "118.18%",
  top: "-6.31%",
  left: "-1.51%",
};

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;
