import styled,{css} from 'styled-components';
import media from './media';

export const Div = styled.div`
   ${({ marginBottom }) => marginBottom && css`
     margin-bottom: ${marginBottom};
  `}
  ${({ marginLeft }) => marginLeft && css`
    margin-left: ${marginLeft};
 `}
 ${({ marginTop }) => marginTop && css`
   margin-top: ${marginTop};
`}
${({ marginRight }) => marginRight && css`
  margin-right: ${marginRight};
`}

`
export const Container = styled(Div)`
  width: 80%;
  margin-top: 50px;
  padding-left: 120px;
  padding-right: 120px;
  padding-top:0;

  ${media.tablet`
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 0;
    `}
  ${media.phone`
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 0;
    `}
`;

export const Relative = styled(Div)`
	position: relative;
`

export const Flex = styled(Div)`
  
	display: flex;

	${({ column }) => column && css`
    flex-direction: column;
  `}

	${({ justify }) => justify && css`
    justify-content: ${justify};
  `}

	${({ align }) => align && css`
	flex-direction: ${align};

	`}

`
