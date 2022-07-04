import "./PokemonsTable.css";

const PokemonsTable = () => {
  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <td>Nombre</td>
            <td>Imagen</td>
            <td>Ataque</td>
            <td>Defensa</td>
            <td>Acciones</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ivysaur</td>
            <td>Ivysaur</td>
            <td>65</td>
            <td>38</td>
            <td>Lapiz y Tachito</td>
          </tr>
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
};

export default PokemonsTable;
