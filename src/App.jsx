import './App.css'
import Homepage from './pages/Homepage'

function App() {
  const apiKey = import.meta.env.VITE_APIKEY
  return (
    <>
      <Homepage api = {apiKey}/>
    </>
  )
}

export default App
