import React from 'react';
import styled from 'styled-components';
import ResumeFile from '../../assets/resume/Astari D Rahmanisa - Resume May 2020.pdf';

const Button = styled.button`
  margin: 48px 0 176px 0;
  padding: 14px 32px;
  background-color: transparent;
  border 1px solid #EF9DFD;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bolder;
`;

const Resume = () => {
  const downloadResume = () => {
    window.open(ResumeFile, '_blank');
  }

  return (
    <Button className='active-header' onClick={downloadResume}>DOWNLOAD RESUME</Button>
  )
}

export default Resume;