import { injectGlobal } from 'styled-components';
import { black } from './variables';

/* eslint-disable */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=VT323');
  body {
    background-color: white;

    font-family: 'VT323', monospace;
    font-size: 24px;
    color: ${black};
  }
  h1, h2, h3 {
    font-weight: normal;
  }
`
