import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div className="flex flex-col items-center gap-6 mt-10">
      {/* Controlled Components Form */}
      <RegistrationForm />

      {/* Formik + Yup Form */}
      <FormikForm />
    </div>
  );
}

export default App;
