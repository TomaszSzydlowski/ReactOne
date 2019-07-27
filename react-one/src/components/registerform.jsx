import React from "react";
import Joi from "joi-browser";
import Form from "./comman/form";
import * as userService from "../services/userService";

class RegisterForm extends Form {
  state = {
    data: { name: "", email: "", password: "" },
    errors: {}
  };

  schema = {
    name: Joi.string()
      .required()
      .label("Name"),
    email: Joi.string()
      .email({})
      .required()
      .label("E-mail"),
    password: Joi.string()
      .min(5)
      .required()
      .label("Password")
  };

  doSubmit = async () => {
    await userService.register(this.state.data);
  };

  render() {
    return (
      <div>
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("name", "Name")}
          {this.renderInput("email", "E-mail")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Register")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
