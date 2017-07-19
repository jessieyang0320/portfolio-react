import React, { Component } from 'react';
import styled from 'styled-components';

import {Container} from '../../theme/grid';
import {Image, HomeImage,RevealP} from  './Home.style';

class Home extends Component {
  render() {
    return (
      <Container>
        <h1> Welcome Home </h1>

        <HomeImage>
          <h1>Jessie Yang</h1>
          <h1>Front End Developer</h1>
        </HomeImage>

        <RevealP > Advice me cousin an spring of needed. Tell use paid law ever yet new. Meant to learn of vexed if style allow he there. Tiled man stand tears ten joy there terms any widen. Procuring continued suspicion its ten. Pursuit brother are had fifteen distant has. Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved.  
        </RevealP>
      </Container>
    );
  }
}

export default Home;
