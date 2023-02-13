import React from "react";
import useFetch from "../hooks/useFetch";
import { Container, Section, AccentText, TabWrap } from "../components-with-styles";
import Teammates from "../components/teammates";

export default function Team(props) {
  const {loading, error, data} = useFetch('team');

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <Container id="team" isNarrow={true}>
      <Section isLast>
        <h2 className="text-center mb-5">{data.title}</h2>
        <div className="row mb-5">
          <Teammates />
        </div>

      <TabWrap className={`mx-auto bg-gradient--black`}>
          <AccentText className="text-stroke text-center">{data.text}</AccentText>
      </TabWrap>
      </Section>
    </Container>
  )
}