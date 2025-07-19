import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper"

const Skills = styled.section`
        ${FlexWrapper} {
        column-gap: 75px;
        row-gap: 60px;

        @media (max-width: 1125px) {
            justify-content: space-around;
        }
    }
`

const Skill = styled.div`
    width: 120px;
    flex-grow: 1;
`

export const S = {
    Skills,
    Skill
}