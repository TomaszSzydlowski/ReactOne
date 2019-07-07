import React from "react";
import Joi from "joi-browser";
import Form from "./comman/form";

class RegisterForm extends Form {
  state = {
    data: { name: "", mail: "", password: "" },
    errors: {}
  };

  schema = {
    name: Joi.string()
      .required()
      .label("Name"),
    mail: Joi.string()
      .email({})
      .required()
      .label("E-mail"),
    password: Joi.string()
      .min(5)
      .required()
      .label("Password")
  };

  doSubmit = () => {
    //Call the server
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("mail", "E-mail")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
