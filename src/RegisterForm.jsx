import React from "react";
import useForm from "./useForm";


const RegisterForm = () => {
const { values, handleChange, handleSubmit, resetForm } = useForm({
name: "",
email: "",
course: "",
});


const registerHandler = (data) => {
console.log("Registration Data:", data);
resetForm();
};


return (
<div>
<h2>Student Registration</h2>
<form onSubmit={handleSubmit(registerHandler)}>
<input
type="text"
name="name"
placeholder="Enter Name"
value={values.name}
onChange={handleChange}
/>


<input
type="email"
name="email"
placeholder="Enter Email"
value={values.email}
onChange={handleChange}
/>


<input
type="text"
name="course"
placeholder="Enter Course"
value={values.course}
onChange={handleChange}
/>


<button type="submit">Register</button>
</form>
</div>
);
};


export default RegisterForm;