'use client';
import styled from 'styled-components';
import HeroSphereSystem from './hero-sphere';

function ProjectsShowcase() {
    return (
        <Section>
            <Title>Featured Projects</Title>
            <Description>
                A selection of my recent work showcasing different technologies
                and solutions
            </Description>

            <HeroSphereSystem />
        </Section>
    );
}

export default ProjectsShowcase;

const Section = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    z-index: 1000;
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

const Description = styled.p`
    font-size: 1.1rem;
    margin-bottom: 32px;
    text-align: center;
    color: #a0a0a0;
    font-weight: 100;
`;
