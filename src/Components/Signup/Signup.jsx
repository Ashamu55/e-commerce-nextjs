"use client"
import React from 'react'
import * as yup from 'yup';
import { useFormik } from "formik";
import { useRouter } from "next/navigation";

const Signup = () => {
    const router = useRouter();

  const schema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup.string().required("Email is required").email("Invalid email format"),
    password: yup.string().required("Password is required").min(8, "Password must be at least 8 characters"),
  });


  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
        localStorage.setItem("User", JSON.stringify(values));
        alert("Signup successful! You can now login.");
        router.push("/login");
      console.log(values);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit, isValid, dirty } = formik;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Signup Page</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          

          <div>
            <label htmlFor="firstName" className="block text-gray-600 font-medium">First Name</label>
            <input 
              type="text" 
              placeholder="First Name" 
              value={values.firstName}
              onChange={handleChange}
              id="firstName" 
              name="firstName" 
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            {errors.firstName && touched.firstName && <span className="text-red-500">{errors.firstName}</span>}
          </div>


          <div>
            <label htmlFor="lastName" className="block text-gray-600 font-medium">Last Name</label>
            <input 
              type="text" 
              placeholder="Last Name" 
              value={values.lastName}
              onChange={handleChange}
              id="lastName" 
              name="lastName" 
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            {errors.lastName && touched.lastName && <span className="text-red-500">{errors.lastName}</span>}
          </div>


          <div>
            <label htmlFor="email" className="block text-gray-600 font-medium">Email</label>
            <input 
              type="email" 
              placeholder="Email" 
              value={values.email}
              onChange={handleChange}
              id="email" 
              name="email" 
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            {errors.email && touched.email && <span className="text-red-500">{errors.email}</span>}
          </div>


          <div>
            <label htmlFor="password" className="block text-gray-600 font-medium">Password</label>
            <input 
              type="password" 
              placeholder="Password" 
              value={values.password}
              onChange={handleChange}
              id="password" 
              name="password" 
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
            {errors.password && touched.password && <span className="text-red-500">{errors.password}</span>}
          </div>


          <button 
            type="submit" 
            disabled={!isValid || !dirty}
            className={`w-full py-2 rounded-md transition duration-300 
              ${!isValid || !dirty ? "bg-gray-100 shadow-orange-950 cursor-not-allowed" : "bg-blue-500 text-white hover:bg-blue-600"}
            `}
          >
            Signup
          </button>

        </form>
      </div>
    </div>
  );
}

export default Signup;
