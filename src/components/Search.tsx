import { Form, Formik } from "formik";
import TextField from "./Form/TextField";

import { SearchInitialValues } from "../interfaces/FormInterfaces";

const initialValues: SearchInitialValues = {
  search: "",
};

const Search = () => {
  return (
    <Formik initialValues={initialValues} onSubmit={() => {}}>
      <Form>
        <TextField name="search" placeholder="Buscar"></TextField>
      </Form>
    </Formik>
  );
};

export default Search;
