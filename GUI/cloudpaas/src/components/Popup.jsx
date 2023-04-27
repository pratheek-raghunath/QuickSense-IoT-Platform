import React, { useState } from "react";
import MyPopup from "./ShowPopup";

const Popup = () => {
  const [showPopup, setShowPopup] = useState(false);
  const closePopup = () => setShowPopup(false);

  return (
    <>
      <button
        // id="model-btn"
        onClick={() => setShowPopup(true)}
        className=" float-right mr-5 mt-16 rounded bg-blue-700 px-2 py-2 font-bold text-white hover:bg-blue-700"
      >
        Add Sensors
      </button>
      <div className="   items-center rounded-lg    p-40 ">
        <div class="m-8 flex justify-between rounded-lg bg-gray-800 px-10 py-6 font-bold text-white">
          <div>Pressure</div>
          <div className="mr-7 text-right text-green-500">
            Running
            <div class="col-3">
              <div class="snippet" data-title="dot-windmill">
                <div class="stage">
                  <div class="dot-windmill"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="m-8 flex justify-between rounded-lg bg-gray-800 px-10 py-6 font-bold text-white">
          <div>Gas</div>
          <div className=" mr-7 text-right text-green-500">
            Running
            <div class="col-3">
              <div class="snippet" data-title="dot-windmill">
                <div class="stage">
                  <div class="dot-windmill"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="m-8 flex justify-between rounded-lg bg-gray-800 px-10 py-6 font-bold text-white">
          <div>Temperature</div>
          <div className=" mr-7 text-right text-green-500">
            Running
            <div class="col-3">
              <div class="snippet" data-title="dot-windmill">
                <div class="stage">
                  <div class="dot-windmill"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="m-8 flex justify-between rounded-lg bg-gray-800 px-10 py-6 font-bold text-white">
          <div>IR</div>
          <div className=" mr-7 text-right text-green-500">
            Running
            <div class="col-3">
              <div class="snippet" data-title="dot-windmill">
                <div class="stage">
                  <div class="dot-windmill"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="m-8 flex justify-between rounded-lg bg-gray-800 px-10 py-6 font-bold text-white">
          <div>Accelerometer</div>
          <div className=" mr-7 text-right   text-green-500">
            Running
            <div class="col-3">
              <div class="snippet" data-title="dot-windmill">
                <div class="stage">
                  <div class="dot-windmill"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="m-8 flex justify-between rounded-lg bg-gray-800 px-10 py-6 font-bold text-white">
          <div>Ultrasonic</div>
          <div className=" mr-7 text-right text-green-500">
            Running
            <div class="col-3">
              <div class="snippet" data-title="dot-windmill">
                <div class="stage">
                  <div class="dot-windmill"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showPopup && <MyPopup closePopup={closePopup} />}
    </>
  );
};

export default Popup;
