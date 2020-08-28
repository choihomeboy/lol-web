import React, { Component, useRef, useEffect, useState } from 'react';
import styled from 'styled-components';


function Home() {

    const scrollToRef = (ref) => window.scrollTo({ 
        behavior: 'smooth', 
        top: ref.current.offsetTop
    })   
    const useMountEffect = (fun) => useEffect(fun, [])

    const introRef = useRef()    
    const aboutRef = useRef()
    const projectRef = useRef()
    const reviewRef = useRef()
    const postRef = useRef()

    // const refLoc = [introRef.current.offsetTop, aboutRef.current.offsetTop, projectRef.current.offsetTop, reviewRef.current.offsetTop, postRef.current.offsetTop ]

    // const [refIdx, setRefIdx] = useState(0) 

    useMountEffect(() => scrollToRef(introRef)) // Scroll on mount


    const prevScrollY = useRef(0);

    const [refIdx, setRefIdx] = useState(0);
    const [goingUp, setGoingUp] = useState(false);
    const [goingDown, setGoingDown] = useState(false);

    const [atRef, setAtRef] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (prevScrollY.current < currentScrollY) {
                // setGoingUp( false );
                setGoingDown( true); 
            }
            if (prevScrollY.current > currentScrollY) {
                setGoingUp( true);
                // setGoingDown( false); 
            }
            prevScrollY.current = currentScrollY;
            console.log( goingUp, goingDown )
            
        };

        window.addEventListener("scroll", handleScroll );
        setGoingUp( false );
        setGoingDown( false); 

        return () => window.removeEventListener("scroll", handleScroll);
    }, [goingUp, goingDown]);

    return (
        <Layout>
            <Container ref = {introRef}>
                <Panel>
                    <Title>
                        <h2> Youngseok Terry Hahm / 함영석 </h2>
                    </Title>
                    <LinkContainer> 
                        <Btn onClick={()=>scrollToRef(aboutRef)} >
                            About
                        </Btn>
                        <Btn onClick={()=>scrollToRef(projectRef)}>
                            Projects
                        </Btn>
                        <Btn onClick={()=>scrollToRef(reviewRef)}>
                            Reviews
                        </Btn>
                        <Btn onClick={()=>scrollToRef(postRef)}>
                            Posts
                        </Btn>
                    </LinkContainer>
                </Panel>
            </Container>
            <Container ref = {aboutRef}>
             
                    <h2> About Me Part</h2>
                
            </Container>
            <Container ref = {projectRef}>
    
                    <h2> Project Part</h2>
            </Container>
            <Container ref = {reviewRef}>
                    <h2> Reviews Part</h2>
            </Container>
            <Container ref = {postRef}>
                    <h2> Posts Part</h2>
            </Container>


        </Layout>
    );
}


const Layout = styled.div`
  flex: 1;
  flex-direction: column;
`


const Container = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Panel = styled.div`
    display: flex;
    flex-direction: column;  
    align-items: center;  
    width: 80%;
    height: 50%;
    box-shadow: 5px 5px 1px #606d61;
    background-color : #c6d2be;
`;

const Title = styled.div`
    display: flex;
    width: 100%;
    height: 30%;
    justify-content: center;
    align-items: center;
    color: #83b1c9;
    font-size: 30px;
`;

const LinkContainer = styled.div`
    display: flex;
    margin-top: 10%;
    justify-content: space-between;
    width: 80%;
    height: 30%;
`;

const Btn = styled.button`
    display: flex;
    width: 20%;
    height: 100%;
    background-color: yellow;
    border-radius: 20px;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: white;
        color: black;
    }

    &:focus {
        color: black;
        outline: 0;
    }
`;

export default Home;