import { Formik, Form } from "formik";
import RangeField from "./RangeField";
import TextField from "./TextField";
import * as Yup from "yup";

import "./PokemonForm.css";
import Button from "../Button";
import { FormInitialValues } from "../../interfaces/FormInterfaces";
import SubmitButton from "./SubmitButton";

const initialValues: FormInitialValues = {
  name: "",
  image: "",
  attack: 0,
  defense: 0,
};

const PokemonForm = () => {
  return (
    <div className="form">
      <div className="form__title">
        <h3>Nuevo Pokemon</h3>
      </div>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string().required(),
          image: Yup.string().required(),
          attack: Yup.number().required(),
          defense: Yup.number().required(),
        })}
      >
        <Form className="form__content">
          <div className="form-column">
            <TextField label="Nombre" name="name"></TextField>
            <TextField
              label="Imagen"
              placeholder="url"
              name="image"
            ></TextField>
          </div>
          <div className="form-column">
            <RangeField label="Ataque" name="attack"></RangeField>
            <RangeField label="Defensa" name="defense"></RangeField>
          </div>
          <div className="form__buttons-container">
            <SubmitButton />
            <Button type="button">Cancelar</Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
export default PokemonForm;
