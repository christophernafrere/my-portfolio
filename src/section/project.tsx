'use client';
import styled from 'styled-components';
import HeroSphereSystem from './hero-sphere';
import ProjectCard from '@/components/project-card';

function ProjectsShowcase() {
    const projectsList = [
        { 
            title:"BJ Multi Renov", 
            url:"https://www.bjmultirenov.fr", 
            imageUrl: "/images/project/bj-multi-renov.png" ,
            tech: ["Next.js", "Styled-Components", "Typescript"]
        },
        {
            title: "Taxi BN",
            url: "https://www.taxi-bn.fr",
            imageUrl: "/images/project/taxi-bn.png",
            tech: ["Next.js", "Styled-Components", "Typescript"]
        }
    ];

    return (
        <Section>
            <Title>Mes projets récents</Title>
            <ProjectWrapper>
                {
                    projectsList.map((project, id) => <ProjectCard key={id} {...project} />)
                }
            </ProjectWrapper>

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

// const Description = styled.p`
//     font-size: 1.1rem;
//     margin-bottom: 32px;
//     text-align: center;
//     color: #a0a0a0;
//     backdrop-filter: blur(8px);
//     font-weight: 100;
// `;

const ProjectWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 16px;
    
`