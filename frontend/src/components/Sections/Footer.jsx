/**
 * Site footer present at the bottom
 */

import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import LogoImg from "@/assets/svg/Logo";

export default function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Wrapper>
      <div className="darkBg">
        <div className="container">
          <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
            <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
              <LogoImg /> 
              <h1 className="font25 extraBold whiteColor" style={{ marginLeft: "15px" }}>
                Tenant.AI
              </h1>
            </Link>
            <StyleP className="whiteColor font23">
              © {getCurrentYear()} - All Rights Reserved
            </StyleP>

            <Link className="whiteColor animate pointer font23" to="home" smooth={true} offset={-80}>
              Back to top
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

// Styled Components
const Wrapper = styled.section`
  width: 100%;
  background-color: #1c1c1e;
`;

const InnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyleP = styled.p`
  margin: 0;
`;
