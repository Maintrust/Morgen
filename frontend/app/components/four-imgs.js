import React from "react";
import styled from 'styled-components';

export default function FourImgs(props) {
  const gap = '16px';

  const GridWrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: ${gap};
  `;

  const RoundedImg = styled.img`
    display: block;
    border-radius: 5px;
    width: calc(50% - (${gap}/2));
  `;
  
  return (
    <div>
      <GridWrap>
        <RoundedImg src={props.firstImg} />
        <RoundedImg src={props.secondImg} />
        <RoundedImg src={props.thirdImg} />
        <RoundedImg src={props.fourthImg} />
      </GridWrap>
    </div>
  )
}