'use client';
import QualityCard from '@/components/quality-card';
import { Code2Icon, CoffeeIcon, LightbulbIcon, ZapIcon } from 'lucide-react';
import styled from 'styled-components';

function AboutMe() {
    return (
        <Section>
            <Title>À propos de moi</Title>

            <InfoContainer>
                <TextContent>
                    <h3>Salut ! Je suis Christopher Nafrere</h3>
                    <p>
                        Je suis un développeur web passionné, spécialisé dans la
                        création d&apos;applications modernes et réactives.
                        Grâce à une solide maîtrise des technologies front-end
                        et back-end, je donne vie aux idées à travers le code.
                    </p>
                    <p>
                        Mon parcours dans le développement web a commencé par
                        une grande curiosité pour le fonctionnement
                        d&apos;internet. Aujourd&apos;hui, je me concentre sur
                        la création d&apos;expériences numériques rapides,
                        accessibles et intuitives pour tous les utilisateurs.
                    </p>
                    <p>
                        Quand je ne code pas, j&apos;aime explorer de nouvelles
                        technologies, contribuer à des projets open source et
                        partager mes connaissances avec la communauté des
                        développeurs.
                    </p>
                </TextContent>
                <QualityCardContainer>
                    <QualityCard
                        title="Code propre"
                        description="Optimisé pour la rapidité et l'efficacité."
                        icon={<Code2Icon />}
                    />
                    <QualityCard
                        title="Performance optimale"
                        description="Création de sites Web réactifs et conviviaux."
                        icon={<ZapIcon />}
                    />
                    <QualityCard
                        title="Solutions créatives"
                        description="Approches innovantes pour relever les défis."
                        icon={<LightbulbIcon />}
                    />
                    <QualityCard
                        title="Apprentissage continu"
                        description="Toujours à jour sur les dernières technologies."
                        icon={<CoffeeIcon />}
                    />
                </QualityCardContainer>
            </InfoContainer>
        </Section>
    );
}

export default AboutMe;

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 80vh;
    padding: 64px 16px;
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
        background: linear-gradient(90deg, #ba6bff, #4f46e5);
    }
`;

const InfoContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 32px;
    width: 70%;
    padding: 0 16px;
    box-sizing: border-box;
    margin: 32px;

    @media (max-width: 900px) {
        width: 95%;
        flex-direction: column;
    }
`;

const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.1rem;
    gap: 12px;
    max-width: 500px;

    @media (max-width: 900px) {
        max-width: 95%;
    }

    p {
        line-height: 1.2;
    }
`;

const QualityCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
`;
