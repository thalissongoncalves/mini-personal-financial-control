import './App.css'
import Header from './components/Header'
import TransactionForm from './components/TransactionForm'

function App() {

  return (
    <div className='mainContainer'>
      <Header />
      <hr style={{border: '0.1px solid rgba(226, 226, 226, 0.65)'}} />
      <TransactionForm />
      <hr style={{border: '0.1px solid rgba(226, 226, 226, 0.65)'}} />
    </div>
  )
}

export default App
