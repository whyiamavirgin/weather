import './App.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FreeMode, Parallax } from 'swiper/modules'
import 'swiper/css/free-mode';
import "swiper/css/parallax"
import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
// import Seventeen from './hourModules/Seventeen'




let localTimeVarInt

export default () => {

    const [weatherForecast, setWeatherForecast] = useState(null)

    const fetchForecast = async () => {
        try {
          const responseIP = await axios.get(
            `https://api.weatherapi.com/v1/ip.json?key=a81b4414f60f4c868a8162028241702&q=auto:ip`
          );
            const responseForecast = await axios.get(
                `https://api.weatherapi.com/v1/forecast.json?key=a81b4414f60f4c868a8162028241702&q=${responseIP.data.city}&lang=ru&days=10`
            )
            setWeatherForecast(responseForecast.data)
            console.log(responseForecast.data)
            localTimeVarInt = parseInt(responseForecast.data.location.localtime.slice(11,13))
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        setTimeout(() => {
            fetchForecast()
        }, 0)
    }, []);
    
    
    
    switch (localTimeVarInt) {
      case 11 :
        return(
          <div className = "upper-layer">
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
                          <p>Сейчас</p>
                          <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt].condition.icon}></img>
                          <p>  {weatherForecast.forecast.forecastday[0].hour[localTimeVarInt].temp_c}°</p>
                      </SwiperSlide>
                      <SwiperSlide>
                          <p>{localTimeVarInt + 1} </p>
                          <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+1].condition.icon}></img>
                          <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+1].temp_c}°</p>
                      </SwiperSlide>
                      <SwiperSlide>
                          <p>{localTimeVarInt + 2} </p>
                          <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+2].condition.icon}></img>
                          <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+2].temp_c}°</p>
                      </SwiperSlide>
                      <SwiperSlide>
                          <p>{localTimeVarInt + 3} </p>
                          <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+3].condition.icon}></img>
                          <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+3].temp_c}°</p>
                      </SwiperSlide>
                      <SwiperSlide>
                          <p>{localTimeVarInt + 4} </p>
                          <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+4].condition.icon}></img>
                          <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+4].temp_c}°</p>
                      </SwiperSlide>
                      <SwiperSlide>
                          <p>{localTimeVarInt + 5} </p>
                          <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+5].condition.icon}></img>
                          <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+5].temp_c}°</p>
                      </SwiperSlide>
                      <SwiperSlide>
                          <p>{localTimeVarInt + 6} </p>
                          <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+6].condition.icon}></img>
                          <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+6].temp_c}°</p>
                      </SwiperSlide>
                      <SwiperSlide>
                          <p>{localTimeVarInt + 7} </p>
                          <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+7].condition.icon}></img>
                          <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+7].temp_c}°</p>
                      </SwiperSlide>
                      <SwiperSlide>
                          <p>{localTimeVarInt + 8} </p>
                          <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+8].condition.icon}></img>
                          <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+8].temp_c}°</p>
                      </SwiperSlide>
                      <SwiperSlide>
                          <p>{localTimeVarInt + 9} </p>
                          <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+9].condition.icon}></img>
                          <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+9].temp_c}°</p>
                      </SwiperSlide>
                      <SwiperSlide>
                          <p>{localTimeVarInt + 10} </p>
                          <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+10].condition.icon}></img>
                          <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+10].temp_c}°</p>
                      </SwiperSlide>
                      <SwiperSlide>
                          <p>{localTimeVarInt + 11} </p>
                          <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+11].condition.icon}></img>
                          <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+11].temp_c}°</p>
                      </SwiperSlide>
                      <SwiperSlide>
                          <p>00</p>
                          <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[0].condition.icon}></img>
                          <p>{weatherForecast.forecast.forecastday[1].hour[0].temp_c}°</p>
                      </SwiperSlide>
                      <span slot="container-start" className='left'>
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 7V12H17M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#ccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                          </svg>

                        ПОЧАСОВОЙ ПРОГНОЗ
                        </span>
                  </Swiper>
          
          ) : (
              <div>a</div>
          )}
          </div>

  )
        break 
        case 12 :
          return(
            <div className = "upper-layer">
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
                            <p>Сейчас</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt].condition.icon}></img>
                            <p>  {weatherForecast.forecast.forecastday[0].hour[localTimeVarInt].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 1} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+1].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+1].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 2} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+2].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+2].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 3} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+3].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+3].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 4} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+4].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+4].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 5} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+5].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+5].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 6} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+6].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+6].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 7} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+7].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+7].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 8} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+8].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+8].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 9} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+9].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+9].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 10} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+10].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+10].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 11} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+11].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+11].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>00</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[0].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[0].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>01</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[1].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[1].temp_c}°</p>
                        </SwiperSlide>
                        <span slot="container-start" className='left'>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 7V12H17M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#ccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                          ПОЧАСОВОЙ ПРОГНОЗ
                          </span>
                    </Swiper>
            
            ) : (
                <div>a</div>
            )}
            </div>

    )
          break 
        case 13 :
          return(
            <div className = "upper-layer">
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
                            <p>Сейчас</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt].condition.icon}></img>
                            <p>  {weatherForecast.forecast.forecastday[0].hour[localTimeVarInt].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 1} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+1].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+1].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 2} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+2].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+2].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 3} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+3].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+3].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 4} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+4].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+4].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 5} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+5].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+5].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 6} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+6].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+6].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 7} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+7].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+7].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 8} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+8].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+8].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 9} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+9].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+9].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 10} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+10].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+10].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>00</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[0].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[0].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>01</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[1].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[1].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>02</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[2].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[2].temp_c}°</p>
                        </SwiperSlide>
                        <span slot="container-start" className='left'>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 7V12H17M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#ccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                          ПОЧАСОВОЙ ПРОГНОЗ
                          </span>
                    </Swiper>
            
            ) : (
                <div>a</div>
            )}
            </div>

    )
          break 
        case 14 :
          return(
            <div className = "upper-layer">
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
                            <p>Сейчас</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt].condition.icon}></img>
                            <p>  {weatherForecast.forecast.forecastday[0].hour[localTimeVarInt].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 1} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+1].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+1].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 2} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+2].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+2].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 3} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+3].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+3].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 4} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+4].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+4].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 5} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+5].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+5].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 6} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+6].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+6].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 7} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+7].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+7].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 8} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+8].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+8].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 9} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+9].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+9].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>00</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[0].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[0].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>01</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[1].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[1].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>02</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[2].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[2].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>03</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[3].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[3].temp_c}°</p>
                        </SwiperSlide>
                        <span slot="container-start" className='left'>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 7V12H17M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#ccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                          ПОЧАСОВОЙ ПРОГНОЗ
                          </span>
                    </Swiper>
            
            ) : (
                <div>a</div>
            )}
            </div>

    )
          break 
        case 15 :
            return (
                <div className = "upper-layer">
                {weatherForecast ? (
                    
                        <Swiper
                            // install Swiper modules
                            modules={[ FreeMode]}
                            spaceBetween={50}
                            slidesPerView={3}
                            // autoplay={{delay:2000}}
                            freeMode={{ enabled: true, minimumVelocity: 0.1, momentumBounce:false }}
                            >
                            <SwiperSlide>
                                <p>Сейчас</p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt].condition.icon}></img>
                                <p>  {weatherForecast.forecast.forecastday[0].hour[localTimeVarInt].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>{localTimeVarInt + 1} </p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+1].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+1].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>{localTimeVarInt + 2} </p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+2].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+2].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>{localTimeVarInt + 3} </p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+3].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+3].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>{localTimeVarInt + 4} </p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+4].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+4].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>{localTimeVarInt + 5} </p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+5].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+5].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>{localTimeVarInt + 6} </p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+6].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+6].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>{localTimeVarInt + 7} </p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+7].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+7].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>{localTimeVarInt + 8} </p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+8].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+8].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>{localTimeVarInt + 9} </p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+9].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+9].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>{localTimeVarInt + 10} </p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+10].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+10].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>00</p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[0].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[1].hour[0].temp_c}°</p>
                            </SwiperSlide>
                            <span slot="container-start" className='left'>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 7V12H17M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#ccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                          ПОЧАСОВОЙ ПРОГНОЗ
                          </span>
                        </Swiper>
                
                ) : (
                    <div></div>
                )}
                </div>

            )
            break
        case 16 :
            return (
                <div className = "upper-layer">
                {weatherForecast ? (
                    
                        <Swiper
                            modules={[ FreeMode]}
                            spaceBetween={50}
                            slidesPerView={3}
                            freeMode={{ enabled: true, minimumVelocity: 0.1, momentumBounce:false }}
                            >
                            <SwiperSlide>
                                <p>Сейчас</p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt].condition.icon}></img>
                                <p>  {weatherForecast.forecast.forecastday[0].hour[localTimeVarInt].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>{localTimeVarInt + 1} </p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+1].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+1].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>{localTimeVarInt + 2} </p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+2].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+2].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>{localTimeVarInt + 3} </p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+3].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+3].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>{localTimeVarInt + 4} </p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+4].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+4].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>{localTimeVarInt + 5} </p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+5].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+5].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>{localTimeVarInt + 6} </p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+6].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+6].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>{localTimeVarInt + 7} </p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+7].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+7].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>00</p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[0].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[1].hour[0].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>01</p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[1].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[1].hour[1].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>02</p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[2].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[1].hour[2].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>03</p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[3].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[1].hour[3].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>04</p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[4].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[1].hour[4].temp_c}°</p>
                            </SwiperSlide>
                            <span slot="container-start" className='left'>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 7V12H17M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#ccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                          ПОЧАСОВОЙ ПРОГНОЗ
                          </span>
                        </Swiper>
                
                ) : (
                    <div></div>
                )}
                </div>

            )
            break
        case 17 :
          return (
            <div className = "upper-layer">
            {weatherForecast ? (
                
                    <Swiper
                        modules={[ FreeMode]}
                        spaceBetween={50}
                        slidesPerView={3}
                        freeMode={{ enabled: true, minimumVelocity: 0.1, momentumBounce:false }}
                        >
                        <SwiperSlide>
                            <p>Сейчас</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt].condition.icon}></img>
                            <p>  {weatherForecast.forecast.forecastday[0].hour[localTimeVarInt].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 1} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+1].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+1].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 2} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+2].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+2].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 3} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+3].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+3].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 4} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+4].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+4].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 5} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+5].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+5].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 6} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+6].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+6].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>00</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[0].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[0].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>01</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[1].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[1].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>02</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[2].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[2].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>03</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[3].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[3].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>04</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[4].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[4].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>05</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[5].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[5].temp_c}°</p>
                        </SwiperSlide>
                        <span slot="container-start" className='left'>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 7V12H17M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#ccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                          ПОЧАСОВОЙ ПРОГНОЗ
                          </span>
                    </Swiper>
            
            ) : (
                <div></div>
            )}
            </div>

        )
            break 
        case 18:
          return (
            <div className = "upper-layer">
            {weatherForecast ? (
                
                    <Swiper
                        modules={[ FreeMode]}
                        spaceBetween={50}
                        slidesPerView={3}
                        freeMode={{ enabled: true, minimumVelocity: 0.1, momentumBounce:false }}
                        >
                        <SwiperSlide>
                            <p>Сейчас</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt].condition.icon}></img>
                            <p>  {weatherForecast.forecast.forecastday[0].hour[localTimeVarInt].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 1} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+1].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+1].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 2} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+2].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+2].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 3} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+3].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+3].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 4} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+4].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+4].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 5} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+5].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+5].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>00</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[0].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[0].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>01</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[1].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[1].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>02</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[2].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[2].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>03</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[3].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[3].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>04</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[4].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[4].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>05</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[5].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[5].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>06</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[6].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[6].temp_c}°</p>
                        </SwiperSlide>
                        <span slot="container-start" className='left'>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 7V12H17M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#ccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                          ПОЧАСОВОЙ ПРОГНОЗ
                          </span>
                    </Swiper>
            
            ) : (
                <div></div>
            )}
            </div>

        )
          break
        case 19:
          return (
            <div className = "upper-layer">
            {weatherForecast ? (
                
                    <Swiper
                        modules={[ FreeMode]}
                        spaceBetween={50}
                        slidesPerView={3}
                        freeMode={{ enabled: true, minimumVelocity: 0.1, momentumBounce:false }}
                        >
                        <SwiperSlide>
                            <p>Сейчас</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt].condition.icon}></img>
                            <p>  {weatherForecast.forecast.forecastday[0].hour[localTimeVarInt].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 1} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+1].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+1].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 2} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+2].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+2].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 3} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+3].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+3].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 4} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+4].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+4].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>00</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[0].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[0].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>01</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[1].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[1].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>02</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[2].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[2].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>03</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[3].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[3].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>04</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[4].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[4].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>05</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[5].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[5].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>06</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[6].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[6].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>07</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[7].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[7].temp_c}°</p>
                        </SwiperSlide>
                        <span slot="container-start" className='left'>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 7V12H17M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#ccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                          ПОЧАСОВОЙ ПРОГНОЗ
                          </span>
                    </Swiper>
            
            ) : (
                <div></div>
            )}
            </div>

        )
          break
        case 20:
          return (
            <div className = "upper-layer">
            {weatherForecast ? (
                
                    <Swiper
                        modules={[ FreeMode]}
                        spaceBetween={50}
                        slidesPerView={3}
                        freeMode={{ enabled: true, minimumVelocity: 0.1, momentumBounce:false }}
                        >
                        <SwiperSlide>
                            <p>Сейчас</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt].condition.icon}></img>
                            <p>  {weatherForecast.forecast.forecastday[0].hour[localTimeVarInt].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 1} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+1].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+1].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 2} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+2].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+2].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 3} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+3].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+3].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>00</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[0].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[0].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>01</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[1].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[1].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>02</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[2].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[2].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>03</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[3].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[3].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>04</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[4].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[4].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>05</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[5].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[5].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>06</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[6].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[6].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>07</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[7].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[7].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>08</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[8].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[8].temp_c}°</p>
                        </SwiperSlide>
                        <span slot="container-start" className='left'>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 7V12H17M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#ccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                          ПОЧАСОВОЙ ПРОГНОЗ
                          </span>
                    </Swiper>
            
            ) : (
                <div></div>
            )}
            </div>

        )
          break
        case 21 :
            return (
                <div className = "upper-layer">
                {weatherForecast ? (
                    
                        <Swiper
                            modules={[ FreeMode ]}
                            spaceBetween={1}
                            slidesPerView={4}
                            freeMode={{ enabled: true, minimumVelocity: 0.1, momentumBounce:false }}
                            >
                            <SwiperSlide>
                                <p>Сейчас</p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt].condition.icon}></img>
                                <p>  {weatherForecast.forecast.forecastday[0].hour[localTimeVarInt].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>{localTimeVarInt + 1} </p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+1].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+1].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>{localTimeVarInt + 2} </p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+2].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+2].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>00</p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[0].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[1].hour[0].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>01</p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[1].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[1].hour[1].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>02</p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[2].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[1].hour[2].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>03</p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[3].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[1].hour[3].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>04</p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[4].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[1].hour[4].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>05</p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[5].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[1].hour[5].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>06</p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[6].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[1].hour[6].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>07</p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[7].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[1].hour[7].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>08</p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[8].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[1].hour[8].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>09</p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[9].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[1].hour[9].temp_c}°</p>
                            </SwiperSlide>
                            <span slot="container-start" className='left'>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 7V12H17M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#ccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                          ПОЧАСОВОЙ ПРОГНОЗ
                          </span>
                        </Swiper>
                
                ) : (
                    <div></div>
                )}
                </div>

            )
            break
        case 22:
          return (
            <div className = "upper-layer">
            {weatherForecast ? (
                
                    <Swiper
                        modules={[ FreeMode ]}
                        spaceBetween={1}
                        slidesPerView={4}
                        freeMode={{ enabled: true, minimumVelocity: 0.1, momentumBounce:false }}
                        >
                        <SwiperSlide>
                            <p>Сейчас</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt].condition.icon}></img>
                            <p>  {weatherForecast.forecast.forecastday[0].hour[localTimeVarInt].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>{localTimeVarInt + 1} </p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+1].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+1].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>00</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[0].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[0].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>01</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[1].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[1].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>02</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[2].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[2].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>03</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[3].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[3].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>04</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[4].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[4].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>05</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[5].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[5].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>06</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[6].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[6].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>07</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[7].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[7].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>08</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[8].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[8].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>09</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[9].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[9].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>10</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[10].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[10].temp_c}°</p>
                        </SwiperSlide>
                        <span slot="container-start" className='left'>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 7V12H17M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#ccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                          ПОЧАСОВОЙ ПРОГНОЗ
                          </span>
                    </Swiper>
            
            ) : (
                <div></div>
            )}
            </div>

        )
          break
        case 23:
          return (
            <div className = "upper-layer">
            {weatherForecast ? (
                
                    <Swiper
                        modules={[ FreeMode ]}
                        spaceBetween={1}
                        slidesPerView={4}
                        freeMode={{ enabled: true, minimumVelocity: 0.1, momentumBounce:false }}
                        >
                        <SwiperSlide>
                            <p>Сейчас</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt].condition.icon}></img>
                            <p>  {weatherForecast.forecast.forecastday[0].hour[localTimeVarInt].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>00</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[0].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[0].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>01</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[1].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[1].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>02</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[2].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[2].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>03</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[3].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[3].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>04</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[4].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[4].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>05</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[5].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[5].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>06</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[6].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[6].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>07</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[7].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[7].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>08</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[8].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[8].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>09</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[9].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[9].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>10</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[10].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[10].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>11</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[11].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[11].temp_c}°</p>
                        </SwiperSlide>
                        <span slot="container-start" className='left'>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 7V12H17M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#ccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                          ПОЧАСОВОЙ ПРОГНОЗ
                          </span>
                    </Swiper>
            
            ) : (
                <div></div>
            )}
            </div>

        )
          break
        case 24:
          return (
            <div className = "upper-layer">
            {weatherForecast ? (
                
                    <Swiper
                        modules={[ FreeMode ]}
                        spaceBetween={1}
                        slidesPerView={4}
                        freeMode={{ enabled: true, minimumVelocity: 0.1, momentumBounce:false }}
                        >
                        <SwiperSlide>
                            <p>Сейчас</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[0].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[0].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>01</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[1].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[1].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>02</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[2].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[2].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>03</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[3].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[3].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>04</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[4].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[4].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>05</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[5].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[5].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>06</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[6].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[6].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>07</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[7].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[7].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>08</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[8].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[8].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>09</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[9].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[9].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>10</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[10].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[10].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>11</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[11].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[11].temp_c}°</p>
                        </SwiperSlide>
                        <SwiperSlide>
                            <p>12</p>
                            <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[1].hour[12].condition.icon}></img>
                            <p>{weatherForecast.forecast.forecastday[1].hour[12].temp_c}°</p>
                        </SwiperSlide>
                        <span slot="container-start" className='left'>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 7V12H17M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#ccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>

                          ПОЧАСОВОЙ ПРОГНОЗ
                          </span>
                    </Swiper>
            
            ) : (
                <div></div>
            )}
            </div>

        )
          break
        default :
            return(
                <div className = "upper-layer">
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
                                <p>Сейчас</p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt].condition.icon}></img>
                                <p>  {weatherForecast.forecast.forecastday[0].hour[localTimeVarInt].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>{localTimeVarInt + 1} </p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+1].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+1].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>{localTimeVarInt + 2} </p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+2].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+2].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>{localTimeVarInt + 3} </p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+3].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+3].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>{localTimeVarInt + 4} </p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+4].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+4].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>{localTimeVarInt + 5} </p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+5].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+5].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>{localTimeVarInt + 6} </p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+6].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+6].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>{localTimeVarInt + 7} </p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+7].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+7].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>{localTimeVarInt + 8} </p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+8].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+8].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>{localTimeVarInt + 9} </p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+9].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+9].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>{localTimeVarInt + 10} </p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+10].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+10].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>{localTimeVarInt + 11} </p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+11].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+11].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>{localTimeVarInt + 12} </p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+12].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+12].temp_c}°</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>{localTimeVarInt + 13} </p>
                                <img className='weather_icon_small' src={weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+13].condition.icon}></img>
                                <p>{weatherForecast.forecast.forecastday[0].hour[localTimeVarInt+13].temp_c}°</p>
                            </SwiperSlide>
                            <span slot="container-start" className='left'>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 7V12H17M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z" stroke="#ccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>

                              ПОЧАСОВОЙ ПРОГНОЗ
                              </span>
                        </Swiper>
                
                ) : (
                    <div>a</div>
                )}
                </div>

        )
    }
}