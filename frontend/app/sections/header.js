import React from "react";
import { Container } from "../components-with-styles";
import commonStyles from "../common-styles";
import styled from 'styled-components';
import Navigation from "../components/navigation";

const Header = styled.header`
  width: 100%;
  @media (max-width: ${commonStyles.breakpoints.md - 1}px) {
    position: fixed;
    z-index: 1;
  }
`;

const BurgerWrap = styled.div`
  background: ${commonStyles.colors.bgColor};
  margin-left: auto;
`;
 
const Burger = styled.button`
  position: relative;
  background: none;
  border: none;
  padding: 0;
  margin: 1em;
  height: 25px;
  width: 25px;
  z-index: 1;

  --stripe-height: 2px;

  @media (min-width: ${commonStyles.breakpoints.md}px) {
    display: none;
  }

  &::before, &::after {
    content: "";
    display: block;
    transition: top .2s, transform .2s;
  }

  & span, &::before, &::after {
    position: absolute;
    height: var(--stripe-height);
    width: 100%;
    background-color: ${commonStyles.colors.textColor};
    left: 0;
  }

  & span {
    top: 50%;
    transform: translateY(-50%);
    transition: opacity .2s;
  }

  &::before {
    top: var(--stripe-height);
  }

  &::after {
     top: calc(100% - (var(--stripe-height) * 2));
  }

  &.expanded {
    & span {
      opacity: 0;
    }

    &::before {
      top: 50%;
      transform: rotate(45deg);
    }

    &::after {
      top: 50%;
      transform: rotate(-45deg);
    }
  }
`;

const NavWrapper = styled.div`
  display: flex;
  height: 0;
  opacity: 0;
  width: 100%;
  text-align: right;
  align-items: center;
  justify-content: flex-end;
  transition: visibility 0s .4s, opacity .4s;
  visibility: hidden;
  
  &.expanded {
    visibility: visible;
    opacity: 1;
    transition: visibility 0s 0s, height .4s, opacity .4s;

    & ul {
      background: ${commonStyles.colors.bgColor};
    }
  }

  @media (min-width: ${commonStyles.breakpoints.md}px) {
    opacity: 1;
    visibility: visible;
    height: initial;
    &.expanded {
      height: initial;
    }
  }
`;

const MainRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;

  @media (min-width: ${commonStyles.breakpoints.md}px) {
    position: relative;
  }
`;

function MobileToggler(props) {
  return (
    <BurgerWrap>
      <Burger className={props.isExpanded ? "expanded" : ""} onClick={props.clickHandler}>
        <span></span>
      </Burger>
    </BurgerWrap>
  )
}

function MobileWrapper(props) {
  return (
    <NavWrapper className={props.isExpanded ? "expanded" : ""}>
       {props.children}
    </NavWrapper>
  )
}

export default class Bathroom extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isExpanded: false,
    }

    this.expandMenu = this.expandMenu.bind(this)
  }

  expandMenu() {
    this.setState({
      isExpanded: !this.state.isExpanded,
    })
  }

  render() {
    const { isExpanded } = this.state;
    return (
      <Header>
        <Container>
          <MainRow>
            <MobileToggler isExpanded={isExpanded} clickHandler={this.expandMenu}/>
            <MobileWrapper isExpanded={isExpanded}>
              <Navigation />
            </MobileWrapper>
          </MainRow>
        </Container>
      </Header>
    )
  }
}