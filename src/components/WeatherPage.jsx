// import React, { useEffect, useState } from 'react';
// import cold from '../assets/cold.jpg';
// import hot from '../assets/hot.jpg';
// import { getweatherdata } from '../weatherService'
// import Description from './Description';

// const WeatherPage = () => {
//   const [city, setCity] = useState("delhi");
//   const [weather, setWeather] = useState(null);
//   const [units, setUnits] = useState("metric");
//   const [bg, setBg] = useState(cold);

//   useEffect(() => {
//     const fetchWeatherData = async () => {
//       const data = await getweatherdata(city, units);
//       setWeather(data);

//       // Dynamic background
//       const bgtemp = units === "metric" ? 21 : 60;
//       setBg(data.temp <= bgtemp ? cold : hot);
//     };

//     fetchWeatherData();
//   }, [units, city]);

//   const handleUnits = () => {
//     setUnits(units === 'metric' ? 'imperial' : 'metric');
//   }

//   const enterKey = (e) => {
//     if (e.keyCode === 13) {
//       setCity(e.target.value);
//       e.target.value = ''; // Clear the input field after pressing Enter
//       e.target.blur(); // Remove focus from the input field after pressing Enter
//     }
//   };

//   return (
//     <div className="container">
//       <div className="section inputs">
//         <input onKeyDown={enterKey} type="text" name='city' placeholder='Enter city name' />
//         <button onClick={handleUnits}>&#176;F</button>
//       </div>
//       {weather && (
//         <div className="section temp">
//           <div className="icons">
//             <h3>{`${weather.name}, ${weather.country}`}</h3>
//             <img src={weather.iconUrl} alt="" />
//             <h3>{weather.description}</h3>
//           </div>
//           <div className="temperature">
//             <h1>{`${weather.temp.toFixed()}°${units === "metric" ? "C" : "F"}`}</h1>
//           </div>
//         </div>
//       )}
//       <Description weather={weather} units={units} />
//     </div>
//   );
// }

// export default WeatherPage;


// import React, { useEffect, useState } from 'react';
// import cold from '../assets/cold.jpg';
// import hot from '../assets/hot.jpg';
// import { getweatherdata } from '../weatherService'
// import Description from './Description';

// const WeatherPage = () => {
//   const [city, setCity] = useState("delhi");
//   const [weather, setWeather] = useState(null);
//   const [units, setUnits] = useState("metric");
//   const [bg, setBg] = useState(cold);

//   useEffect(() => {
//     const fetchWeatherData = async () => {
//       const data = await getweatherdata(city, units);
//       setWeather(data);

//       // Dynamic background
//       const bgtemp = units === "metric" ? 21 : 60;
//       setBg(data.temp <= bgtemp ? cold : hot);
//     };

//     fetchWeatherData();
//   }, [units, city]);

//   const handleUnits = () => {
//     setUnits(units === 'metric' ? 'imperial' : 'metric');
//   }

//   const enterKey = (e) => {
//     if (e.keyCode === 13) {
//       setCity(e.target.value);
//       e.target.value = ''; // Clear the input field after pressing Enter
//       e.target.blur(); // Remove focus from the input field after pressing Enter
//     }
//   };

//   return (
//     <div className="container">
//       <div className="section inputs">
//         <input onKeyDown={enterKey} type="text" name='city' placeholder='Enter city name' />
//         <button onClick={handleUnits}>&#176;F</button>
//       </div>
//       {weather && (
//         <div className="section temp">
//           <div className="icons">
//             <h3>{`${weather.name}, ${weather.country}`}</h3>
//             <img src={weather.iconUrl} alt="" />
//             <h3>{weather.description}</h3>
//           </div>
//           <div className="temperature">
//             <h1>{`${weather.temp.toFixed()}°${units === "metric" ? "C" : "F"}`}</h1>
//           </div>
//         </div>
//       )}
//       <Description weather={weather} units={units} />
//     </div>
//   );
// }

// export default WeatherPage;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import cold from '../assets/cold.jpg';
import hot from '../assets/hot.jpg';
import { getweatherdata } from '../weatherService';
import Description from './Description';


const WeatherPage = ({ setBg }) => {
  const { cityName } = useParams();
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  const [inputValue, setInputValue] = useState(cityName);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getweatherdata(cityName, units);
      setWeather(data);
      const bgtemp = units === "metric" ? 21 : 70;
      setBg(data.temp <= bgtemp ? cold : hot);
    };

    fetchWeatherData();
  }, [cityName, units, setBg]);

  const handleUnits = () => {
    setUnits(units === 'metric' ? 'imperial' : 'metric');
  };

  const enterKey = (e) => {
    if (e.keyCode === 13) {
      // Handle submit when pressing enter in input
    }
  };

  return (
    <div className="container">
      <div className="section inputs">
        {/* Input for city name */}
        <input onKeyDown={enterKey} type="text" name='city' placeholder='Enter city name' value={inputValue} />
        {/* Button to toggle units */}
        <button onClick={handleUnits}>&#176;F</button>
      </div>
      {/* Weather information */}
      {weather && (
        <div className="section temp">
          {/* Weather icons and description */}
          <div className="icons">
            <h3>{`${weather.name}, ${weather.country}`}</h3>
            <img src={weather.iconUrl} alt="" />
            <h3>{weather.description}</h3>
          </div>
          {/* Temperature */}
          <div className="temperature">
            <h1>{`${weather.temp.toFixed()}°${units === "metric" ? "C" : "F"}`}</h1>
          </div>
        </div>
      )}
      {/* Additional weather details */}
      <Description weather={weather} units={units} />
    </div>
  );
};

export default WeatherPage;
