import styled from 'styled-components';

export const ImageButton = styled.div`

	cursor: pointer;
	overflow: hidden;
	display: inline-block;

	& > img {
		transition-duration: .3s;
	}
	

	&:hover {
		transform: scale(1.3);
	}


	

`