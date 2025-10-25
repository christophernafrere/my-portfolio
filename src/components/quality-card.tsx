'use client';
import { ReactNode } from 'react';
import styled from 'styled-components';

function QualityCard({
    title,
    description,
    icon,
}: {
    title: string;
    description: string;
    icon: ReactNode;
}) {
    return (
        <Container>
            <IconContainer $color="#f0f0f0">{icon}</IconContainer>
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </Container>
    );
}

export default QualityCard;

const Container = styled.div`
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    padding: 16px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const IconContainer = styled.div<{ $color?: string }>`
    width: 48px;
    height: 48px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 12px;
    background-color: ${({ $color }) => $color || '#f0f0f0'};
    border-radius: 8px;
    background-color: #f0f0f0;
`;
