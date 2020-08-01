import React from 'react'
import styled from 'styled-components'
import Image from './Image'

const MarginHelper = styled.div`
  margin: 36vw 0 0 0;
  @media (max-width: 768px) {
    margin-top: 40vw;
  }
`;

const ImageWithSkeleton = props => {
  const [isImageLoaded, setIsImageLoaded] = React.useState(false);

  function imageLoaded() {
    setIsImageLoaded(true);
  }

  return (
    <>
      <Image src={props.skeleton} width={props.width} height={props.height} filter='blur(10px)'
      isDisplay={!isImageLoaded} clipPath='inset(0)' useHover={props.useHover} isBanner={props.isBanner}/>
      <Image src={props.src} width={props.width} height={props.height} isDisplay={isImageLoaded}
        useHover={props.useHover} isBanner={props.isBanner}
        onLoad={imageLoaded}
        onError={imageLoaded}
      />
      { props.isBanner && <MarginHelper/> }
    </>
  )
}

export default ImageWithSkeleton