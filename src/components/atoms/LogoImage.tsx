import React from 'react'
import styled from 'styled-components';

export function LogoImage(){
  return(
    <Img src={process.env.PUBLIC_URL + '/logo330.png'} alt="img" />
  )
}

const Img = styled.img`
  display: inline-block;
  height: 100%;
  object-fit: contain;
`