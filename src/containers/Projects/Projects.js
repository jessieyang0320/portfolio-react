import React, { Component } from 'react';
import ReactZoomy from 'react-zoomy';
import {ImageButton, Title} from './Project.style';
import {Container, Relative, Flex} from '../../theme/grid';
import { A, Index } from '../../theme/types';
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import Reveal from 'react-reveal'; // this package
import 'animate.css/animate.css';
import './Project.css';
import { Background } from '../../theme/Background.style';
import {Tooltip} from 'react-lightweight-tooltip';
import Footer from '../../components/Footer/Footer';
import SingleProject from './singleProject';



class Projects extends Component {
  render() {
    return (

      <div>
        <NavigationBar/>
        <Background/>

      <Container>
      <Reveal effect="animated fadeInUp" className="passage-block">
          <p>
           Brief Description:
           Advice me cousin an spring of needed. Tell use paid law ever yet new. Meant to learn of vexed if style allow he there. Tiled man stand tears ten joy there terms any widen. Procuring continued suspicion its ten. Pursuit brother are had fifteen distant has. Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved.
          </p>

      </Reveal>

      <SingleProject
          indexNum="01"
          projectDescription="News-React is a news feed website made with Node.js and ReactJS"
          projectName="News-React"
          />

          <SingleProject
              indexNum="02"
              projectDescription="Responsive Website, displayed well on different screen sized"
              projectName="Responsive Web"
              />


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

       <Reveal effect="animated fadeInUp">
       <img src = {require('../../assets/responsive-website.png')}
        alt="project"/>
        </Reveal>

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
                <Reveal effect="animated fadeInUp">
                <img src = {require('../../assets/v-hab.png')}
                 alt="project"/>
                 </Reveal>
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
          <Reveal effect="animated slideInDown">
            <h1>04</h1>
          </Reveal>
         </Index>
         <Reveal effect="animated slideInRight">
           <h1> the project Three <A href="#" target="_blank">name</A></h1>
          </Reveal>
       </Relative>

       <Flex justify={ 'center' } marginBottom="200px">
           <ReactZoomy
           imageUrl={require('../../assets/data.png')}
           renderThumbnail={({ showImage }) =>
           <ImageButton onClick={showImage}>
           <Reveal effect="animated fadeInUp">
           <img src = {require('../../assets/data.png')}
            alt="project"/>
            </Reveal>
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
       <Reveal effect="animated fadeInUp">
       <img src = {require('../../assets/js.png')}
        alt="project"/>
        </Reveal>
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
      <Footer/>
      </div>
    );
  }
}

export default Projects;
