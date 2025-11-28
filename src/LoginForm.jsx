import React from "react";
import useForm from "./useForm";


const LoginForm = () => {
const { values, handleChange, handleSubmit } = useForm({
email: "",
password: "",
});


const loginHandler = (data) => {
console.log("Login Data:", data);
};


return (
<div>
<h2>Student Login</h2>
<form onSubmit={handleSubmit(loginHandler)}>
<input
type="email"
name="email"
placeholder="Enter Email"
value={values.email}
onChange={handleChange}
/>


<input
type="password"
name="password"
placeholder="Enter Password"
value={values.password}
onChange={handleChange}
/>


<button type="submit">Login</button>
</form>
</div>
);
};


export default LoginForm;