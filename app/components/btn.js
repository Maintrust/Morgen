import React from "react";
import styled from 'styled-components';
import commonStyles from "../common-styles";

export default function Btn(props) {
  const { href, className, isBlock, isInverted } = props;
  const { accent, textColor } = commonStyles.colors;
  const borderRadius = commonStyles.design.borderRadius;

  const StyledBtn = styled.a`
    display: ${isBlock ? 'block' : 'inline-block'};
    border-radius: ${borderRadius};
    padding: 1em;
    width: 100%;
    max-width: 290px;
    font-family: Lato, sans-serif;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    text-decoration: none;
    text-align: center;
    transition: color .3s, background-color .3s;
    color: ${isInverted ? textColor : '#000'};
    background-color: ${isInverted ? '#000' : accent };
    cursor: pointer;

    &:hover {
      color: #000;
      background-color: #fff;
    }
  `;
  return (
    <StyledBtn href={href} className={className}>{props.children}</StyledBtn>
  )
}