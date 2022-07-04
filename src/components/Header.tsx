import Button from "./Button";
import "./Header.css";
// import Search from "./Search";

const Header = () => {
  return (
    <header className="header">
      <label className="header__label">Listado de Pokemones</label>
      <div className="header-toolbar">
        {/* <Search></Search> */}
        <Button type="button">Nuevo</Button>
      </div>
    </header>
  );
};

export default Header;
