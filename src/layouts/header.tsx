'use client';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import styled from 'styled-components';

function Header() {
    const [MobileNavIsOpen, setMobileNavIsOpen] = useState(false);
    return (
        <HeaderComponent>
            <Title>Christopher Nafrere</Title>

            <MobileNavButton
                onClick={() => setMobileNavIsOpen(!MobileNavIsOpen)}
            >
                <Menu size={24} />
            </MobileNavButton>

            <PCNavigation>
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
            </PCNavigation>
            {MobileNavIsOpen && (
                <MobileNavigation>
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
                </MobileNavigation>
            )}
        </HeaderComponent>
    );
}
export default Header;

const HeaderComponent = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    box-sizing: border-box;
    width: 100%;
    /* use rgba for broader compatibility and make alpha explicit */
    background: rgba(245, 245, 245, 0.623);
    /* include WebKit prefix for Safari support */
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);
    will-change: backdrop-filter;
    padding: 16px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e0e0e0;
`;

const Title = styled.h1`
    margin: 0;
    font-size: 1.5rem;
`;

const PCNavigation = styled.nav`
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

    @media (max-width: 900px) {
        display: none;
    }
`;

const MobileNavButton = styled.button`
    display: none;
    background: transparent;
    border: none;
    cursor: pointer;

    @media (max-width: 900px) {
        display: block;
    }
`;

const MobileNavigation = styled.nav`
    position: fixed;
    top: 64px;
    left: 0;
    right: 0;
    height: calc(100vh - 64px);
    -webkit-backdrop-filter: blur(12px);
    background-color: #ffffffca;
    backdrop-filter: blur(25px);
    border: 1px solid #000;
    z-index: 10000;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 901px) {
        display: none;
    }

    ul {
        list-style: none;
        padding: 16px;
        display: flex;
        flex-direction: column;
        gap: 16px;
        align-items: center;
        justify-content: center;

        li {
            margin-bottom: 12px;

            a {
                text-decoration: none;
                color: #333;
                font-size: 1.2rem;
                font-weight: 600;

                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }
`;
