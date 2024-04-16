// import React, { useEffect, useState } from 'react'
// import hot from './assets/hot.jpg'
// import cold from './assets/cold.jpg'
// import Description from './components/Description'
// import { getweatherdata } from './weatherService'
// // import Css from '.App.css'

// const App = () => {
//  const [city,setCity]=useState("delhi");
//   const [weather,setWeather]=useState(null);
//   const [units,setUnits]=useState("metric");
//   const [bg,setBg]=useState(hot);

// useEffect(()=>{
//  const fetchWeatherData=async ()=>{
//   const data=await getweatherdata(city,units);
//   console.log(data);
//   setWeather(data);

//   //dynmic bg

//   const bgtemp=units==="metric"? 21 : 60;
//   if(data.temp<=bgtemp) setBg(cold);
//   else setBg(hot);

//  };
//  fetchWeatherData();
// },[units,city]);

// const handleunits=(e)=>{
//      const btn=e.currentTarget;
//      const currentUnit=btn.innerText.slice(1)
     
//      const isCelsius=currentUnit==='C';
//      btn.innerText=isCelsius ? '°F' : '°C'
//      setUnits(isCelsius ? 'metric' : 'imperial')
// }

// const enterkey = (e) => {

//   if (e.keyCode === 13) {
//     const newCity = e.target.value;
//     console.log("New city entered:", newCity);
//     setCity(newCity);
//     e.target.value = ''; // Clear the input field after pressing Enter
//     e.target.blur(); // Remove focus from the input field after pressing Enter
//   }
// };



//   return (
//     <div className='app' style={{ backgroundImage:`url(${bg})`, backgroundRepeat:"no-repeat", width:"100vw"}}>

//       <div className="overlay">
//         {
//           weather && (

          
//         <div className="container">
//           <div className="section inputs">
//           <input onKeyDown={enterkey} type="text" name='city' placeholder='enter city name'/>
//             <button onClick={(e)=>handleunits(e)}>&#176;F</button>
//           </div>

//          <div className="section temp">
//           <div className="icons">
//             <h3>{`${weather.name},${weather.country}`}</h3>
//             <img src={weather.iconUrl} alt=""/>
//             <h3>{weather.description}</h3>
//           </div>
//           <div className="temprature">
//           <h1>{`${weather.temp.toFixed()}°${units==="metric"?"C":"F"}`}</h1>

//           </div>
//          </div>

//          {/* Description */}

//          <Description weather={weather} units={units}/>

//         </div>
//         )}

//       </div>

//     </div>
//   );
// }

// export default App

// import React, { useState } from 'react';
// import hot from './assets/hot.jpg';
// import cold from './assets/cold.jpg';
// import WeatherPage from './components/WeatherPage';
// import {Route,Routes,BrowserRouter} from 'react-router-dom';
// import City from './City.jsx';

// const App = () => {
//   const [bg, setBg] = useState(hot); // Default background

//   console.log("Background:", bg); // Log background state

//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path='/' 

//     element={<div className='app' style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", width: "100vw" }}>
//       <div className="overlay">
//         <WeatherPage setBg={setBg} />
//       </div>
//     </div> }
//     />
//     <Route path='/city' element={
//     <div>
//        <City/>
//     </div>}/>
//     </Routes>
//     </BrowserRouter>
//   );
// }


// export default App;


// import React, { useState } from 'react';
// import hot from './assets/hot.jpg';
// import cold from './assets/cold.jpg';
// import WeatherPage from './components/WeatherPage';
// import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import City from './City.jsx';

// const App = () => {
//   const [bg, setBg] = useState(hot);

//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* Home route */}
//         <Route path='/' element={<div><h1>hello, welcome to this page</h1></div>} />
        
//         {/* Route to City component */}
//         <Route path='/city' element={<City />} />
        
//         {/* Route to WeatherPage with city name parameter */}
//         <Route path='/weather/:cityName' element={<WeatherPage setBg={setBg} />} />
        
//         {/* Default route */}
//         <Route path='*' element={<WeatherPage setBg={setBg}/>} />

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;




// import React, { useState } from 'react';
// import hot from './assets/hot.jpg';
// import cold from './assets/cold.jpg';
// import WeatherPage from './components/WeatherPage';
// import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import City from './City.jsx';

// const App = () => {
//   const [bg, setBg] = useState(hot); // Default background

//   return (
//     <BrowserRouter >
//       <Routes>
//         <Route path='/weather/:cityName' element={
//           <div className='app' style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", width: "100vw" }}>
//             <div className="overlay">
//               <WeatherPage setBg={setBg} />
//             </div>
//           </div>
//         } />
//         <Route path='/' element={
//           <div>
//             <City />
//           </div>
//         } />
//         {/* <Route path='/weather/:cityName' element={<WeatherPage setBg={setBg} />} /> */}

//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// import React, { useState } from 'react';
// import hot from './assets/hot.jpg';
// import cold from './assets/cold.jpg';
// import WeatherPage from './components/WeatherPage';
// import { Route, Routes, BrowserRouter } from 'react-router-dom';
// import City from './City.jsx';

// const App = () => {
//   const [bg, setBg] = useState(hot); // Default background

//   return (
//     <BrowserRouter >
//       <Routes>
//         <Route path="weather/:cityName" element={(
//           <div className='app' style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", width: "100vw" }}>
//             <div className="overlay">
//               <WeatherPage setBg={setBg} />
//             </div>
//           </div>
//         )} />
//         <Route path="/" element={(
//           <div>
//             <City />
//           </div>
//         )} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


import React, { useState } from 'react';
import hot from './assets/hot.jpg';
import cold from './assets/cold.jpg';
import WeatherPage from './components/WeatherPage';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import City from './City.jsx';

const App = () => {
  const [bg, setBg] = useState(hot); // Default background

  return (
    <BrowserRouter basename={process.env.NODE_ENV === 'production' ? '/react-city-wise-weather-data' : '/'}>
      <Routes>
        <Route path="weather/:cityName" element={(
          <div className='app' style={{ backgroundImage: `url(${bg})`, backgroundRepeat: "no-repeat", width: "100vw" }}>
            <div className="overlay">
              <WeatherPage setBg={setBg} />
            </div>
          </div>
        )} />
        <Route path="/" element={(
          <div>
            <City />
          </div>
        )} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
