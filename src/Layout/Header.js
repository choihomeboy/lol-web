import React, {Component, useRef } from 'react';
import styled from 'styled-components';

const ScrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop)   

function Header() {

    const myRef = useRef(null)
    const executeScroll = () => scrollToRef(myRef)

    return (
        
    );
}

export default Header;
