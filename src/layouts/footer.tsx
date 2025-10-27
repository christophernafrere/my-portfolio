'use client';

import styled from 'styled-components';

function Footer() {
    return (
        <Container>
            <p>© 2025 Christopher Nafrere. Tout droit réservé</p>
            <p>
                Construit avec{' '}
                <Highlight color="linear-gradient(90deg, #007cf0, #00dfd8)">
                    Next.js
                </Highlight>{' '}
                et{' '}
                <Highlight color="linear-gradient(90deg, #007cf0, #00dfd8)">
                    Styled Components
                </Highlight>
            </p>
        </Container>
    );
}

export default Footer;

const Container = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #f5f5f5;
    padding: 32px 16px;
    gap: 8px;
    border-top: 1px solid #e0e0e0;
    box-sizing: border-box;
    text-align: center;
    p {
        color: #888888;
        font-size: 0.9rem;
    }
`;

const Highlight = styled.span<{ color: string }>`
    font-weight: bold;
    background: ${({ color }) => color};
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;
