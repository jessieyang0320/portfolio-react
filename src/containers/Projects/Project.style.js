import styled from 'styled-components';
import { red } from '../../theme/variables';

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
	margin-left:auto;
	margin-right:auto;
`
// margin left and right auto make it center

export const Title = styled.h1`
  color: ${red};
	weight: bold;

  margin-top: 500;
`;
