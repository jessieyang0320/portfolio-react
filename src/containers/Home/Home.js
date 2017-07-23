import React, { Component } from 'react';
import {Container} from '../../theme/grid';
import { HomeImage} from  './Home.style';

import Reveal from 'react-reveal';
import 'animate.css/animate.css';
import './Home.css';
import Footer from '../../components/Footer/Footer';
import {Icon} from 'react-fa'

class Home extends Component {

  render() {

    return (
<div>
      <Container>

        <HomeImage>

          <h1>Jessie Yang</h1>
          <h1>Front End Developer</h1>

        </HomeImage>


        <Reveal effect="animated bounceInUp">
            <h1> Welcome Home </h1>
            <Icon name="database" />
        </Reveal>

        <Reveal effect="animated fadeInUp" className="passage-block">
            <p>
             <h1>Brief Description: fadeInUp</h1>
             Advice me cousin an spring of needed. Tell use paid law ever yet new. Meant to learn of vexed if style allow he there. Tiled man stand tears ten joy there terms any widen. Procuring continued suspicion its ten. Pursuit brother are had fifteen distant has. Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved.
            </p>
        </Reveal>

        <Reveal effect="animated flipInY" className="passage-block">
              <h1>Skills Icons</h1>
              <p>   Advice me cousin an spring of needed. Tell use paid law ever yet new. Meant to learn of vexed if style allow he there. Tiled man stand tears ten joy there terms any widen. Procuring continued suspicion its ten. Pursuit brother are had fifteen distant has. Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved.
             </p>
        </Reveal>




        <Reveal effect="animated fadeInLeft" className="passage-block">
              <h1>Skills fadeInLeft</h1>
              <p>   Advice me cousin an spring of needed. Tell use paid law ever yet new. Meant to learn of vexed if style allow he there. Tiled man stand tears ten joy there terms any widen. Procuring continued suspicion its ten. Pursuit brother are had fifteen distant has. Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved.
             </p>
        </Reveal>

        <Reveal effect="animated zoomIn" className="passage-block">
              <h1>Skills zoomIn</h1>
              <p>   Advice me cousin an spring of needed. Tell use paid law ever yet new. Meant to learn of vexed if style allow he there. Tiled man stand tears ten joy there terms any widen. Procuring continued suspicion its ten. Pursuit brother are had fifteen distant has. Early had add equal china quiet visit. Appear an manner as no limits either praise in. In in written on charmed justice is amiable farther besides. Law insensible middletons unsatiable for apartments boy delightful unreserved.
             </p>
        </Reveal>

      </Container>
      <Footer/>
</div>
    );
  }
}

export default Home;
