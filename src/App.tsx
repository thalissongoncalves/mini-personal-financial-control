import { useState } from 'react'
import './App.css'
import Filter from './components/Filter'
import Header from './components/Header'
import TransactionForm from './components/TransactionForm'
import TransactionList from './components/TransactionList'

function App() {
  const [total, setTotal] = useState(0)

  return (
    <div className='mainContainer'>
      <Header total={total} />
      <hr style={{border: '0.1px solid rgba(226, 226, 226, 0.65)', width: '100%'}} />
      <TransactionForm />
      <hr style={{border: '0.1px solid rgba(226, 226, 226, 0.65)', width: '100%'}} />
      <Filter />
      <hr style={{border: '0.1px solid rgba(226, 226, 226, 0.65)', width: '100%'}} />
      <TransactionList />
    </div>
  )
}

export default App
