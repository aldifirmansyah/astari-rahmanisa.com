import React from 'react';
import styled from 'styled-components';

const ImageStyled = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  filter: ${props => props.filter};
  ${props => props.clipPath ? `clip-path: ${props.clipPath};` : ''}
  display: ${props => props.display};
  @media (max-width: 768px) {
    width: ${props => props.mobileWidth ? props.mobileWidth : props.width};
    heigth: ${props => props.mobileHeight ? props.mobileHeight : props.height};
  }
  ${props => props.useHover === true ? `
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition-duration: 0.1s;
  }` : ''}
`;

const Image = props => {
  const height = props.height ? props.height : 'auto';
  const width = props.width ? props.width : 'auto';
  const filter = props.filter ? props.filter : 'none';
  const display = props.isDisplay === undefined || props.isDisplay === true ? 'initial' : 'none';

  return (<ImageStyled src={props.src} alt={props.alt}
            width={width} height={height} filter={filter}
            mobileWidth={props.mobileWidth} mobileHeight={props.mobileHeight}
            clipPath={props.clipPath} display={display}
            useHover={props.useHover}
            onLoad={props.onLoad}
            onError={props.onError}
            />)
}

export default Image;