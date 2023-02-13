import React from "react";
import styled from 'styled-components';
import commonStyles from "../common-styles";
import Btn from "./btn";
import { AccentText } from "../components-with-styles";

export default function Cta(props) {
  const { text, btnText, gradientColor } = props;

  const CtaWrap = styled.div`
    border-radius: ${commonStyles.design.borderRadius};
    padding: 30px;
    max-width: 840px;

    @media (min-width: ${commonStyles.breakpoints.lg}px) {
      padding: 40px 60px;
    }
  `;

  return (
    <CtaWrap className={`mx-auto bg-gradient--${gradientColor}`}>
      <AccentText className="text-stroke">
        { text }
      </AccentText>
      <div className="pt-4 text-center">
        <Btn isInverted={true}>{ btnText }</Btn>
      </div>
    </CtaWrap>
  )
}