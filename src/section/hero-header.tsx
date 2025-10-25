'use client';
import Button from '@/components/button';
import styled from 'styled-components';

function HeroHeader() {
    return (
        <HeroHeaderContainer>
            <HeroPhoto src="/hero-photo.jpg" alt="Hero Photo" />
            <HeroTitle>Welcome to My Portfolio</HeroTitle>
            <HeroSubtitle>I'm a passionate developer</HeroSubtitle>
            <HeroDescription>
                Explore my projects and skills in web development.
            </HeroDescription>

            <ButtonContainer>
                <Button>View Projects</Button>
                <Button>Contact Me</Button>
            </ButtonContainer>
        </HeroHeaderContainer>
    );
}

export default HeroHeader;

const HeroHeaderContainer = styled.section`
    height: 100vh;
    width: 100%;
    display: flex;
    background-color: #e0f7fa;
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
`;

const HeroTitle = styled.h1`
    margin: 8px 0;
`;

const HeroSubtitle = styled.h2`
    margin: 4px 0;
`;

const HeroDescription = styled.p`
    max-width: 600px;
    text-align: center;
    margin: 12px 0 24px 0;
`;

const ButtonContainer = styled.div`
    display: flex;
    gap: 16px;
`;
