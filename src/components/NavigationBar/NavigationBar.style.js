import styled from 'styled-components';
import { Flex } from '../../theme/grid';
import { blue, yellow,red } from '../../theme/variables';
import {Link} from 'react-router-dom';

export const NavigationContainer = styled(Flex)`
  position: fixed;
  padding: 30px;
  margin-top:0;

  width:100%;
  background-color: gray;

`;

export const NavItem = styled(Link)`
  margin-right: 20px;
  font-size: 1.5em;
  cursor: pointer;
  color: ${ blue };
  position: relative;
  text-decoration: none;

  &:hover {
    color: ${ yellow };
    &:after {
      content: '';
      position: absolute;
      left:0;
      top:0;
      width:100%;
      height:100%;
      background-color: ${red};
      z-index: -1;
      transform: scale(1.3,1.5);

      border-radius: 8%;

    }
  }
`;
