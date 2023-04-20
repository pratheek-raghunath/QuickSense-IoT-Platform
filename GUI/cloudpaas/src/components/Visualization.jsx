import Temperature from "../components/visualisation/Temperature";
import Ultrasonic from "../components/visualisation/Ultrasonic";

const Visualization = () => {
  return (
    <div>
      <h1 className=" mt-7 flex flex-col items-center text-4xl font-bold text-white">
        Visualization
      </h1>
      <div className="flow-root">
        <div class="float-left">
          <Temperature />
        </div>
        <div class="float-right">
          {/* <Ultrasonic /> */}
          <Temperature />
        </div>
      </div>
      <div className="flow-root">
        <div class="float-left">
          <Temperature />
        </div>
        <div class="float-right">
          <Temperature />
        </div>
      </div>
    </div>
  );
};

export default Visualization;

{
  /* <div className="float-left"></div>
<div>
          <Temperature />
        </div>
      </div>
      <div className="float-left ">
        <div>
          <Temperature />
        </div>
      </div>
</div> */
}
