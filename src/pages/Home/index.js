import React, { Component } from "react";
import styled from "@emotion/styled";
import banner from "../../assets/banner2.png";

import HOME_DATA from "./home.data";
import CardList from "../../components/CardList/card-list.component.jsx";

const HomePageWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
});

const UpperDiv = styled.div`
  width: 100%;
  height: 65vh;
  background-color: #12122c;
  background-image: url(${banner});
  background-repeat: no-repeat;
`;

const MainTitleDiv = styled.div({
  justifyContent: "center",
  alignItems: "center"
});

const MainTitle = styled.h1({
  color: "rgb(213,212,218)",
  textAlign: "center"
});

const SubTitleDiv = styled.div({
  justifyContent: "center",
  alignItems: "center"
});

const SubTitle = styled.h3({
  color: "rgb(132,129,160)",
  textAlign: "center"
});

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      statistic: HOME_DATA
    };
  }

  render() {
    return (
      <HomePageWrapper>
        <UpperDiv>
          <MainTitleDiv>
            <MainTitle>吹迎来到CLASS|||翻蜂平台</MainTitle>
          </MainTitleDiv>
          <SubTitleDiv>
            <SubTitle>精准翻蜂　如比筒単</SubTitle>
          </SubTitleDiv>
         <CardList statistic={this.state.statistic}></CardList>
        </UpperDiv>
      </HomePageWrapper>
    );
  }
}

export default HomePage;
