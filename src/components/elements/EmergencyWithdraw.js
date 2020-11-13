import React from "react";
import Button from "./Button";
import Loading from "./../../assets/loading.svg";
export default (props) => {
  return (
    <div style={{ padding: "10px" }}>
      <Button tag="a" color="dark" wideMobile onClick={props.emergencyWithdraw}>
        {props.loadingState.emergencyWithdraw ? (
          <>
            Withdraw funds early*
            <img
              src={Loading}
              alt="loading"
              className="loading-img-button"
              style={{ width: "28px", paddingLeft: "10px" }}
            />
          </>
        ) : (
          "Withdraw funds early*"
        )}
      </Button>
      <p> * You will lose your slice of the interest.</p>
    </div>
  );
};
