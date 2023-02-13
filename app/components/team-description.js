import React from "react";
import styled from 'styled-components';
import commonStyles from "../common-styles";

const Name = styled.span`
  font-weight: 600;
  text-transform: uppercase;
  color: ${commonStyles.colors.accent}
`;

const Description = styled.i`
  text-transform: uppercase;
`;

export default function TeamDescription(props) {
  const team = [
    [
      'Lorem Ipsum.',
      'Lorem Ipsum santcrum ori.'
    ],
    [
      'Doctor.',
      'A nerd in a Рerfect World.'
    ],
    [
      'Lorem Ipsum.',
      'Lorem Ipsum santcrum ori.'
    ],
    [
      'No one.',
      'Probably is staying behind you.'
    ],
  ]

  return (
    <>
     { team.map((teammate, index)=>{
          return (
            <p key={index}>
              <Name>{teammate[0]} </Name>
              <Description>{teammate[1]}</Description>
            </p>
          )
        }) }
    </>
  )
}