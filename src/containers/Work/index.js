import React from 'react';
import SEO from '../../components/seo';
import Greeting from '../../components/Greeting';
import Links from '../../components/Links';
import Thumbnails from '../../components/Thumbnails';

const Work = props => {
  return (
    <>
    <SEO title='Work'/>
    <Greeting/>
    <Links isDarkMode={props.isDarkMode}/>
    <Thumbnails/>
    </>
  )
}

export default Work;