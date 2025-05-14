import "./TransactionForm.css"

const TransactionForm = () => {
  return(
    <main>
      <form className="form-container">
        <label className="form-group">
          <span>Descrição</span>
          <input type="text" />
        </label>
        <label className="form-group">
          <span>Valor</span>
          <input type="number" />
        </label>
        <label className="form-group">
          <span>Tipo</span>
          <select>
            <option>Selecione um tipo</option>
            <option>Receita</option>
            <option>Despesa</option>
          </select>
        </label>
        <div className="form-group button-group">
          <button>Adicionar</button>
        </div>
      </form>
    </main>
  )
}

export default TransactionForm;