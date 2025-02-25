import React from 'react';
import { Icon } from '../../components/icon/Icon';
import { FlexWrapper } from '../../components/FlexWrapper';
import { Container } from '../../components/Container';
import { S } from '../footer/Footer_Styles'

const contactItemData = [
    {
        href: "tel:+79833629929",
        text: "+7 983 362-99-29"
    },
    {
        href: "mailto:dkonstantinov.work@gmail.com",
        text: "dkonstantinov.work@gmail.com"
    },
]

const socialItemData = [
    {
        iconId: "telegram",
        viewBox: "0 0 40 32",
        href: "https://t.me/hleba_kupi_lol"
    },
    {
        iconId: "gitHub",
        viewBox: "0 0 35 35",
        href: "https://github.com/MaksimSinicbIn"
    },
    {
        iconId: "linkedIn",
        viewBox: "0 0 25 25",
        href: "https://github.com/MaksimSinicbIn"
    }
]

export const Footer: React.FC = () => {
    return (
        <S.Footer>
            <Container>
                <FlexWrapper direction={"column"} justify={"space-around"}>
                    <S.FooterListsBox>
                        <S.ContactList>
                            {contactItemData.map((c, index) => {
                                return (
                                    <S.ContactItem key={index}>
                                        <S.ContactLink href={c.href}>{c.text}</S.ContactLink>
                                    </S.ContactItem >
                                )
                            })}
                        </S.ContactList>
                        <S.SocialList>
                            {socialItemData.map((s, index) => {
                                return (
                                    <S.SocialItem key={index}>
                                        <S.SocialLink href={s.href}>
                                            <Icon height={"25px"} width={"25px"} viewBox={s.viewBox} iconId={s.iconId} />
                                        </S.SocialLink>
                                    </S.SocialItem>
                                )
                            })}
                        </S.SocialList>
                    </S.FooterListsBox>
                    <S.Copyright>Developed by Dmitry Konstantinov in 2024</S.Copyright>
                </FlexWrapper>
            </Container>
        </S.Footer>
    );
};