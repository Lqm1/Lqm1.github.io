"use client";
import { motion } from "framer-motion";

export default function About() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: "spring" as const,
				stiffness: 100,
				damping: 10,
			},
		},
	};

	const cardVariants = {
		hidden: { opacity: 0, x: -50 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: "spring" as const,
				stiffness: 100,
				damping: 10,
				delay: 0.3,
			},
		},
	};

	const imageVariants = {
		hidden: { opacity: 0, x: 50 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: "spring" as const,
				stiffness: 100,
				damping: 10,
				delay: 0.5,
			},
		},
	};

	const statVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				type: "spring" as const,
				stiffness: 200,
				damping: 15,
				delay: 0.7,
			},
		},
	};

	return (
		<section
			id="about"
			className="py-20 px-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm"
		>
			<div className="max-w-6xl mx-auto">
				<motion.div
					className="text-center mb-12"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={containerVariants}
				>
					<motion.h2
						className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4"
						variants={itemVariants}
					>
						私について
					</motion.h2>
					<motion.p
						className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
						variants={itemVariants}
					>
						技術で人々の生活を少しでも便利にしたい、そんな思いでコードを書いています
					</motion.p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-12 items-center">
					<motion.div
						className="space-y-6"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={cardVariants}
					>
						<div className="prose prose-lg dark:prose-invert text-slate-700 dark:text-slate-300">
							<motion.p
								className="text-lg leading-relaxed"
								variants={itemVariants}
							>
								こんにちは！Lamiです。Web開発が大好きなエンジニアです。
								高校生の頃にプログラミングに出会って以来、技術で人々の生活を豊かにすることに情熱を燃やしています。
							</motion.p>

							<motion.p
								className="text-lg leading-relaxed"
								variants={itemVariants}
							>
								TypeScriptとPythonが得意で、特にNext.jsでのフロントエンド開発と、FastAPIを使ったバックエンド開発に注力しています。
								最近はAIとWebの組み合わせに興味があり、新しい可能性を探っています。
							</motion.p>

							<motion.p
								className="text-lg leading-relaxed"
								variants={itemVariants}
							>
								K-POPとアニメが大好きです！IVEやaespaの曲を聴きながらコードを書くのが日課です。
								ヒロアカやSAOなどの熱い展開のアニメにもハマっています。
								チームでの開発も大好きで、誰かと一緒に作ることの楽しさを大切にしています。
							</motion.p>
						</div>

						<motion.div
							className="grid grid-cols-2 gap-4 mt-8"
							variants={statVariants}
						>
							<motion.div
								className="text-center p-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl hover:scale-105 transition-transform duration-300"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<motion.div
									className="text-3xl font-bold text-indigo-600 dark:text-indigo-400"
									initial={{ scale: 0 }}
									whileInView={{ scale: 1 }}
									transition={{ type: "spring", stiffness: 200, delay: 0.8 }}
								>
									7+
								</motion.div>
								<div className="text-sm text-slate-600 dark:text-slate-400">
									開発経験年数
								</div>
							</motion.div>
							<motion.div
								className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl hover:scale-105 transition-transform duration-300"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<motion.div
									className="text-3xl font-bold text-purple-600 dark:text-purple-400"
									initial={{ scale: 0 }}
									whileInView={{ scale: 1 }}
									transition={{ type: "spring", stiffness: 200, delay: 0.9 }}
								>
									50+
								</motion.div>
								<div className="text-sm text-slate-600 dark:text-slate-400">
									制作物数
								</div>
							</motion.div>
						</motion.div>
					</motion.div>

					<motion.div
						className="relative"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={imageVariants}
					>
						<div className="aspect-square max-w-md mx-auto relative">
							<motion.div
								className="absolute inset-0 bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 rounded-2xl transform rotate-6 opacity-80"
								animate={{ rotate: [6, -6, 6] }}
								transition={{
									duration: 8,
									repeat: Infinity,
									ease: "easeInOut",
								}}
							/>
							<motion.div
								className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl transform -rotate-3 opacity-90"
								animate={{ rotate: [-3, 3, -3] }}
								transition={{
									duration: 6,
									repeat: Infinity,
									ease: "easeInOut",
								}}
							/>
							<motion.div
								className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 h-full flex items-center justify-center shadow-2xl"
								whileHover={{ scale: 1.02 }}
								transition={{ type: "spring", stiffness: 300 }}
							>
								<div className="text-center">
									<motion.div
										className="text-6xl mb-4"
										animate={{ rotate: [0, 10, -10, 0] }}
										transition={{
											duration: 2,
											repeat: Infinity,
											ease: "easeInOut",
										}}
									>
										👨‍💻
									</motion.div>
									<div className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">
										プログラマー
									</div>
									<div className="text-slate-600 dark:text-slate-400">
										TypeScript • Python • Next.js
									</div>
								</div>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
