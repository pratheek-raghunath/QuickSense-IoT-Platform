import Ds1 from "./Visualization/ds1"
import Ds2 from "./Visualization/ds2"
import Temperature from "./Visualization/Temperature"
import Ultrasonic from "./Visualization/Ultrasonic"
import Accelerometer from "./Visualization/Accelerometer"
import Gas from "./Visualization/Gas"

const Visualization = () => {

    return (
      <div>
        <Ds1 />
        <Ds2 />
        <Temperature />
        <Ultrasonic />
        <Accelerometer />
        <Gas />
      </div>
    );
}

export default Visualization