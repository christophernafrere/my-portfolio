'use client';
import AboutMe from '@/section/about-me';
import GetInTouch from '@/section/contact';
import HeroHeader from '@/section/hero-header';
import SkillsSection from '@/section/skills';
import styled from 'styled-components';

export default function Home() {
    return (
        <Main>
            <HeroHeader />
            <AboutMe />
            <SkillsSection />
            <GetInTouch />
        </Main>
    );
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    gap: 100px;
    padding-top: 64px;
    padding-bottom: 64px;
`;
