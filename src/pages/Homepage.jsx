import React, { useState } from 'react'
import Input from './Input'
function Homepage({api}) {
    const [text, updateText] = useState('')
    const [weather, setWeather] = useState(null)

    const getData = async () => {
        let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${text}?key=${api}`
        try
        {
            const data = await fetch(url);
            const response = await data.json()
            console.log(response)
            setWeather(response)
        }
        catch (e)
        {
            console.error(e)
        }
    }
    const loading = () => {

        return (
            <>
                <div className="inputContainer">
                    <Input type={'text'} text={'Enter Location'} state = {text} setState={updateText}/>
                    <button onClick={getData}>Submit</button>
                </div>    
            </>
          )
    } 

    const loaded = () => {
        return(
            <>
            <div className="inputContainer">
                     <Input type={'text'} text={'Enter Location'} state = {text} setState={updateText}/>
                     <button onClick={getData}>Submit</button>
             </div>
             <div className="information">
                <h1>{weather.resolvedAddress}</h1>
                <h3>Todays conditions: {weather.days[0].conditions}</h3>
                <h3>Max Temperature: {weather.days[0].tempmax} </h3>
                <h3>Min Temperature: {weather.days[0].tempmin} </h3>
                <h3>Humidity: {weather.days[0].humidity} </h3>

                
             </div>
             
         </>
        )
       
    }
       
    

  return weather ? loaded(): loading();
}

export default Homepage