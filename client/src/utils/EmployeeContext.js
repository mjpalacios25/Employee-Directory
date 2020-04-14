import React from "react";

const EmployeeContext = React.createContext({
  name: "",
  department: "",
  role: "",
  email: ""
});

export default EmployeeContext;
