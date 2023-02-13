import React from "react";
import styled from 'styled-components';
import commonStyles from "../common-styles";

const StyledSubscribtionForm = styled.form`
  & label {
    font-weight: 600;
    font-size: 13px;
    font-style: italic;
    text-transform: uppercase;
  }
  & input {
    background-color: #272626;
    border: none;
    color: white;
    outline: none;
    padding: 2px 10px;
    width: 80%;
  }
  & button {
    background-color: #4b4a4a;
    border: none;
    padding: 5px 10px;
    color: #fff;
    transition: .3s;

    &:hover {
      background-color: ${commonStyles.colors.accent};
      color: #000;
    }
  }
`;

export default function Subscribe(props) {
  return (
    <div>
      <StyledSubscribtionForm id="subscribe" method="post">
        <label htmlFor="email-address">GET ON THE LIST</label>
        <div className="d-flex pt-2 justify-content-center justify-content-lg-start">
          <input id="email-address" name="email-address" type="email" placeholder="Email Address" />
          <button name="subscribe" type="submit">→</button>
        </div>
      </StyledSubscribtionForm>
    </div>
  )
}