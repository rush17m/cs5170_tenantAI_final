/**
 * Contains code for Introduction to the chatbot
 */


import React from "react";
import styled from "styled-components";
// Components

export default function Ai() {
  return (
    <Wrapper id="ai">

      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Chat with our AI Assistant for tenants</h1>
          </HeaderInfo>
        </div>
      </div>
    </Wrapper>
  );
}


const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;