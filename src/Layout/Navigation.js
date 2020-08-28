import React, {Component } from 'react';
import styled from 'styled-components';

function Navigation() {
    return (
        <Nav>
            <NavList>
                <NavItem>소개</NavItem> 
                <NavItem>게시판</NavItem> 
                <NavItem>연락</NavItem> 
                <NavItem>메뉴1</NavItem> 
                <NavItem>메뉴2</NavItem> 
                <NavItem>메뉴3</NavItem> 
            </NavList>
        </Nav>
    );
}

export default Navigation;

const Nav = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const NavList = styled.ul`
    // width: 100%;
    // display: flex;
    // margin: 0 auto;
`

const NavItem = styled.li`
    // width: 60px;
    // margin-left: 18px;
    // margin-top: 5px;
    // display: flex;
`