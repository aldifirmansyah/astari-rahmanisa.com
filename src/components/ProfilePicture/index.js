import React from 'react';
import styled from 'styled-components';
import ImageWithSkeleon from '../ImageWithSkeleton';
import Picture from '../../assets/images/profile/image.jpg';
import Skeleton from '../../assets/images/profile/skeleton.jpg';

const PictureContainer = styled.section`
  width: 100%;
  margin: 160px 0 0 0;
`;

const ProfilePicture = () => (
  <PictureContainer>
    <ImageWithSkeleon width='100%' src={Picture} skeletin={Skeleton}/>
  </PictureContainer>
)

export default ProfilePicture;