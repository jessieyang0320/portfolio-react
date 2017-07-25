import React, { Component } from 'react';
import ReactZoomy from 'react-zoomy';
import {ImageButton} from './Project.style';
import {Relative, Flex} from '../../theme/grid';
import { A, Index } from '../../theme/types';
import Reveal from 'react-reveal';
import 'animate.css/animate.css';

// need to fix img url passed in as a props
// if it`s http:... can be passed in easily, but local img not working

class SingleProject extends Component {
  render() {
    return (
    <div>
        <Relative marginBottom="60px" marginTop="125px">

          <Index>
           <h1>{this.props.indexNum}</h1>
          </Index>

            <h1> the project One <A href="#" target="_blank">{this.props.projectName}</A></h1>
        </Relative>

        <div className="description-block">
          <p>{this.props.projectDescription}</p>

          <div className = 'buttons'>
              <button> <a href="#"> github</a></button>
              <button><a href="#"> Demo</a></button>
          </div>
        </div>

         <Flex justify={ 'center'  } marginBottom="200px">
            <ReactZoomy
            imageUrl={require('../../assets/news-republic.png')}
            renderThumbnail={({ showImage }) =>
            <ImageButton onClick={showImage}>
            <Reveal effect="animated fadeInUp">

            <img src = {this.props.Url}
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
    </div>
    )
  }
}

export default SingleProject;
