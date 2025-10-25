import type { Metadata } from 'next';
import Header from '@/layouts/header';
import StyledComponentsRegistry from '@/lib/registery';
import GlobalStyle from './global-styles';

export const metadata: Metadata = {
    title: 'Christopher Nafrere - Développeur Web',
    description:
        "Portfolio de Christopher Nafrere, développeur web spécialisé dans la création d'applications modernes et réactives.",
    keywords: [
        'développeur web',
        'portfolio',
        'applications modernes',
        'Christopher Nafrere',
        'web development',
        'responsive applications',
        'front-end',
        'back-end',
        'fullstack',
        'JavaScript',
        'React',
        'Next.js',
        'Node.js',
        'CSS',
        'HTML',
        'Nest js',
        'TypeScript',
        'GraphQL',
        'rest API',
        'sass',
        'styled-components',
        'performance web',
        'optimisation',
        'UX/UI',
        'design web',
        'développement durable',
        'accessibilité',
        'inclusivité',
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr">
            <body>
                <StyledComponentsRegistry>
                    <GlobalStyle />
                    <Header />
                    {children}
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
