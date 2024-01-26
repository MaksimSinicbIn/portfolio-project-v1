import React from 'react';
import photo from './../../../assets/images/MainPhoto.png'
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { S } from './Main_Styles'
import { PhotoWrapper } from '../../../components/PhotoWrapper';
import { Photo } from '../../../components/Photo';

export const Main: React.FC = () => {
    return (
        <S.Main id="home">
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"} wrap={"wrap"}>
                    <div>
                        <S.GreetingsText>Hi, 
                            <S.GreetingsSmiley>👋</S.GreetingsSmiley> 
                        </S.GreetingsText>
                        <S.GreetingsText>My name is</S.GreetingsText>
                        <S.Name>Dmitry Konstantinov</S.Name>
                        <S.MainTitle>I'm a Front-end Developer</S.MainTitle>
                    </div>
                    <PhotoWrapper>
                        <Photo src={photo} alt="" />
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </S.Main>
    );
};