import React from "react";
import Header from "./sections/header";
import Footer from "./sections/footer";

export default function WebsiteWrapper(props) {
  return (
    <>
      <Header />
        {props.children}
      <Footer />
    </>
  )
}