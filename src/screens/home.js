import React, { Component } from 'react';
import styled from 'styled-components';

const Content = styled.div`
    width: 100%;
    height: 90vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
const BoxText = styled.div`
    width: 100%;

    display: flex;
    align-items: flex-end;
    justify-content: center;

`
const Text = styled.h1`
    font-size: 4rem;

    color: black;

    margin-top: 15rem
`;

const BoxLine = styled.div`
    width: 70%;
    height: 10%;

    display: flex;
    align-items: center;
    justify-content: center;
`

const Line = styled.span`
    width: 100%;
    height: 2px;

    background-color: #c7ced8;
`
class Home extends Component {

    render() {
        return(
            <Content>
                <BoxText>
                    <Text>{this.props?.fragmento?.pagina[0]?.fragmento[0]?.singleText[0]}</Text>
                </BoxText>
                <BoxLine>
                    <Line></Line>
                </BoxLine>
            </Content>
        )
    }
}

export default Home;