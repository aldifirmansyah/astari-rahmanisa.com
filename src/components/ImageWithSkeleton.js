import React from 'react'
import Image from './Image'

const ImageWithSkeleton = props => {
  const [isImageLoaded, setIsImageLoaded] = React.useState(false);

  function imageLoaded() {
    setIsImageLoaded(true);
  }

  // React.useEffect(() => {
  //   const timer = setTimeout(() => {
  //     if (!isImageLoaded) {
  //       imageLoaded();
  //     }
  //   }, 5000);

  //   return () => {clearTimeout(timer)}
  // }, [])

  return (
    <>
      <Image src={props.skeleton} width={props.width} height={props.height} filter='blur(10px)' isDisplay={!isImageLoaded}/>
      <Image src={props.src} width={props.width} height={props.height} isDisplay={isImageLoaded}
        onLoad={imageLoaded}
        onError={imageLoaded}
      />
    </>
  )
}

export default ImageWithSkeleton