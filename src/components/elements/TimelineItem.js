import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
};

const defaultProps = {
  children: null,
  title: "",
};

const TimelineItem = ({ className, children, title, ...props }) => {
  const classes = classNames("timeline-item", className);
  // There is a styling issue with fading in.
  // I have removed fade in by default and pass in fadeInGG to activate
  return (
    <div {...props} className={classes}>
      <div className="timeline-item-inner">
        <div
          className={`timeline-item-header tt-u mb-4 ${
            props.fadeInGG && "reveal-fade"
          }`}
        >
          {title}
        </div>
        <div
          className={`timeline-item-content h4 m-0 ${
            props.fadeInGG && "reveal-from-side"
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

TimelineItem.propTypes = propTypes;
TimelineItem.defaultProps = defaultProps;

export default TimelineItem;
