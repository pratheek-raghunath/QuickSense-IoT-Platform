import Temperature from "./visualisation/Temperature";
import Ultrasonic from "./visualisation/Ultrasonic";
import Accelerometer from "./visualisation/Accelerometer";
import Gas from "./visualisation/Gas";

const Visualization = () => {
  return (
    <div>
      <h1 className=" mt-7 flex flex-col items-center text-4xl font-bold text-white">
        Visualization
      </h1>
      <div className="flow-root ">
        <div class="float-left ml-40">
          <Temperature />
        </div>
        <div class="float-right mr-52">
          <Ultrasonic />
        </div>
      </div>
      <div className="flow-root">
        <div class="float-left ml-40">
          <Accelerometer />
        </div>
        <div class="float-right mr-52">
          <Gas />
        </div>
      </div>
    </div>
  );
};

export default Visualization;
