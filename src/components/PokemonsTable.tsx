import { ApiInterface } from "../interfaces/ServerInterfaces";
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
          {/* {data.map((el) => (
            <tr key={el.id}>
              <td>{el.name}</td>
              <td>
                <img alt={el.name} src={el.image} className="table-image"></img>
              </td>
              <td>{el.attack}</td>
              <td>{el.defense}</td>
              <td>Lapiz y Tachito</td>
            </tr>
          ))} */}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
};

export default PokemonsTable;
