'use client';
import {
    GithubIcon,
    LinkedinIcon,
    LocateIcon,
    LocationEditIcon,
    MailIcon,
    MapPinIcon,
    PhoneIcon,
    PinIcon,
} from 'lucide-react';
import styled from 'styled-components';

function GetInTouch() {
    return (
        <Section>
            <Title>Contactez-moi</Title>
            <Description>
                I'm currently available for freelance work and full-time
                opportunities. Let's discuss your project!
            </Description>

            <ContactGrid>
                <ContactCard>
                    <IconContainer color="#d1f4ff">
                        <MailIcon />
                    </IconContainer>
                    <Label>Email</Label>
                    <Response href="tel:0658876086">06 58 87 60 86</Response>
                </ContactCard>
                <ContactCard>
                    <IconContainer color="#ffe0e0">
                        <PhoneIcon />
                    </IconContainer>
                    <Label>Téléphone</Label>
                    <Response href="mailto:nafrere.christopher@gmail.com">
                        06 58 87 60 86
                    </Response>
                </ContactCard>
                <ContactCard>
                    <IconContainer color="#fff4d1">
                        <MapPinIcon />
                    </IconContainer>
                    <Label>Lieux</Label>
                    <Response>Paris, France</Response>
                </ContactCard>
            </ContactGrid>

            <ConnectSection>
                <ConnectTitle>Se Connecter</ConnectTitle>
                <Description>
                    N'hésitez pas à me contacter via l'une de ces autres
                    plateformes
                </Description>

                <SocialContainer>
                    <a
                        href="https://www.linkedin.com/in/christopher-nafrere"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedinIcon size={48} color="#6f6f6f" />
                        LinkedIn
                    </a>
                    <a
                        href="https://github.com/christophernafrere"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GithubIcon size={48} color="#6f6f6f" />
                        GitHub
                    </a>
                </SocialContainer>
            </ConnectSection>
        </Section>
    );
}

export default GetInTouch;

const Section = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: auto;
    min-height: 50vh;
    box-sizing: border-box;
    z-index: 1000;
    overflow: hidden;

    @media (max-width: 900px) {
        width: 95%;
    }
`;

const Description = styled.p`
    font-size: 1.1rem;
    margin-bottom: 32px;
    text-align: center;
    color: #a0a0a0;
    font-weight: 100;
`;

const Title = styled.h2`
    font-size: 2rem;
    margin-bottom: 16px;
    position: relative;
    width: max-content;
    &::after {
        content: '';
        display: block;
        width: 100%;
        margin-top: 8px;
        height: 4px;
        border-radius: 2px;
        background: linear-gradient(90deg, #6b7aff, #46e5d8);
    }
`;

const ContactGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 70%;
    gap: 24px;

    @media (max-width: 900px) {
        grid-template-columns: repeat(1, 1fr);
        width: 90%;
    }
`;

const ContactCard = styled.div`
    background: #fff;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 24px;
    border: 1px solid #e0e0e0;
`;

const IconContainer = styled.div<{ color?: string }>`
    width: 54px;
    height: 54px;
    background-color: #f0f0f0;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    animation: spin 25s linear infinite;
    will-change: transform;
    background-color: ${(props) => props.color || '#f0f0f0'};

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
`;

const Response = styled.a`
    margin-top: 8px;
    font-size: 1rem;
    color: #333;
    text-decoration: none;
`;

const Label = styled.h3`
    margin-top: 8px;
    font-size: 1rem;
    color: #333;
`;
const ConnectSection = styled.div`
    margin-top: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 16px;
    border: 2px solid #e0e0e0;
    background-color: #fafafa;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    padding: 32px;
    border-radius: 24px;
    p {
        max-width: 400px;
        font-size: 1rem;
    }
`;

const ConnectTitle = styled.h2`
    font-size: 1.1rem;
    position: relative;
    width: max-content;
`;

const SocialContainer = styled.div`
    display: flex;
    gap: 16px;
    a {
        display: flex;
        color: #6f6f6f;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        text-decoration: none;
        font-size: 0.9rem;
    }
`;
