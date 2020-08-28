import React, { Component, useRef } from 'react';
import styled from 'styled-components';
import Header from './Layout/Header';
import Navigation from './Layout/Navigation';


function App() {

  const aboutRef = useRef()
  const projectRef = useRef()
  const reviewRef = useRef()
  const postRef = useRef()

  return (
    <Layout>
      <Header />
      <Navigation ref={aboutRef}/>
      <Navigation ref={projectRef}/>
      <Navigation ref={reviewRef}/>
      <Navigation ref={postRef}/>
    </Layout>
  );
}


const Layout = styled.div`
  flex: 1;
  flex-direction: column;
`

export default App;