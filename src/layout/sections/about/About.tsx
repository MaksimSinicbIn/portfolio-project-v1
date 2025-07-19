import React from 'react';
import photo from './../../../assets/images/MainPhoto2.png'
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Container } from '../../../components/Container';
import { PhotoWrapper } from '../../../components/PhotoWrapper';
import { Photo } from '../../../components/Photo';
import { S } from './About_Styles';
import { Fade } from "react-awesome-reveal";

export const About: React.FC = () => {
    return (
        <S.About id="about">
            <Container>
                <Fade direction={"down"} triggerOnce={true}>
                    <SectionTitle>About</SectionTitle>
                </Fade>
                <FlexWrapper align={"Center"} justify={"Space-between"} wrap={"wrap"}>
                    <PhotoWrapper>
                        <Photo src={photo} alt="photo" />
                    </PhotoWrapper>
                    <S.AboutDescription>
                        <S.DescriptionTitle>Dmitry Konstantinov</S.DescriptionTitle>
                        <S.Text>I'm frontend developer with experience in creating SPA using React,TypeScript, JavaScript, CSS, HTML. I am enthusiastic team player focused on personal growth. Now I am improving my skills in this direction and expanding them with new technologies.</S.Text>
                        <S.EducationList>
                            <S.DescriptionTitle>Education:</S.DescriptionTitle>
                            <S.EducationItem>
                                <S.EducationName>Trade and Economic Institute | Siberian Federal University:</S.EducationName>
                                <S.Text>Management</S.Text>
                            </S.EducationItem>
                            <S.EducationItem>
                                <S.EducationName>IT-Incubator:</S.EducationName>
                                <S.Text>React Development</S.Text>
                            </S.EducationItem>
                        </S.EducationList>
                    </S.AboutDescription>
                </FlexWrapper>
            </Container>
        </S.About>
    );
};