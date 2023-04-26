import React, { useState } from "react";
import MyPopup from "./ShowPopup";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const closePopup = () => setShowPopup(false);

  return (
    <>
      <button onClick={() => setShowPopup(true)} className=" bg-white">
        Add Sensors
      </button>
      {showPopup && <MyPopup closePopup={closePopup} />}
    </>
  );
};

export default Popup;
