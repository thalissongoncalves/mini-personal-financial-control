import "./Header.css"

const Header = () => {
  return(
    <header className="headerContainer">
      <h1 className="headerTitle">Controle Financeiro Pessoal</h1>
      <h2 className="headerSubTitle">Total Atual: <span className="totalValue">R$ 2.200</span></h2>
    </header>
  )
}

export default Header;