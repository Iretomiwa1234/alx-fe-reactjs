import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email format").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
});

export default function FormikForm() {
  const initialValues = { username: "", email: "", password: "" };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Formik form submitted:", values);

    // Mock API simulation
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => console.log("Mock API response:", data));

    setSubmitting(false);
    resetForm();
  };

  return (
    <div className="p-4 border rounded w-80">
      <h2 className="text-lg font-bold mb-2">Formik Registration Form</h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="mb-2">
              <label className="block">Username:</label>
              <Field name="username" type="text" className="border p-1 w-full" />
              <ErrorMessage name="username" component="p" className="text-red-500" />
            </div>

            <div className="mb-2">
              <label className="block">Email:</label>
              <Field name="email" type="email" className="border p-1 w-full" />
              <ErrorMessage name="email" component="p" className="text-red-500" />
            </div>

            <div className="mb-2">
              <label className="block">Password:</label>
              <Field name="password" type="password" className="border p-1 w-full" />
              <ErrorMessage name="password" component="p" className="text-red-500" />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-green-500 text-white px-3 py-1 rounded"
            >
              {isSubmitting ? "Registering..." : "Register"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
