import React from "react";
import styled from "@emotion/styled";

const FooterWrapper = styled.div({
  height: "75px",
  width: "100%",
  background: "rgb(29,26,55)",
  backgroundPosition: "bottom",
  display: "flex"
});

const CopyRight = styled.p({
  color: "rgb(132,129,160)"
});

const FooterContainer = styled.div({
  top: "50%",
  left: "50%",
  display: "flex",
  alignItems: "center",
  alignContent: "center",
  margin: "0 auto"
});

const Footer = () => (
  <FooterWrapper>
    <FooterContainer>
      <CopyRight>@2019ClasslllAPI - Powerd by Classlll</CopyRight>
    </FooterContainer>
  </FooterWrapper>
);

export default Footer;
