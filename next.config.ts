import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    compiler: {
        styledComponents: true,
    },
    reactCompiler: true,
    output: 'export',
};

export default nextConfig;
