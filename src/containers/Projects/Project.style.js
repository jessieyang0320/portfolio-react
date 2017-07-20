import styled from 'styled-components';

export const ImageButton = styled.div`

	cursor: pointer;
	overflow: hidden;
	display: inline-block;

	& > img {
		transition: .3s;
	}


	&:hover {
		transform: scale(1.3);
	}

`
export const ImageContainer = styled.div`
	width: 450px;
`
