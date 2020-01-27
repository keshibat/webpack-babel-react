import React from "react";
import styled from "@emotion/styled";

const SignInButton = styled.button({
  minWidth: "165px",
  width: "20vw",
  height: "50px",
  letterSpacing: "0.5px",
  lineHeight: "50px",
  padding: "0 35px 0 35px",
  fontSize: "15px",
  background: "linear-gradient(90deg,rgba(70,59,199,1),rgba(50,145,255,1))",
  color: "white",
  textTransform: "uppercase",
  fontFamily: "Open Sans Condensed",
  fontWeight: "bolder",
  border: "none",
  borderRadius: "25px 25px 25px 25px",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  marginTop: "-30px"
});

const CustomButton = () => (
  <div>
    <SignInButton>Sign In</SignInButton>
  </div>
);

export default CustomButton;
