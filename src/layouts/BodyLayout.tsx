import PokemonForm from "../components/Form/PokemonForm";
import PokemonsTable from "../components/PokemonsTable";

const BodyLayout = () => {
  return (
    <main>
      <PokemonsTable></PokemonsTable>
      <PokemonForm></PokemonForm>
    </main>
  );
};
export default BodyLayout;
