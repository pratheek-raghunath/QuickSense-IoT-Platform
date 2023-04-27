import { useState, useEffect, useContext } from "react";
import userContext from "../context/userContext";

import buzzerImage from "../images/Alerts/Raspberry_Pi_Pico_buzzer.webp";
import alarm from "../images/Alerts/alarm.gif";
import door from "../images/Alerts/door.gif";
import led from "../images/Alerts/led3.gif";

const Actions = () => {
  const { socket, user } = useContext(userContext);

  const onBuzzer = () => {
    console.log("buzzer");
    socket.emit(`/${user.user_id}/action/buzzer`, "toggle");
  };

  const onAlarm = () => {
    console.log("Alarm")
    socket.emit(`/${user.user_id}/action/alarm`, "toggle");
  };

  const onDoor1 = () => {
    console.log("door1");
    socket.emit(`/${user.user_id}/action/servo1`, "toggle");
  };

  const onDoor2 = () => {
    console.log("door2")
    socket.emit(`/${user.user_id}/action/servo2`, "toggle");
  };

  const onLed1 = () => {
    console.log("led1");
    socket.emit(`/${user.user_id}/action/led1`, "toggle");
  };

  const onLed2 = () => {
    console.log("led2")
    socket.emit(`/${user.user_id}/action/led2`, "toggle");
  };

  return (
    <div>
      <h1 class="mt-9 flex flex-col items-center text-4xl font-bold tracking-tight text-white">
        Actions
      </h1>
      <div className="mx-10 mt-8 grid grid-cols-2 gap-4 rounded-lg border border-gray-200 bg-gray-800 py-10 pl-10">
        <div class="w-58 ml-30 mb-20 mt-20 grid  max-w-xl grid-cols-2 gap-4 rounded-lg border  px-10  py-10 shadow border-gray-700 bg-gray-100">
          <div class="flex w-fit flex-col items-center rounded-lg border border-gray-200 bg-gray-800 px-5 pb-10">
            <button class="mt-16 rounded bg-blue-700 px-20 py-2 font-bold text-white hover:bg-blue-700">
              Buzzer
            </button>
            <div class=" mt-10  md:mt-10">
              {/* mt-10 flex space-x-3 md:mt-10 */}
              <a
                onClick={onBuzzer}
                class="mr-2 inline-flex items-center rounded-lg bg-blue-700 px-12 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                // mr-20
              >
                On/Off
              </a>

              {/* <a
                href="#"
                class="ml-20 inline-flex items-center rounded-lg bg-blue-700 px-12 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Off
              </a> */}
            </div>
          </div>
          <img
            class="rounded-xl  ml-10 h-56 w-48 "
            src={buzzerImage}
            alt="Buzzer"
          />
        </div>
        {/* <div class="ml-52 mt-20 w-fit max-w-sm rounded-lg  bg-slate-100 shadow-lg shadow-slate-100 ">
          <div class="flex flex-col items-center ">
            <img
              class=" h-64 w-fit   object-fill  shadow-lg"
              src="../../src/assets/buzzer.png"
              alt="Buzzer"
            />
          </div>
        </div> */}
        <div class="w-58 mb-20 ml-20 mt-20 grid  max-w-xl grid-cols-2 gap-4 rounded-lg border border-gray-200 bg-gray-100 px-10  py-10 shadow dark:border-gray-700 dark:bg-gray-800">
          <div class="flex w-fit flex-col items-center rounded-lg border border-gray-200 bg-gray-800 px-5 pb-10">
            <button class="mt-16 rounded bg-blue-700 px-20 py-2 font-bold text-white hover:bg-blue-700">
              Alarm
            </button>
            <div class=" mt-10  md:mt-10">
              {/* mt-10 flex space-x-3 md:mt-10 */}
              <a
                onClick={onAlarm}
                class="mr-2 inline-flex items-center rounded-lg bg-blue-700 px-12 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                // mr-20
              >
                On/Off
              </a>

              {/* <a
                href="#"
                class="ml-20 inline-flex items-center rounded-lg bg-blue-700 px-12 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Off
              </a> */}
            </div>
          </div>
          <img
            class="  ml-12 h-56 w-48"
            src={alarm}
            alt="Danger"
          />
        </div>
      </div>
      <div className="mx-10 mt-8 grid grid-cols-2 gap-4 rounded-lg border border-gray-200 bg-gray-800 py-10 pl-10">
        <div class="w-58 ml-30 mb-20 mt-20 grid  max-w-xl grid-cols-2 gap-4 rounded-lg border border-gray-200 bg-gray-100 px-10  py-10 shadow dark:border-gray-700 dark:bg-gray-800">
          <div class="flex w-fit flex-col items-center rounded-lg border border-gray-200 bg-gray-800 px-5 pb-10">
            <button class="mt-16 rounded bg-blue-700 px-20 py-2 font-bold text-white hover:bg-blue-700">
              Door1
            </button>
            <div class=" mt-10  md:mt-10">
              {/* mt-10 flex space-x-3 md:mt-10 */}
              <a
                onClick={onDoor1}
                class="mr-2 inline-flex items-center rounded-lg bg-blue-700 px-12 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                // mr-20
              >
                Open/Close
              </a>

              {/* <a
                href="#"
                class="ml-20 inline-flex items-center rounded-lg bg-blue-700 px-12 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Off
              </a> */}
            </div>
          </div>
          <img
            class="  ml-10 h-56 w-48"
            src={door}
            alt="Door1"
          />
        </div>
        {/* <div class="ml-52 mt-20 w-fit max-w-sm rounded-lg  bg-slate-100 shadow-lg shadow-slate-100 ">
          <div class="flex flex-col items-center ">
            <img
              class=" h-64 w-fit   object-fill  shadow-lg"
              src="../../src/assets/buzzer.png"
              alt="Buzzer"
            />
          </div>
        </div> */}
        <div class="w-58 mb-20 ml-20 mt-20 grid  max-w-xl grid-cols-2 gap-4 rounded-lg border border-gray-200 bg-gray-100 px-10  py-10 shadow dark:border-gray-700 dark:bg-gray-800">
          <div class="flex w-fit flex-col items-center rounded-lg border border-gray-200 bg-gray-800 px-5 pb-10">
            <button class="mt-16 rounded bg-blue-700 px-20 py-2 font-bold text-white hover:bg-blue-700">
              Door2
            </button>
            <div class=" mt-10  md:mt-10">
              {/* mt-10 flex space-x-3 md:mt-10 */}
              <a
                onClick={onDoor2}
                class="mr-2 inline-flex items-center rounded-lg bg-blue-700 px-12 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                // mr-20
              >
                Open/Close
              </a>

              {/* <a
                href="#"
                class="ml-20 inline-flex items-center rounded-lg bg-blue-700 px-12 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Off
              </a> */}
            </div>
          </div>
          <img
            class="  ml-10 h-56 w-48"
            src={door}
            alt="Door2"
          />
        </div>
      </div>
      {/* next section */}
      <div className="mx-10 mb-10 mt-8 grid grid-cols-2 gap-4 rounded-lg border border-gray-200 bg-gray-800 py-10 pl-10">
        <div class="w-58 ml-30 mb-20 mt-20 grid  max-w-xl grid-cols-2 gap-4 rounded-lg border border-gray-200 bg-gray-100 px-10  py-10 shadow dark:border-gray-700 dark:bg-gray-800">
          <div class="flex w-fit flex-col items-center rounded-lg border border-gray-200 bg-gray-800 px-5 pb-10">
            <button class="mt-16 rounded bg-blue-700 px-20 py-2 font-bold text-white hover:bg-blue-700">
              LED1
            </button>
            <div class=" mt-10  md:mt-10">
              {/* mt-10 flex space-x-3 md:mt-10 */}
              <a
                onClick={onLed1}
                class="mr-2 inline-flex items-center rounded-lg bg-blue-700 px-12 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                // mr-20
              >
                On/Off
              </a>

              {/* <a
                href="#"
                class="ml-20 inline-flex items-center rounded-lg bg-blue-700 px-12 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Off
              </a> */}
            </div>
          </div>
          <img
            class="  ml-10 h-56 w-48 "
            src={led}
            alt="LED1"
          />
        </div>

        <div class="w-58 mb-20 ml-20 mt-20 grid  max-w-xl grid-cols-2 gap-4 rounded-lg border border-gray-200 bg-gray-100 px-10  py-10 shadow dark:border-gray-700 dark:bg-gray-800">
          <div class="flex w-fit flex-col items-center rounded-lg border border-gray-200 bg-gray-800 px-5 pb-10">
            <button class="mt-16 rounded bg-blue-700 px-20 py-2 font-bold text-white hover:bg-blue-700">
              LED2
            </button>
            <div class=" mt-10  md:mt-10">
              {/* mt-10 flex space-x-3 md:mt-10 */}
              <a
                onClick={onLed2}
                class="mr-2 inline-flex items-center rounded-lg bg-blue-700 px-12 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                // mr-20
              >
                On/Off
              </a>

              {/* <a
                href="#"
                class="ml-20 inline-flex items-center rounded-lg bg-blue-700 px-12 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Off
              </a> */}
            </div>
          </div>
          <img
            class="  ml-10 h-56 w-48 "
            src={led}
            alt="LED2"
          />
        </div>
      </div>
    </div>
  );
};

export default Actions;
