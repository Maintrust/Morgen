import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import styled from 'styled-components';
import commonStyles from '../common-styles';

const StyledImg = styled.img`
  border-radius: ${commonStyles.design.borderRadius};
`;

const TeammateName = styled.h5`
  margin-top: 20px;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
`;


export default function Teammates(props) {
  const {loading, error, data} = useFetch('teammates?populate=*', 'collection');

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    data.map((teammember,index)=>{
      return (
        <div key={index} className="col-sm-6 col-md-3 col-12 text-center mb-5">
          <StyledImg width="100%" src={teammember.attributes.avatar.data[0].attributes.url}/>
          <TeammateName>{teammember.attributes.name}</TeammateName>
          <p>{teammember.attributes.description}</p>
        </div>
      )
    })
  )
}