import React from "react";
import Modal from "./Modal";
import Button from "./Button";

export default (props) => (
  <Modal show={props.show} handleClose={props.close}>
    <h3>
      Success{" "}
      <span role="img" aria-label="celebrate">
        🎉
      </span>
    </h3>
    <Button color="primary" onClick={props.close}>
      Close
    </Button>
  </Modal>
);
