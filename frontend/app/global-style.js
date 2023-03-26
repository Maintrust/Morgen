import { createGlobalStyle } from 'styled-components';
import commonStyles from './common-styles';
 
const GlobalStyle = createGlobalStyle`
  html, body, #app {
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale
  }

  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  main {
    flex: 1 0 auto;
    overflow: hidden;
  }
  
  footer {
    flex: 0 0 auto;
  }

  body {
    --bs-body-font-family: ${ commonStyles.typography.fontFamily.body };
    --bs-heading-font-family: ${ commonStyles.typography.fontFamily.heading };
    --bs-body-color: ${ commonStyles.colors.textColor };
    --bs-body-bg: ${ commonStyles.colors.bgColor };
  }
  
  h1,h2,h3,h4 {
    font-family: var(--bs-heading-font-family);
    margin-bottom: 0.5em;
    color: ${commonStyles.colors.accent};
  }

  h1,h2 {
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  h1,h2,h3,h4, .text-stroke {
    text-shadow:
    -1px -1px 0 #000,  
     1px -1px 0 #000,
     -1px 1px 0 #000,
      1px 1px 0 #000;
  }
  
  h1 {
    font-size: 32px;
    font-weight: 900;
  }
  
  h2 {
    font-size: 28px;
    font-weight: 900;
  }
  
  h3 {
    font-size: 26px;
    font-weight: 500;
  }
  
  h4 {
    font-size: 24px;
  }
  
  h5 {
    font-size: 20px;
    color: ${commonStyles.colors.accent};
    font-family: var(--bs-heading-font-family);
  }

  @media (min-width: ${commonStyles.breakpoints.md}px) {
    h1 {
      font-size: 40px;
    }
    
    h2 {
      font-size: 32px;
    }
    
    h3 {
      font-size: 28px;
    }
    
    h4 {
      font-size: 26px;
    }
  }

  p:last-child {
    margin-bottom: 0;
  }
  
  ul {
    padding: 0;
  }
  
  li {
    list-style-type: none;
  }
  
  a {
    color: ${commonStyles.colors.textColor};
    transition: color .2s;

    &:hover {
      color: ${commonStyles.colors.accent};
    }
    
    &.invert {
      color: ${commonStyles.colors.accent};

      &:hover {
        color: ${commonStyles.colors.textColor};
      }
    }
  }
  
  .container {
    max-width: ${commonStyles.containerWidth.xl};
    margin: 0 auto;
    padding: 50px;
  }
  
  .narrow-container {
    max-width: ${commonStyles.containerWidth.md};
    margin-left: auto;
    margin-right: auto;
  }
  
  .bsGutterX3rem {
    --bs-gutter-x: 3rem;
  }

  .bg-gradient {
    &--yellow {
      background: linear-gradient(106.18deg, #E9BC50 6.77%, #C88D00 36.46%, #E9BC50 63.54%, #C88D00 99.48%);
    }
    &--black {
      background: linear-gradient(106.18deg, #232323 6.77%, #070707 36.46%, #232323 63.54%, #070707 99.48%);
    }
  }
  
  /* helpers */
  .mb-80 {
    margin-bottom: 80px!important;
  }
  .mb-70 {
    margin-bottom: 70px!important;
  }
`;
 
export default GlobalStyle;