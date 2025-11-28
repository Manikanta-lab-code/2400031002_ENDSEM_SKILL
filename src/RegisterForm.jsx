import React from "react";
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
