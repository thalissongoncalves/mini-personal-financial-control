import { Plus, Minus } from 'lucide-react';
import "./TransactionItem.css"

const TransactionItem = () => {
  return(
    <div className='transaction-item-container'>
      <div className='item'>
        <span>
          <Plus size={20} />
          <Minus size={20} />
          &nbsp;Salário
        </span>
        <span>
          R$ 3.000
        </span>
      </div>
      <hr style={{border: '0.1px solid rgba(226, 226, 226, 0.65)', width: '100%'}} />
    </div>
  )
}

export default TransactionItem;