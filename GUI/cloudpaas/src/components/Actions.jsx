import { useState, useEffect, useContext } from "react";
import userContext from "../context/userContext";
import "../styles/Actionstyles.css";

const Actions = () => {
  const { socket, user } = useContext(userContext);

  const onBuzzer = () => {
    console.log("buzzer");
    socket.emit(`/${user.user_id}/action/buzzer`, "toggle");
  };

  const onOpenDoor = () => {
    socket.emit(`/${user.user_id}/action/servo`, "toggle");
  };

  return (
    <div>
      <h1 class="mt-9 flex flex-col items-center text-3xl font-bold tracking-tight text-blue-700">
        Actions
      </h1>
      <div className="mx-10 mt-8 grid grid-cols-2 gap-4 rounded-lg border border-gray-200 bg-gray-800 py-10 pl-10">
        <div class="w-58 ml-30 mb-20 mt-20 grid  max-w-xl grid-cols-2 gap-4 rounded-lg border border-gray-200 bg-gray-600 px-10  py-10 shadow dark:border-gray-700 dark:bg-gray-800">
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
            class="  ml-10 h-48 w-48 "
            src="../../src/assets/buzzer.png"
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
        <div class="w-58 mb-20 ml-20 mt-20 grid  max-w-xl grid-cols-2 gap-4 rounded-lg border border-gray-200 bg-gray-600 px-10  py-10 shadow dark:border-gray-700 dark:bg-gray-800">
          <div class="flex w-fit flex-col items-center rounded-lg border border-gray-200 bg-gray-800 px-5 pb-10">
            <button class="mt-16 rounded bg-blue-700 px-20 py-2 font-bold text-white hover:bg-blue-700">
              Terminate
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
            class="  ml-12 h-48 w-48"
            src="../../src/assets/danger.png"
            alt="Danger"
          />
        </div>
      </div>
      <div className="mx-10 mt-8 grid grid-cols-2 gap-4 rounded-lg border border-gray-200 bg-gray-800 py-10 pl-10">
        <div class="w-58 ml-30 mb-20 mt-20 grid  max-w-xl grid-cols-2 gap-4 rounded-lg border border-gray-200 bg-gray-600 px-10  py-10 shadow dark:border-gray-700 dark:bg-gray-800">
          <div class="flex w-fit flex-col items-center rounded-lg border border-gray-200 bg-gray-800 px-5 pb-10">
            <button class="mt-16 rounded bg-blue-700 px-20 py-2 font-bold text-white hover:bg-blue-700">
              Door1
            </button>
            <div class=" mt-10  md:mt-10">
              {/* mt-10 flex space-x-3 md:mt-10 */}
              <a
                onClick={onBuzzer}
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
            class="  ml-10 h-48 w-48"
            src="../../src/assets/doorr.png"
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
        <div class="w-58 mb-20 ml-20 mt-20 grid  max-w-xl grid-cols-2 gap-4 rounded-lg border border-gray-200 bg-gray-600 px-10  py-10 shadow dark:border-gray-700 dark:bg-gray-800">
          <div class="flex w-fit flex-col items-center rounded-lg border border-gray-200 bg-gray-800 px-5 pb-10">
            <button class="mt-16 rounded bg-blue-700 px-20 py-2 font-bold text-white hover:bg-blue-700">
              Door2
            </button>
            <div class=" mt-10  md:mt-10">
              {/* mt-10 flex space-x-3 md:mt-10 */}
              <a
                onClick={onBuzzer}
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
            class="  ml-10 h-48 w-48"
            src="../../src/assets/doorr.png"
            alt="Door2"
          />
        </div>
      </div>
      {/* next section */}
      <div className="mx-10 mb-10 mt-8 grid grid-cols-2 gap-4 rounded-lg border border-gray-200 bg-gray-800 py-10 pl-10">
        <div class="w-58 ml-30 mb-20 mt-20 grid  max-w-xl grid-cols-2 gap-4 rounded-lg border border-gray-200 bg-gray-600 px-10  py-10 shadow dark:border-gray-700 dark:bg-gray-800">
          <div class="flex w-fit flex-col items-center rounded-lg border border-gray-200 bg-gray-800 px-5 pb-10">
            <button class="mt-16 rounded bg-blue-700 px-20 py-2 font-bold text-white hover:bg-blue-700">
              LED1
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
            class="  ml-10 h-48 w-48 "
            src="../../src/assets/ledd.png"
            alt="LED1"
          />
        </div>

        <div class="w-58 mb-20 ml-20 mt-20 grid  max-w-xl grid-cols-2 gap-4 rounded-lg border border-gray-200 bg-gray-600 px-10  py-10 shadow dark:border-gray-700 dark:bg-gray-800">
          <div class="flex w-fit flex-col items-center rounded-lg border border-gray-200 bg-gray-800 px-5 pb-10">
            <button class="mt-16 rounded bg-blue-700 px-20 py-2 font-bold text-white hover:bg-blue-700">
              LED2
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
            class="  ml-10 h-48 w-48 "
            src="../../src/assets/ledd.png"
            alt="LED2"
          />
        </div>
      </div>
    </div>
  );
};

export default Actions;
