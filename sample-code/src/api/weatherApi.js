import axios from 'axios'

export async function getCurrentWeather (latitude, longitude) {
 	const apiUrl = `http://api.openweathermap.org/data/2.5/find?lat=${latitude}&lon=${longitude}&cnt=1&units=metric&APPID=5a9a4b1c84b097a40665b233554d7382`,
	weather = await axios.get(apiUrl)
	    .catch(err => {
	    	console.log(err);
	    });

  return weather.data.list[0]
}