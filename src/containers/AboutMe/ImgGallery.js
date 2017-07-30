import React from 'react';
import Lightbox from 'react-images';

export default class Gallery extends React.Component {

  render() {
    return (
      <Lightbox
        images={[{ src: 'https://jossmac.github.io/react-images/' }, { src: 'https://jossmac.github.io/react-images/' }]}
        
        onClickPrev={this.gotoPrevious}
        onClickNext={this.gotoNext}
        onClose={this.closeLightbox}
      />
    );
  }
}
