import React from "react";
import styled from 'styled-components';
import commonStyles from "../common-styles";

export default function Social(props) {

  const StyledSocial = styled.ul`
    display: flex;
    justify-content: center;
    background-color: rgba(11, 12, 19, 0.81);
    border-radius: ${commonStyles.design.borderRadius};
    font-size: 16px;
    margin-bottom: 0;

    @media(min-width: ${commonStyles.breakpoints.lg}px) {
      justify-content: flex-end;
    }
  `;

  const Link = styled.a`
    height: 44px;
    width: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  `;

  const socials = {
    instagram: {
      href: "https://www.instagram.com/gutenmorgenclub"
    },
    twitter: {
      href: "https://twitter.com/GutenMorgenClub",
    },
    facebook: {
      href: "https://www.facebook.com/profile.php?id=100086492920459",
    }
  }

  return (
    <div style={{display: 'inline-block'}}>
      <StyledSocial>
        { Object.keys(socials).map(social => {
        const { href = "/", iconMode = "" } = socials[social];
        return (
          <li key={social}>
            <Link href={href} target="_blank">
              <i className={`fa fa-${social}${iconMode} social-icon`}></i>
            </Link>
          </li>
        )
      } ) }
      </StyledSocial>
    </div>
  )
}