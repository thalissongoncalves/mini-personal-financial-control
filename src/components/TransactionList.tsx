import type { IList } from "../App";
import TransactionItem from "./TransactionItem";
import "./TransactionList.css";

interface IAllList {
  filterSelected: string;
  allList: IList[];
  revenueList: IList[];
  expenseList: IList[];
}

const TransactionList = ({
  filterSelected,
  allList,
  revenueList,
  expenseList,
}: IAllList) => {
  return (
    <div className="transacion-list-container">
      {filterSelected == "all" &&
        allList.map((item, i) => (
          <TransactionItem
            key={i}
            description={item.description}
            value={item.value}
            type={item.type}
          />
        ))}
      {filterSelected == "revenue" &&
        revenueList.map((item, i) => (
          <TransactionItem
            key={i}
            description={item.description}
            value={item.value}
            type={item.type}
          />
        ))}
      {filterSelected == "expense" &&
        expenseList.map((item, i) => (
          <TransactionItem
            key={i}
            description={item.description}
            value={item.value}
            type={item.type}
          />
        ))}
    </div>
  );
};

export default TransactionList;
