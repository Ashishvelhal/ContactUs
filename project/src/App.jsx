import './App.css'
import ContactForm from './components/ContactForm/ContactForm'
import ConntactHeader from './components/ContactHeader/ConntactHeader'
import Navigation from './components/Navigation/Navigation'

function App() {
  return (
    <div>
      <Navigation/>
    <main className="main_container">
    <ConntactHeader/>
    <ContactForm/>
    </main>
    </div>
  )
}

export default App
