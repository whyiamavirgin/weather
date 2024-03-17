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
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Geolocation from 'react-native-geolocation-service'
import Switch from '@mui/material/Switch';
import { SwitchLovely } from './mui-treasury/switch-lovely/SwitchLovely.tsx';
import WeeklyForecast from './WeeklyForecast.js';

// Импортируем файлы для облачной погоды

import Cloudy_day from "./images/cloudy/cloudy_day.png"
import Cloudy_sunrise from "./images/cloudy/cloudy_sunrise.png"
import Cloudy_night from "./images/cloudy/cloudy_night.png"
import Cloudy_sunset from "./images/cloudy/cloudy_sunset.png"
import Cloudy_icon from "./images/cloudy/cloudy_icon.png"

// Импортируем файлы для солнечной погоды

import Sunny_day from "./images/sunny/sunny_day.png"
import Sunny_sunrise from "./images/sunny/sunny_sunrise.jpg"
import Sunny_sunset from "./images/sunny/sunny_sunset.png"
import Sunny_night from "./images/sunny/sunny_night.png"
import Sunny_icon from "./images/sunny/sunny_icon.png"


// Импортируем файлы для дождливой погоды

import Rainy_day from "./images/rainy/rainy_day.png"
import Rainy_sunrise from "./images/rainy/rainy_sunrise.png"
import Rainy_night from "./images/rainy/rainy_night.png"
import Rainy_sunset from "./images/rainy/rainy_sunset.png"
import Rainy_icon from "./images/rainy/rainy_icon.png"

// Импортируем файлы для снежной погоды

import Snowy_day from "./images/snowy/snowy_day.png"
import Snowy_sunrise from "./images/snowy/snowy_day.png"
import Snowy_sunset from "./images/snowy/snowy_day.png"
import Snowy_night from "./images/snowy/snowy_night.png"
import Snowy_icon from "./images/snowy/snowy_icon.png"
import { set } from 'countapi-js';


moment.locale('ru')



const Weather = () => {

  const version = '1.0.0'

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
  const [currentHourBgColorEx, setCurrentHourBgColorEx] = useState(null)
  const [futureBgColorEx, setFutureHourBgColorEx] = useState(null)
  const [gradientUp, setGradientUp] = useState(null)
  const [gradientDown, setGradientDown] = useState(null)

  




  let localTimeVar
  let localTimeVarInt

  let localDayVar
  let localDayVarInt
  let localMonthVar
  let uvIndex 
  let uvIndexLowHigh
  let uvColor

  let latitude = 0 
  let longitude = 0 

  let weekDay = moment().format('dddd').toUpperCase()


  

  const cloudy = ["Переменная облачность", 'Облачно', "Пасмурно", "Дымка", "Туман","Переохлажденный туман", "Поземок"]

  const sunny = ["Солнечно", "Ясно"]

  const snowy = ["Местами снег", "Местами дождь со снегом", "Местами замерзающая морось", "Метель","Местами небольшой снег","Небольшой снег", 
  "Местами умеренный снег","Умеренный снег","Местами сильный снег","Сильный снег", "Небольшой снег","Умеренный или сильный снег"]

  const rainy = ["Местами слабая морось","Слабая морось","Замерзающая морось","Сильная замерзающая морось","Местами небольшой дождь","Небольшой дождь",
  "Временами умеренный дождь","Умеренный дождь","Временами сильный дождь","Сильный дождь",
  "Слабый переохлажденный дождь","Умеренный или сильный переохлажденный дождь","Небольшой дождь со снегом","Умеренный или сильный дождь со снегом",
  "Ледяной дождь","Небольшой ливневый дождь", "Умеренный или сильный ливневый дождь", "Сильные ливни","Небольшой ливневый дождь со снегом","Умеренные или сильные ливневые дожди со снегом",
  "Небольшой ледяной дождь", "Умеренный или сильный ледяной дождь", "В отдельных районах местами небольшой дождь с грозой",
  "В отдельных районах умеренный или сильный дождь с грозой","В отдельных районах местами небольшой снег с грозой","В отдельных районах умеренный или сильный снег с грозой"]


  

  const getLocation = () => {

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error, options);
      } else {
        console.log("Geolocation not supported");
      }
      
      function success(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
        fetchData()
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

  const [checked, setChecked] = useState(false);


  const handleChange = (event) => {
    setChecked(event.target.checked);
    console.log(checked)
  };

  const fetchData = async () => {

    try {
      // const responseIP = await axios.get(
      //   `https://api.weatherapi.com/v1/ip.json?key=a81b4414f60f4c868a8162028241702&q=auto:ip`
      // );
      
      console.log(longitude)

      const responseForecast = await axios.get(
        `https://api.weatherapi.com/v1/forecast.json?key=a81b4414f60f4c868a8162028241702&q=${latitude},${longitude}&lang=ru&days=3`
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
            setWeatherIcon(Sunny_icon)
            setHourForecastBgColor("#FFC3A0")
            setDailyForecastBgColor("#FFB080")
            setCurrentHourBgColorEx('#FF6461')
            setFutureHourBgColorEx('#F174A3')
            setGradientUp("#E18FAE")
            setGradientDown("#F29C9A")
            console.log(futureBgColorEx)
          } else if(localTimeVarInt >= 13 && localTimeVarInt < 20){
            setbgImagePath(Sunny_day)
            setBgColor("#FEFEFE")
            setTextColor("#76BD15")
            setWeatherIcon(Sunny_icon)
            setHourForecastBgColor("#8DDE1D")
            setDailyForecastBgColor("#8DE119")
            setCurrentHourBgColorEx('#1480CD')
            setFutureHourBgColorEx('#71CADC')
            setGradientUp("#72CBDD")
            setGradientDown("#0C8ECF")
          } else if(localTimeVarInt >= 20 && localTimeVarInt <= 23){
            setbgImagePath(Sunny_sunset)
            setBgColor("#F8676E")
            setTextColor("#FBF48A")
            setWeatherIcon(Sunny_icon)
            setHourForecastBgColor("#FF787F")
            setDailyForecastBgColor("#FF898F")
            setCurrentHourBgColorEx('#FF6461')
            setFutureHourBgColorEx('#FF8FA3')
            setGradientUp("#FFD6BF")
            setGradientDown("#EE727A")
        } else if(localTimeVarInt >= 0 && localTimeVarInt < 6){
          setbgImagePath(Sunny_night)
          setBgColor("#F8676E")
          setTextColor("#FBF48A")
          setWeatherIcon(Sunny_icon)
          setHourForecastBgColor("#FF787F")
          setDailyForecastBgColor("#FF898F")
          setCurrentHourBgColorEx('#102A63')
          setFutureHourBgColorEx('#3E8EEB')
          setGradientUp("#1D6CC9")
          setGradientDown("#1B3D73")
      } 
        } else if(cloudy.indexOf(`${responseForecast.data.current.condition.text}`) > -1) {
          
          if(localTimeVarInt >= 6 && localTimeVarInt < 12) {
            setbgImagePath(Cloudy_sunrise)
            setBgColor("#D0736B")
            setTextColor("#FFAC8A")
            setWeatherIcon(Cloudy_icon)
            setHourForecastBgColor("#F5928A")
            setDailyForecastBgColor("#FFB7B1")
            setCurrentHourBgColorEx('#FFA83A')
            setFutureHourBgColorEx('#FFEE99')
            setGradientUp("#FDE1A0")
            setGradientDown("#F2A658")
          } else if(localTimeVarInt >= 12 && localTimeVarInt < 19){
            setbgImagePath(Cloudy_day)
            setBgColor("#FEB0A5")
            setTextColor("#FFFDD4")
            setWeatherIcon(Cloudy_icon)
            setHourForecastBgColor("#FF9484")
            setDailyForecastBgColor("#FF826F")
            setCurrentHourBgColorEx('#394750')
            setFutureHourBgColorEx('#93A1A1')
            setGradientUp("#E5E0CD")
            setGradientDown("#3D4B54")
          } else if(localTimeVarInt >= 19 && localTimeVarInt < 23){
            setbgImagePath(Cloudy_sunset)
            setBgColor("#2887C5")
            setTextColor("#F4B5BE")
            setWeatherIcon(Cloudy_icon)
            setHourForecastBgColor("#FFA2AF")
            setDailyForecastBgColor("#FF7F91")
            setCurrentHourBgColorEx('#FF739E')
            setFutureHourBgColorEx('#FF9BAD')
            setGradientUp("#E0BECF")
            setGradientDown("#FF87AB")
          } else if(localTimeVarInt >= 23 && localTimeVarInt < 6){
            setbgImagePath(Cloudy_night)
            setBgColor("#282A65")
            setTextColor("#9882BF")
            setWeatherIcon(Cloudy_icon)
            setHourForecastBgColor("#36388B")
            setDailyForecastBgColor("#484BB0")
            setCurrentHourBgColorEx('#0C192C')
            setFutureHourBgColorEx('#2A394E')
            setGradientUp("#708288")
            setGradientDown("#19283F")
          } else {
            setbgImagePath(Cloudy_night)
            setBgColor("#282A65")
            setTextColor("#9882BF")
            setWeatherIcon(Cloudy_icon)
            setHourForecastBgColor("#36388B")
            setDailyForecastBgColor("#484BB0")
            setCurrentHourBgColorEx('#0C192C')
            setFutureHourBgColorEx('#2A394E')
            setGradientUp("#708288")
            setGradientDown("#19283F")
          }
        } else if(rainy.indexOf(`${responseForecast.data.current.condition.text}`) > -1) {
          if(localTimeVarInt >= 6 && localTimeVarInt < 13) {
            setbgImagePath(Rainy_sunrise)
            setBgColor("#E6ECEB")
            setTextColor("#141F1B")
            setWeatherIcon(Rainy_icon)
            setHourForecastBgColor("#57868B")
            setDailyForecastBgColor("#629AA0")
            setCurrentHourBgColorEx('#0C191F')
            setFutureHourBgColorEx('#6BB1B3')
            setGradientUp("#448F97")
            setGradientDown("#0D1B1C")
          } else if(localTimeVarInt >= 13 && localTimeVarInt < 18){
            setbgImagePath(Rainy_day)
            setBgColor("#544E48")
            setTextColor("#FFFFFF")
            setWeatherIcon(Rainy_icon)
            setHourForecastBgColor("#77DBBC")
            setDailyForecastBgColor("#6DE3BF")
            setCurrentHourBgColorEx('#0C191F')
            setFutureHourBgColorEx('#727471')
            setGradientUp("#343B43")
            setGradientDown("#000000")
          } else if(localTimeVarInt >= 18 && localTimeVarInt < 23){
            setbgImagePath(Rainy_sunset)
            setBgColor("#090C10")
            setTextColor("#BDD095")
            setWeatherIcon(Rainy_icon)
            setHourForecastBgColor("#7A6592")
            setDailyForecastBgColor("#9278AF")
            setCurrentHourBgColorEx('#121B1D')
            setFutureHourBgColorEx('#365B61')
            setGradientUp("#1C4141")
            setGradientDown("#111C20")
          } else if(localTimeVarInt >= 23 && localTimeVarInt < 6){
            setbgImagePath(Rainy_night)
            setBgColor("#5F7A25")
            setTextColor("#FFFFFF")
            setWeatherIcon(Rainy_icon)
            setHourForecastBgColor("#7A6592")
            setDailyForecastBgColor("#9278AF")
            setCurrentHourBgColorEx('#121B1D')
            setFutureHourBgColorEx('#365B61')
            setGradientUp("#1C4141")
            setGradientDown("#111C20")
          } 
        }
        else if(snowy.indexOf(`${responseForecast.data.current.condition.text}`) > -1) {
          if(localTimeVarInt >= 6 && localTimeVarInt < 13) {
            setbgImagePath(Snowy_day)
            setBgColor("#99B8CC")
            setTextColor("#E4F1F9")
            setWeatherIcon(Snowy_icon)
            setHourForecastBgColor("#749DB8")
            setDailyForecastBgColor("#5C89A6")
            setCurrentHourBgColorEx('#03253A')
            setFutureHourBgColorEx('#124866')
            setGradientUp("#D1DADA")
            setGradientDown("#084967")
          } else if(localTimeVarInt >= 13 && localTimeVarInt < 18){
            setbgImagePath(Snowy_day)
            setBgColor("#A7ACC4")
            setTextColor("#E2E2E3")
            setWeatherIcon(Snowy_icon)
            setHourForecastBgColor("#8D98C9")
            setDailyForecastBgColor("#7986C5")
            setCurrentHourBgColorEx('#2E414F')
            setFutureHourBgColorEx('#4F5F6E')
            setGradientUp("#AFA7A1")
            setGradientDown("#455866")
          } else if(localTimeVarInt >= 18 && localTimeVarInt < 23){
            setbgImagePath(Snowy_sunset)
            setBgColor("#99B8CC")
            setTextColor("#E4F1F9")
            setWeatherIcon(Snowy_icon)
            setHourForecastBgColor("#749DB8")
            setDailyForecastBgColor("#5C89A6")
            setCurrentHourBgColorEx('#0C1325')
            setFutureHourBgColorEx('#182C4D')
            setGradientUp("#071434")
            setGradientDown("#0C1325")
          } else if(localTimeVarInt >= 23 && localTimeVarInt < 6){
            setbgImagePath(Snowy_night)
            setBgColor("#A7ACC4")
            setTextColor("#E2E2E3")
            setWeatherIcon(Snowy_icon)
            setHourForecastBgColor("#8D98C9")
            setDailyForecastBgColor("#7986C5")
            setCurrentHourBgColorEx('#0C1325')
            setFutureHourBgColorEx('#656D8C')
            setGradientUp("#AFB6D3")
            setGradientDown("#0C1325")
          } 
        } else {
          setbgImagePath(Snowy_night)
          setBgColor("#A7ACC4")
          setTextColor("#E2E2E3")
          setWeatherIcon(Cloudy_icon)
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
    uvIndex = weatherForecast.current.uv

    switch(uvIndex) {
      case 1:
      case 2:
        uvIndexLowHigh = "Низкий"
        uvColor = "#70e000"
        break
      case 3:
      case 4:
      case 5:
        uvIndexLowHigh = "Умеренный"
        uvColor = "#fcf300"
        break
      case 6:
      case 7:
        uvIndexLowHigh = "Высокий"
        uvColor = "#ff7b00"
        break
      case 8:
      case 9:
      case 10:
        uvIndexLowHigh = "Очень высокий"
        uvColor = "#bf0603"
        break
      default:
        uvIndexLowHigh = "Экстремальный"
        uvColor = "#7b2cbf"
        break
    }
  }  


  useEffect(() => {
    if(latitude != 0 ) {
      fetchData()
    }
    else {
      getLocation()

    }
    // setTimeout(() => {
    //   fetchData()
    // }, 0)
  }, []);



  return (
    <div className='main'  style={{
      backgroundImage: `url(${bgImagePath})`
      
    }}>

        

      {weatherForecast ? (
        <div className='card' id='card' style={{
          color: "#FFF"
        }}>
          <p className='date'>



            {weatherForecast.location.name}, {weatherForecast.location.country}
          </p>
          <p className='temperature'>
            {weatherForecast.current.temp_c}°
            <img className='weather_icon' src={weatherIcon}></img>
          </p>
          <p className='state'>{weatherForecast.current.condition.text}</p>
          <p className='minmax'>Макс: {weatherForecast.forecast.forecastday[0].day.maxtemp_c}° &nbsp;&nbsp; Мин: {weatherForecast.forecast.forecastday[0].day.mintemp_c}°</p>
          {/* <p className='current_date'>{weekDay}</p>
          <p className='feels_like'>Ощущается как {weatherForecast.current.feelslike_c}° | {weatherForecast.current.is_day ? ( "Закат " + weatherForecast.forecast.forecastday[0].astro.sunset) : ("Восход " + weatherForecast.forecast.forecastday[0].astro.sunrise)}</p> */}
          
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
          <p className='temperature'> <img className='weather_icon' src={Cloudy_icon}></img>  --°</p>
          <p className='state'>-----</p>
          <p className='minmax'>Макс. : --- </p>
          <p className='current_date'>-----</p>
          <p className='feels_like'>Ощущается как --° | ----</p>
          
        </div>
        
      )} 

      <>
        {weatherForecast ? (
          <div className='dailyWeeklyForecast'
            style={{background: `linear-gradient(${gradientUp}, ${gradientDown})` }}
          >
            <div className='controlSwitch'>
              <p>День</p>
              <SwitchLovely
                onChange={handleChange}
              />
              <p>Неделя</p>
            </div>


            {weatherForecast ? (
              <div className='dayForecast'> 
              {checked ? (
                <WeeklyForecast 
                currentBg={currentHourBgColorEx}
                futureBg={futureBgColorEx}/>
              ) : (
                <HourForecast 
                currentBg={currentHourBgColorEx}
                futureBg={futureBgColorEx}/>
              )}
              
              </div>
              
            ) : (
              <div className='dayForecast' style={{
                background: "#282A65",
                color: "#FFF"
              }}></div>
            )}

      {weatherForecast ?  (
        <div className='uvInfo'>
          <div className='uvIndex'>
            <p className='dayliText'>
              <svg className='sunSVG' width="14" height="14" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 11C6 13.7614 8.23858 16 11 16C13.7614 16 16 13.7614 16 11C16 8.23858 13.7614 6 11 6C8.23858 6 6 8.23858 6 11Z" fill="white"/>
              <path d="M11 3V1M11 19V21M5.41421 5.41421L4 4M16.728 16.728L18.1422 18.1422M3 11H1M19 11H21M16.7285 5.41421L18.1427 4M5.4147 16.728L4.00049 18.1422M11 16C8.23858 16 6 13.7614 6 11C6 8.23858 8.23858 6 11 6C13.7614 6 16 8.23858 16 11C16 13.7614 13.7614 16 11 16Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

                УФ-ИНДЕКС
              </p>
              <p className='uvIndexNum'>{uvIndex}</p>
              <p className='uvIndexHigh'>{uvIndexLowHigh}</p>
              <div className='slider'
              
              style={{
                color: uvColor
              }}>
                <Slider
                  size='small'
                  aria-label="UV"
                  defaultValue={uvIndex * 10 }
                  disabled
                />
              </div>
          </div>
          <div className='sunRise'>
            <p className='dayliText'>
              <svg className='sunSVG' width="18" height="18" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M36.75 33.25H5.25C4.78587 33.25 4.34075 33.0656 4.01257 32.7374C3.68438 32.4092 3.5 31.9641 3.5 31.5C3.5 31.0358 3.68438 30.5907 4.01257 30.2625C4.34075 29.9343 4.78587 29.75 5.25 29.75H36.75C37.2141 29.75 37.6592 29.9343 37.9874 30.2625C38.3156 30.5907 38.5 31.0358 38.5 31.5C38.5 31.9641 38.3156 32.4092 37.9874 32.7374C37.6592 33.0656 37.2141 33.25 36.75 33.25Z" fill="white"/>
              <path d="M36.75 26.25H35C34.5359 26.25 34.0907 26.0656 33.7625 25.7374C33.4344 25.4093 33.25 24.9641 33.25 24.5C33.25 24.0359 33.4344 23.5908 33.7625 23.2626C34.0907 22.9344 34.5359 22.75 35 22.75H36.75C37.2141 22.75 37.6592 22.9344 37.9874 23.2626C38.3156 23.5908 38.5 24.0359 38.5 24.5C38.5 24.9641 38.3156 25.4093 37.9874 25.7374C37.6592 26.0656 37.2141 26.25 36.75 26.25ZM7 26.25H5.25C4.78587 26.25 4.34075 26.0656 4.01257 25.7374C3.68438 25.4093 3.5 24.9641 3.5 24.5C3.5 24.0359 3.68438 23.5908 4.01257 23.2626C4.34075 22.9344 4.78587 22.75 5.25 22.75H7C7.46413 22.75 7.90925 22.9344 8.23744 23.2626C8.56563 23.5908 8.75 24.0359 8.75 24.5C8.75 24.9641 8.56563 25.4093 8.23744 25.7374C7.90925 26.0656 7.46413 26.25 7 26.25ZM30.905 16.345C30.4703 16.3253 30.0585 16.1444 29.75 15.8375C29.424 15.5096 29.2411 15.0661 29.2411 14.6038C29.2411 14.1414 29.424 13.6979 29.75 13.37L30.9925 12.1275C31.1494 11.9443 31.3424 11.7955 31.5595 11.6905C31.7766 11.5854 32.0131 11.5264 32.2541 11.5171C32.4951 11.5078 32.7355 11.5484 32.9601 11.6364C33.1846 11.7244 33.3886 11.8578 33.5591 12.0284C33.7297 12.1989 33.8631 12.4029 33.9511 12.6274C34.0391 12.852 34.0797 13.0923 34.0704 13.3333C34.0611 13.5744 34.002 13.8108 33.897 14.028C33.792 14.2451 33.6432 14.4381 33.46 14.595L32.2175 15.8375C32.0457 16.0083 31.8404 16.1416 31.6145 16.229C31.3886 16.3163 31.147 16.3559 30.905 16.345ZM11.095 16.345C10.6359 16.3431 10.196 16.1608 9.87 15.8375L8.6275 14.595C8.3408 14.2602 8.19099 13.8296 8.20801 13.3892C8.22502 12.9487 8.4076 12.5309 8.71926 12.2193C9.03093 11.9076 9.44872 11.725 9.88916 11.708C10.3296 11.691 10.7602 11.8408 11.095 12.1275L12.3375 13.37C12.6634 13.6979 12.8464 14.1414 12.8464 14.6038C12.8464 15.0661 12.6634 15.5096 12.3375 15.8375C12.174 15.9997 11.9801 16.128 11.7668 16.2151C11.5536 16.3022 11.3253 16.3463 11.095 16.345ZM21 12.25C20.5359 12.25 20.0907 12.0656 19.7626 11.7374C19.4344 11.4093 19.25 10.9641 19.25 10.5V8.75C19.25 8.28587 19.4344 7.84075 19.7626 7.51256C20.0907 7.18437 20.5359 7 21 7C21.4641 7 21.9092 7.18437 22.2374 7.51256C22.5656 7.84075 22.75 8.28587 22.75 8.75V10.5C22.75 10.9641 22.5656 11.4093 22.2374 11.7374C21.9092 12.0656 21.4641 12.25 21 12.25Z" fill="white"/>
              <path d="M28 23.3275C28.0104 25.0471 27.3874 26.7103 26.25 28H15.75C14.6125 26.7103 13.9896 25.0471 14 23.3275C14 21.471 14.7375 19.6905 16.0502 18.3777C17.363 17.065 19.1435 16.3275 21 16.3275C22.8565 16.3275 24.637 17.065 25.9497 18.3777C27.2625 19.6905 28 21.471 28 23.3275Z" fill="white"/>
              </svg>

              {weatherForecast.current.is_day ? ( "ЗАКАТ") : ("ВОСХОД")}
            </p>
            <p className='uvIndexNum'>
              {weatherForecast.current.is_day ? (weatherForecast.forecast.forecastday[0].astro.sunset) : (weatherForecast.forecast.forecastday[0].astro.sunrise)}
            </p>
            <p className='uvIndexHigh'>
            {weatherForecast.current.is_day ? ("Восход " + weatherForecast.forecast.forecastday[1].astro.sunrise) : ("Закат " + weatherForecast.forecast.forecastday[1].astro.sunset)}  
            </p>
          </div>
        </div>
      ) : (
        <div
        style={{
          background: "#282A65",
          color: "#FFF"
        }}
        ></div>
      )}

      
      <div className='wind'>
        {weatherForecast ? (
          <div className='windBlock'>
            <p className='dayliText'>
              <svg className='sunSVG' width="18" height="16" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.34884 3.47674C5.34884 1.5566 6.90542 0 8.82558 0C10.7457 0 12.3023 1.55659 12.3023 3.47674C12.3023 5.3969 10.7457 6.95349 8.82558 6.95349H1.87209C1.42898 6.95349 1.06977 6.59427 1.06977 6.15116C1.06977 5.70805 1.42898 5.34884 1.87209 5.34884H8.82558C9.85951 5.34884 10.6977 4.51067 10.6977 3.47674C10.6977 2.44281 9.85951 1.60465 8.82558 1.60465C7.79165 1.60465 6.95349 2.44281 6.95349 3.47674V3.8588C6.95349 4.30192 6.59427 4.66113 6.15116 4.66113C5.70805 4.66113 5.34884 4.30192 5.34884 3.8588V3.47674ZM13.907 5.61628C13.907 3.10531 15.9425 1.06977 18.4535 1.06977C20.9644 1.06977 23 3.10531 23 5.61628C23 8.12725 20.9644 10.1628 18.4535 10.1628H0.802326C0.359217 10.1628 0 9.80356 0 9.36046C0 8.91737 0.359217 8.55814 0.802326 8.55814H18.4535C20.0783 8.55814 21.3953 7.24102 21.3953 5.61628C21.3953 3.99154 20.0783 2.67442 18.4535 2.67442C16.8287 2.67442 15.5116 3.99154 15.5116 5.61628V6.15116C15.5116 6.59427 15.1524 6.95349 14.7093 6.95349C14.2662 6.95349 13.907 6.59427 13.907 6.15116V5.61628ZM2.13953 12.5698C2.13953 12.1267 2.49875 11.7674 2.94186 11.7674H18.4535C20.9644 11.7674 23 13.803 23 16.314C23 18.8249 20.9644 20.8605 18.4535 20.8605C15.9425 20.8605 13.907 18.8249 13.907 16.314V15.7791C13.907 15.336 14.2662 14.9767 14.7093 14.9767C15.1524 14.9767 15.5116 15.336 15.5116 15.7791V16.314C15.5116 17.9387 16.8287 19.2558 18.4535 19.2558C20.0783 19.2558 21.3953 17.9387 21.3953 16.314C21.3953 14.6892 20.0783 13.3721 18.4535 13.3721H2.94186C2.49875 13.3721 2.13953 13.0129 2.13953 12.5698Z" fill="white"/>
              </svg>
              ВЕТЕР
            </p>
            <div className='wind_speed'>
              <div className='wind_speed_num'>
                  <p>{weatherForecast.current.wind_kph}</p>
              </div>
              <div className='wind_speed_text'>
                <p>км/ч</p>
                <p>Ветер</p>
              </div>
            </div>
            <div className='white_line_second'></div>
            <div className='wind_speed'>
              <div className='wind_speed_num'>
                  <p>{weatherForecast.current.gust_kph}</p>
              </div>
              <div className='wind_speed_text'>
                <p>км/ч</p>
                <p>Порывы ветра</p>
              </div>
            </div>
          </div>
        ) : (
          <div
          style={{
            background: "#282A65",
            color: "#FFF"
          }}
          ></div>
        )}
        
      </div>
      <div className='info'>
            <div className='powered'>
              <p className='powered_text'>Powered by <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a></p>
              <p className='powered_text'>Images by wirestock</p>
              <p className='powered_text'>Made by Benjamin</p>
            </div>
            <p className='version'>Version : {version}</p>
      </div>

        
    </div>
        ) : (
          <div className='dailyWeeklyForecast'>

          </div>
        )}
      </>


      {/* {weatherForecast ? (
        <div className='dayliForecast' 
        style={{
        color: "#FFF"
        }}>
          <p className='dayliText'><svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 2.5H3.40015C2.56007 2.5 2.13972 2.5 1.81885 2.66349C1.5366 2.8073 1.3073 3.0366 1.16349 3.31885C1 3.63972 1 4.06007 1 4.90015V5.5M4 2.5H10M4 2.5V1M10 2.5H10.6001C11.4402 2.5 11.8597 2.5 12.1805 2.66349C12.4628 2.8073 12.6929 3.0366 12.8367 3.31885C13 3.6394 13 4.05925 13 4.89768V5.5M10 2.5V1M1 5.5V12.1001C1 12.9402 1 13.36 1.16349 13.6809C1.3073 13.9632 1.5366 14.1929 1.81885 14.3367C2.1394 14.5 2.55925 14.5 3.39768 14.5H10.6023C11.4408 14.5 11.86 14.5 12.1805 14.3367C12.4628 14.1929 12.6929 13.9632 12.8367 13.6809C13 13.3604 13 12.9411 13 12.1027V5.5M1 5.5H13M10 11.5H10.0015L10.0015 11.5015L10 11.5015V11.5ZM7 11.5H7.0015L7.00146 11.5015L7 11.5015V11.5ZM4 11.5H4.0015L4.00146 11.5015L4 11.5015V11.5ZM10.0015 8.5V8.5015L10 8.50146V8.5H10.0015ZM7 8.5H7.0015L7.00146 8.5015L7 8.50146V8.5ZM4 8.5H4.0015L4.00146 8.5015L4 8.50146V8.5Z" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          ПРОГНОЗ НА 3 ДНЯ
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
                <p>{weatherForecast.forecast.forecastday[1].date.slice(8,10)}</p>
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
            </div> */}
            {/* <div className='forecastRow'>
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
            </div> */}
          {/* </div>

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
      )} */}




            
    </div>

  );
};

export default Weather;
