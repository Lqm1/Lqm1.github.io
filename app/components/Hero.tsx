"use client";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
	const [text, setText] = useState("");
	const [showCursor, setShowCursor] = useState(true);
	const fullText = "プログラミングで、世界をちょっとだけ良くする";

	useEffect(() => {
		let index = 0;
		const typeInterval = setInterval(() => {
			if (index <= fullText.length) {
				setText(fullText.slice(0, index));
				index++;
			} else {
				clearInterval(typeInterval);
				setShowCursor(false);
			}
		}, 100);

		const cursorInterval = setInterval(() => {
			setShowCursor((prev) => !prev);
		}, 500);

		return () => {
			clearInterval(typeInterval);
			clearInterval(cursorInterval);
		};
	}, []);

	const scrollToNext = () => {
		const element = document.getElementById("about");
		element?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-900">
			{/* Animated background elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute top-3/4 right-1/4 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
				<div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-pink-300/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
			</div>

			<div className="text-center z-10 px-6">
				<h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
					こんにちは、Lamiです
				</h1>

				<div className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8 h-8">
					<span>{text}</span>
					{showCursor && <span className="animate-pulse">|</span>}
				</div>

				<p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
					TypeScriptとPythonで、素敵なものを作るのが好きなエンジニアです。
					K-POPを聴きながらコードを書くのが日課で、IVEやaespaの曲が特に好きです。
				</p>

				<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
					<a
						href="#projects"
						className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
					>
						作品を見る
					</a>
					<a
						href="#contact"
						className="px-8 py-4 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 rounded-full font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300 transform hover:scale-105"
					>
						話しかける
					</a>
				</div>

				<div className="mt-16 animate-bounce">
					<button
						type="button"
						onClick={scrollToNext}
						className="text-slate-500 hover:text-indigo-600 transition-colors"
					>
						<ChevronDown size={32} />
					</button>
				</div>

				<div className="mt-12 max-w-md mx-auto">
					<p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
						🎵 今聴いている曲
					</p>
					<iframe
						style={{ borderRadius: "12px" }}
						src="https://open.spotify.com/embed/track/0OnWu3G0i9Kg4Mqha5QvvH?utm_source=generator"
						width="100%"
						height="152"
						allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
						loading="lazy"
						title="今聴いている曲のSpotifyプレイヤー"
					/>
				</div>
			</div>

			{/* Floating tech icons */}
			<div className="absolute top-10 right-10 opacity-20">
				<div className="text-4xl animate-float">⚡</div>
			</div>
			<div className="absolute bottom-10 left-10 opacity-20">
				<div className="text-4xl animate-float-delayed">💻</div>
			</div>
		</section>
	);
}
