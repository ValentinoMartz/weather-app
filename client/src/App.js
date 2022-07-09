import "./App.css";
import UilReact from "@iconscout/react-unicons/icons/uil-react";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";

/* max-w-screen-md es la prop que achica el div */
function App() {
  const fetchWeather = async () => {
    const data = await getFormattedWeatherData({ q: "london" });
    console.log(data);
  };
  fetchWeather();
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-600 to-blue-900 h-fit shadow-xl shadow-gray-400">
      <TopButtons />
      <Inputs />

      <TimeAndLocation />
      <TemperatureAndDetails />
      <Forecast title="hourly forecast" />
      <Forecast title="hourly forecast" />
    </div>
  );
}
//537c6d5af2db9db878bb693f9c017cdb
export default App;
