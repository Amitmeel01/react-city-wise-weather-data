// import React from 'react'

// const API_URL="https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?select=%20name%20AS%20city%2C%20%20%20%20%20cou_name_en%20AS%20country%2C%20%20%20%20%20timezone&limit=99&offset=10&lang=en";

// const City = () => {
//   return (
//     <div className='city'>
//       <div className="cityinput">
//         <input type="text" name='city' placeholder='search your city here..' />
//         <button>search</button>
//       </div>

//       <div className="tables">
//         <div className="table">

//           {/* <table style={{border:"solid"}}>
//             <thead>
//               <tr>
//             <th>City</th>
//             <th>Country</th>
//             <th>TimeZone</th>
//             </tr>
//             </thead>

//             <tbody>
//               <tr>
//                 <td>Delhi</td>
//                 <td>India</td>
//                 <td>india</td>
//               </tr>
//               <tr>
//                 <td>Delhi</td>
//                 <td>India</td>
//                 <td>india</td>
//               </tr>
//             </tbody>
//           </table> */}

        

         


//         </div>
//       </div>
      
//     </div>


//   )
// }

// export default City;

// import React, { useEffect, useState } from 'react';


// // const API_URL = "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?select=%20name%20AS%20city%2C%20%20%20%20%20cou_name_en%20AS%20country%2C%20%20%20%20%20timezone&limit=99&offset=5&lang=en";

// const API_URL="https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?select=%20name%20AS%20city%2C%20%20%20%20%20cou_name_en%20AS%20country%20%2C%20timezone%20AS%20time&group_by=cou_name_en%2Cname%2Ctimezone&limit=1999&offset=9&lang=en";


// //search

// const searchpost=()=>{
//   dispatch({type:"SEARCH_POST"})
// }

// const City = () => {
//   const [cityData, setCityData] = useState([]);

//   const {query}=req.params;

//   const getdata = async () => {
//     try {
//       const response = await fetch(API_URL);
//       const data = await response.json();
//       setCityData(data.results); // Set the results array to the state
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(()=>{
// getdata();
//   },[])

//   return (
//     <div className='city'>
//       <div className="cityinput">
//         <input type="text" name='city' placeholder='search your city here..' value={query} onChange={(e)=>searchpost(e.target.value)} />
//         <button>search</button>
//       </div>

//       <div className="tables">
//         <div className="table">
//           <table style={{ border: "solid" }}>
//             <thead>
//               <tr>
//                 <th>City</th>
//                 <th>Country</th>
//                 <th>TimeZone</th>
//               </tr>
//             </thead>
//             <tbody>
//   {cityData.map((city) => (
//     <tr key={city.city}>
//       <td>{city.city}</td>
//       <td>{city.country ? city.country : city.city}</td>
//       <td>{city.timezone}</td>
//     </tr>
//   ))}
// </tbody>

//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default City;


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const API_URL = "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?select=%20name%20AS%20city%2C%20%20%20%20%20cou_name_en%20AS%20country%20%2C%20timezone%20AS%20time&group_by=cou_name_en%2Cname%2Ctimezone&limit=1999&offset=9&lang=en";

// const City = () => {
//   const [cityData, setCityData] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredCityData, setFilteredCityData] = useState([]);
//   const navigate = useNavigate(); // Get the navigation function

//   const getCityData = async () => {
//     try {
//       const response = await fetch(API_URL);
//       const data = await response.json();
//       setCityData(data.results);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     getCityData();
//   }, []);

//   useEffect(() => {
//     // Filter city data based on search query
//     const filteredData = cityData.filter(city =>
//       city.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       (city.country && city.country.toLowerCase().includes(searchQuery.toLowerCase()))
//     );
//     setFilteredCityData(filteredData);
//   }, [searchQuery, cityData]);

//   return (
//     <div className='city'>
//       <div className="cityinput">
//         <input
//           type="text"
//           name='city'
//           placeholder='Search city or country here..'
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button>search</button>
//       </div>

//       <div className="tables">
//         <div className="table">
//           <table style={{ border: "solid" }}>
//             <thead>
//               <tr>
//                 <th>City</th>
//                 <th>Country</th>
//                 <th>TimeZone</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredCityData.map((city, index) => (
//                 <tr key={index} onClick={() => navigate('/',(e)=>{val:e.target.value})}>
//                   <td>{city.city}</td>
//                   <td>{city.country ? city.country : city.city}</td>
//                   <td>{city.timezone}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default City;


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// const API_URL = "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?select=%20name%20AS%20city%2C%20%20%20%20%20cou_name_en%20AS%20country%20%2C%20timezone%20AS%20time&group_by=cou_name_en%2Cname%2Ctimezone&limit=1999&offset=9&lang=en";

// const City = () => {
//   const [cityData, setCityData] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredCityData, setFilteredCityData] = useState([]);

//   const getCityData = async () => {
//     try {
//       const response = await fetch(API_URL);
//       const data = await response.json();
//       setCityData(data.results);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     getCityData();
//   }, []);

//   useEffect(() => {
//     // Filter city data based on search query
//     const filteredData = cityData.filter(city =>
//       city.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       (city.country && city.country.toLowerCase().includes(searchQuery.toLowerCase()))
//     );
//     setFilteredCityData(filteredData);
//   }, [searchQuery, cityData]);

//   return (
//     <div className='city'>
//       <div className="cityinput">
//         <input
//           type="text"
//           name='city'
//           placeholder='Search city or country here..'
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button>search</button>
//       </div>

//       <div className="tables">
//         <div className="table">
//           <table style={{ border: "solid" }}>
//             <thead>
//               <tr>
//                 <th>City</th>
//                 <th>Country</th>
//                 <th>TimeZone</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredCityData.map((city, index) => (
//                 <tr key={index}>
//                   {/* Use Link component to navigate to WeatherPage */}
//                   <td><Link to={`/`}>{city.city}</Link></td>
//                   <td>{city.country ? city.country : city.city}</td>
//                   <td>{city.timezone}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default City;

// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// const API_URL = "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?select=%20name%20AS%20city%2C%20%20%20%20%20cou_name_en%20AS%20country%20%2C%20timezone%20AS%20time&group_by=cou_name_en%2Cname%2Ctimezone&limit=1999&offset=9&lang=en";
// const City = () => {
//   const [cityData, setCityData] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredCityData, setFilteredCityData] = useState([]);

//   // Fetch city data from API
//   useEffect(() => {
//     const fetchCityData = async () => {
//       try {
//         const response = await fetch(API_URL);
//         const data = await response.json();
//         setCityData(data.results);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };
//     fetchCityData();
//   }, []);

//   // Filter city data based on search query
//   useEffect(() => {
//     const filteredData = cityData.filter(city =>
//       city.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       (city.country && city.country.toLowerCase().includes(searchQuery.toLowerCase()))
//     );
//     setFilteredCityData(filteredData);
//   }, [searchQuery, cityData]);

//   return (
//     <div className='city'>
//       {/* Search input */}
//       <div className="cityinput">
//         <input
//           type="text"
//           name='city'
//           placeholder='Search city or country here..'
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//         />
//         <button>Search</button>
//       </div>

//       {/* City list */}
//       <div className="tables">
//         <div className="table">
//           <table style={{ border: "solid" }}>
//             <thead>
//               <tr>
//                 <th>City</th>
//                 <th>Country</th>
//                 <th>TimeZone</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredCityData.map((city, index) => (
//                 <tr key={index}>
//                   <td>
//                     {/* Link to WeatherPage with city name as parameter */}
//                     <Link to={`/weather/${encodeURIComponent(city.city)}`}>{city.city}</Link>

//                   </td>
//                   <td>{city.country ? city.country : city.city}</td>
//                   <td>{city.timezone}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default City;



import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const API_URL = "https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/geonames-all-cities-with-a-population-1000/records?select=name%20AS%20city%2C%20cou_name_en%20AS%20country%2Ctimezone%20AS%20time&where=cou_name_en%3D%27India%27%20OR%20cou_name_en%3D%27japan%27%20OR%20%20cou_name_en%3D%27USA%27%20&group_by=name%2C%20cou_name_en%2Ctimezone&limit=19899&offset=9";

const City = () => {
  const [cityData, setCityData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCityData, setFilteredCityData] = useState([]);

  // Fetch city data from API
  // Inside the useEffect for fetching city data
// Inside the useEffect for fetching city data
useEffect(() => {
  const fetchCityData = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log('Data:', data); // Log the entire data object
      setCityData(data.results); // Set city data to the array inside 'results'
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  fetchCityData();
}, []);


  // Filter city data based on search query
  useEffect(() => {
    const filteredData = cityData.filter(city =>
      (city.city && city.city.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (city.country && city.country.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    
    setFilteredCityData(filteredData);
  }, [searchQuery, cityData]);

  return (
    <div className='city'>
      {/* Search input */}
      <div className="cityinput">
        <input
          type="text"
          name='city'
          placeholder='Search city or country here..'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button>Search</button>
      </div>

      {/* City list */}
      <div className="tables">
        <div className="table">
          <table style={{ border: "solid" }}>
            <thead>
              <tr>
                <th>City</th>
                <th>Country</th>
                <th>TimeZone</th>
              </tr>
            </thead>
            <tbody>
            {filteredCityData.map((city, index) => (
  <tr key={index}>
    <td>
      {/* Link to WeatherPage with city name as parameter */}
      <Link to={`/weather/${encodeURIComponent(city.city)}`} className='link'>{city.city}</Link>
    </td>
    <td>
      {/* Link to WeatherPage with country name as parameter */}
      <Link to={`/weather/${encodeURIComponent(city.city)}`} className='link'>{city.country ? city.country : city.city}</Link>
    </td>
    <td>
      {/* Link to WeatherPage with timezone as parameter */}
      <Link to={`/weather/${encodeURIComponent(city.city)}`} className='link'>{city.timezone}</Link>
    </td>
  </tr>
))}


            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default City;
