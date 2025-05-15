import './App.css'
import Filter from './components/Filter'
import Header from './components/Header'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'

function App() {

  return (
    <div className='mainContainer'>
      <Header />
      <hr style={{border: '0.1px solid rgba(226, 226, 226, 0.65)'}} />
      <main>
        <TransactionForm />
        <hr style={{border: '0.1px solid rgba(226, 226, 226, 0.65)'}} />
        <Filter />
        <hr style={{border: '0.1px solid rgba(226, 226, 226, 0.65)'}} />
        <TransactionList />
      </main>
    </div>
  )
}

export default App
