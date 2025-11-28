import { useState } from "react";


const useForm = (initialValues) => {
const [values, setValues] = useState(initialValues);


const handleChange = (e) => {
const { name, value } = e.target;


setValues((prev) => ({
...prev,
[name]: value,
}));


console.log(`Input Changed -> ${name}: ${value}`);
};


const handleSubmit = (callback) => (e) => {
e.preventDefault();
console.log("Form Submitted ->", values);
callback(values);
};


const resetForm = () => {
setValues(initialValues);
};


return {
values,
handleChange,
handleSubmit,
resetForm,
};
};


export default useForm;