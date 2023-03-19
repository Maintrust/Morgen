import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import commonStyles from "../common-styles";
import { TabWrap } from "../components-with-styles";

  const ImagesWrap = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 60px;
  `;

  const StyledFigure = styled.figure`
    padding: 20px;
    cursor: pointer;
    transition: border .2s;
    border-top: 5px solid transparent;
    
    &.active, &:hover, &:focus {
      border-top: 5px solid ${commonStyles.colors.accent};
    }

    img {
      width: 100%;
      max-width: 100px;
    }

    @media (min-width: ${commonStyles.breakpoints.lg}px) {
      padding: 20px 45px;
    }
  `;

export default function Tabs(props) {
  const { gradientColor } = props;
  const [selectedTab, selectTab] = useState(0);
  const [tabsData, setTabsData] = useState([]);

  useEffect(() => {
    fetch('https://gutenmorgenclub.herokuapp.com/api/tabs?populate=*')
      .then((response) => response.json())
      .then((data) => {
        setTabsData(data.data);
      });
  }, [])

  return (
    <>
      <ImagesWrap>
        {  tabsData.map ( ( tab, index ) => {
          const img = tab.attributes.Label.data.attributes;
            return (
              <>
                <StyledFigure 
                  key={img.name}
                  className={ index == selectedTab ? "active" : ""}
                  onClick={() => selectTab(index)}
                >
                  <img src={img.url}/>
                </StyledFigure>
              </>
            )
        } ) }
      </ImagesWrap>
      <TabWrap className={`mx-auto bg-gradient--${gradientColor}`}>
      { tabsData.map ( ( tab, index ) => {
        const tabAttributes = tab.attributes;
        return (
          <div key={index} className={ `tab-wrap ${index===selectedTab ? "active" : ""}` }>
            <h5 className="text-stroke">
              { tabAttributes.Title }
            </h5>
            <div className="pt-3">
              <p>{ tabAttributes.Text }</p>
            </div>
          </div>
        )
      })}
      </TabWrap>
    </>
  )
}