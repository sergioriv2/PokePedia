import { Formik, Form } from "formik";
import RangeField from "./RangeField";
import TextField from "./TextField";

import "./PokemonForm.css";

interface FormikInitialValues {
  name: string;
  image: string;
  attack: number;
  defense: number;
}

const inititialValues: FormikInitialValues = {
  name: "",
  image: "",
  attack: 0,
  defense: 0,
};

const PokemonForm = () => {
  return (
    <div className="form">
      <div className="form__title">
        <h2>Nuevo Pokemon</h2>
      </div>
      <Formik
        initialValues={inititialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="form__content">
          <TextField label="Nombre" name="name"></TextField>
          <TextField label="Imagen" name="image"></TextField>
          <RangeField label="Ataque" name="attack"></RangeField>
          <RangeField label="Defensa" name="defense"></RangeField>
          <button type="submit">Agregar</button>
          <button type="button">Cancelar</button>
        </Form>
      </Formik>
    </div>
  );
};
export default PokemonForm;
