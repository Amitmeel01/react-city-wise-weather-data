// import React from 'react'
// import './Description.css'
// import { FaArrowDown,FaArrowUp,FaWind } from 'react-icons/fa';
// import {BiHappy} from "react-icons/bi";
// import {MdCompress,MdOutlineWaterDrop} from 'react-icons/md';

// const Description = ({weather,units}) => {

//   const tempUnit=units==="metric" ? '°C' : '°F'
//   const windUnit=units==="metric" ? 'm/s': 'm/h'

//   const cards=[
//     {
//       id:1,
//       icon:<FaArrowDown/>,
//       title:"min",
//       data:weather.temp_min.toFixed(),
//       unit:tempUnit,
//     },
//     {
//       id:2,
//       icon:<FaArrowUp/>,
//       title:"max",
//       data:weather.temp_max.toFixed(),
//       unit:tempUnit,
//     },
//     {
//       id:3,
//       icon:<BiHappy/>,
//       title:"feels like",
//       data:weather.feels_like.toFixed(),
//       unit:tempUnit,
//     },
//     {
//       id:4,
//       icon:<MdCompress/>,
//       title:"pressure",
//       data:weather.pressure.toFixed(),
//       unit:'hPa',
//     },
//     {
//       id:5,
//       icon:<MdOutlineWaterDrop/>,
//       title:"humidity",
//       data:weather.humidity,
//       unit:'%',
//     },
//     {
//       id:6,
//       icon:<FaWind/>,
//       title:"wind speed",
//       data:weather.speed.toFixed(),
//       unit:windUnit,
//     },
//   ];

//   return (
//       <div className="section desc">

//       {cards.map(({id,icon,title,data,unit})=>(
//  <div className="card" key={id}>
//  <div className="card-icon">
//    {icon}
//    <small>{title}</small>
//  </div>
//  <h2>{`${data} ${unit}`}</h2>
// </div>
//       ))};
       
//       </div>
//   )
// }

// export default Description


import React from 'react';
import { FaArrowDown, FaArrowUp, FaWind } from 'react-icons/fa';
import { BiHappy } from 'react-icons/bi';
import { MdCompress, MdOutlineWaterDrop } from 'react-icons/md';
import './Description.css';

const Description = ({ weather, units }) => {
  // Error handling: If weather data is not available, return null
  if (!weather) {
    return null;
  }

  const tempUnit = units === 'metric' ? '°C' : '°F';
  const windUnit = units === 'metric' ? 'm/s' : 'm/h';
  const pressureUnit = 'hPa';
  const humidityUnit = '%';

  const cards = [
    {
      id: 1,
      icon: <FaArrowDown />,
      title: 'Min',
      data: weather.temp_min.toFixed(),
      unit: tempUnit,
    },
    {
      id: 2,
      icon: <FaArrowUp />,
      title: 'Max',
      data: weather.temp_max.toFixed(),
      unit: tempUnit,
    },
    {
      id: 3,
      icon: <BiHappy />,
      title: 'Feels Like',
      data: weather.feels_like.toFixed(),
      unit: tempUnit,
    },
    {
      id: 4,
      icon: <MdCompress />,
      title: 'Pressure',
      data: weather.pressure.toFixed(),
      unit: pressureUnit,
    },
    {
      id: 5,
      icon: <MdOutlineWaterDrop />,
      title: 'Humidity',
      data: weather.humidity,
      unit: humidityUnit,
    },
    {
      id: 6,
      icon: <FaWind />,
      title: 'Wind Speed',
      data: weather.speed.toFixed(),
      unit: windUnit,
    },
  ];

  return (
    <div className="section desc">
      {cards.map(({ id, icon, title, data, unit }) => (
        <div className="card" key={id}>
          <div className="card-icon">
            {icon}
            <small>{title}</small>
          </div>
          <h2>{`${data} ${unit}`}</h2>
        </div>
      ))}
    </div>
  );
};

export default Description;
