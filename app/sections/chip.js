import React from "react";
import useFetch from "../hooks/useFetch";
import { Container, Section } from "../components-with-styles";
import RoadmapTable from "../components/roadmap-table";
import Separator from "../components/separator";

export default function Chip(props) {
  const {loading, error, data} = useFetch('chip?populate=*');

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <>
      <Container id="roadmap">
        <Section>
          <div className="row mb-70">
            <div className="col-md-8 col-12 mb-4 mb-md-0">
              <h2>{data.title}</h2>
              { data.text.split('{p}').map ( ( paragraph, index ) => <p key={index}>{paragraph}</p> )}
            </div>
            <div className="col-md-4 col-12 ms-lg-auto text-center">
              <img src={"https://maintrust.github.io/Morgen" + data.chip.data.attributes.url} style={{width: 'auto', maxHeight: '300px'}}
              />
            </div>
          </div>
          <h3 style={{maxWidth: '450px'}}>{data.tableTitle}</h3>
          <RoadmapTable />
        </Section>
      </Container>
      <Separator />
    </>
  );
}
