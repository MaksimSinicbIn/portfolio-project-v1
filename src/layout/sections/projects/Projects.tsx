import React from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { FlexWrapper } from '../../../components/FlexWrapper';
import { Project } from './project/Project';
import proj1Img from './../../../assets/images/proj-1.png'
import proj2Img from './../../../assets/images/proj-2.png'
import proj3Img from './../../../assets/images/proj-3.png'
import { Container } from '../../../components/Container';
import { S } from './Projects_Styles';
import { Fade } from "react-awesome-reveal";

const projectData = [
    {
        title: "Project Tile goes here",
        src: proj1Img,
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        description: "Tech stack : HTML , JavaScript, SASS, React"
    },
    {
        title: "Project Tile goes here",
        src: proj2Img,
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        description: "Tech stack : HTML , JavaScript, SASS, React"
    },
    {
        title: "Project Tile goes here",
        src: proj3Img,
        text: "This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content",
        description: "Tech stack : HTML , JavaScript, SASS, React"
    }
]

export const Projects: React.FC = () => {
    return (
        <S.Projects id="projects">
            <Container>
                <Fade direction={"down"} triggerOnce={true}>
                    <SectionTitle>Projects</SectionTitle>
                </Fade>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                        {projectData.map((p, index)=> {
                            return <Project key={index}
                                            title={p.title}
                                            src={p.src}
                                            text={p.text}
                                            description={p.description} />
                        })}
                </FlexWrapper>
            </Container>
        </S.Projects>
    );
};

