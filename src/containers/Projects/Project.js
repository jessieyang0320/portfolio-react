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


      	<Relative marginBottom="60px" marginTop="125px">
      		<Index>
      			 <h1>01</h1>
      		</Index>
            <h1> the project One <A href="#" target="_blank">name</A></h1>
      	</Relative>

         <Flex justify={ 'center'  } marginBottom="200px">
            <ReactZoomy
    		    imageUrl={require('../../assets/news-republic520.png')}
    		    renderThumbnail={({ showImage }) =>
    		    <ImageButton onClick={showImage}>
    		  	<img src = {require('../../assets/news-republic520.png')}
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

     <Relative marginBottom="60px">
       <Index>
          <h1>02</h1>
       </Index>
         <h1> the project Two <A href="#" target="_blank">name</A></h1>
     </Relative>

    <Flex justify={ 'center' } marginBottom="200px" >

       <ReactZoomy
       imageUrl={require('../../assets/responsive-website.png')}
       renderThumbnail={({ showImage }) =>
       <ImageButton onClick={showImage}>
         <img src = {require('../../assets/responsive-website.png')}
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


          <Relative marginBottom="60px">
        		<Index>
        			 <h1>03</h1>
        		</Index>
              <h1> the project Three <A href="#" target="_blank">name</A></h1>
        	</Relative>

           <Flex justify={ 'center' } marginBottom="200px">

              <ReactZoomy
      		    imageUrl={require('../../assets/v-hab.png')}
      		    renderThumbnail={({ showImage }) =>
          		  <ImageButton onClick={showImage}>
          		  	<img src = {require('../../assets/v-hab.png')}
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

       <Relative marginBottom="60px">
         <Index>
            <h1>04</h1>
         </Index>
           <h1> the project Three <A href="#" target="_blank">name</A></h1>
       </Relative>

       <Flex justify={ 'center' } marginBottom="200px">
           <ReactZoomy
           imageUrl={require('../../assets/data.png')}
           renderThumbnail={({ showImage }) =>
           <ImageButton onClick={showImage}>
           <img src = {require('../../assets/data.png')}
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

       <Relative marginBottom="60px">
         <Index>
            <h1>05</h1>
         </Index>
           <h1> the project Three <A href="#" target="_blank">name</A></h1>
       </Relative>

       <Flex justify={ 'center' } marginBottom="200px">

       <ReactZoomy
       imageUrl={require('../../assets/js.png')}
       renderThumbnail={({ showImage }) =>
       <ImageButton onClick={showImage}>
       <img src = {require('../../assets/js.png')}
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

       <A href="https://github.com/jessieyang0320" target="_blank">View More on Github</A>

      </Container>
    );
  }
}

export default Project;
