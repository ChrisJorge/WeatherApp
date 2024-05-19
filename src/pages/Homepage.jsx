import React, { useState } from 'react'
import Input from './Input'
function Homepage({api}) {
    const [text, updateText] = useState('')

    const getData = async () => {
        let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${text}?key=${api}`
        try
        {
            const data = await fetch(url);
            const response = await data.json()
            console.log(response)
        }
        catch (e)
        {
            console.error(e)
        }
    }
  return (
    <>
        <div className="inputContainer">
            <Input type={'text'} text={'Enter Location'} state = {text} setState={updateText}/>
            <button onClick={getData}>Submit</button>
        </div>    
    </>
  )
}

export default Homepage