import { useState } from 'react'

import useCountDown from './hooks/useCountDown'
import NewYear from './assets/ramdom-image.jpg'

import Counter from './components/Counter'
import Title from './components/Title'


import './App.css'
function App() {
  const date = new Date()
  const nextYear = date.getFullYear() + 1
  const [day, hour, minute, second] = useCountDown(`Jan 1, ${nextYear} 00:00:00`)
  return (
    <div className="App" style={{backgroundImage: `url(${NewYear})`}}>
      <div className="container">
        <Title title={`Contagem regressiva para ${nextYear}`}/>
        <div className="countdown-container">
          <Counter title='Dias' number={day}/>
          <Counter title='Horas' number={hour}/>
          <Counter title='Minutos' number={minute}/>
          <Counter title='Segundos' number={second}/>
        </div>
      </div>
    </div>
  )
}

export default App
