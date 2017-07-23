import React from 'react';
import ReactLoading from 'react-loading';
import './Loading.css'

const Loading = ({ type, color }) => (
  <div>
  <h1 className="loading-text">loading...</h1>
	<ReactLoading className = "loading-page" type={'balls'} color={'black'} height='50' width='50'/>
  </div>
);

export default Loading;
