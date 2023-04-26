import { useState, useEffect, useContext } from "react";
import userContext from "../context/userContext";

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
      <div className="grid grid-cols-2 gap-4">
        <div class="ml-52 mt-20 w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
          <div class="flex flex-col items-center pb-10">
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
        </div>
        <div class="ml-52 mt-20 w-fit max-w-sm rounded-lg  bg-slate-100 shadow-lg shadow-slate-100 ">
          <div class="flex flex-col items-center ">
            <img
              class=" h-64 w-fit   object-fill  shadow-lg"
              src="../../src/assets/buzzer.png"
              alt="Buzzer"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div class="ml-52 mt-20 w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
          <div class="flex flex-col items-center pb-10">
            <button class="mt-16 rounded bg-blue-700 px-20 py-2 font-bold text-white hover:bg-blue-700">
              Door 1
            </button>
            <div class=" mt-10 flex space-x-3 md:mt-10">
              <a
                href="#"
                class="mr-2 inline-flex items-center rounded-lg bg-blue-700 px-12 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Open/Close
              </a>
              {/* <a
                href="#"
                class="ml-20 inline-flex items-center rounded-lg bg-blue-700 px-12 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Close
              </a> */}
            </div>
          </div>
        </div>
        <div class="ml-52 mt-20 w-fit max-w-sm rounded-lg  bg-slate-100 shadow-lg shadow-slate-100 ">
          <div class="flex flex-col items-center ">
            <img
              class=" h-64 w-fit  object-fill  shadow-lg"
              src="../../src/assets/doorr.png"
              alt="Buzzer"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div class="ml-52 mt-20 w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
          <div class="flex flex-col items-center pb-10">
            <button class="mt-16 rounded bg-blue-700 px-20 py-2 font-bold text-white hover:bg-blue-700">
              Door 2
            </button>
            <div class=" mt-10 flex space-x-3 md:mt-10">
              <a
                href="#"
                class="mr-2 inline-flex items-center rounded-lg bg-blue-700 px-12 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Open/Close
              </a>
              {/* <a
                href="#"
                class="ml-20 inline-flex items-center rounded-lg bg-blue-700 px-12 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Close
              </a> */}
            </div>
          </div>
        </div>
        <div class="ml-52 mt-20 w-fit max-w-sm rounded-lg  bg-slate-100 shadow-lg shadow-slate-100 ">
          <div class="flex flex-col items-center ">
            <img
              class=" h-64 w-fit  object-fill  shadow-lg"
              src="../../src/assets/doorr.png"
              alt="Buzzer"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div class="ml-52 mt-20 w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
          <div class="flex flex-col items-center pb-10">
            <button class="mt-16 rounded bg-blue-700 px-20 py-2 font-bold text-white hover:bg-blue-700">
              LED 1
            </button>
            <div class=" mt-10 flex space-x-3 md:mt-10">
              <a
                href="#"
                class="mr-2 inline-flex items-center rounded-lg bg-blue-700 px-12 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
        </div>
        <div class="ml-52 mt-20 w-fit max-w-sm rounded-lg  bg-slate-100 shadow-lg shadow-slate-100 ">
          <div class="flex flex-col items-center ">
            <img
              class=" h-64 w-fit  object-fill  shadow-lg"
              src="../../src/assets/ledd.png"
              alt="Buzzer"
            />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div class="ml-52 mt-20 w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
          <div class="flex flex-col items-center pb-10">
            <button class="mt-16 rounded bg-blue-700 px-20 py-2 font-bold text-white hover:bg-blue-700">
              LED 2
            </button>
            <div class=" mt-10 flex space-x-3 md:mt-10">
              <a
                href="#"
                class="mr-2 inline-flex items-center rounded-lg bg-blue-700 px-12 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
        </div>
        <div class="ml-52 mt-20 w-fit max-w-sm rounded-lg  bg-slate-100 shadow-lg shadow-slate-100 ">
          <div class="flex flex-col items-center ">
            <img
              class=" h-64 w-fit  object-fill  shadow-lg"
              src="../../src/assets/ledd.png"
              alt="Buzzer"
            />
          </div>
        </div>
      </div>
      <div className="mb-7 grid grid-cols-2 gap-4">
        <div class="ml-52 mt-20 w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
          <div class="flex flex-col items-center pb-10">
            <button class="mt-16 rounded bg-blue-700 px-20 py-2 font-bold text-white hover:bg-blue-700">
              Terminate
            </button>
            <div class=" mt-10 flex space-x-3 md:mt-10">
              <a
                href="#"
                class="mr-2 inline-flex items-center rounded-lg bg-blue-700 px-12 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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
        </div>
        <div class="ml-52 mt-20 w-fit max-w-sm rounded-lg  bg-slate-100 shadow-lg shadow-slate-100 ">
          <div class="flex flex-col items-center ">
            <img
              class=" h-64 w-fit  object-fill  shadow-lg"
              src="../../src/assets/danger.png"
              alt="Terminate"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actions;
