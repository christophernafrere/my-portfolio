'use client';

import styled from 'styled-components';
const Button = styled.button<{ $cta?: boolean }>`
    background: ${({ $cta }) =>
        $cta ? 'linear-gradient(90deg, #ba6bff, #4f46e5)' : '#fff'};
    color: ${({ $cta }) => ($cta ? '#fff' : '#000')};
    font-weight: bold;
    border: none;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(186, 107, 255, 0.3);
    padding: 8px 24px;
    cursor: pointer;
    transition: all 0.3s ease;
    outline: none;
    &:hover {
        box-shadow: 0 6px 8px rgba(186, 107, 255, 0.5);
        transform: translateY(-2px) scale(1.02);
    }
`;

export default Button;
