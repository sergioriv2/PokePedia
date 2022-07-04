import Button from "./Button";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <label className="header__label">Listado de Pokemones</label>
      <div className="header-toolbar">
        <input
          className="header-toolbar__search"
          type="text"
          placeholder="Buscar"
        ></input>
        <Button type="button">Nuevo</Button>
      </div>
    </header>
  );
};

export default Header;
