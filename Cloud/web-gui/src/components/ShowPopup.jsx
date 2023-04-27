import "../styles/Popupstyles.css";
import { useEffect } from "react";
const MyPopup = ({ closePopup }) => {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return (
    <>
      <div className="modal-wrapper" onClick={closePopup}></div>
      <div className="modal-container">
        <div className="   items-center rounded-lg    p-2 ">
          <div class=" m-6 flex  rounded-lg bg-white px-6 py-6 font-bold text-black ">
            <div className="flex flex-col items-center justify-center">
              Accelerometer
            </div>
            {/* <a onClick={}> */}
            <img id="plus" src="../../src/assets/plus.png" alt="plus" />
            {/* </a> */}
          </div>

          <div class=" m-6 flex  rounded-lg bg-white px-6 py-6 font-bold text-black ">
            <div className="flex flex-col items-center justify-center">Gas</div>
            {/* <a onClick={}> */}
            <img id="plus" src="../../src/assets/plus.png" alt="plus" />
            {/* </a> */}
          </div>
          <div class=" m-6 flex  rounded-lg bg-white px-6 py-6 font-bold text-black ">
            <div className="flex flex-col items-center justify-center">
              Pressure
            </div>
            {/* <a onClick={}> */}
            <img
              id="plus"
              //   className="mb-4 ml-60 h-4 w-4"
              src="../../src/assets/plus.png"
              alt="plus"
            />
            {/* </a> */}
          </div>
          <div class=" m-6 flex  rounded-lg bg-white px-6 py-6 font-bold text-black ">
            <div className="flex flex-col items-center justify-center">
              Temperature
            </div>
            {/* <a onClick={}> */}
            <img id="plus" src="../../src/assets/plus.png" alt="plus" />
            {/* </a> */}
          </div>
          <div class=" m-6 flex  rounded-lg bg-white px-6 py-6 font-bold text-black ">
            <div className="flex flex-col items-center justify-center">
              Ultrasonic
            </div>
            {/* <a onClick={}> */}
            <img id="plus" src="../../src/assets/plus.png" alt="plus" />
            {/* </a> */}
          </div>

          {/* <button
            className="rounded bg-blue-700 px-2 py-2 font-bold text-white hover:bg-blue-700"
            onClick={closePopup}
          >
            Save
          </button> */}
        </div>
      </div>
    </>
  );
};

export default MyPopup;
