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
    z-index: -2;
    transition: height .5s, background-color .3s;
  }
  &:hover:after {
    height: 40%;
    background-color: ${yellow};
  }

`

export const Index = styled.div`
	position: absolute;
	width: 170px;
	height: 170px;
	background-color: coral;
	border-radius: 4%;

	left:  50px;
	bottom: -50px;
	border: 3px solid white;

	z-index: -2;
  font-size: 3em;


	h1{
    margin-top: -90px;
		margin-left: -30px;

		weight: bold;
		color: white;



		transform: translateY(20%);

	}
`
