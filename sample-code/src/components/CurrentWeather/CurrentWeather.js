import PropTypes from 'prop-types';
import React, { Component } from 'react';
import LoadingCube from './../PopularLayout/LoadingCube';
import style from "./../../main.css";
import { capitalize } from './../../utils/helpers';

export default class CurrentWeather extends Component {
    static propTypes = {
        isLoading: PropTypes.bool.isRequired,
        currentWeather: PropTypes.object.isRequired,
    }

    getWeatherIcon = () => {
        const { icon } = this.props.currentWeather.weather[0];

        if (icon === '01d') {
            return 'day';
        }
        else if (icon === '01n') {
            return 'night';
        }
        else if (icon === '02d') {
            return 'cloudy';
        }
        else if (icon === '02n') {
            return 'cloudy-n';
        }
        else if (icon === '03d' || icon === '04d') {
            return 'clouds';
        }
        else if (icon === '03n' || icon === '04n') {
            return 'clouds-n';
        }
        else if (icon === '09d' || icon === '10d') {
            return 'rain'
        }
        else if (icon === '09n' || icon === '10n') {
            return 'rain-n'
        }
        else if (icon === '11d') {
            return 'thunderstorm'
        }
        else if (icon === '11n') {
            return 'thunderstorm-n'
        }
        else if (icon === '13d' || icon === '13n') {
            return 'snow'
        }
        else if (icon === '50d' || icon === '50n') {
            return 'mist'
        }
    }

    render() {
        const { isLoading, currentWeather } = this.props;
        return (
            <div className={style.pageContainer}>
                {isLoading ?
                
                <LoadingCube /> :
                
                <div>
                    <h1>{currentWeather.name}</h1>
                    
                    <p>{capitalize(currentWeather.weather[0].description)}</p>
                    
                    <img src={require(`./../../images/${this.getWeatherIcon()}.png`)} />
                    
                    <p className={style.currentTemperature}>{parseInt(currentWeather.main.temp)} &deg;C</p>
                    
                    <p>Humidity: {currentWeather.main.humidity} % &nbsp;&nbsp;|&nbsp;&nbsp; Pressure: {currentWeather.main.pressure} hPa</p>
                </div>}
            </div>
        );
    }
}