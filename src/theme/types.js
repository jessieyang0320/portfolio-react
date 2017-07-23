import styled from 'styled-components';
import {yellow, blue} from './variables';

export const A = styled.a`
	color: ${blue};
	text-decoration: none;
	position: relative;

	&:after {
    content: ' ';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 10%;
    width: 100%;
    background-color: ${blue};
    z-index: -1;
    transition: height .5s, background-color .3s;
  }
  &:hover:after {
    height: 40%;
    background-color: ${yellow};
  }

`

export const Index = styled.div`
	position: absolute;
	width: 150px;
	height: 150px;
	background-color: coral;
	border-radius: 4%;

	left:  50px;
	bottom: -50px;
	border: 3px solid white;

	z-index: -1;
  font-size: 2em;


	h1{

		margin: 0;
		weight: bold;
		color: white;


		transform: translateY(20%);

	}
`
