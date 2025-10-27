'use client';
import styled from 'styled-components';

const HeroSphere = styled.div<{
    color?: string;
    size?: number;
    top?: number;
    left?: number;
}>`
    position: absolute;
    top: ${(props) => props.top ?? 0}px;
    left: ${(props) => props.left ?? 0}px;
    width: ${(props) => props.size ?? 450}px;
    height: ${(props) => props.size ?? 450}px;
    border-radius: 50%;
    filter: blur(100px);
    background: ${(props) => props.color ?? '#c1e1ff'};
    z-index: -1;
`;

export { HeroSphere };
