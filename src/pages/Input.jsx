import React from 'react'

function Input({state, setState}) {
  return (
    <input type={'text'} placeholder={'Enter A Location'} value={state} onChange={(text) => setState(text.target.value)} className='input'/>
  )
}

export default Input