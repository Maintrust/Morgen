import React, { useEffect, useState, useRef } from "react";
import useFetch from "../hooks/useFetch";
import styled from 'styled-components';
import commonStyles from "../common-styles";

const ImgWrap = styled.figure`
  padding-left: 5px;
  padding-right: 5px;

  @media (min-width: ${commonStyles.breakpoints.md}px) {
    padding-left: .6vw;
    padding-right: .6vw;
  }
`;

const Img = styled.img`
  border-radius: 10px;
  width: 100px;
  height: auto;

  @media (min-width: ${commonStyles.breakpoints.md}px) {
    width: 15vw;
    max-width: 280px;
  }
`;

const CarouselWrap = styled.div`
  display: flex;
`;

export default function Carousel(props) {
  const [translate, setTranslate] = useState(0);
  const {loading, error, data} = useFetch('carousel?populate=*');

  useEffect(() => {
    translateWrap();
    return () => {
      clearInterval(interval);
    }
  }, [setTranslate]);

  let interval = '';

  const imagesWrapper = useRef(null);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  function translateWrap() {
    interval = setInterval(()=>{
      setTranslate(translate => translate + 1);
      const wrapper = imagesWrapper.current;
      if (!wrapper) return;
      const firstImg = wrapper.firstChild;
      const firstImgPosition = firstImg.getBoundingClientRect();
      if(firstImgPosition.right < 0) {
        wrapper.appendChild(firstImg);
        setTranslate(0);
      }
    }, 20);
  }

  return (
    <>
      <CarouselWrap ref={imagesWrapper}  style={{transform: `translateX(-${translate}px)`}}>
      { data.images.data.map ( ( img ) => {
        const imgSrc = img.attributes.url;
        return (
          <ImgWrap key={imgSrc}>
            <Img src={'https://maintrust.github.io/Morgen' + imgSrc} />
          </ImgWrap>
        )
      } ) }
      </CarouselWrap>
    </>
  );
}