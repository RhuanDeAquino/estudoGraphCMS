import React, { Component } from 'react';
import styled from 'styled-components';

const Content = styled.div`
    width: 100%;
    height: 95vh;

    box-sizing: border-box;

    padding: 0 5rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
`
const BoxImage = styled.div`
    width: 50%;
    height: 90%;

    display: flex;
    align-items: center;
    justify-content: center;
`

const Image = styled.div`
    width: 95%;
    height: 90%;

    background-color: #C4C4C4;

    display: flex;
    align-items: center;
    justify-content: center;
`

const TextImage = styled.h3`
    color: black;

    font-size: 1.5rem;
`
const BoxContent = styled.div`
    width: 50%;
    height: 40%;

    padding: 0 3rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const Title = styled.h2`
    height: 7rem;
    font-size: 1.5rem;
`

const Text = styled.p`
    font-size: 1.7rem;
    line-height: 50px;

    text-align: start;
`

class Suspendisse extends Component {
    render() {
        const item = this.props?.fragmento;
        return(
            <Content>
                <BoxImage>
                    <Image>
                        <TextImage>Imagem</TextImage>
                    </Image>
                </BoxImage>
                <BoxContent>
                    <Title>{item?.pagina[3]?.fragmento[0]?.singleText[0]}</Title>
                    <Text>{item?.pagina[3]?.fragmento[0]?.singleText[1]}</Text>
                </BoxContent>
            </Content>
        )
    }
}

export default Suspendisse;