import "./App.css";
import { useFormik } from "formik";
import * as Yup from "yup";

function App() {
  //  custom validation can be used if Yup is not used

  // const validate = (values) => {
  //   const errors = {};

  //   if (!values.name) {
  //     errors.name = "Name is required";
  //   } else if (values.name.length > 15) {
  //     errors.name = "Name must be of 15 characters or less";
  //   }

  //   return errors;
  // };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      gender: "",
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Name is true")
        .max(15, "Name must be of 15 characters or less"),
      email: Yup.string().required("Email is required").email("Invalid email"),
      password: Yup.string().required("Password is required"),
      gender: Yup.string()
        .oneOf(["M", "F"], "Select you gender")
        .required("Gender is required"),
    }),
    // validate,
    onSubmit: (values, isSubmitting) => {
      alert(isSubmitting ? "true" : "false");
      alert(JSON.stringify(values, null, 2));
      alert(isSubmitting ? "true" : "false");
    },
  });

  return (
    <div className="container">
      <section className="login-section">
        <code>npm install formik</code>
        <h1>A simple login form build using Formik</h1>
        <form onSubmit={formik.handleSubmit}>
          {/* FIELDS */}

          {/* name */}
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="error-message">{formik.errors.name}</div>
          )}

          {/* email */}
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            name="email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error-message">{formik.errors.email}</div>
          )}

          {/* password */}
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="text"
            name="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password && (
            <div className="error-message">{formik.errors.password}</div>
          )}

          {/* gender */}
          <label htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.gender}
          >
            <option value="">Select</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
          {formik.touched.gender && formik.errors.gender && (
            <div className="error-message">{formik.errors.gender}</div>
          )}
          <button type="submit" id="submit">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;
