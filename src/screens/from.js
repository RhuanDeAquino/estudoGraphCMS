import React, { Component } from 'react';
import styled from 'styled-components';

const Content = styled.div`
    width: 100%;
    height: 70vh;

    display: flex;
    justify-content: center;
    align-items: center;
`
const BoxContent = styled.div`
    width: 85%;
    height: 90%;

    padding: 0 3rem;

    background-color: #062054;

    display: flex;
    align-items: center;
    justify-content: space-between;
`
const BoxText = styled.div`
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
`
const Title = styled.h2`
    font-size: 1.5rem;

    color: #98A4B1;
`

const Text = styled.p`
    font-size: 1.5rem;

    line-height: 40px;

    color: white;

    text-align: start;

    margin-bottom: 3rem;
`
const BoxCircles = styled.div`
    width: 40%;

    position: relative;
`
const Circle1 = styled.div`
    width: 10rem;
    height: 10rem;

    border-radius: 50%;

    background-color: #C7C7C790;

    position: absolute;
    top: -200px;
    right: 300px;

`
const Circle2 = styled.div`
    width: 10rem;
    height: 10rem;

    border-radius: 50%;

    background-color: #C7C7C790;

    position: absolute;
    top: -90px;
    right: 290px;
`
const Circle3 = styled.div`
    width: 10rem;
    height: 10rem;

    border-radius: 50%;

    background-color: #C7C7C790;

    position: absolute;
    top: -140px;
    right: 190px;
`
class From extends Component {
    render() {
        const item = this.props?.fragmento;
        return(
            <Content>
                <BoxContent>
                    <BoxText>
                        <Title>{item?.pagina[2]?.fragmento[0]?.singleText[0]}</Title>
                        <Text>{item?.pagina[2]?.fragmento[0]?.singleText[1]}</Text>
                    </BoxText>
                    <BoxCircles>
                        <Circle1></Circle1>
                        <Circle2></Circle2>
                        <Circle3></Circle3>
                    </BoxCircles>
                </BoxContent>
            </Content>
        )
    }
}

export default From;