import "./Header.css";

interface IHeader {
  total: number;
}

const Header = ({ total }: IHeader) => {
  const totalFormated = total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <header className="headerContainer">
      <h1 className="headerTitle">Controle Financeiro Pessoal</h1>
      <h2 className="headerSubTitle">
        Total Atual:{" "}
        <span
          className={Number(total) >= 0 ? "totalValueGreen" : "totalValueRed"}
        >
          {totalFormated}
        </span>
      </h2>
    </header>
  );
};

export default Header;
