import React, { Component } from 'react';
import ReactZoomy from 'react-zoomy';
import {ImageButton} from './Project.style';
import {Container, Relative, Flex,Div} from '../../theme/grid';
import { A, Index } from '../../theme/types';

class Project extends Component {
  render() {
    return (
      <Container>
// now can set margin bottom, since it inheritated from Div
      	<Relative marginBottom="100px">
      		<Index>
      			 <h1>01</h1>
      		</Index>
            <h1> the project <A href="#" target="_blank">name</A></h1>
      	</Relative>

     <Flex justify={ 'center' } >  
        
        <ReactZoomy
		    imageUrl={require('../../assets/k.jpg')}
		    renderThumbnail={({ showImage }) => 
		  <ImageButton onClick={showImage}>
		  	<img src = {require('../../assets/k-thumbnail.jpg')} 
		     alt="project image"/>
		  </ImageButton>
          }

		  scale={[1.1, 1.1]}
		  imageProps={{
		    style: {
		      width: '100vw',
		      height: 'auto'
		    }
		  }}
        />
     </Flex>
      </Container>
    );
  }
}

export default Project;