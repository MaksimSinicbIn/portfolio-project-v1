import React, { ElementRef, useRef } from 'react';
import { SectionTitle } from '../../../components/SectionTitle';
import { Container } from '../../../components/Container';
import { SubmitButton } from '../../../components/SubmitButton';
import { S } from './Contacts_Styles';
import { Fade } from "react-awesome-reveal";
import emailjs from '@emailjs/browser';



export const Contact: React.FC = () => {
    const form = useRef<ElementRef<'form'>>(null);

    const sendEmail = (e: any) => {
        e.preventDefault();

        emailjs.sendForm('service_5u3t18b', 'template_wdeaaeg', e.target, '526bfQqziM8HYkNJp')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    };
    return (
        <S.Contacts id="contact">
            <Container>
                <Fade direction={"down"} triggerOnce={true}>
                    <SectionTitle>Contact</SectionTitle>
                </Fade>
                <Fade direction={"up"} triggerOnce={true}>
                    <S.Form ref={form} onSubmit={sendEmail}>
                        <S.FieldSection>
                            <S.FieldLabel htmlFor="userName">Name</S.FieldLabel>
                            <S.Field required id="userName" placeholder={"Name"} name={'user_name'}/>
                        </S.FieldSection>
                        <S.FieldSection>
                            <S.FieldLabel htmlFor="userEmail">Email</S.FieldLabel>
                            <S.Field required id="userEmail" placeholder={"Email"} name={'email'}/>
                        </S.FieldSection>
                        <S.FieldSection>
                            <S.FieldLabel htmlFor="userMessage">Message</S.FieldLabel>
                            <S.Field required id="userMessage" placeholder={"Type your message"} as={"textarea"} name={'message'}/>
                        </S.FieldSection>
                        <SubmitButton type={"submit"}>Send message</SubmitButton>
                    </S.Form>
                </Fade>
            </Container>
        </S.Contacts>
    );
};