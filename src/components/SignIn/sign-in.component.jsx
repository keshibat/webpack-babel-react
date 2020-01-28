import React from "react";
import { withRouter } from "react-router";
import styled from "@emotion/styled";
import FormInput from "../FormInput/form-input.component";
import CustomButton from "../CustomButton/custom-button.component";
import ForgetPassword from "../ForgetPassword/forget-password.component";
import auth from "../stores/auth";

const SignInWrapper = styled.div({
  width: "380px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
});

const AccountTitle = styled.h2({
  color: "#2568b9",
  margin: "10px 0"
});

class SignIn extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = async event => {
    event.preventDefault();
    //TODO call auth API
    auth.signin(() => {
      this.props.history.push(this.props.location.state.from);
    });
  };

  handleInputChange = event => {
    const { target } = event;
    const { value } = target;
    const { name } = target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <SignInWrapper>
        <AccountTitle>I already have an account</AccountTitle>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleInputChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleInputChange}
            label="password"
            required
          />
          <CustomButton type="submit"> Sign in </CustomButton>
        </form>
        <ForgetPassword />
      </SignInWrapper>
    );
  }
}

export default withRouter(SignIn);
