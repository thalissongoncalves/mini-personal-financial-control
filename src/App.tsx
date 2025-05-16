import { useEffect, useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Header from "./components/Header";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

export interface IList {
  description: string;
  value: string;
  type: string;
}

function App() {
  const [total, setTotal] = useState<number>(0);
  const [allList, setAllList] = useState<IList[]>([]);
  const [revenueList, setRevenueList] = useState<IList[]>([]);
  const [expenseList, setExpenseList] = useState<IList[]>([]);
  const [filterSelected, setFilterSelected] = useState<string>("all");

  useEffect(() => {
    const totalRevenue = revenueList.reduce((acc, curr) => acc + Number(curr.value), 0);
    const totalExpense = expenseList.reduce((acc, curr) => acc + Number(curr.value), 0);
    setTotal(totalRevenue - totalExpense);
  }, [revenueList, expenseList]);

  return (
    <div className="mainContainer">
      <Header total={total} />
      <hr
        style={{
          border: "0.1px solid rgba(226, 226, 226, 0.65)",
          width: "100%",
        }}
      />
      <TransactionForm
        allList={allList}
        revenueList={revenueList}
        expenseList={expenseList}
        setAllList={setAllList}
        setRevenueList={setRevenueList}
        setExpenseList={setExpenseList}
      />
      <hr
        style={{
          border: "0.1px solid rgba(226, 226, 226, 0.65)",
          width: "100%",
        }}
      />
      <Filter
        filterSelected={filterSelected}
        setFilterSelected={setFilterSelected}
      />
      <hr
        style={{
          border: "0.1px solid rgba(226, 226, 226, 0.65)",
          width: "100%",
        }}
      />
      <TransactionList
        filterSelected={filterSelected}
        allList={allList}
        revenueList={revenueList}
        expenseList={expenseList}
      />
    </div>
  );
}

export default App;
