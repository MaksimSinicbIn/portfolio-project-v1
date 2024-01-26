import React from 'react';
import { Icon } from '../../../../components/icon/Icon';
import { ViewButton } from '../../../../components/ViewButton';
import { S } from './../Projects_Styles'

type ProjectPropsType = {
    title: string
    text: string
    src: string
    description: string
}

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
    return (
        <S.Project>
            <S.ImageWrapper>
                <S.Image src={props.src} alt="" />
                <ViewButton>View Project</ViewButton>
            </S.ImageWrapper>
            <S.Description>
                <S.Title>{props.title} </S.Title>
                <S.Text>{props.text}</S.Text>
                <S.StackDescription>{props.description}</S.StackDescription>
                <S.ProjectLinks>
                    <S.Link href={"#"}>
                        <Icon height={"20px"} width={"20"} viewBox={"0 0 20 20"} iconId={"linkChains"} />
                        Live Preview
                    </S.Link>
                    <S.Link href={"#"}>
                        <Icon height={"20px"} width={"20"} viewBox={"0 0 20 20"} iconId={"gitHubMini"} />
                        View Code
                    </S.Link>
                </S.ProjectLinks>
            </S.Description>
        </S.Project>
    );
};