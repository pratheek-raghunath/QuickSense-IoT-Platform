import { useState, useEffect, useContext } from "react";
import socketContext from "../context/socket";

const Action = () => {
  const app_context = useContext(socketContext);
  const socket = app_context.socket
  const user_id = app_context.user_id

  const onBuzzer = () => {
    console.log("buzzer");
    socket.emit(`/${user_id}/action/buzzer`, "toggle");
  };

  const onOpenDoor = () => {
    socket.emit(`/${user_id}/action/servo`, "toggle");
  };

  return (
    <div className="m-20 flex items-center justify-center space-x-12  ">
      <button
        class=" rounded border border-gray-400  bg-white px-4 py-2 font-semibold text-gray-800 shadow transition delay-150  duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white"
        onClick={onBuzzer}
      >
        Buzzer
      </button>
      <button
        class="rounded border border-gray-400  bg-white px-4 py-2 font-semibold text-gray-800 shadow transition delay-150  duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-black hover:text-white"
        onClick={onOpenDoor}
      >
        Open Door
      </button>
    </div>
  );
};

export default Action;
