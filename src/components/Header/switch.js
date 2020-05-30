import React from 'react';
import styled from 'styled-components';
import lightmodeImg from '../../assets/images/switch_background/light.png';
import darkModeImg from '../../assets/images/switch_background/dark.png';

const DarkModeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 134px;
`;

const height = 20;
const width = 40;
const Switch = styled.input`
  cursor: pointer;
  -webkit-appearance: none;
  outline: none;
  position: relative;
  width: ${width}px;
  height: ${height}px;
  margin-left: 1rem;
  background-image: url(${lightmodeImg});
  background-size: 100% 100%;
  border-radius: 50px;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: ${height*0.8}px;
    height: ${height*0.8}px;
    margin: ${height*0.1}px;
    border-radius: 50px;
    background-color: #ffffff;
    transition: 0.5s;
  }
  &:checked {
    background-image: url(${darkModeImg});
    :before {
      transform: translate(${width - height}px);
    }
  }
`;

const ThemeSwitch = props => {
  function toggleSwitch() {
    props.setDarkMode(!props.isDarkMode);
  }

  return (
    <DarkModeWrapper>
    <label className='primary-color'>{props.isDarkMode ? 'Dark Mode' : 'Light Mode'}</label>
    <Switch type='checkbox' checked={props.isDarkMode} onChange={toggleSwitch}/>
    </DarkModeWrapper>
  )
}

export default ThemeSwitch;