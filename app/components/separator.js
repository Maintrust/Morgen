import React from "react";
import styled from 'styled-components';
import commonStyles from "../common-styles";
import { Container } from "../components-with-styles";

const StyledSeparator = styled.hr`
  border-color: ${commonStyles.colors.textColor};
  opacity: 1;
  width: 100%;
`;

export default function Separator(props) {
  return (
    <Container>
      <StyledSeparator />
    </Container>
  )
}