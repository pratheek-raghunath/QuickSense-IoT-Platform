import Ds1 from "./Visualization/ds1"
import Ds2 from "./Visualization/ds2"
import Temperature from "./Visualization/Temperature"
import Ultrasonic from "./Visualization/Ultrasonic"

const Visualization = () => {

    return (
      <div>
        <Ds1 />
        <Ds2 />
        <Temperature />
        <Ultrasonic />
      </div>
    );
}

export default Visualization