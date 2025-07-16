"use client";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, type Variants } from "framer-motion";

const projects = [
	{
		title: "ポートフォリオサイト",
		description:
			"PythonとTypeScript開発者としてのスキルとプロジェクトを紹介する個人ポートフォリオサイト。Next.jsとTypeScriptで構築され、最新のWeb技術を活用した高速でレスポンシブなデザインを実現しています。",
		tech: ["Next.js", "TypeScript"],
		repository: "https://github.com/Lqm1/Lqm1.github.io",
		website: "https://lami.zip/",
		emoji: "🤖",
	},
	{
		title: "Discord 読み上げボット",
		description:
			"Discordサーバーで自然な日本語読み上げを提供する高性能ボット。VOICEVOX、COEIROINK、AivisSpeechエンジンをサポートし、カスタム話者設定やスラッシュコマンドによる直感的な操作が可能です。",
		tech: ["Next.js", "TypeScript", "Sapphire", "Discord.js", "Docker"],
		website: "https://yomi-chan.jp/",
		emoji: "🎨",
	},
	{
		title: "X (旧Twitter) 自動運用ツール",
		description:
			"X（旧Twitter）アカウントの自動運用を実現する包括的な管理ツール。投稿スケジューリング、エンゲージメント分析、自動リプライ機能を備え、PrismaとPostgreSQLで堅牢なデータ管理を実現。",
		tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Vercel"],
		emoji: "✅",
	},
	{
		title: "AquesTalk (旧ライセンス) Web API",
		description:
			"レガシーAquesTalkライブラリをOpenAI互換のHTTP APIとして提供する軽量サーバー。Windows環境で無料で日本語「ゆっくりボイス」を生成でき、既存のクライアントから簡単に利用可能です。",
		tech: ["Go", "Gin"],
		repository: "https://github.com/Lqm1/aquestalk-server",
		emoji: "🎵",
	},
];

export default function Projects() {
	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const cardVariants: Variants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: "spring",
				stiffness: 100,
				damping: 10,
			},
		},
	};

	return (
		<section id="projects" className="py-20 px-6">
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
						variants={cardVariants}
					>
						制作物
					</motion.h2>
					<motion.p
						className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
						variants={cardVariants}
					>
						これまでに携わったプロジェクトたち。技術で人々の生活を少しでも便利にするための挑戦の記録です。
					</motion.p>
				</motion.div>

				<motion.div
					className="grid md:grid-cols-2 gap-8"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={containerVariants}
				>
					{projects.map((project, index) => (
						<motion.div
							key={project.title}
							variants={cardVariants}
							whileHover={{
								y: -8,
								transition: { type: "spring", stiffness: 300 },
							}}
							className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden relative"
						>
							<motion.div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

							<div className="relative z-10 p-8">
								<div className="flex items-start justify-between mb-4">
									<motion.div
										className="text-4xl"
										animate={{ rotate: [0, 10, -10, 0] }}
										transition={{
											duration: 2,
											repeat: Infinity,
											ease: "easeInOut",
										}}
									>
										{project.emoji}
									</motion.div>
									<div className="flex gap-2">
										{project.repository && (
											<motion.a
												href={project.repository}
												target="_blank"
												rel="noopener noreferrer"
												className="p-2 text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
												whileHover={{ scale: 1.1 }}
												whileTap={{ scale: 0.9 }}
											>
												<FontAwesomeIcon icon={faGithub} size="lg" />
											</motion.a>
										)}
										{project.website && (
											<motion.a
												href={project.website}
												target="_blank"
												rel="noopener noreferrer"
												className="p-2 text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
												whileHover={{ scale: 1.1 }}
												whileTap={{ scale: 0.9 }}
											>
												<FontAwesomeIcon icon={faExternalLink} size="lg" />
											</motion.a>
										)}
									</div>
								</div>

								<motion.h3
									className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-3"
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ delay: index * 0.1 + 0.2 }}
								>
									{project.title}
								</motion.h3>

								<motion.p
									className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1 + 0.3 }}
								>
									{project.description}
								</motion.p>

								<motion.div
									className="flex flex-wrap gap-2"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1 + 0.4 }}
								>
									{project.tech.map((tech) => (
										<motion.span
											key={tech}
											className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium"
											whileHover={{ scale: 1.05 }}
											transition={{ type: "spring", stiffness: 400 }}
										>
											{tech}
										</motion.span>
									))}
								</motion.div>
							</div>

							<motion.div
								className="h-1 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
								initial={{ scaleX: 0 }}
								whileInView={{ scaleX: 1 }}
								transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
							/>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					className="text-center mt-12"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5 }}
				>
					<motion.a
						href="https://github.com/Lqm1"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
					>
						<FontAwesomeIcon icon={faGithub} size="lg" />
						もっと見る
					</motion.a>
				</motion.div>
			</div>
		</section>
	);
}
