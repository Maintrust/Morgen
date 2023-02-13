import React from "react";
import { FluidContainer } from "../components-with-styles";
import { Link } from 'react-router-dom'
import commonStyles from "../common-styles";
import styled from 'styled-components';
import Social from "../components/social";
import content from '../content.json';
import footerLogo from '../assets/img/footer/footer-logo.png';

const footerContent = content.footer;

const StyledFooter = styled.footer`
  border-top: 15px solid ${commonStyles.colors.accent};
`;

const StyledFooterLogo = styled.img`
  max-width: 100%;
  height: auto;
`;

export default function Footer(props) {
  return (
    <StyledFooter className="">
      <FluidContainer>
        <div className="row pt-5 pb-5 align-items-center">
          <div className="col-lg-4 col-12 mb-4 mb-lg-0 text-center text-lg-start">
            <Social />
          </div>
          <div className="col-lg-4 col-12 mb-4 mb-lg-0 text-center">
          <Link to="/">
            <StyledFooterLogo src={ footerLogo }/>
          </Link>
          </div>
          <div className="col-lg-4 col-12 mb-4 mb-lg-0 text-center text-lg-end">
            <p className="mb-0">{footerContent.company}</p>
            <Link to="/terms" className="invert">
              {footerContent.privacyLink}
            </Link>
          </div>
        </div>
      </FluidContainer>
    </StyledFooter>
  )
}