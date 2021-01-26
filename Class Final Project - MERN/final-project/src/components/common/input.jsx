import React from "react";
 
const Input = ({ name, label, error, ...rest }) => {
  return (
    <React.Fragment>
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input {...rest} name={name} id={name} className="form-control" />
      {error && <li className="help-block text-danger">{error}</li>}
    </div>
    </React.Fragment>
  );
};
 
export default Input;