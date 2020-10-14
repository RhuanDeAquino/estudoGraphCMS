import React, { Component } from 'react';
import styled from 'styled-components';

const Content = styled.div`
    max-width: 2024px;
	box-sizing: border-box;
		
    width: 100%;
    height: 10vh;

    padding: 0 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
`
const BoxFigure = styled.div`
    width: 20%;
    height: 90%;

    display: flex;
    align-items: center;
    justify-content: flex-start;
`
const Figure = styled.button`
    width: 30%;
		height: 70%;
		
		border: 0;

    background-color: #C4C4C4;
    color: black;
`
const BoxMenu = styled.ul`
    width: 40%;
    height: 90%;

    padding: 0 5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
`

const MenuItem = styled.li`
		width: 100%;

		list-style: none;
		
		color: #98A4B1;

		:hover {
			color: #2751C8;

			cursor: pointer;
		}
`
const BoxButtons = styled.div`
	width: 20%;
	height: 90%;

	display: flex;
	align-items: center;
	justify-content: space-between;
`
const SingIn = styled.button`
	width: 47%;
	height: 80%;

	background-color: white;
	color: #2751C8;

	border: 0;

`
const SingUp = styled.button`
width: 47%;
height: 80%;

background-color: #2751C8;
color: white;

border: 0;

box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`

class Header extends Component {
    render() {
        return(
            <Content>
                <BoxFigure>
                    <Figure>Logo</Figure>
                </BoxFigure>
                <BoxMenu>
                    <MenuItem>Features</MenuItem>
                    <MenuItem>FAQs</MenuItem>
                    <MenuItem>About Us</MenuItem>
                    <MenuItem>Contact Us</MenuItem>
                </BoxMenu>
                <BoxButtons>
                    <SingIn>Sing in</SingIn>
                    <SingUp>Sing up</SingUp>
                </BoxButtons>
            </Content>
        )
    }
}

export default Header;