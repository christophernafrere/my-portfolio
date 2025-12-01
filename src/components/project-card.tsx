"use client"
import { SquareArrowOutUpRight } from "lucide-react"
import { useState } from "react";
import styled from "styled-components"

function ProjectCard(project: {
    title: string;
    url: string, 
    imageUrl: string;
    tech: string[]
}) {
    const [infoIsOpen, setInfoIsOpen] = useState(false)
    return (
        <ProjectContainer onMouseEnter={() => setInfoIsOpen(true)} onMouseLeave={() => setInfoIsOpen(false)}>
            <img src={project.imageUrl}  alt={project.title}/>
            <ProjectText>
              
                { 
                    infoIsOpen && 
                    <InfoContainer>
                        <h3>{project.title}</h3>
                        <TechTagContainer>
                            {project.tech.map((techTag, id) => <TechTag key={id}> {techTag} </TechTag>)}

                        </TechTagContainer>
                        <GoToButton href={project.url} target="_blank">Visiter le site</GoToButton>
                    </InfoContainer>
                }
            </ProjectText>
        </ProjectContainer>
    )
}



const ProjectContainer = styled.div`
    position: relative;
    background-color: #ffffff9f;
    width: 25%;
    padding: 8px;
    border-radius: 8px;
    box-shadow: 0 8px 8px #0000009f;
    overflow: hidden;
    
    img {
        border-radius: 4px  4px 0 0;
        width: 100%;
    }

    
    &::after {
        opacity: 0;
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #000000aa;

        transition: opacity 300ms;

        backdrop-filter: blur(2px);
    }


    &:hover {
        &::after {
            opacity: 1;
        }
    }
`

const ProjectText = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:  8px;
`

const InfoContainer = styled.div`
    display: flex; 
    flex-direction: column;
    gap: 8px;
    z-index: 100;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 85%;
    padding: 8px;

    h3 {
        color: white;
    }
`

const TechTagContainer = styled.div`
    display: flex;
    gap: 8px;
`
const TechTag = styled.p`
    background-color: #ffa200;
    width: max-content;
    height: max-content;
    padding: 4px 8px;
    border-radius: 4px;
    box-shadow: 0 2px 3px white;
`

const GoToButton = styled.a`
    background-color: red;
    margin: 0 auto;
    display: block;
    color: white;
    width: max-content;
    text-decoration: none;
    box-shadow: 0 2px 3px white;
    border-radius: 8px;
    padding: 4px 16px;
`

export default ProjectCard