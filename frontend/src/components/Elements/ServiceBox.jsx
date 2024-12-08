/**
 * Section containing user-accessible services/resources
 */

import React from "react";
import styled from "styled-components";
// Assets
import RollerIcon from "@/assets/svg/Services/RollerIcon";
import MonitorIcon from "@/assets/svg/Services/MonitorIcon";
import BrowserIcon from "@/assets/svg/Services/BrowserIcon";
import PrinterIcon from "@/assets/svg/Services/PrinterIcon";

export default function ServiceBox({icon, title, subtitle}) {
  let getIcon;

  switch (icon) {
    case "roller":
      getIcon = <RollerIcon aria-label="roller icon"/>;
      break;
    case "monitor":
      getIcon = <MonitorIcon aria-label="laptop icon"/>;
      break;
    case "browser":
      getIcon = <BrowserIcon aria-label="form icon"/>;
      break;
    case "printer":
      getIcon = <PrinterIcon aria-label="printer icon"/>;
      break;
    default:
      getIcon = <RollerIcon aria-label=""/>;
      break;
  }


  return (
    <Wrapper className="flex flexColumn">
      <IconStyle >{getIcon}</IconStyle>
      <TitleStyle className="font27 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font17">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 30px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
`;