"use client";
import { motion } from "framer-motion";
import { ChevronDown, MousePointer2 } from "lucide-react";
import { useEffect, useState } from "react";
import ParticleBackground from "./ParticleBackground";

export default function Hero3D() {
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

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.3,
				delayChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { y: 50, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				type: "spring" as const,
				stiffness: 100,
				damping: 10,
			},
		},
	};

	return (
		<section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900">
			<ParticleBackground />

			{/* Animated gradient overlay */}
			<div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 animate-pulse" />

			<motion.div
				className="text-center z-10 px-6 max-w-6xl mx-auto"
				variants={containerVariants}
				initial="hidden"
				animate="visible"
			>
				<motion.h1
					className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
					variants={itemVariants}
				>
					こんにちは、Lamiです
				</motion.h1>

				<motion.div
					className="text-xl md:text-2xl text-slate-300 mb-8 h-8 font-mono"
					variants={itemVariants}
				>
					<span>{text}</span>
					<motion.span
						className="inline-block"
						animate={{ opacity: showCursor ? 1 : 0 }}
						transition={{
							duration: 0.5,
							repeat: Infinity,
							repeatType: "reverse",
						}}
					>
						|
					</motion.span>
				</motion.div>

				<motion.p
					className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed"
					variants={itemVariants}
				>
					TypeScriptとPythonで、素敵なものを作るのが好きなエンジニアです。
					K-POPを聴きながらコードを書くのが日課で、IVEやaespaの曲が特に好きです。
				</motion.p>

				<motion.div
					className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
					variants={itemVariants}
				>
					<motion.a
						href="#projects"
						className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl relative overflow-hidden group"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<span className="relative z-10">作品を見る</span>
						<div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
					</motion.a>

					<motion.a
						href="#contact"
						className="px-8 py-4 border-2 border-indigo-400 text-indigo-400 rounded-full font-semibold hover:bg-indigo-400 hover:text-white transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<span className="relative z-10">話しかける</span>
						<div className="absolute inset-0 bg-indigo-400 scale-0 group-hover:scale-100 transition-transform duration-300 origin-left" />
					</motion.a>
				</motion.div>

				<motion.div
					className="max-w-md mx-auto"
					variants={itemVariants}
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 1.5 }}
				>
					<p className="text-sm text-slate-400 mb-4 flex items-center justify-center gap-2">
						<MousePointer2 size={16} />🎵 今聴いている曲
					</p>
					<motion.div
						className="rounded-lg overflow-hidden shadow-2xl"
						whileHover={{ scale: 1.02 }}
						transition={{ type: "spring", stiffness: 300 }}
					>
						<iframe
							style={{ borderRadius: "12px" }}
							src="https://open.spotify.com/embed/track/0OnWu3G0i9Kg4Mqha5QvvH?utm_source=generator"
							width="100%"
							height="152"
							allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
							loading="lazy"
							title="今聴いている曲のSpotifyプレイヤー"
						/>
					</motion.div>
				</motion.div>
			</motion.div>

			<motion.div
				className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
				animate={{ y: [0, 10, 0] }}
				transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
			>
				<motion.button
					type="button"
					onClick={scrollToNext}
					className="text-slate-400 hover:text-indigo-400 transition-colors"
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
				>
					<ChevronDown size={32} />
				</motion.button>
			</motion.div>

			{/* Floating 3D elements */}
			<motion.div
				className="absolute top-20 right-20 text-4xl opacity-20"
				animate={{
					y: [0, -20, 0],
					rotate: [0, 180, 360],
				}}
				transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
			>
				⚡
			</motion.div>

			<motion.div
				className="absolute bottom-20 left-20 text-4xl opacity-20"
				animate={{
					y: [0, 20, 0],
					rotate: [0, -180, -360],
				}}
				transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
			>
				💻
			</motion.div>
		</section>
	);
}
