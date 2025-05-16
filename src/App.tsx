import { useEffect, useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Header from "./components/Header";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";

export interface IList {
  description: string,
  value: string,
  type: string
}

function App() {
  const [total, setTotal] = useState(0);
  const [allList, setAllList] = useState<IList[]>([]);
  const [revenueList, setRevenueList] = useState<IList[]>([]);
  const [expenseList, setExpenseList] = useState<IList[]>([]);

  useEffect(() => {
    revenueList.map((item) => setTotal(total + Number(item.value)))
  }, [revenueList])

  useEffect(() => {
    expenseList.map((item) => setTotal(total - Number(item.value)))
  }, [expenseList])

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
      <Filter />
      <hr
        style={{
          border: "0.1px solid rgba(226, 226, 226, 0.65)",
          width: "100%",
        }}
      />
      <TransactionList allList={allList} />
    </div>
  );
}

export default App;
