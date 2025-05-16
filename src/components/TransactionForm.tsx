import { useState } from "react";
import "./TransactionForm.css";
import type { IList } from "../App";

interface TransactionFormProps {
  allList: IList[];
  revenueList: IList[];
  expenseList: IList[];
  setAllList: React.Dispatch<React.SetStateAction<IList[]>>;
  setRevenueList: React.Dispatch<React.SetStateAction<IList[]>>;
  setExpenseList: React.Dispatch<React.SetStateAction<IList[]>>;
}

const TransactionForm = ({
  allList,
  revenueList,
  expenseList,
  setAllList,
  setRevenueList,
  setExpenseList,
}: TransactionFormProps) => {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("");

  const handleAddItem = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!description || !value || !type) return;

    const newItem: IList = { description, value, type };

    setAllList([...allList, newItem]);
    if (type === "revenue") setRevenueList([...revenueList, newItem]);
    else if (type === "expense") setExpenseList([...expenseList, newItem]);

    setDescription("");
    setValue("");
    setType("");
  };

  return (
    <form className="form-container" onSubmit={handleAddItem}>
      <label className="form-group">
        <span>Descrição</span>
        <input
          type="text"
          name="description"
          placeholder="Digite aqui. Ex: Conta de água"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
      </label>
      <label className="form-group">
        <span>Valor</span>
        <input
          type="string"
          name="value"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
      </label>
      <label className="form-group">
        <span>Tipo</span>
        <select
          name="type"
          onChange={(e) => setType(e.target.value)}
          value={type}
        >
          <option value="" disabled>
            Selecione um tipo
          </option>
          <option value="revenue">Receita</option>
          <option value="expense">Despesa</option>
        </select>
      </label>
      <div className="form-group button-group">
        <button>Adicionar</button>
      </div>
    </form>
  );
};

export default TransactionForm;
