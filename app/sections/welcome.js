import React from "react";
import useFetch from "../hooks/useFetch";
import { Container, Section } from "../components-with-styles";
import { isObjectEmpty } from "../functions";
import Cta from "../components/cta";

import Carousel from "../components/carousel";
import Separator from "../components/separator";

export default function Welcome() {
  const {loading, error, data} = useFetch('welcome');
  
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <>
      <Container>
        <Section className="text-center">
          <h1>{ data.title }</h1>
          <p className="narrow-container">{ data.text }</p>
        </Section>
      </Container>

      <Section className="text-center mx-0"  id="buy-a-morgen">
        <h2 className="mb-70">{ data.secondTitle }</h2>
        <Carousel />
      </Section>

      <Container>
        <Section className="text-center">
          <Cta gradientColor="yellow" text={ data.coverText } btnText={ data.btnText }/>
        </Section>
      </Container>
      <Separator />
    </>
  )
}