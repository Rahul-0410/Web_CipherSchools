import {useEffect} from "react"
import WeatherRow from "../components/WeatherRow";
import WeatherSummary from "../components/WeatherSummary";
import getWeather from "../api/weatherApi";
//  53 min
const fetchCoordinates = (callback) => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
        callback(latitude,longitude);
        // console.log(latitude, longitude);
    }, (err) => {
        console.error(err);
    }
    );
};



const WeatherPage = () => {

    const isDay = true;

    useEffect(()=>{
        fetchCoordinates( async(latitude,longitude)=>{
            // console.log(latitude,longitude);
           const WeatherInfo= await getWeather({latitude,longitude})
           console.log(WeatherInfo);
        })
    },[])

    return (
        <div className={isDay ? "app" : "app dark"}>
            <h1 className="my-heading">Weather</h1>

            <button className="ui icon button" onClick={() => console.log("Button was clicked")}
                style={{ float: "right" }}>°F</button>

            <div>
                <WeatherSummary />

                <table className={`ui very basic table ${!isDay ? "dark" : ""}`} >
                    <thead className={`table-custom ${!isDay ? "dark" : ""}`}>
                        <tr>
                            <th>Date</th>
                            <th>Temperature</th>
                            <th>Type</th>
                        </tr>
                    </thead>

                    <tbody className=" table-custom">
                        <WeatherRow />
                        <WeatherRow />
                        <WeatherRow />
                        <WeatherRow />
                        <WeatherRow />
                        <WeatherRow />
                        <WeatherRow />
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default WeatherPage;