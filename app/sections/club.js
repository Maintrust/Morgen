import React from "react";
import useFetch from "../hooks/useFetch";
import { Container, Section } from "../components-with-styles";
import Separator from "../components/separator";
import Tabs from "../components/tabs";

export default function Club() {
  const {loading, error, data} = useFetch('club');

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <>
      <Container>
        <Section>
              <h2>{data.title}</h2>
              <p>{data.subtitle}</p>
              <p style={{textAlign: 'center'}} className="mt-4 mt-lg-5">{data.subtext}</p>
              <Tabs gradientColor="black"/>
        </Section>
      </Container>
      <Separator />
    </>
  )
}