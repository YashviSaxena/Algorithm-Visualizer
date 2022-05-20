import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -50px;
  width: 100%;
  background:pink;
  padding:10px;
`;

export function Footer() {
  return (
    <FooterDiv>
      Made by&nbsp;<span><i><b>Takshima Goyal,</b></i></span>&nbsp;<span><i><b>Vibhuti Gupta</b></i></span>&nbsp;and &nbsp;<span><i><b>Yashvi Saxena</b></i></span>&nbsp;
    </FooterDiv>
  );
}
