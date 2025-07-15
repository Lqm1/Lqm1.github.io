import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Lami's Portfolio - K-POPとアニメが好きなエンジニア",
	description:
		"TypeScriptとPythonで、素敵なものを作るLamiのポートフォリオサイト。K-POP（IVE・aespa）とアニメ（ヒロアカ・SAO）が好きです",
	keywords: [
		"portfolio",
		"typescript",
		"python",
		"nextjs",
		"web開発",
		"K-POP",
		"アニメ",
	],
	openGraph: {
		title: "Lami's Portfolio - K-POPとアニメが好きなエンジニア",
		description:
			"TypeScriptとPythonで、素敵なものを作るLamiのポートフォリオサイト。K-POP（IVE・aespa）とアニメ（ヒロアカ・SAO）が好きです",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ja">
			<body className={`${inter.className} antialiased scroll-smooth`}>
				{children}
			</body>
		</html>
	);
}
