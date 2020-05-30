import React from 'react'
import {Helmet} from 'react-helmet'

const SEO = props => {
  const name = 'Astari Dwi Rahmanisa';
  const description = 'Hello! I am Astari and this is my UI/UX Portfolio.';

  const title = props.title ? `${props.title} | ${name}` : name;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={props.description ? props.description : description}/>
    </Helmet>
  )
}

export default SEO;