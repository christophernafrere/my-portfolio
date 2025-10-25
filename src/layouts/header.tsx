'use client';
import styled from 'styled-components';

function Header() {
    return (
        <HeaderComponent>
            <Title>Christopher Nafrere</Title>

            <Navigation>
                <ul>
                    <li>
                        <a href="#home">Accueil</a>
                    </li>
                    <li>
                        <a href="#about">À propos</a>
                    </li>
                    <li>
                        <a href="#skills">Compétences</a>
                    </li>
                    <li>
                        <a href="#projects">Projets</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </Navigation>
        </HeaderComponent>
    );
}
export default Header;

const HeaderComponent = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    box-sizing: border-box;
    width: 100%;
    background: #f5f5f5b3;
    backdrop-filter: blur(10px);
    padding: 16px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h1`
    margin: 0;
    font-size: 1.5rem;
`;

const Navigation = styled.nav`
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        gap: 1rem;

        li {
            a {
                text-decoration: none;
                color: #333;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
`;
