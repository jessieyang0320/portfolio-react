import React, { Component } from 'react';
import ReactZoomy from 'react-zoomy';
import {ImageButton, ImageContainer, Title} from './Project.style';
import {Container, Relative, Flex,Div} from '../../theme/grid';
import { A, Index } from '../../theme/types';
import ParallaxImage from 'react-image-parallax2';
import NavigationBar from '../../components/NavigationBar/NavigationBar'
class Project extends Component {
  render() {
    return (
      <Container>
        <NavigationBar/>
        <Title>My Projects, see what I built</Title>

// now can set margin bottom, since it inheritated from Div
      	<Relative marginBottom="40px" marginTop="125px">
      		<Index>
      			 <h1>01</h1>
      		</Index>
            <h1> the project One <A href="#" target="_blank">name</A></h1>
      	</Relative>

     <Flex justify={ 'center'  } marginBottom="100px">

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

     <Relative marginBottom="40px">
       <Index>
          <h1>02</h1>
       </Index>
         <h1> the project Two <A href="#" target="_blank">name</A></h1>
     </Relative>

     <ImageContainer>
         <ParallaxImage
            reduceHeight={1/3}
            src={require('../../assets/cat.jpg')}
         />
     </ImageContainer>

    //  just to add space to show the scroll effect
     <br/>
      <br/>
       <br/>
        <br/>
         <br/>
          <br/>

          <Relative marginBottom="40px">
        		<Index>
        			 <h1>03</h1>
        		</Index>
              <h1> the project Three <A href="#" target="_blank">name</A></h1>
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
