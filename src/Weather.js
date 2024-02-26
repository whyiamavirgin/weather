import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'
import LoaderExampleInlineCentered from './Loader';
import HourForecast from './HourForecats';
import { FreeMode, Parallax } from 'swiper/modules'
import 'swiper/css/free-mode';
import "swiper/css/parallax"
import { Swiper, SwiperSlide} from 'swiper/react';
import moment from 'moment'
import 'moment/locale/ru'

// Импортируем файлы для облачной погоды

import Cloudy_day from "./images/cloudy/cloudy_day.jpg"
import Cloudy_sunrise from "./images/cloudy/cloudy_sunrise.jpg"
import Cloudy_night from "./images/cloudy/cloudy_night.jpg"
import Cloudy_sunset from "./images/cloudy/cloudy_sunset.JPG"
import Cloudy_night_icon from "./images/cloudy/cloudy_icon_night.png"
import Cloudy_day_icon from "./images/cloudy/cloudy_icon_day.png"
import Cloudy_sunset_icon from "./images/cloudy/cloudy_icon_sunset.png"
import Cloudy_sunrise_icon from "./images/cloudy/cloudy_icon_sunrise.png"

// Импортируем файлы для солнечной погоды

import Sunny_day from "./images/sunny/sunny_day.JPG"
import Sunny_sunrise from "./images/sunny/sunny_sunrise.jpg"
import Sunny_sunset from "./images/sunny/sunny_sunset.jpg"
import Sunny_day_icon from "./images/sunny/sunny_icon_day.png"
import Sunny_sunset_icon from "./images/sunny/sunny_icon_sunset.png"
import Sunny_sunrise_icon from "./images/sunny/sunny_icon_sunrise.png"

// Импортируем файлы для дождливой погоды

import Rainy_day from "./images/rainy/rainy_day.jpg"
import Rainy_sunrise from "./images/rainy/rainy_sunrise.jpg"
import Rainy_night from "./images/rainy/rainy_night.jpg"
import Rainy_day_icon from "./images/rainy/rainy_icon_day.png"
import Rainy_night_icon from "./images/rainy/rainy_icon_night.png"

// Импортируем файлы для снежной погоды

import Snowy_day from "./images/snowy/snowy_day.jpg"
import Snowy_night from "./images/snowy/snowy_night.jpg"
import Snowy_day_icon from "./images/snowy/snowy_icon_day.png"
import Snowy_night_icon from "./images/snowy/snowy_icon_night.png"


moment.locale('ru')

const Weather = () => {

  const version = '0.3.0'

  const imageAttribution = "Image by wirestock"

  const [weatherData, setWeatherData] = useState(null);
  const [weatherDataAstro, setWeatherDataAstro] = useState(null);
  const [bgImagePath, setbgImagePath] = useState(null)
  const [bgColor, setBgColor] = useState(null)
  const [textColor, setTextColor] = useState(null)
  const [weatherIcon, setWeatherIcon] = useState(null)
  const [hourForecastBgColor, setHourForecastBgColor] = useState(null)
  const [dailyForecastBgColor, setDailyForecastBgColor] = useState(null)
  // const [getAutoIP, setIP] = useState("");
  const [ipData, setIPData] = useState(null)
  const [weatherForecast, setWeatherForecast] = useState(null)




  let localTimeVar
  let localTimeVarInt

  let localDayVar
  let localDayVarInt
  let localMonthVar

  let weekDay = moment().format('dddd').toUpperCase()


  

  const cloudy = ["Переменная облачность", 'Облачно', "Пасмурно", "Дымка", "Туман","Переохлажденный туман", "Поземок"]

  const sunny = ["Солнечно", "Ясно"]

  const snowy = ["Местами снег", "Местами дождь со снегом", "Местами замерзающая морось", "Метель","Местами небольшой снег","Небольшой снег", 
  "Местами умеренный снег","Умеренный снег","Местами сильный снег","Сильный снег", "Небольшой снег","Умеренный или сильный снег",]

  const rainy = ["Местами слабая морось","Слабая морось","Замерзающая морось","Сильная замерзающая морось","Местами небольшой дождь","Небольшой дождь",
  "Временами умеренный дождь","Умеренный дождь","Временами сильный дождь","Сильный дождь",
  "Слабый переохлажденный дождь","Умеренный или сильный переохлажденный дождь","Небольшой дождь со снегом","Умеренный или сильный дождь со снегом",
  "Ледяной дождь","Небольшой ливневый дождь", "Умеренный или сильный ливневый дождь", "Сильные ливни","Небольшой ливневый дождь со снегом","Умеренные или сильные ливневые дожди со снегом",
  "Небольшой ледяной дождь", "Умеренный или сильный ледяной дождь", "В отдельных районах местами небольшой дождь с грозой",
  "В отдельных районах умеренный или сильный дождь с грозой","В отдельных районах местами небольшой снег с грозой","В отдельных районах умеренный или сильный снег с грозой"]




  const fetchData = async () => {

    try {
      const responseIP = await axios.get(
        `https://api.weatherapi.com/v1/ip.json?key=a81b4414f60f4c868a8162028241702&q=auto:ip`
      );
      
      // const responseForecast = await axios.get(
      //   `https://api.weatherapi.com/v1/forecast.json?key=a81b4414f60f4c868a8162028241702&q=${responseIP.data.city}&lang=ru&days=5`
      // )
      // setWeatherForecast(responseForecast.data)
      // console.log(responseForecast.data)

      // const responseAstro = await axios.get(
      //         `https://api.weatherapi.com/v1/astronomy.json?key=a81b4414f60f4c868a8162028241702&q=${responseIP.data.city}&lang=ru`
      //       ); 
      //       setWeatherDataAstro(responseAstro.data);
      //       console.log(responseAstro.data)

      // const response = await axios.get(
      //   `https://api.weatherapi.com/v1/current.json?key=a81b4414f60f4c868a8162028241702&q=${responseIP.data.city}&lang=ru`
      // );
      // setWeatherData(response.data);
      // console.log(response.data); 

      const responseForecast = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=a81b4414f60f4c868a8162028241702&q=${responseIP.data.city}&lang=ru&days=10`
      )
      setWeatherForecast(responseForecast.data)
      console.log(responseForecast.data)

      //You can see all the weather data in console log
      
      if(responseForecast.data) {
        localTimeVar = responseForecast.data.location.localtime
        
        localTimeVarInt = parseInt(localTimeVar.slice(11,13))
        // console.log(responseForecast.data.forecast.forecastday[0].hour[localTimeVarInt].temp_c)

        // console.log(localTimeVarInt)

        if(sunny.indexOf(`${responseForecast.data.current.condition.text}`) > -1) {
          if(localTimeVarInt >= 6 && localTimeVarInt < 13) {
            setbgImagePath(Sunny_sunrise)
            setBgColor("#FED7C0")
            setTextColor("#5D76AD")
            setWeatherIcon(Sunny_sunrise_icon)
            setHourForecastBgColor("#FFC3A0")
            setDailyForecastBgColor("#FFB080")
          } else if(localTimeVarInt >= 13 && localTimeVarInt < 20){
            setbgImagePath(Sunny_day)
            setBgColor("#FEFEFE")
            setTextColor("#76BD15")
            setWeatherIcon(Sunny_day_icon)
            setHourForecastBgColor("#8DDE1D")
            setDailyForecastBgColor("#8DE119")
          } else if(localTimeVarInt >= 20 && localTimeVarInt <= 23){
            setbgImagePath(Sunny_sunset)
            setBgColor("#F8676E")
            setTextColor("#FBF48A")
            setWeatherIcon(Sunny_sunset_icon)
            setHourForecastBgColor("#FF787F")
            setDailyForecastBgColor("#FF898F")
        } else if(localTimeVarInt >= 0 && localTimeVarInt < 6){
          setbgImagePath(Sunny_sunset)
          setBgColor("#F8676E")
          setTextColor("#FBF48A")
          setWeatherIcon(Sunny_sunset_icon)
          setHourForecastBgColor("#FF787F")
          setDailyForecastBgColor("#FF898F")
      } 
        } else if(cloudy.indexOf(`${responseForecast.data.current.condition.text}`) > -1) {
          
          if(localTimeVarInt >= 6 && localTimeVarInt < 12) {
            setbgImagePath(Cloudy_sunrise)
            setBgColor("#D0736B")
            setTextColor("#FFAC8A")
            setWeatherIcon(Cloudy_sunrise_icon)
            setHourForecastBgColor("#F5928A")
            setDailyForecastBgColor("#FFB7B1")
          } else if(localTimeVarInt >= 12 && localTimeVarInt < 19){
            setbgImagePath(Cloudy_day)
            setBgColor("#FEB0A5")
            setTextColor("#FFFDD4")
            setWeatherIcon(Cloudy_day_icon)
            setHourForecastBgColor("#FF9484")
            setDailyForecastBgColor("#FF826F")
          } else if(localTimeVarInt >= 19 && localTimeVarInt < 23){
            setbgImagePath(Cloudy_sunset)
            setBgColor("#2887C5")
            setTextColor("#F4B5BE")
            setWeatherIcon(Cloudy_sunset_icon)
            setHourForecastBgColor("#FFA2AF")
            setDailyForecastBgColor("#FF7F91")
          } else if(localTimeVarInt >= 23 && localTimeVarInt < 6){
            setbgImagePath(Cloudy_night)
            setBgColor("#282A65")
            setTextColor("#9882BF")
            setWeatherIcon(Cloudy_night_icon)
            setHourForecastBgColor("#36388B")
            setDailyForecastBgColor("#484BB0")
          } else {
            setbgImagePath(Cloudy_night)
            setBgColor("#282A65")
            setTextColor("#9882BF")
            setWeatherIcon(Cloudy_night_icon)
            setHourForecastBgColor("#36388B")
            setDailyForecastBgColor("#484BB0")
          }
        } else if(rainy.indexOf(`${responseForecast.data.current.condition.text}`) > -1) {
          if(localTimeVarInt >= 6 && localTimeVarInt < 13) {
            setbgImagePath(Rainy_sunrise)
            setBgColor("#40666A")
            setTextColor("#C9E8E0")
            setWeatherIcon(Rainy_day_icon)
            setHourForecastBgColor("#57868B")
            setDailyForecastBgColor("#629AA0")
          } else if(localTimeVarInt >= 13 && localTimeVarInt < 20){
            setbgImagePath(Rainy_day)
            setBgColor("#7FC3AE")
            setTextColor("#C9E8E0")
            setWeatherIcon(Rainy_day_icon)
            setHourForecastBgColor("#77DBBC")
            setDailyForecastBgColor("#6DE3BF")
          } else if(localTimeVarInt >= 20 && localTimeVarInt < 6){
            setbgImagePath(Rainy_night)
            setBgColor("#615273")
            setTextColor("#C2B8FF")
            setWeatherIcon(Rainy_night_icon)
            setHourForecastBgColor("#7A6592")
            setDailyForecastBgColor("#9278AF")
        }
        } else if(snowy.indexOf(`${responseForecast.data.current.condition.text}`) > -1) {
          if(localTimeVarInt >= 6 && localTimeVarInt < 13) {
            setbgImagePath(Snowy_day)
            setBgColor("#99B8CC")
            setTextColor("#E4F1F9")
            setWeatherIcon(Snowy_day_icon)
            setHourForecastBgColor("#749DB8")
            setDailyForecastBgColor("#5C89A6")
          } else if(localTimeVarInt >= 13 && localTimeVarInt < 18){
            setbgImagePath(Snowy_night)
            setBgColor("#A7ACC4")
            setTextColor("#E2E2E3")
            setWeatherIcon(Snowy_night_icon)
            setHourForecastBgColor("#8D98C9")
            setDailyForecastBgColor("#7986C5")
          } else if(localTimeVarInt >= 18 && localTimeVarInt < 23){
            setbgImagePath(Snowy_day)
            setBgColor("#99B8CC")
            setTextColor("#E4F1F9")
            setWeatherIcon(Snowy_day_icon)
            setHourForecastBgColor("#749DB8")
            setDailyForecastBgColor("#5C89A6")
          } else if(localTimeVarInt >= 23 && localTimeVarInt < 6){
            setbgImagePath(Snowy_night)
            setBgColor("#A7ACC4")
            setTextColor("#E2E2E3")
            setWeatherIcon(Snowy_night_icon)
            setHourForecastBgColor("#8D98C9")
            setDailyForecastBgColor("#7986C5")
          } 
        } else {
          setbgImagePath(Snowy_night)
          setBgColor("#A7ACC4")
          setTextColor("#E2E2E3")
          setWeatherIcon(Snowy_night_icon)
          setHourForecastBgColor("#8D98C9")
          setDailyForecastBgColor("#7986C5")
        }
      }

    } catch (error) {
      console.error(error);
    }



    
    



 

  };


  if(weatherForecast) {
    localTimeVar = weatherForecast.location.localtime
        
    localTimeVarInt = parseInt(localTimeVar.slice(11,13))

    localDayVar = parseInt(weatherForecast.location.localtime.slice(8,10))
    localMonthVar = parseInt(weatherForecast.location.localtime.slice(5,7))
  }  

  useEffect(() => {
    setTimeout(() => {
      fetchData()
    }, 0)
  }, []);



  return (
    <div className='main'  style={{
      backgroundImage: `url(${bgImagePath})`
      
    }}>

        

      {weatherForecast ? (
        <div className='card' id='card' style={{
          background: bgColor,
          color: textColor
        }}>
          <p className='date'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 9.92285C5 14.7747 9.24448 18.7869 11.1232 20.3252C11.3921 20.5454 11.5281 20.6568 11.7287 20.7132C11.8849 20.7572 12.1148 20.7572 12.271 20.7132C12.472 20.6567 12.6071 20.5463 12.877 20.3254C14.7557 18.7871 18.9999 14.7751 18.9999 9.9233C18.9999 8.08718 18.2625 6.32605 16.9497 5.02772C15.637 3.72939 13.8566 3 12.0001 3C10.1436 3 8.36301 3.7295 7.05025 5.02783C5.7375 6.32616 5 8.08674 5 9.92285Z" stroke={textColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9Z" stroke={textColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>


            {weatherForecast.location.name}</p>
          <p className='temperature'> <img className='weather_icon' src={weatherIcon}></img>  {weatherForecast.current.temp_c}°</p>
          <p className='state'>{weatherForecast.current.condition.text}</p>
          <p className='minmax'>Макс.: {weatherForecast.forecast.forecastday[0].day.maxtemp_c}°, мин.: {weatherForecast.forecast.forecastday[0].day.mintemp_c}°</p>
          <p className='current_date'>{weekDay}</p>
          <p className='feels_like'>Ощущается как {weatherForecast.current.feelslike_c}° | {weatherForecast.current.is_day ? ( "Закат " + weatherForecast.forecast.forecastday[0].astro.sunset) : ("Восход " + weatherForecast.forecast.forecastday[0].astro.sunrise)}</p>
          
        </div>
      ) : (
        <div className='card' id='card' style={{
          background: "#282A65",
          color: "#9882BF"
        }}>
          <p className='date'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 9.92285C5 14.7747 9.24448 18.7869 11.1232 20.3252C11.3921 20.5454 11.5281 20.6568 11.7287 20.7132C11.8849 20.7572 12.1148 20.7572 12.271 20.7132C12.472 20.6567 12.6071 20.5463 12.877 20.3254C14.7557 18.7871 18.9999 14.7751 18.9999 9.9233C18.9999 8.08718 18.2625 6.32605 16.9497 5.02772C15.637 3.72939 13.8566 3 12.0001 3C10.1436 3 8.36301 3.7295 7.05025 5.02783C5.7375 6.32616 5 8.08674 5 9.92285Z" stroke="#9882BF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9Z" stroke="#9882BF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>


            ----</p>
          <p className='temperature'> <img className='weather_icon' src={Cloudy_night_icon}></img>  --°</p>
          <p className='state'>-----</p>
          <p className='minmax'>Ветер ----- км/ч</p>
          <p className='current_date'>-----</p>
          <p className='feels_like'>Ощущается как --° | ----</p>
          
        </div>
        
      )} 
        {weatherForecast ? (
          <div className='dayForecast'> 
          <HourForecast />
          </div>
          
        ) : (
          <div className='dayForecast' style={{
            background: "#282A65",
            color: "#FFF"
          }}></div>
        )}

      {weatherForecast ? (
        <div className='dayliForecast' 
        style={{
        color: "#FFF"
        }}>
          <p className='dayliText'><svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 2.5H3.40015C2.56007 2.5 2.13972 2.5 1.81885 2.66349C1.5366 2.8073 1.3073 3.0366 1.16349 3.31885C1 3.63972 1 4.06007 1 4.90015V5.5M4 2.5H10M4 2.5V1M10 2.5H10.6001C11.4402 2.5 11.8597 2.5 12.1805 2.66349C12.4628 2.8073 12.6929 3.0366 12.8367 3.31885C13 3.6394 13 4.05925 13 4.89768V5.5M10 2.5V1M1 5.5V12.1001C1 12.9402 1 13.36 1.16349 13.6809C1.3073 13.9632 1.5366 14.1929 1.81885 14.3367C2.1394 14.5 2.55925 14.5 3.39768 14.5H10.6023C11.4408 14.5 11.86 14.5 12.1805 14.3367C12.4628 14.1929 12.6929 13.9632 12.8367 13.6809C13 13.3604 13 12.9411 13 12.1027V5.5M1 5.5H13M10 11.5H10.0015L10.0015 11.5015L10 11.5015V11.5ZM7 11.5H7.0015L7.00146 11.5015L7 11.5015V11.5ZM4 11.5H4.0015L4.00146 11.5015L4 11.5015V11.5ZM10.0015 8.5V8.5015L10 8.50146V8.5H10.0015ZM7 8.5H7.0015L7.00146 8.5015L7 8.50146V8.5ZM4 8.5H4.0015L4.00146 8.5015L4 8.50146V8.5Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          ПРОГНОЗ НА 10 ДНЕЙ
          </p>

          <div className='dailyForecastInfo'>
            <div className='forecastRow'>
                <p>Сегодня</p>
                <img className='weather_icon_big' src={weatherForecast.forecast.forecastday[0].day.condition.icon}></img>
                <p className='minmaxTemp'>
                  {weatherForecast.forecast.forecastday[0].day.maxtemp_c}° 
                  <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 1L1 5M5 1L9 5M5 1V15.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  {weatherForecast.forecast.forecastday[0].day.mintemp_c}°
                  <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 15.4L9 11.4M5 15.4L1 11.4M5 15.4L5 1.00003" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>

                </p>
            </div>
            <div className='forecastRow'>
                <p>Завтра</p>
                <img className='weather_icon_big' src={weatherForecast.forecast.forecastday[1].day.condition.icon}></img>
                <p className='minmaxTemp'>
                {weatherForecast.forecast.forecastday[1].day.maxtemp_c}° 
                  <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 1L1 5M5 1L9 5M5 1V15.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  {weatherForecast.forecast.forecastday[1].day.mintemp_c}°
                  <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 15.4L9 11.4M5 15.4L1 11.4M5 15.4L5 1.00003" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </p>
            </div>
            <div className='forecastRow'>
                <p>{weatherForecast.forecast.forecastday[2].date.slice(8,10)}</p>
                <img className='weather_icon_big' src={weatherForecast.forecast.forecastday[2].day.condition.icon}></img>
                <p className='minmaxTemp'>
                {weatherForecast.forecast.forecastday[2].day.maxtemp_c}° 
                  <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 1L1 5M5 1L9 5M5 1V15.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  {weatherForecast.forecast.forecastday[2].day.mintemp_c}°
                  <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 15.4L9 11.4M5 15.4L1 11.4M5 15.4L5 1.00003" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </p>
            </div>
            <div className='forecastRow'>
                <p>{weatherForecast.forecast.forecastday[3].date.slice(8,10)}</p>
                <img className='weather_icon_big' src={weatherForecast.forecast.forecastday[3].day.condition.icon}></img>
                <p className='minmaxTemp'>
                {weatherForecast.forecast.forecastday[3].day.maxtemp_c}° 
                  <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 1L1 5M5 1L9 5M5 1V15.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  {weatherForecast.forecast.forecastday[3].day.mintemp_c}°
                  <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 15.4L9 11.4M5 15.4L1 11.4M5 15.4L5 1.00003" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </p>
            </div>
            <div className='forecastRow'>
                <p>{weatherForecast.forecast.forecastday[4].date.slice(8,10)}</p>
                <img className='weather_icon_big' src={weatherForecast.forecast.forecastday[4].day.condition.icon}></img>
                <p className='minmaxTemp'>
                {weatherForecast.forecast.forecastday[4].day.maxtemp_c}° 
                  <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 1L1 5M5 1L9 5M5 1V15.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  {weatherForecast.forecast.forecastday[4].day.mintemp_c}°
                  <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 15.4L9 11.4M5 15.4L1 11.4M5 15.4L5 1.00003" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </p>
            </div>
            <div className='forecastRow'>
                <p>{weatherForecast.forecast.forecastday[5].date.slice(8,10)}</p>
                <img className='weather_icon_big' src={weatherForecast.forecast.forecastday[5].day.condition.icon}></img>
                <p className='minmaxTemp'>
                {weatherForecast.forecast.forecastday[5].day.maxtemp_c}° 
                  <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 1L1 5M5 1L9 5M5 1V15.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  {weatherForecast.forecast.forecastday[5].day.mintemp_c}°
                  <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 15.4L9 11.4M5 15.4L1 11.4M5 15.4L5 1.00003" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </p>
            </div>
            <div className='forecastRow'>
                <p>{weatherForecast.forecast.forecastday[6].date.slice(8,10)}</p>
                <img className='weather_icon_big' src={weatherForecast.forecast.forecastday[6].day.condition.icon}></img>
                <p className='minmaxTemp'>
                {weatherForecast.forecast.forecastday[6].day.maxtemp_c}° 
                  <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 1L1 5M5 1L9 5M5 1V15.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  {weatherForecast.forecast.forecastday[6].day.mintemp_c}°
                  <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 15.4L9 11.4M5 15.4L1 11.4M5 15.4L5 1.00003" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </p>
            </div>
            <div className='forecastRow'>
                <p>{weatherForecast.forecast.forecastday[7].date.slice(8,10)}</p>
                <img className='weather_icon_big' src={weatherForecast.forecast.forecastday[7].day.condition.icon}></img>
                <p className='minmaxTemp'>
                {weatherForecast.forecast.forecastday[7].day.maxtemp_c}° 
                  <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 1L1 5M5 1L9 5M5 1V15.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  {weatherForecast.forecast.forecastday[7].day.mintemp_c}°
                  <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 15.4L9 11.4M5 15.4L1 11.4M5 15.4L5 1.00003" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </p>
            </div>
            <div className='forecastRow'>
                <p>{weatherForecast.forecast.forecastday[8].date.slice(8,10)}</p>
                <img className='weather_icon_big' src={weatherForecast.forecast.forecastday[8].day.condition.icon}></img>
                <p className='minmaxTemp'>
                {weatherForecast.forecast.forecastday[8].day.maxtemp_c}° 
                  <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 1L1 5M5 1L9 5M5 1V15.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  {weatherForecast.forecast.forecastday[8].day.mintemp_c}°
                  <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 15.4L9 11.4M5 15.4L1 11.4M5 15.4L5 1.00003" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </p>
            </div>
            <div className='forecastRow'>
                <p>{weatherForecast.forecast.forecastday[9].date.slice(8,10)}</p>
                <img className='weather_icon_big' src={weatherForecast.forecast.forecastday[9].day.condition.icon}></img>
                <p className='minmaxTemp'>
                {weatherForecast.forecast.forecastday[9].day.maxtemp_c}° 
                  <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 1L1 5M5 1L9 5M5 1V15.4" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                  {weatherForecast.forecast.forecastday[9].day.mintemp_c}°
                  <svg width="10" height="17" viewBox="0 0 10 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 15.4L9 11.4M5 15.4L1 11.4M5 15.4L5 1.00003" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </p>
            </div>
          </div>

        </div>
      ) 
      : (
      <div className='dayliForecast' 
      style={{background: "#282A65",
      color: "#FFF"
      }}>
        <p className='dayliText'><svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 2.5H3.40015C2.56007 2.5 2.13972 2.5 1.81885 2.66349C1.5366 2.8073 1.3073 3.0366 1.16349 3.31885C1 3.63972 1 4.06007 1 4.90015V5.5M4 2.5H10M4 2.5V1M10 2.5H10.6001C11.4402 2.5 11.8597 2.5 12.1805 2.66349C12.4628 2.8073 12.6929 3.0366 12.8367 3.31885C13 3.6394 13 4.05925 13 4.89768V5.5M10 2.5V1M1 5.5V12.1001C1 12.9402 1 13.36 1.16349 13.6809C1.3073 13.9632 1.5366 14.1929 1.81885 14.3367C2.1394 14.5 2.55925 14.5 3.39768 14.5H10.6023C11.4408 14.5 11.86 14.5 12.1805 14.3367C12.4628 14.1929 12.6929 13.9632 12.8367 13.6809C13 13.3604 13 12.9411 13 12.1027V5.5M1 5.5H13M10 11.5H10.0015L10.0015 11.5015L10 11.5015V11.5ZM7 11.5H7.0015L7.00146 11.5015L7 11.5015V11.5ZM4 11.5H4.0015L4.00146 11.5015L4 11.5015V11.5ZM10.0015 8.5V8.5015L10 8.50146V8.5H10.0015ZM7 8.5H7.0015L7.00146 8.5015L7 8.50146V8.5ZM4 8.5H4.0015L4.00146 8.5015L4 8.50146V8.5Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        ПРОГНОЗ НА 10 ДНЕЙ</p>

        

      </div>
      )}

    <div className='info'>
            <div className='powered'>
              <p className='powered_text'>Powered by <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a></p>
              <p className='powered_text'>Images by wirestock</p>
              <p className='powered_text'>Made by Benjamin</p>
            </div>
            <p className='version'>Version : {version}</p>
          </div>
    </div>
  );
};

export default Weather;
