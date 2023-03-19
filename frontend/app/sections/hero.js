import React from "react";
import useFetch from "../hooks/useFetch";
import { Banner } from "../components-with-styles";

export default function Hero(props) {

  const {loading, error, data} = useFetch('hero?populate=*');

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return <Banner src={data.hero.data.attributes.url || ''} className="mb-4 mb-lg-5 mx-auto"/>
}