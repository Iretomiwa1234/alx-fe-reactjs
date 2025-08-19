import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm"; // ✅ lowercase file name

function App() {
  return (
    <div className="flex flex-col items-center gap-6 mt-10">
      <RegistrationForm />
      <FormikForm />
    </div>
  );
}

export default App;
