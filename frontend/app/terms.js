import React from "react";
import WebsiteWrapper from "./website-wrapper";
import useFetch from "./hooks/useFetch";

export default function Terms() {
  const {loading, error, data} = useFetch('terms');
  
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <WebsiteWrapper>
      { data.content }
    </WebsiteWrapper>
  )
}