import React from 'react'
import Image from './Image'

const ImageWithSkeleton = props => {
  const [isImageLoaded, setIsImageLoaded] = React.useState(false);

  function imageLoaded() {
    setIsImageLoaded(true);
  }

  return (
    <>
      <Image src={props.skeleton} width={props.width} height={props.height} filter='blur(10px)'
      isDisplay={!isImageLoaded} clipPath='inset(0)' useHover={props.useHover}/>
      <Image src={props.src} width={props.width} height={props.height} isDisplay={isImageLoaded}
        onLoad={imageLoaded}
        onError={imageLoaded}
        useHover={props.useHover}
      />
    </>
  )
}

export default ImageWithSkeleton