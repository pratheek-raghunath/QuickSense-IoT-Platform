import { useContext, useState, useEffect } from "react";
import userContext from "../context/userContext";

const Temperature = () => {
    const { socket, user } = useContext(userContext);

    const [temperatureData, setTemperatureData] = useState([]);

    console.log(temperatureData)

    // move this to a Utility function
    const modifiedTemp = temperatureData.map((cur) => {
        return {
            temperature: cur.temperature,
            timestamp: new Date(cur.timestamp),
        };
    });

    useEffect(() => {
        function onTemperatureData(value) {
            let data = JSON.parse(value);
            setTemperatureData((previous) => [
                ...previous,
                {
                    temperature: data.data.temperature,
                    timestamp: data.timestamp,
                },
            ]);
        }

        //Same as sensor fields in MQTT data
        socket.on(`/${user.user_id}/data_stream/temperature`, onTemperatureData);

        return () => {
            socket.off(`/${user.user_id}/data_stream/temperature`, onTemperatureData);
        };
    }, []);

    return (
        <p class="text-sm font-light  text-gray-400">
            Temperature
        </p>
    )
}

export default Temperature