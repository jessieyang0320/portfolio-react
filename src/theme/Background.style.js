import styled from 'styled-components';
import { backgroundblue} from './variables'

export const Background = styled.div`
  position: fixed;
  background-image: url(${require('../assets/head2.png')});
  background-color: ${backgroundblue};
  z-index: -99;
  background-size:50%;
  top: 140px;
  left: 10vw;
  width: 80vw;
  height:80vh;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.35;
`
