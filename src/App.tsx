import { BrowserRouter } from 'react-router-dom'
import { Router } from './components/Router'
import './global.css'

export function App() {
  return (
    <div>
      <BrowserRouter>
      <Router />
      <h1>Hello World!</h1>
      </BrowserRouter>
    </div>
  )
}
