import React from "react";
import dayjs from "dayjs";

const Schedule = (props) => {
  const numberOfPayableRounds = parseInt(props.gameInfo.lastSegment);
  const numberOfRounds = numberOfPayableRounds + 1;
  const roundsLengthsSecs = props.gameInfo.segmentLengthInSecs;
  const arr = new Array(numberOfRounds);
  const segments = Array.apply(null, arr).map(function (x, i) {
    return {
      round: i + 1,
      dateData: props.gameInfo.firstSegmentEnd.add(
        (i - 1) * roundsLengthsSecs,
        "second"
      ),
    };
  });
  const circleStyle = {
    width: "20px",
    height: "20px",
    backgroundColor: "#8E79FC",
    display: "inline-block",
    borderRadius: "50px",
    position: "relative",
    top: "5px",
  };

  const lineStyle = {
    position: "absolute",
    height: "50px",
    display: "inline-block",
    width: "2px",
    backgroundColor: "#8E79FC",
    top: "18px",
    left: "9px",
  };
  return (
    <div>
      <h3>Schedule</h3>
      Each round lasts {roundsLengthsSecs} seconds
      {/* {console.log(i)} */}
      <div className="timeline">
        {segments.map((i) => (
          <div key={i.round}>
            {i.round <= numberOfPayableRounds && (
              <p className="round">
                <span>Round {i.round} ends </span>
                <span className="round-circle" style={circleStyle}>
                  <span className="round-line" style={lineStyle} />
                </span>
                <span style={{ fontWeight: "900" }}>
                  {i.dateData.format("HH:mm ddd D MMM")}{" "}
                </span>
              </p>
            )}
            {i.round > numberOfPayableRounds && (
              <p className="round">
                {/* <span role="img" aria-label="cashout">
                  🤑
                </span>{" "} */}
                Cashout from{" "}
                <span className="round-circle final" style={circleStyle} />
                <span style={{ fontWeight: "900" }}>
                  {i.dateData.format("HH:mm ddd D MMM")}{" "}
                </span>
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Schedule;
