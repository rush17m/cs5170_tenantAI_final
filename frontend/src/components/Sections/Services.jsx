/**
 * Contains references to resources useful for tenants
 */


import React from "react";
import styled from "styled-components";
// Components
import ServiceBox from "@/components/Elements/ServiceBox";

export default function Services() {
  return (
    <Wrapper id="services">

      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">External Resources</h1>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <ServiceBox
                icon="roller"
                title="MASSLEGALHELP.org"
                subtitle="Information about Housing Law and Tenant Rights on MassLegalHelp.org."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title="UPTOCODE"
                subtitle="Get help solving problems that need to be repaired with your housing. Send a letter to your landlord, call an inspector, or get help from a judge. https://interviews.gbls.org/run/uptocode"
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="printer"
                title="Get legal help"
                subtitle="Use the Mass Legal Resource Finder to find free or low cost help from legal aid organizations that serve your city or town. https://masslrf.org/en/home" />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
      </div>
    </Wrapper>
  );
}


const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 30%;
  margin-right: 15%;
  padding: 80px 0;
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;