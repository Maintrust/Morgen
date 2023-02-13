import React, { useState, useEffect } from "react";
import { isObjectEmpty, fetchSectionData } from "../functions";
import styled from 'styled-components';
import commonStyles from "../common-styles";

const StyledTable = styled.table`
  border-collapse:separate; 
  border-spacing: 0 1em;

  & th {
    width: 65px;
    font-size: 18px;
    font-weight: 900;
    padding-right: 15px;

    @media(min-width: ${commonStyles.breakpoints.md}px){
      width: 8%;
    }
  }

  & td {
    font-size: 18px;
    font-style: italic;
    font-weight: 300;
  }
`;

export default function RoadmapTable() {
  const [sectionData, setSectionData] = useState({});
  useEffect(fetchSectionData('roadmap', setSectionData), []);

  if (isObjectEmpty(sectionData)) {
    return null;
  }

  const fields = sectionData.roadmapSteps;
  function ProgressStep(props) {
    return props.isDone ? <s>{props.children}</s> : props.children;
  }
  
  return (
    <>
      <StyledTable>
        <tbody>
          { fields.map((field, index)=>{
            const isDone = (index < sectionData.progress);
            return (
              <tr key={field.progress}>
                <th>{field.progress}</th>
                <td>
                  <ProgressStep isDone={isDone}>{field.result}</ProgressStep>
                </td>
              </tr>
            )
          }) }
        </tbody>
      </StyledTable>
    </>
  )
}