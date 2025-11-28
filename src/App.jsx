import React from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";


const App = () => {
return (
<div style={{ padding: "20px" }}>
<LoginForm />
<hr />
<RegisterForm />
</div>
);
};


export default App;
