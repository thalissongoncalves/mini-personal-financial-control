const TransactionForm = () => {
  return(
    <div className="transactionFormContainer">
      <form>
        <label>
          Descrição
          <input type="text" />
        </label>
        <label>
          Valor
          <input type="number" />
        </label>
        <label>
          Tipo
          <select />
        </label>
        <button>Adicionar</button>
      </form>
    </div>
  )
}

export default TransactionForm;