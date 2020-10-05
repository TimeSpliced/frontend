import React, { useState, useEffect } from "react";
import Button from "./Button";
import axios from "./../../Hooks/axios";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    boxShadow: "0 32px 64px rgba(43,43,82,0.24)",
    border: "none",
  },
};

// https://ci0pz8ou28.execute-api.us-east-1.amazonaws.com/check-email?address=0x2f4cE4f714C68A3fC871d1f543FFC24b9b3c2386
const AddEmail = (props) => {
  const [addr, setAddr] = useState(props.addr);
  const [hasEmail, setHasEmail] = useState(false);
  const [hasChecked, setHasChecked] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [emailPosting, setEmailPosting] = useState("notSent");
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    setEmailPosting("loading");
    async function fetchData() {
      await axios
        .post(`add-email?address=${props.addr}&email=${data.email}`)
        .then(() => {
          setEmailPosting("done");
          setTimeout(() => {
            setHasEmail(true);
            setHasChecked(true);
          }, 3000);
        })
        .catch((err) => {
          if (err) {
            setEmailPosting("error");
          }
        });
    }
    fetchData();
  };

  Modal.setAppElement("#root");
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    console.log(props, addr);
    if (props.addr) {
      async function fetchData() {
        const request = await axios.get(`check-email?address=${props.addr}`);
        console.log("request", request.data);
        setHasEmail(request.data.hasEmail);
        setHasChecked(true);
      }
      fetchData();
    }
  }, [props.addr]);
  return (
    <>
      {!hasEmail && hasChecked && (
        <>
          <p
            className="sans_serif"
            style={{
              fontSize: "0.7rem",
              textAlign: "center",
              marginBottom: "1px",
              marginTop: "20px",
            }}
          >
            Make sure you don't miss a payment, add an email for reminders
          </p>
          <Button tag="a" color="primary" wideMobile onClick={openModal}>
            Add email
          </Button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2>Add your email for updates</h2>
            {emailPosting === "notSent" && (
              <>
                <div>This email will only be used for game updates</div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input name="email" ref={register({ required: true })} />
                  {
                    <p
                      style={{
                        color: "red",
                        fontSize: "0.8rem",
                        marginBottom: "0",
                        height: "30px",
                      }}
                    >
                      {errors.email ? "This field is required" : "  "}
                    </p>
                  }
                  <input
                    className="button button-dark button-wide-mobile button-sm"
                    type="submit"
                  />
                </form>
              </>
            )}
            {emailPosting === "loading" && <p>Saving 💾</p>}
            {emailPosting === "done" && <p>Done!🎉</p>}
            {emailPosting === "error" && (
              <p>
                Sorry there was an error{" "}
                <Button
                  tag="a"
                  color="primary"
                  wideMobile
                  onClick={() => setEmailPosting("notSent")}
                >
                  Try again{" "}
                </Button>
              </p>
            )}
            <button
              className="button button-wide-mobile button-sm"
              onClick={closeModal}
            >
              close
            </button>
          </Modal>
        </>
      )}
    </>
  );
};

export default AddEmail;
