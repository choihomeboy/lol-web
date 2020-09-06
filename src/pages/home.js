import React, { Component, useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';


function Home() {

    return (
        <Container>
            <Page id ="introduction" >
                <h2> Introduction</h2>
            </Page>
            <Page id ="vision" >
                <h2> Visions</h2>
            </Page>
            <Page id ="mission" >
                <h2> Missions</h2>
            </Page>
            <Page id ="product" >
                <h2> Products</h2>
            </Page>
        </Container>
    );
}


const Container = styled.div`
    flex: 1;
    flex-direction: column;
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
`

const Page = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    height: 100vh;
    scroll-snap-align: start;

`;


export default Home;




// const Panel = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     width: 80%;
//     height: 50%;
//     box-shadow: 5px 5px 1px #606d61;
//     background-color : #c6d2be;
//
// `;
//
// const Title = styled.div`
//     display: flex;
//     width: 100%;
//     height: 30%;
//     justify-content: center;
//     align-items: center;
//     color: #83b1c9;
//     font-size: 30px;
// `;
//
// const LinkContainer = styled.div`
//     display: flex;
//     margin-top: 10%;
//     justify-content: space-between;
//     width: 80%;
//     height: 30%;
// `;
//
// const Btn = styled.a`
//     display: flex;
//     width: 20%;
//     height: 100%;
//     background-color: yellow;
//     border-radius: 20px;
//     justify-content: center;
//     align-items: center;
//
//     &:hover {
//         background-color: white;
//         color: black;
//     }
//
//     &:focus {
//         color: black;
//         outline: 0;
//     }
// `;
//
// <Page id ="intro" >
//     <Panel>
//         <Title>
//             <h2> Youngseok Terry Hahm / 함영석 </h2>
//         </Title>
//         <LinkContainer>
//             <Btn href = '#about' >
//                 About
//             </Btn>
//             <Btn href = '#project'>
//                 Projects
//             </Btn>
//             <Btn href = '#review'>
//                 Reviews
//             </Btn>
//             <Btn href = '#post'>
//                 Posts
//             </Btn>
//         </LinkContainer>
//     </Panel>
// </Page>
