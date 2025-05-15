import { Plus, Minus } from 'lucide-react';

const TransactionList = () => {
  return(
    <div>
      <p>
        <span>
          <Plus size={20} />
          <Minus size={20} />
        </span>
        Salário
        <span>
          R$ 3.000
        </span>
      </p>
      <hr style={{border: '0.1px solid rgba(226, 226, 226, 0.65)', width: '90%'}} />
    </div>
  )
}

export default TransactionList;