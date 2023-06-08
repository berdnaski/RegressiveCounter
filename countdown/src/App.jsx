import Title from './components/title'
import Counter from "./components/Counter"
import './App.css'
import NewYear from "./assets/comemoracao.jpg"
import useCountdown from "./components/hooks/useCountdown"
function App() {
const [day, hour, minute, second] = useCountdown("Jan 1, 2024 00:00:00")
  return (
    <div className='App' style={{backgroundImage: `url(${NewYear})`}}>
      <div className="container">
        <Title title="Contagem regressiva para 2024" />
        <div className="countdown-container">
          <Counter title="Dias" number={day} />
          <Counter title="Horas" number={hour} />
          <Counter title="Minutos" number={minute} />
          <Counter title="Segundos" number={second} />
        </div>
      </div>
    </div>
  )
}

export default App
