import React from "react";

// import "../styles/Alertstyles";

function Alerts() {
  const list = [
    {
      sensor: "alert1",
      message: "alert",
      timestamp: "2023-04-04",
    },
    {
      sensor: "alert1",
      message: "alert",
      timestamp: "2023-04-04",
    },
    {
      sensor: "alert1",
      message: "alert",
      timestamp: "2023-04-04",
    },
    {
      sensor: "alert1",
      message: "alert",
      timestamp: "2023-04-04",
    },
    {
      sensor: "alert1",
      message: "alert",
      timestamp: "2023-04-04",
    },
    {
      sensor: "alert1",
      message: "alert",
      timestamp: "2023-04-04",
    },
  ];

  return (
    <div className=" m-20  flex flex-col items-center     ">
      <h1
        id="alert"
        class="mb-2 block rounded bg-white py-2 pl-3 pr-4 text-2xl font-bold tracking-tight text-white md:bg-transparent md:p-0 md:text-blue-700"
      >
        Alerts in real time
      </h1>
      <ul class="font-normal text-gray-700 dark:text-gray-400">
        {list.map((item) => {
          return (
            <li class="w-[90vw] p-6" key={item.timestamp}>
              <div
                id="container"
                class="rounded-t  border border-b-0 border-black bg-white px-4 py-2 font-semibold text-black"
              >
                {item.sensor}
              </div>
              <div
                id="container"
                class=" flex flex-col rounded-b border border-t-0 border-black  px-4 py-3 text-black"
              >
                <div className="justify-start text-start text-black">
                  {item.sensor}
                </div>

                <div className="items-end justify-end text-start text-black ">
                  {item.timestamp.substr(11, 10)}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Alerts;

// return (
// {
/* <div className="bg-red m-20  flex flex-col items-center rounded-lg border border-gray-200  p-6 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <h1 id="alert" class="mb-2 text-2xl font-bold tracking-tight ">
        Alerts in real time
      </h1>
      <ul class="font-normal text-gray-700 dark:text-gray-400">
        {latestalerts.map((alert) => {
          return (
            <li class="w-[90vw] p-6" key={alert.timestamp}>
              <div
                id="container"
                class="rounded-t  border border-black bg-white px-4 py-2 font-bold text-white"
              >
                {alert.sensor}
              </div>
              <div
                id="container"
                class=" flex flex-col rounded-b border border-t-0 border-black  px-4 py-3 text-black"
              >
                <div className="text-start">{alert.message}</div>

                <div className="items-end justify-end text-start">
                  {alert.timestamp.substr(11, 10)}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
} */
