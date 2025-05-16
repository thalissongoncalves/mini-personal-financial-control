import { Plus, Minus } from "lucide-react";
import "./TransactionItem.css";
import type { IList } from "../App";

const TransactionItem = ({ description, value, type }: IList) => {
  const valueFormated = Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <div className="transaction-item-container">
      <div className="item">
        {type == "revenue" ? (
          <span style={{ fontWeight: 600 }}>
            <Plus size={20} color="#5DCD60" /> &nbsp;{description}
          </span>
        ) : (
          <span style={{ fontWeight: 600 }}>
            <Minus size={20} color="red" /> &nbsp;{description}
          </span>
        )}
        {type == "revenue" ? (
          <span style={{ fontWeight: 600, color: "#5DCD60" }}>
            {valueFormated}
          </span>
        ) : (
          <span style={{ fontWeight: 600, color: "red" }}>{valueFormated}</span>
        )}
      </div>
      <hr
        style={{
          border: "0.1px solid rgba(226, 226, 226, 0.65)",
          width: "100%",
        }}
      />
    </div>
  );
};

export default TransactionItem;
