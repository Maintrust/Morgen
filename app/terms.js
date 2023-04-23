import React from "react";
import WebsiteWrapper from "./website-wrapper";
import useFetch from "./hooks/useFetch";
import ReactMarkdown from "react-markdown";
import { Container } from "./components-with-styles";

export default function Terms() {
  const {loading, error, data} = useFetch('terms');
  
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <WebsiteWrapper>
      <Container>
        <p> HEllo!</p>
        <ReactMarkdown>{data.content}</ReactMarkdown>
      </Container>
    </WebsiteWrapper>
  )
}