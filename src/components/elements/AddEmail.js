import React, { useState, useEffect } from "react";
import Button from "./Button";
import axios from "./../../Hooks/axios";
import Modal from "react-modal";
import { useForm } from "react-hook-form";

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
      const request = await axios
        .post(`add-email?address=${"props.addr"}&email=${data.email}`)
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

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
    console.log("opened");
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
          <p>
            Make sure you don't miss a payment, add an email for reminders
            (optional)
          </p>
          <Button tag="a" color="primary" wideMobile onClick={openModal}>
            Add email
          </Button>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            // style={customStyles}
            contentLabel="Example Modal"
          >
            <h2>Add your email for updates</h2>
            <button onClick={closeModal}>close</button>
            {emailPosting === "notSent" && (
              <>
                <div>This email will only be used for game updates</div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input name="email" ref={register({ required: true })} />
                  {errors.email && <span>This field is required</span>}
                  <input type="submit" />
                </form>
              </>
            )}
            {emailPosting === "loading" && <p>Loading</p>}
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
          </Modal>
        </>
      )}
    </>
  );
};

export default AddEmail;
