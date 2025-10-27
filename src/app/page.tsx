import AboutMe from '@/section/about-me';
import HeroHeader from '@/section/hero-header';
import SkillsSection from '@/section/skills';

export default function Home() {
    return (
        <main>
            <HeroHeader />
            <AboutMe />
            <SkillsSection />
        </main>
    );
}
