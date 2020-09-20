import Fade from 'react-reveal/Fade'
import React from 'react';

export default ({ days, daysRadius, hours, hoursRadius, minutes, minutesRadius, seconds, secondsRadius }) => (
    <div>
        {/* <p className="mb-10 text-4xl font-bold">Next Game starts in:</p> */}
        <div className='countdown-wrapper sans_serif'>
            {days && (
                <div className='countdown-item '>
                    <SVGCircle radius={daysRadius} />
                    {days}
                    <span >days</span>
                </div>
            )}
            {hours && (
                <div className='countdown-item'>
                    <SVGCircle radius={hoursRadius} />
                    {hours}
                    <span>hours</span>
                </div>
            )}
            {minutes && (
                <div className='countdown-item'>
                    <SVGCircle radius={minutesRadius} />
                    {minutes}
                    <span>minutes</span>
                </div>
            )}
            {seconds && (
                <div className='countdown-item'>
                    <SVGCircle radius={secondsRadius} />
                    {seconds}
                    <span>seconds</span>
                </div>
            )}
        </div>
    </div>
)
const SVGCircle = ({ radius }) => (
    <svg className='countdown-svg'>
        <path fill="none" stroke="#333" strokeWidth="4" d={describeArc(50, 50, 48, 0, radius)} />
    </svg>
);

function describeArc(x, y, radius, startAngle, endAngle){

    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);

    var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    var d = [
        "M", start.x, start.y, 
        "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ");

    return d;       
}
// From stackoverflow: https://stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

