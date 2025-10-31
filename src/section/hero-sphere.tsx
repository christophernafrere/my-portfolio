import { useEffect, useState } from 'react';
import styled from 'styled-components';

function HeroSphereSystem() {
    const [spheres, setSpheres] = useState<
        { color: string; size: number; top: number; left: number }[]
    >([]);

    useEffect(() => {
        // compute random positions/sizes/colors only on the client to avoid hydration mismatch
        // slightly more saturated pastel palette (a bit more intense but still soft)
        const palette = [
            '#ffdada', // more intense pink
            '#ffd1b8', // more intense peach
            '#bfe8ff', // more intense sky blue
            '#fff49a', // more intense butter yellow
            '#c9f3c9', // more intense minty green
            '#d9eaff', // more intense pale blue
            '#ffe8c6', // more intense cream
        ];

        const pickColor = () =>
            palette[Math.floor(Math.random() * palette.length)];

        const clamp = (v: number, min: number) => Math.max(v, min);

        const generated = [
            { baseSize: 300 },
            { baseSize: 400 },
            { baseSize: 500 },
            { baseSize: 150 },
        ].map((base) => {
            // randomize size around baseSize but enforce a minimum size
            const minSize = 80; // minimum allowed size (px)
            const variation = 0.6 + Math.random() * 0.8; // 0.6..1.4 range
            const size = clamp(Math.floor(base.baseSize * variation), minSize);

            return {
                color: pickColor(),
                size,
                top: Math.floor(Math.random() * 100),
                left: Math.floor(Math.random() * 100),
            };
        });

        setSpheres(generated);
    }, []);

    return (
        <SpheresWrapper suppressHydrationWarning>
            {spheres.map((s, i) => (
                <HeroSphere
                    key={i}
                    color={s.color}
                    size={s.size}
                    top={s.top}
                    left={s.left}
                />
            ))}
        </SpheresWrapper>
    );
}

export default HeroSphereSystem;

const SpheresWrapper = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    height: 100%;
    pointer-events: none;
    z-index: -20;
`;

const HeroSphere = styled.div<{
    color?: string;
    size?: number;
    top?: number;
    left?: number;
}>`
    position: absolute;
    transform: translate(-50%, -50%);
    top: ${(props) => props.top ?? 0}vh;
    left: ${(props) => props.left ?? 0}vw;
    width: ${(props) => props.size ?? 450}px;
    height: ${(props) => props.size ?? 450}px;
    border-radius: 50%;
    filter: blur(100px);
    background: ${(props) => props.color ?? '#c1e1ff'};
    z-index: -1;
`;
