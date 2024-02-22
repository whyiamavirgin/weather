import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'
import LoaderExampleInlineCentered from './Loader';

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


const Weather = () => {

  const version = '0.1.0'

  const imageAttribution = "Image by wirestock"

  const [weatherData, setWeatherData] = useState(null);
  const [weatherDataAstro, setWeatherDataAstro] = useState(null);
  const [bgImagePath, setbgImagePath] = useState(null)
  const [bgColor, setBgColor] = useState(null)
  const [textColor, setTextColor] = useState(null)
  const [weatherIcon, setWeatherIcon] = useState(null)
  // const [getAutoIP, setIP] = useState("");
  const [ipData, setIPData] = useState(null)
  const [weatherForecast, setWeatherForecast] = useState(null)




  let localTimeVar
  let localTimeVarInt

  

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

      const responseAstro = await axios.get(
              `https://api.weatherapi.com/v1/astronomy.json?key=a81b4414f60f4c868a8162028241702&q=${responseIP.data.city}&lang=ru`
            ); 
            setWeatherDataAstro(responseAstro.data);
            console.log(responseAstro.data)

      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=a81b4414f60f4c868a8162028241702&q=${responseIP.data.city}&lang=ru`
      );
      setWeatherData(response.data);
      console.log(response.data); 

      // const responseForecast = await axios.get(
      //   `https://api.weatherapi.com/v1/forecast.json?key=a81b4414f60f4c868a8162028241702&q=${responseIP.data.city}&lang=ru&days=5`
      // )
      // setWeatherForecast(responseForecast.data)
      // console.log(responseForecast.data)

      //You can see all the weather data in console log
      
      if(response.data) {
        localTimeVar = response.data.location.localtime
        
        localTimeVarInt = parseInt(localTimeVar.slice(11,13))

        // console.log(localTimeVarInt)

        if(sunny.indexOf(`${response.data.current.condition.text}`) > -1) {
          if(localTimeVarInt >= 6 && localTimeVarInt < 13) {
            setbgImagePath(Sunny_sunrise)
            setBgColor("#FED7C0")
            setTextColor("#5D76AD")
            setWeatherIcon(Sunny_sunrise_icon)
          } else if(localTimeVarInt >= 13 && localTimeVarInt < 20){
            setbgImagePath(Sunny_day)
            setBgColor("#FEFEFE")
            setTextColor("#76BD15")
            setWeatherIcon(Sunny_day_icon)
          } else if(localTimeVarInt >= 20 && localTimeVarInt <= 23){
            setbgImagePath(Sunny_sunset)
            setBgColor("#F8676E")
            setTextColor("#FBF48A")
            setWeatherIcon(Sunny_sunset_icon)
        } else if(localTimeVarInt >= 0 && localTimeVarInt < 6){
          setbgImagePath(Sunny_sunset)
          setBgColor("#F8676E")
          setTextColor("#FBF48A")
          setWeatherIcon(Sunny_sunset_icon)
      } 
        } else if(cloudy.indexOf(`${response.data.current.condition.text}`) > -1) {
          
          if(localTimeVarInt >= 6 && localTimeVarInt < 12) {
            setbgImagePath(Cloudy_sunrise)
            setBgColor("#D0736B")
            setTextColor("#FFAC8A")
            setWeatherIcon(Cloudy_sunrise_icon)
          } else if(localTimeVarInt >= 12 && localTimeVarInt < 19){
            setbgImagePath(Cloudy_day)
            setBgColor("#FEB0A5")
            setTextColor("#FFFDD4")
            setWeatherIcon(Cloudy_day_icon)
          } else if(localTimeVarInt >= 19 && localTimeVarInt < 23){
            setbgImagePath(Cloudy_sunset)
            setBgColor("#2887C5")
            setTextColor("#F4B5BE")
            setWeatherIcon(Cloudy_sunset_icon)
          } else if(localTimeVarInt >= 23 && localTimeVarInt < 6){
            setbgImagePath(Cloudy_night)
            setBgColor("#282A65")
            setTextColor("#9882BF")
            setWeatherIcon(Cloudy_night_icon)
          } else {
            setbgImagePath(Cloudy_night)
            setBgColor("#282A65")
            setTextColor("#9882BF")
            setWeatherIcon(Cloudy_night_icon)
          }
        } else if(rainy.indexOf(`${response.data.current.condition.text}`) > -1) {
          if(localTimeVarInt >= 6 && localTimeVarInt < 13) {
            setbgImagePath(Rainy_sunrise)
            setBgColor("#40666A")
            setTextColor("#C9E8E0")
            setWeatherIcon(Rainy_day_icon)
          } else if(localTimeVarInt >= 13 && localTimeVarInt < 20){
            setbgImagePath(Rainy_day)
            setBgColor("#7FC3AE")
            setTextColor("#C9E8E0")
            setWeatherIcon(Rainy_day_icon)
          } else if(localTimeVarInt >= 20 && localTimeVarInt < 6){
            setbgImagePath(Rainy_night)
            setBgColor("#615273")
            setTextColor("#C2B8FF")
            setWeatherIcon(Rainy_night_icon)
        }
        } else if(snowy.indexOf(`${response.data.current.condition.text}`) > -1) {
          if(localTimeVarInt >= 6 && localTimeVarInt < 13) {
            setbgImagePath(Snowy_day)
            setBgColor("#99B8CC")
            setTextColor("#E4F1F9")
            setWeatherIcon(Snowy_day_icon)
          } else if(localTimeVarInt >= 13 && localTimeVarInt < 18){
            setbgImagePath(Snowy_night)
            setBgColor("#A7ACC4")
            setTextColor("#E2E2E3")
            setWeatherIcon(Snowy_night_icon)
          } else if(localTimeVarInt >= 18 && localTimeVarInt < 23){
            setbgImagePath(Snowy_day)
            setBgColor("#99B8CC")
            setTextColor("#E4F1F9")
            setWeatherIcon(Snowy_day_icon)
          } else if(localTimeVarInt >= 23 && localTimeVarInt < 6){
            setbgImagePath(Snowy_night)
            setBgColor("#A7ACC4")
            setTextColor("#E2E2E3")
            setWeatherIcon(Snowy_night_icon)
          } 
        } else {
          setbgImagePath(Snowy_night)
          setBgColor("#A7ACC4")
          setTextColor("#E2E2E3")
          setWeatherIcon(Snowy_night_icon)
        }
      }

    } catch (error) {
      console.error(error);
    }



    
    



 

  };



  

  useEffect(() => {
    setTimeout(() => {
      fetchData()
    }, 0)
  }, []);



  return (
    <div className='main'  style={{
      backgroundImage: `url(${bgImagePath})`
      
    }}>

        

      {weatherData ? (
        <div className='card' id='card' style={{
          background: bgColor,
          color: textColor
        }}>
          <p className='date'>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 9.92285C5 14.7747 9.24448 18.7869 11.1232 20.3252C11.3921 20.5454 11.5281 20.6568 11.7287 20.7132C11.8849 20.7572 12.1148 20.7572 12.271 20.7132C12.472 20.6567 12.6071 20.5463 12.877 20.3254C14.7557 18.7871 18.9999 14.7751 18.9999 9.9233C18.9999 8.08718 18.2625 6.32605 16.9497 5.02772C15.637 3.72939 13.8566 3 12.0001 3C10.1436 3 8.36301 3.7295 7.05025 5.02783C5.7375 6.32616 5 8.08674 5 9.92285Z" stroke={textColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 9C10 10.1046 10.8954 11 12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9Z" stroke={textColor} stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>


            {weatherData.location.name}</p>
          <p className='temperature'> <img className='weather_icon' src={weatherIcon}></img>  {weatherData.current.temp_c}°</p>
          <p className='state'>{weatherData.current.condition.text}</p>
          <p className='minmax'>Ветер {weatherData.current.wind_kph} км/ч</p>
          <p className='current_date'>{weatherData.location.localtime.slice(0,10)}</p>
          <p className='feels_like'>Ощущается как {weatherData.current.feelslike_c}° | {weatherData.current.is_day ? ( "Закат " + weatherDataAstro.astronomy.astro.sunset) : ("Восход " + weatherDataAstro.astronomy.astro.sunrise)}</p>
          
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

      {/* {weatherData ? (
        <div className='dayForecast' style={{
          background: bgColor,
          color: textColor
        }}>
          <p>aaa</p>
        </div>
      ) : (
        <div></div>
      )} */}

    <div className='info'>
            <div className='powered'>
              <p className='powered_text'>Powered by <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a></p>
              <p className='powered_text'>Images by wirestock</p>
            </div>
            <p className='version'>Version : {version}</p>
          </div>
    </div>
  );
};

export default Weather;
