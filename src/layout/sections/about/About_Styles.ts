import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"

const About = styled.section`
    ${FlexWrapper} {
        gap: 30px;
    }

    @media screen and (max-width: 1060px) {
        ${FlexWrapper} {
        justify-content: space-around;
        align-content: center;
    }
}
`

const Text = styled.p`
    display: inline-block;
    font-weight: 400;
`

const AboutDescription = styled.div`
    display: flex;
    flex: 0 1 600px;
    flex-direction: column;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.44;
    row-gap: 20px;
`
const DescriptionTitle = styled.h3`
    
`

const EducationList = styled.ul`
    display: flex;
    flex-direction: column;
    row-gap: 10px;
`

const EducationItem = styled.li`
    
`
const EducationName = styled.h4`
    
`

const EducationDescription = styled.span`
    
`

export const S = {
    About,
    Text,
    AboutDescription,
    DescriptionTitle,
    EducationList,
    EducationItem,
    EducationName,
    EducationDescription
}