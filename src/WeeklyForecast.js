import './App.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FreeMode, Parallax } from 'swiper/modules'
import 'swiper/css/free-mode';
import "swiper/css/parallax"
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
// import Seventeen from './hourModules/Seventeen'
import WeeklyHourForecast from './WeeklyHourForecast';



let latitude = 0 
let longitude = 0 

let localTimeVarInt
let getBlockDisplay
let blockIDEx
let removeBlock




export default ( { currentBg, futureBg }) => {
    const [showBlock1, setShowBlock1] = useState(false);
    const [showBlock2, setShowBlock2] = useState(false);



    const handleBlock1Click = () => {
        if(document.getElementById("block2")) {
            setShowBlock2(!showBlock2)
            setShowBlock1(!showBlock1)
            blockIDEx = "block1"
            removeBlock = document.getElementById("block2")
            removeBlock.parentNode.removeChild(removeBlock)
        } else {
            setShowBlock1(!showBlock1)
            blockIDEx = "block1"
        }
      };

      const handleBlock2Click = () => {
        if(document.getElementById("block1")) {
            setShowBlock1(!showBlock1)
            setShowBlock2(!showBlock2)
            blockIDEx = "block2"
            removeBlock = document.getElementById("block1")
            removeBlock.parentNode.removeChild(removeBlock)
        } else {
            setShowBlock2(!showBlock2)
            blockIDEx = "block2"
        }
      };
    console.log(currentBg)

    const getLocation = () => {

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(success, error, options);
        } else {
          console.log("Geolocation not supported");
        }
        
        function success(position) {
          latitude = position.coords.latitude;
          longitude = position.coords.longitude;
          fetchForecast()
        }
    
        function error(error) {
          console.error(`Error: ${error.message}`);
              switch (error.code) {
                  case error.PERMISSION_DENIED:
                      alert('User denied the request for Geolocation.');
                      break;
                  case error.POSITION_UNAVAILABLE:
                      alert('Location information is unavailable.');
                      break;
                  case error.TIMEOUT:
                      alert('The request to get user location timed out.');
                      break;
                  case error.UNKNOWN_ERROR:
                      alert('An unknown error occurred.');
                      break;
        }
      }
    
        function options(options) {
          alert(options)
        }
    } 
    
    const [weatherForecast, setWeatherForecast] = useState(null)
    
    const fetchForecast = async () => {
        try {
          const responseIP = await axios.get(
            `https://api.weatherapi.com/v1/ip.json?key=a81b4414f60f4c868a8162028241702&q=auto:ip`
          );
            const responseForecast = await axios.get(
                `https://api.weatherapi.com/v1/forecast.json?key=a81b4414f60f4c868a8162028241702&q=${latitude},${longitude}&lang=ru&days=10`
            )
            setWeatherForecast(responseForecast.data)
            console.log(responseForecast.data)
            localTimeVarInt = parseInt(responseForecast.data.location.localtime.slice(11,13))
        } catch (error) {
            console.log(error)
        }
    }



    useEffect(() => {

        if(latitude != 0 ) {
            fetchForecast()
          }
          else {
            getLocation()
      
          }
    }, []);
    
    
    
    return(
        <div className = "upper-layer-Slider-Weekly">
        {weatherForecast ? (
            <>
                <Swiper
                    // install Swiper modules
                    modules={[ FreeMode]}
                    spaceBetween={1}
                    slidesPerView={3}
                    // autoplay={{delay:2000}}
                    freeMode={{ enabled: true, minimumVelocity: 0.1, momentumBounce:false }}
                    >
                    <SwiperSlide>
                        <div className='sliderComponent-Weekly'
                            style={currentBg!="null" ? {backgroundColor:currentBg} : {backgroundColor:"#fff"}}
                        >
                            <p>{weatherForecast.forecast.forecastday[0].date.slice(8,10)}</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].day.condition.icon}></img>
                            <p className='minmaxTemp'>
                                {weatherForecast.forecast.forecastday[0].day.maxtemp_c}°
                                <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 1L1 5M5 1L9 5M5 1V15.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </p>
                            <p className='minmaxTemp'>
                                {weatherForecast.forecast.forecastday[0].day.mintemp_c}°
                                <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 15.4L9 11.4M5 15.4L1 11.4M5 15.4L5 1.00003" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='sliderComponent-Weekly'
                            id='first-sliderComponent-Weekly'
                            style={currentBg!="null" ? {backgroundColor:futureBg} : {backgroundColor:"#fff"}}
                            onClick={handleBlock1Click}
                        >
                            <p>{weatherForecast.forecast.forecastday[1].date.slice(8,10)}</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].day.condition.icon}></img>
                            <p className='minmaxTemp'>
                                {weatherForecast.forecast.forecastday[1].day.maxtemp_c}°
                                <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 1L1 5M5 1L9 5M5 1V15.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </p>
                            <p className='minmaxTemp'>
                                {weatherForecast.forecast.forecastday[1].day.mintemp_c}°
                                <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 15.4L9 11.4M5 15.4L1 11.4M5 15.4L5 1.00003" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='sliderComponent-Weekly'
                            id='second-sliderComponent-Weekly'
                            style={currentBg!="null" ? {backgroundColor:futureBg} : {backgroundColor:"#fff"}}
                            onClick={handleBlock2Click}
                        >
                            <p>{weatherForecast.forecast.forecastday[2].date.slice(8,10)}</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].day.condition.icon}></img>
                            <p className='minmaxTemp'>
                                {weatherForecast.forecast.forecastday[2].day.maxtemp_c}°
                                <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 1L1 5M5 1L9 5M5 1V15.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </p>
                            <p className='minmaxTemp'>
                                {weatherForecast.forecast.forecastday[2].day.mintemp_c}°
                                <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 15.4L9 11.4M5 15.4L1 11.4M5 15.4L5 1.00003" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>

                    </SwiperSlide>
                </Swiper>
                {/* TOMORROW */}
                {showBlock1 && (
                        <div
                        className="block2"
                        style={{ animation: 'fadeIn 0.3s' }}
                        >
                            <WeeklyHourForecast 
                                futureBg={futureBg}
                                dayVar={1}
                                blockID={blockIDEx}
                            />
                        </div>
                    )}
                    {showBlock1 && (
                        <div
                        className="block2"
                        style={{
                            animation: 'fadeOut 0.3s',
                            display: 'none',
                        }}
                        >
                            <WeeklyHourForecast 
                                futureBg={futureBg}
                                dayVar={1}
                                blockID={blockIDEx}
                            />
                        </div>
                    )}

                {/* DAY AFTER TOMORROW */}
                {showBlock2 && (
                        <div
                        className="block2"
                        style={{ animation: 'fadeIn 0.3s' }}
                        >
                            <WeeklyHourForecast 
                                futureBg={futureBg}
                                dayVar={2}
                                blockID={blockIDEx}
                            />
                        </div>
                    )}
                    {showBlock2 && (
                        <div
                        className="block2"
                        style={{
                            animation: 'fadeOut 0.3s',
                            display: 'none',
                        }}
                        >
                            <WeeklyHourForecast 
                                futureBg={futureBg}
                                dayVar={2}
                                blockID={blockIDEx}
                            />
                        </div>
                    )}
            </> 
        ) : (
            <div></div>
        )}
        </div>

)
}