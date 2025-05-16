import "./Filter.css";

interface IFilterSelected {
  filterSelected: string;
  setFilterSelected: React.Dispatch<React.SetStateAction<string>>;
}

const Filter = ({ filterSelected, setFilterSelected }: IFilterSelected) => {
  const handleAllSelected = () => {
    setFilterSelected("all");
  };

  const handleRevenueSelected = () => {
    setFilterSelected("revenue");
  };

  const handleExpenseSelected = () => {
    setFilterSelected("expense");
  };

  return (
    <div className="filterContainer">
      <button
        className={
          filterSelected === "all"
            ? "filterBtnAll filterBtnActivated"
            : "filterBtnAll"
        }
        onClick={handleAllSelected}
      >
        Todas
      </button>
      <button
        className={
          filterSelected === "revenue"
            ? "filterBtnRevenues filterBtnActivated"
            : "filterBtnRevenues"
        }
        onClick={handleRevenueSelected}
      >
        Receitas
      </button>
      <button
        className={
          filterSelected === "expense"
            ? "filterBtnExpenses filterBtnActivated"
            : "filterBtnExpenses"
        }
        onClick={handleExpenseSelected}
      >
        Despesas
      </button>
    </div>
  );
};

export default Filter;
