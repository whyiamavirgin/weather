import './App.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FreeMode, Parallax } from 'swiper/modules'
import 'swiper/css/free-mode';
import "swiper/css/parallax"
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
// import Seventeen from './hourModules/Seventeen'



let latitude = 0 
let longitude = 0 

let localTimeVarInt
let setHour = 0



export default ( { currentBg, futureBg, dayVar, blockID }) => {
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
        <div className = "upper-layer-Slider" id={blockID}>
        {weatherForecast ? (
                
                <Swiper
                    // install Swiper modules
                    modules={[ FreeMode]}
                    spaceBetween={1}
                    slidesPerView={4}
                    // autoplay={{delay:2000}}
                    freeMode={{ enabled: true, minimumVelocity: 0.1, momentumBounce:false }}
                    >
                    <SwiperSlide>
                        <div className='sliderComponent-Weekly-Hour'
                            style={currentBg!="null" ? {backgroundColor:futureBg} : {backgroundColor:"#fff"}}
                        >
                            <p>{setHour}</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[dayVar].hour[setHour].condition.icon}></img>
                            <p>  {weatherForecast.forecast.forecastday[dayVar].hour[setHour].temp_c}°</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' sliderComponent-Weekly-Hour'
                            style={currentBg!="null" ? {backgroundColor:futureBg} : {backgroundColor:"#fff"}}
                        >
                            <p>{setHour + 1} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[dayVar].hour[setHour+1].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[dayVar].hour[setHour+1].temp_c}°</p>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className=' sliderComponent-Weekly-Hour'
                            style={currentBg!="null" ? {backgroundColor:futureBg} : {backgroundColor:"#fff"}}
                        >
                            <p>{setHour + 2} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[dayVar].hour[setHour+2].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[dayVar].hour[setHour+2].temp_c}°</p>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className=' sliderComponent-Weekly-Hour'
                            style={currentBg!="null" ? {backgroundColor:futureBg} : {backgroundColor:"#fff"}}
                        >

                            <p>{setHour + 3} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[dayVar].hour[setHour+3].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[dayVar].hour[setHour+3].temp_c}°</p>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' sliderComponent-Weekly-Hour'
                            style={currentBg!="null" ? {backgroundColor:futureBg} : {backgroundColor:"#fff"}}
                        >
                            
                            <p>{setHour + 4} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[dayVar].hour[setHour+4].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[dayVar].hour[setHour+4].temp_c}°</p>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' sliderComponent-Weekly-Hour'
                            style={currentBg!="null" ? {backgroundColor:futureBg} : {backgroundColor:"#fff"}}
                        >
                            
                            <p>{setHour + 5} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[dayVar].hour[setHour+5].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[dayVar].hour[setHour+5].temp_c}°</p>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' sliderComponent-Weekly-Hour'
                            style={currentBg!="null" ? {backgroundColor:futureBg} : {backgroundColor:"#fff"}}
                        >
                            
                            <p>{setHour + 6} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[dayVar].hour[setHour+6].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[dayVar].hour[setHour+6].temp_c}°</p>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' sliderComponent-Weekly-Hour'
                            style={currentBg!="null" ? {backgroundColor:futureBg} : {backgroundColor:"#fff"}}
                        >
                            
                            <p>{setHour + 7} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[dayVar].hour[setHour+7].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[dayVar].hour[setHour+7].temp_c}°</p>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' sliderComponent-Weekly-Hour'
                            style={currentBg!="null" ? {backgroundColor:futureBg} : {backgroundColor:"#fff"}}
                        >
                            
                            <p>{setHour + 8} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[dayVar].hour[setHour+8].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[dayVar].hour[setHour+8].temp_c}°</p>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' sliderComponent-Weekly-Hour'
                            style={currentBg!="null" ? {backgroundColor:futureBg} : {backgroundColor:"#fff"}}
                        >
                            
                            <p>{setHour + 9} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[dayVar].hour[setHour+9].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[dayVar].hour[setHour+9].temp_c}°</p>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' sliderComponent-Weekly-Hour'
                            style={currentBg!="null" ? {backgroundColor:futureBg} : {backgroundColor:"#fff"}}
                        >
                            
                            <p>{setHour + 10} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[dayVar].hour[setHour+10].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[dayVar].hour[setHour+10].temp_c}°</p>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' sliderComponent-Weekly-Hour'
                            style={currentBg!="null" ? {backgroundColor:futureBg} : {backgroundColor:"#fff"}}
                        >
                            
                            <p>{setHour + 11} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[dayVar].hour[setHour+11].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[dayVar].hour[setHour+11].temp_c}°</p>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' sliderComponent-Weekly-Hour'
                            style={currentBg!="null" ? {backgroundColor:futureBg} : {backgroundColor:"#fff"}}
                        >
                            
                            <p>{setHour + 12} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[dayVar].hour[setHour+12].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[dayVar].hour[setHour+12].temp_c}°</p>

                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' sliderComponent-Weekly-Hour'
                            style={currentBg!="null" ? {backgroundColor:futureBg} : {backgroundColor:"#fff"}}
                        >
                            
                            <p>{setHour + 13} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[dayVar].hour[setHour+13].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[dayVar].hour[setHour+13].temp_c}°</p>
                        
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' sliderComponent-Weekly-Hour'
                            style={currentBg!="null" ? {backgroundColor:futureBg} : {backgroundColor:"#fff"}}
                        >
                            
                            <p>{setHour + 14} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[dayVar].hour[setHour+14].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[dayVar].hour[setHour+13].temp_c}°</p>
                        
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' sliderComponent-Weekly-Hour'
                            style={currentBg!="null" ? {backgroundColor:futureBg} : {backgroundColor:"#fff"}}
                        >
                            
                            <p>{setHour + 15} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[dayVar].hour[setHour+15].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[dayVar].hour[setHour+13].temp_c}°</p>
                        
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' sliderComponent-Weekly-Hour'
                            style={currentBg!="null" ? {backgroundColor:futureBg} : {backgroundColor:"#fff"}}
                        >
                            
                            <p>{setHour + 16} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[dayVar].hour[setHour+16].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[dayVar].hour[setHour+13].temp_c}°</p>
                        
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' sliderComponent-Weekly-Hour'
                            style={currentBg!="null" ? {backgroundColor:futureBg} : {backgroundColor:"#fff"}}
                        >
                            
                            <p>{setHour + 17} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[dayVar].hour[setHour+17].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[dayVar].hour[setHour+13].temp_c}°</p>
                        
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' sliderComponent-Weekly-Hour'
                            style={currentBg!="null" ? {backgroundColor:futureBg} : {backgroundColor:"#fff"}}
                        >
                            
                            <p>{setHour + 18} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[dayVar].hour[setHour+18].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[dayVar].hour[setHour+13].temp_c}°</p>
                        
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' sliderComponent-Weekly-Hour'
                            style={currentBg!="null" ? {backgroundColor:futureBg} : {backgroundColor:"#fff"}}
                        >
                            
                            <p>{setHour + 19} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[dayVar].hour[setHour+19].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[dayVar].hour[setHour+13].temp_c}°</p>
                        
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' sliderComponent-Weekly-Hour'
                            style={currentBg!="null" ? {backgroundColor:futureBg} : {backgroundColor:"#fff"}}
                        >
                            
                            <p>{setHour + 20} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[dayVar].hour[setHour+20].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[dayVar].hour[setHour+13].temp_c}°</p>
                        
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' sliderComponent-Weekly-Hour'
                            style={currentBg!="null" ? {backgroundColor:futureBg} : {backgroundColor:"#fff"}}
                        >
                            
                            <p>{setHour + 21} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[dayVar].hour[setHour+21].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[dayVar].hour[setHour+13].temp_c}°</p>
                        
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' sliderComponent-Weekly-Hour'
                            style={currentBg!="null" ? {backgroundColor:futureBg} : {backgroundColor:"#fff"}}
                        >
                            
                            <p>{setHour + 22} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[dayVar].hour[setHour+22].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[dayVar].hour[setHour+13].temp_c}°</p>
                        
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' sliderComponent-Weekly-Hour'
                            style={currentBg!="null" ? {backgroundColor:futureBg} : {backgroundColor:"#fff"}}
                        >
                            
                            <p>{setHour + 23} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[dayVar].hour[setHour+23].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[dayVar].hour[setHour+13].temp_c}°</p>
                        
                        </div>
                    </SwiperSlide>
                    <span slot="container-start" className='weeklyHourText'>Почасовой прогноз на {weatherForecast.forecast.forecastday[dayVar].date.slice(8,10)} число</span>
                </Swiper>
        
        ) : (
            <div></div>
        )}
        </div>

)
}