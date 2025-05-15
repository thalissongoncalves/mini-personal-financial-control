import "./Filter.css"

const Filter = () => {
  return(
    <div className="filterContainer">
      <button className="filterBtnAll">Todas</button>
      <button className="filterBtnRevenues">Receitas</button>
      <button className="filterBtnExpenses">Despesas</button>
    </div>
  )
}

export default Filter;