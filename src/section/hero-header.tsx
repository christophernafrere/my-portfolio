'use client';
import React, { useEffect, useState } from 'react';
import Button from '@/components/button';
import { ArrowDown, GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import styled from 'styled-components';
import HeroSphereSystem from './hero-sphere';

function HeroHeader() {
    return (
        <HeroHeaderContainer>
            <HeroPhoto src="/images/me.jpg" alt="Hero Photo" />
            <HeroTitle>Bienvenue sur mon portfolio</HeroTitle>
            <HeroSubtitle>
                Je suis Christopher Nafrere, un développeur passionné.
            </HeroSubtitle>
            <HeroDescription>
                Découvrez mes projets et mes compétences dans le domaine du
                développement web.
            </HeroDescription>

            <ButtonContainer>
                <Button $cta>Voir mes projets</Button>
                <Button>Me contacter</Button>
            </ButtonContainer>

            <DownButton onClick={() => {}}>
                <ArrowDown size={34} />
            </DownButton>

            <SocialContainer>
                <a
                    href="https://github.com/christophernafrere"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <GithubIcon size={24} />
                </a>

                <a
                    href="https://linkedin.com/in/christopher-nafrere"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <LinkedinIcon size={24} />
                </a>

                <a href="mailto:nafrere.christopher@gmail.com">
                    <MailIcon size={24} />
                </a>
            </SocialContainer>

            <HeroSphereSystem />
        </HeroHeaderContainer>
    );
}

export default HeroHeader;

const HeroHeaderContainer = styled.section`
    width: 100%;
    height: 100vh;
    z-index: 0;
    background-color: #ffffff;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    border-radius: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const HeroPhoto = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 16px;
    background-color: #ccc;
    position: relative;
    z-index: 1;
    box-shadow: 0 8px 16px rgba(115, 187, 255, 0.958);
`;

const HeroTitle = styled.h1`
    margin: 8px 0;
    position: relative;
    text-align: center;
    z-index: 1;
`;

const HeroSubtitle = styled.h2`
    margin: 4px 0;
    position: relative;
    z-index: 1;
    text-align: center;
`;

const HeroDescription = styled.p`
    max-width: 600px;
    text-align: center;
    margin: 12px 0 24px 0;
    position: relative;
    z-index: 1;
    text-align: center;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 16px;
    position: relative;
    z-index: 1;
`;

const DownButton = styled.button`
    position: absolute;
    bottom: 64px;
    z-index: 1;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

const SocialContainer = styled.div`
    display: flex;
    gap: 16px;
    margin: 24px 0;
    z-index: 1;
    a {
        margin: 0 8px;
        text-decoration: none;
        color: #000;
        &:hover {
            text-decoration: underline;
        }
    }
`;
