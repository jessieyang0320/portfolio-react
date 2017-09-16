import styled from 'styled-components';


export const Background = styled.div`
  position: fixed;
  background-image: url(${require('../assets/profile-kgh.png')});
 
  z-index: -99;
  background-size:100%;
  top: 5%;
  left: 0;
  width: 100vw;
  height:100vh;
  background-repeat: no-repeat;
  background-position: cover;
  opacity: 0.6;
`
