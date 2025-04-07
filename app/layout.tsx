import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Yesica Rodas",
	description: "Currículum Vitae de Yesica Anama Rodas",
	icons: { icon: "/favicon.ico" },
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
						"@context": "https://yesicarodas.com",
						"@type": "Article",
						headline: "Yesica Rodas",
						datePublished: "2025-04-06",
						author: {
							"@type": "Person",
							name: "Gonzalo Corvalan",
						},
						image: [
							"https://yesicarodas.com/assets/pfp.jpg",
							"https://yesicarodas.com/assets/pfp_square.jpg",
						],
						articleSection: "Currículum Vitae",
					})}
				</script>
			</Head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				{children}
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}
