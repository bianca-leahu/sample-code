import React, { Component } from 'react';
import CurrentWeather from './../../components/CurrentWeather/CurrentWeather';
import { getCurrentWeather } from './../../api/weatherApi';

export default class CurrentWeatherContainer extends Component {

	constructor (props) {
		super(props);

		this.state = {
            isLoading: true,
            currentWeather: {}
		}
	}

	componentDidMount() {
        navigator.geolocation.getCurrentPosition((position) => {
            
            const latitude = parseInt( position.coords.latitude * 10) / 10,
                longitude = parseInt( position.coords.longitude * 10) / 10;
            
            this.getLocation(latitude, longitude);
        })
	}

    getLocation = async (latitude, longitude) => {
        this.setState({
            isLoading: true
        });
        
        const currentWeather = await getCurrentWeather(latitude, longitude);

        this.setState({
            currentWeather,
            isLoading: false
        })
    }

    render() {
        return (
            <CurrentWeather
                currentWeather={this.state.currentWeather}
                isLoading={this.state.isLoading} />
        );
    }
}
