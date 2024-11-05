import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import ConntactHeader from './components/ContactHeader/ConntactHeader'
import Navigation from './components/Navigation/Navigation'

function App() {
  return (
    <div>
      <Navigation/>
      <ConntactHeader/>
      <ContactForm/>
    </div>
  )
}

export default App
