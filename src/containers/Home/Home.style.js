import styled from 'styled-components';

export const Image = styled.img`
	width:100%;
	`

export const HomeImage = styled.div`

	height: 100vh;
	background-image: url('${require('../../assets/home.jpg')}');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;

	display: flex;
	flex-direction: column;
	align-content: center;
	justify-content: center;

	text-align: center;
	color:white;

	font-size: 2em;

	h1{
		margin-bottom:0;
	}

`
