import React from 'react';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { SectionTitle } from '../../../components/SectionTitle';
import { Skill } from './skill/Skill';
import { Container } from '../../../components/Container';
import { S } from './Skills_Styles'
import { Fade } from "react-awesome-reveal";

const skillData = [
    {
        iconId: "html",
    },
    {
        iconId: "css",
    },
    {
        iconId: "javaScript",
    },
    {
        iconId: "typeScript",
    },
    {
        iconId: "react",
    },
    {
        iconId: "redux",
    },
    {
        iconId: "styledComponents",
    },
    {
        iconId: "sass",
    },
    {
        iconId: "figma",
    },
    {
        iconId: "materialUi",
    },
    {
        iconId: "gitHubSkill",
    },
    {
        iconId: "git",
    },
]

export const Skills: React.FC = () => {
    return (
        <S.Skills id="skills">
            <Container>
                <Fade direction={"down"} triggerOnce={true}>
                    <SectionTitle>My Skills</SectionTitle>
                </Fade>
                <FlexWrapper wrap={"wrap"} justify={"space-between"} align={"center"}>
                    <Fade cascade={true} damping={0.1} triggerOnce={true}>
                        {skillData.map((s, index) => {
                            return <Skill key={index} iconId={s.iconId} />
                        })}
                    </Fade>
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};