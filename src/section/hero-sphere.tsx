import { useEffect, useState } from 'react';
import styled from 'styled-components';

function HeroSphereSystem() {
    const [spheres, setSpheres] = useState<
        {
            color: string;
            size: number;
            top: number;
            left: number;
            dur: number;
            delay: number;
            ampX: number;
            ampY: number;
            // breathing
            breathAmp: number;
            breathDur: number;
            breathDelay: number;
        }[]
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

        const randBetween = (min: number, max: number) =>
            Math.random() * (max - min) + min;

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

            const dur = Number(randBetween(8, 20).toFixed(2)); // seconds
            const delay = Number(randBetween(0, 6).toFixed(2)); // seconds
            const ampX = Math.floor(randBetween(8, 48)); // px horizontal amplitude
            const ampY = Math.floor(randBetween(6, 36)); // px vertical amplitude

            // breathing parameters
            const breathAmp = Number(randBetween(0.02, 0.06).toFixed(3)); // scale amplitude (±)
            const breathDur = Number(randBetween(4, 10).toFixed(2));
            const breathDelay = Number(randBetween(0, 5).toFixed(2));

            return {
                color: pickColor(),
                size,
                top: Math.floor(Math.random() * 100),
                left: Math.floor(Math.random() * 100),
                dur,
                delay,
                ampX,
                ampY,
                breathAmp,
                breathDur,
                breathDelay,
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
                    style={
                        {
                            ['--dur' as any]: `${s.dur}s`,
                            ['--delay' as any]: `${s.delay}s`,
                            ['--ampX' as any]: `${s.ampX}px`,
                            ['--ampY' as any]: `${s.ampY}px`,
                            ['--breathMin' as any]: `${(
                                1 - s.breathAmp
                            ).toFixed(3)}`,
                            ['--breathMax' as any]: `${(
                                1 + s.breathAmp
                            ).toFixed(3)}`,
                            ['--breathDur' as any]: `${s.breathDur}s`,
                            ['--breathDelay' as any]: `${s.breathDelay}s`,
                        } as React.CSSProperties
                    }
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
    /* base center translation; floating animation will add extra translate offsets */
    transform: translate(-50%, -50%);
    top: ${(props) => props.top ?? 0}vh;
    left: ${(props) => props.left ?? 0}vw;
    width: ${(props) => props.size ?? 450}px;
    height: ${(props) => props.size ?? 450}px;
    border-radius: 50%;
    /* remove direct background & blur from root; use pseudo-element for visual content
       so we can animate scale (breathing) independently from the translate animation */
    z-index: -1;
    background: transparent;

    &::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 50%;
        background: ${(props) => props.color ?? '#c1e1ff'};
        filter: blur(100px);
        pointer-events: none;
        will-change: transform, opacity;
        /* breathing animation */
        animation: breathe var(--breathDur, 6s) ease-in-out infinite;
        animation-delay: var(--breathDelay, 0s);
    }
    /* animation using CSS variables passed inline (dur, delay, amplitudes)
       --dur: animation duration
       --delay: animation delay
       --ampX: horizontal amplitude in px
       --ampY: vertical amplitude in px */
    will-change: transform;

    @keyframes floatMotion {
        0% {
            transform: translate(-50%, -50%) translate3d(0, 0, 0);
        }
        25% {
            transform: translate(-50%, -50%)
                translate3d(var(--ampX, 0px), calc(-1 * var(--ampY, 0px)), 0);
        }
        50% {
            transform: translate(-50%, -50%)
                translate3d(0, calc(-0.5 * var(--ampY, 0px)), 0);
        }
        75% {
            transform: translate(-50%, -50%)
                translate3d(calc(-1 * var(--ampX, 0px)), 0, 0);
        }
        100% {
            transform: translate(-50%, -50%) translate3d(0, 0, 0);
        }
    }

    animation: floatMotion var(--dur, 14s) ease-in-out infinite;
    animation-delay: var(--delay, 0s);

    @keyframes breathe {
        0% {
            transform: scale(var(--breathMin, 0.98));
        }
        50% {
            transform: scale(var(--breathMax, 1.03));
        }
        100% {
            transform: scale(var(--breathMin, 0.98));
        }
    }
`;
