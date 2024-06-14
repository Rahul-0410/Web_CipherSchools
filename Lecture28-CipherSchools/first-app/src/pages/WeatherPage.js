import WeatherRow from "../components/WeatherRow";
import WeatherSummary from "../components/WeatherSummary";
// 19 min
const WeatherPage= ()=>{
    return(
        <div className="app">
            <h1 className="ui header">Weather</h1>

            <button className="ui icon button" onClick={()=> console.log("Button was clicked")}
                style={{float: "right"}}>°F</button>

            <div>
                <WeatherSummary/>

                <table className="ui very basic table">
                    <thead className=" table-custom">
                    <tr>
                        <th>Date</th>
                        <th>Temperature</th>
                        <th>Type</th>
                    </tr>
                    </thead>

                    <tbody className=" table-custom">
                        <WeatherRow/>
                        <WeatherRow/>
                        <WeatherRow/>
                        <WeatherRow/>
                        <WeatherRow/>
                        <WeatherRow/>
                        <WeatherRow/>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default WeatherPage;