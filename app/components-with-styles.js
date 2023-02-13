import styled from 'styled-components';
import commonStyles from "./common-styles";

const Banner = styled.img`
  width: 100%;
  display: block;
  max-width: 1600px;
`;

const Container = styled.div`
  max-width: ${commonStyles.containerWidth.sm};
  @media (min-width: ${commonStyles.breakpoints.md}px) {
    max-width: ${commonStyles.containerWidth.md};
  }
  @media (min-width: ${commonStyles.breakpoints.lg}px) {
    max-width: ${commonStyles.containerWidth.lg};
  }
  ${props => props.isNarrow ? "" : `
    @media (min-width: ${commonStyles.breakpoints.xl}px) {
      max-width: ${commonStyles.containerWidth.xl};
    }`
  }

  margin-left: auto;
  margin-right: auto;
  padding-left: 24px;
  padding-right: 24px;
`;

const FluidContainer = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
`;

const Section = styled.section`
  margin-top: 70px;
  margin-bottom: 70px;
`;

const TabWrap = styled.div`
    border-radius: ${commonStyles.design.borderRadius};
    padding: 30px;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);

    @media (min-width: ${commonStyles.breakpoints.lg}px) {
      padding: 35px 45px;
    }

    .tab-wrap {
      display: none;

      &.active {
        display: block;
      }
    }
  `;

const AccentText = styled.p`
  font-weight: 700;
  font-size: 16px;
  color: #fff;
  margin-bottom: 0;
  letter-spacing: 2px;

  @media (min-width: ${commonStyles.breakpoints.lg}px) {
    font-size: 18px;
  }
`;

export { Banner, Container, FluidContainer, Section, TabWrap, AccentText }