'use client';
import { HeroSphere } from '@/components/section-sphere';
import styled from 'styled-components';

function SkillsSection() {
    return (
        <Section>
            <Title>Mes Compétences</Title>
            <Description>
                Une boîte à outils complète pour construire des applications web
            </Description>
            <SkillsGrid>
                <SkillsCard>
                    <SkillCardTitle>Front-End</SkillCardTitle>
                    <TechTagContainer>
                        <TechTag>HTML</TechTag>
                        <TechTag>CSS</TechTag>
                        <TechTag>JavaScript</TechTag>
                        <TechTag>TypeScript</TechTag>
                        <TechTag>React</TechTag>
                        <TechTag>Next.js</TechTag>
                        <TechTag>Styled Components</TechTag>
                        <TechTag>Tailwind CSS</TechTag>
                    </TechTagContainer>
                </SkillsCard>
                <SkillsCard>
                    <SkillCardTitle>Back-end</SkillCardTitle>
                    <TechTagContainer>
                        <TechTag>Node.js</TechTag>
                        <TechTag>Express</TechTag>
                        <TechTag>Nest.js</TechTag>
                        <TechTag>RESTful APIs</TechTag>
                        <TechTag>GraphQL</TechTag>
                        <TechTag>Firebase</TechTag>
                        <TechTag>MySQL</TechTag>
                        <TechTag>MongoDB</TechTag>
                        <TechTag>PostgreSQL</TechTag>
                    </TechTagContainer>
                </SkillsCard>
                <SkillsCard>
                    <SkillCardTitle>Outils et autre</SkillCardTitle>
                    <TechTagContainer>
                        <TechTag>Git</TechTag>
                        <TechTag>Github</TechTag>
                        <TechTag>Docker</TechTag>
                        <TechTag>Jest</TechTag>
                        <TechTag>CI/CD</TechTag>
                        <TechTag>AWS</TechTag>
                        <TechTag>Figma</TechTag>
                        <TechTag>Webpack</TechTag>
                        <TechTag>Vercel</TechTag>
                    </TechTagContainer>
                </SkillsCard>
            </SkillsGrid>

            <HeroSphere color="#ffd1dc" size={220} top={60} left={40} />
            <HeroSphere color="#bfe6ff" size={160} top={120} left={920} />
            <HeroSphere color="#f7f3a7" size={300} top={200} left={320} />
            <HeroSphere color="#d1ffd6" size={120} top={420} left={660} />
            <HeroSphere color="#c8b6ff" size={260} top={520} left={140} />
            <HeroSphere color="#ffdfb2" size={180} top={340} left={980} />
            <HeroSphere color="#aee1ff" size={90} top={240} left={540} />
        </Section>
    );
}

export default SkillsSection;

const Section = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
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

const SkillsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;

    width: 70%;

    @media (max-width: 900px) {
        width: 90%;
        grid-template-columns: repeat(1, 1fr);
    }
`;

const SkillsCard = styled.div`
    width: 100%;
    padding: 24px;
    box-sizing: border-box;
    border: 2px solid #e5e7eb;
    border-radius: 12px;
    background-color: #ffffff55;
    backdrop-filter: blur(10px);
`;

const SkillCardTitle = styled.h3`
    margin-bottom: 16px;

    border-left: 4px solid #4f46e5;
    padding-left: 8px;
`;

const TechTagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const TechTag = styled.span`
    background: #ec4899;
    color: white;
    border-radius: 8px;
    padding: 8px 12px;
    margin: 4px;
    font-size: 0.9rem;

    &:hover {
        background: linear-gradient(90deg, #6b7aff, #ec4899);
    }
`;
