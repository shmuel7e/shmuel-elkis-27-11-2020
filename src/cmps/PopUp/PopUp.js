import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PopUp = ({
  isPopped,
  isAdded,
  isRemoved,
  killPopUp,
  killremovedPop,
  killAddedPop,
}) => {
  const notify = () =>
    toast.error(
      "Access to XMLHttpRequest has been blocked by Cors policy, Please check your key..",
      {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );

  const notifyAdded = () =>
    toast.dark("Added to favorites!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifyRemoved = () =>
    toast("Removed from favorites !", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  useEffect(() => {
    if (isPopped) notify();
    killPopUp();
  }, [isPopped, killPopUp]);

  useEffect(() => {
    if (isAdded) notifyAdded();
    killAddedPop();
  }, [isAdded, killAddedPop]);

  useEffect(() => {
    if (isRemoved) notifyRemoved();
    killremovedPop();
  }, [isRemoved, killremovedPop]);

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default PopUp;
