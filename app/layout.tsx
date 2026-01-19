import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Head from 'next/head';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Yesica Rodas',
    description: 'Currículum Vitae de Yesica Anama Rodas',
    icons: { icon: '/favicon.ico' },
    metadataBase: new URL('https://yesicarodas.com/'),
    openGraph: {
        title: 'Yesica Rodas',
        description: 'Currículum Vitae de Yesica Anama Rodas',
    },
    twitter: {
        card: 'app',
        title: 'Yesica Rodas',
        description: 'Curriculúm Vitae de Yesica Anama Rodas',
        siteId: '1467726470533754880',
        creator: '@nextjs',
        creatorId: '1467726470533754880',
        images: {
            url: 'https://yesicarodas.com/assets/opengraph-image.jpg',
            alt: 'Page Logo',
        },
        app: {
            name: 'twitter_app',
            id: {
                iphone: 'twitter_app://iphone',
                ipad: 'twitter_app://ipad',
                googleplay: 'twitter_app://googleplay',
            },
            url: {
                iphone: 'https://iphone_url',
                ipad: 'https://ipad_url',
            },
        },
    },
    appleWebApp: {
        title: 'Yesica Rodas',
        statusBarStyle: 'default',
    },
    applicationName: 'Yesica Rodas',
    themeColor: '#fff',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Head>
                <script type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'https://yesicarodas.com',
                        '@type': 'Article',
                        headline: 'Yesica Rodas',
                        datePublished: '2025-04-06',
                        author: {
                            '@type': 'Person',
                            name: 'Gonzalo Corvalan',
                        },
                        image: [
                            'https://yesicarodas.com/assets/pfp.jpg',
                            'https://yesicarodas.com/assets/pfp_square.jpg',
                        ],
                        articleSection: 'Currículum Vitae',
                    })}
                </script>
            </Head>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                {children}
                <SpeedInsights />
                <Analytics />
            </body>
        </html>
    );
}
