import type { IList } from "../App";
import TransactionItem from "./TransactionItem";
import "./TransactionList.css";

interface IAllList {
  allList: IList[];
}

const TransactionList = ({ allList }: IAllList) => {
  return (
    <div className="transacion-list-container">
      {allList.map((item, i) => (
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
