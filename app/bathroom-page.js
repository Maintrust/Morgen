import React from "react";
import WebsiteWrapper from "./website-wrapper";
import MetamaskLogin from "./components/metamask-login";

export default function Bathroom() {
  return (
    <WebsiteWrapper>
      <MetamaskLogin />
    </WebsiteWrapper>
  )
}