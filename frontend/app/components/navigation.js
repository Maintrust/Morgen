import React from "react";
import { HashLink } from 'react-router-hash-link'
import { Link } from 'react-router-dom'
import commonStyles from "../common-styles";
import styled from 'styled-components';

const StyledUl = styled.ul`
  display: block;
  margin-bottom: 0;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  justify-content: space-between;
  transition: background .3s;

  @media (min-width: ${commonStyles.breakpoints.md}px) {
    display: flex;
    max-width: 720px;
  }

  & a {
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    font-family: ${commonStyles.typography.fontFamily.heading};
    letter-spacing: 1.5px;
    -webkit-text-stroke: .5px #000;
    font-size: 16px;
    font-weight: 700;
    padding: 1.66em 1.5em;
  }

  & li:first-child a {
    padding-left: 0;
  }

  & li:last-child a {
    padding-right: 0;
  }

  @media (max-width: ${commonStyles.breakpoints.md - 1}px) {
    padding-top: 140px;

    & a {
      font-size: 12px;
      padding: 1em 1.5em;
    }

    & li:last-child a {
      padding-right: 1.5em;
    }
  }
`;

export default function Navigation(props) {
  return (
    <StyledUl>
      <li>
        <HashLink to="/#buy-a-morgen">Buy a Morgen</HashLink>
      </li>
      <li>
        <HashLink to="/#roadmap">Roadmap</HashLink>
      </li>
      <li>
        <HashLink to="/#team">Team</HashLink>
      </li>
      {/* <li>
        <Link to='/gallery'>Gallery</Link>
      </li>
      <li>
        <Link to='/bathroom'>Bathroom</Link>
      </li> */}
    </StyledUl>
  )
}
