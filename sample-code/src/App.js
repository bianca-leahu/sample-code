import React from "react";
import ReactDOM from "react-dom";
import PopularContainer from './containers/PopularLayout/PopularContainer';
import CurrentWeatherContainer from './containers/CurrentWeather/CurrentWeatherContainer';
import ReactRouter from 'react-router-dom';
import Router from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route';
import Header from './components/Header/Header';


const App = () => {
  return (
    <Router>
    	<div className='container'>
    		<Header />
    		<Route exact path='/' component={CurrentWeatherContainer} />
    		<Route path='/github-repos' component={PopularContainer} />
    	</div>
    </Router>
  );
};
export default App;

ReactDOM.render(<App />, document.getElementById("app"));