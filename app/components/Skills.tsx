"use client";
import { motion } from "framer-motion";

const skills = {
	languages: [
		{ name: "TypeScript", icon: "📘", level: 90 },
		{ name: "Python", icon: "🐍", level: 90 },
		{ name: "Go", icon: "🐹", level: 50 },
		{ name: "PHP", icon: "🐘", level: 50 },
	],
	frontend: [
		{ name: "Next.js", icon: "⚡", level: 90 },
		{ name: "Tailwind CSS", icon: "🌬️", level: 95 },
	],
	backend: [
		{ name: "FastAPI", icon: "🚀", level: 85 },
		{ name: "Hono", icon: "🔥", level: 85 },
		{ name: "PostgreSQL", icon: "🐘", level: 85 },
		{ name: "MySQL", icon: "🗄️", level: 80 },
		{ name: "MongoDB", icon: "🍃", level: 75 },
		{ name: "Prisma", icon: "🎯", level: 95 },
	],
	tools: [
		{ name: "Git", icon: "🔧", level: 85 },
		{ name: "Docker", icon: "🐳", level: 80 },
		{ name: "VS Code", icon: "💻", level: 90 },
		{ name: "Ubuntu", icon: "🐧", level: 80 },
		{ name: "Cloudflare", icon: "☁️", level: 95 },
	],
};

export default function Skills() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const cardVariants = {
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

	const skillVariants = {
		hidden: { opacity: 0, x: -20 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: "spring" as const,
				stiffness: 100,
				damping: 10,
			},
		},
	};

	return (
		<section
			id="skills"
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
						variants={cardVariants}
					>
						スキル
					</motion.h2>
					<motion.p
						className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
						variants={cardVariants}
					>
						日々学び続ける技術たち。新しいことに挑戦することが好きです。
					</motion.p>
				</motion.div>

				<motion.div
					className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true }}
					variants={containerVariants}
				>
					{Object.entries(skills).map(([category, items]) => (
						<motion.div
							key={category}
							variants={cardVariants}
							whileHover={{
								y: -5,
								transition: { type: "spring", stiffness: 300 },
							}}
							className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
						>
							<motion.h3
								className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4 capitalize"
								variants={skillVariants}
							>
								{category === "languages"
									? "言語"
									: category === "frontend"
										? "フロントエンド"
										: category === "backend"
											? "バックエンド"
											: "ツール"}
							</motion.h3>

							<motion.div className="space-y-4" variants={containerVariants}>
								{items.map((skill) => (
									<motion.div
										key={skill.name}
										variants={skillVariants}
										className="space-y-2"
									>
										<div className="flex items-center justify-between">
											<div className="flex items-center gap-2">
												<motion.span
													className="text-lg"
													animate={{ rotate: [0, 10, -10, 0] }}
													transition={{
														duration: 2,
														repeat: Infinity,
														ease: "easeInOut",
													}}
												>
													{skill.icon}
												</motion.span>
												<span className="font-medium text-slate-700 dark:text-slate-300">
													{skill.name}
												</span>
											</div>
											<span className="text-sm text-slate-500 dark:text-slate-400">
												{skill.level}%
											</span>
										</div>
										<motion.div
											className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden"
											initial={{ opacity: 0 }}
											whileInView={{ opacity: 1 }}
											transition={{ delay: 0.5 }}
										>
											<motion.div
												className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full"
												initial={{ width: 0 }}
												whileInView={{ width: `${skill.level}%` }}
												transition={{
													duration: 1.5,
													delay: 0.5,
													ease: "easeOut",
												}}
											/>
										</motion.div>
									</motion.div>
								))}
							</motion.div>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					className="mt-12 text-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5 }}
				>
					<div className="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-8">
						<motion.h3
							className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4"
							initial={{ opacity: 0, y: -20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 }}
						>
							学習中の技術
						</motion.h3>
						<motion.div
							className="flex flex-wrap gap-3 justify-center"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.7, staggerChildren: 0.1 }}
						>
							{["AWS", "GraphQL", "Transformers", "PyTorch"].map((tech) => (
								<motion.span
									key={tech}
									className="px-4 py-2 bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 rounded-full font-medium shadow-sm"
									whileHover={{ scale: 1.05 }}
									transition={{ type: "spring", stiffness: 400 }}
								>
									{tech}
								</motion.span>
							))}
						</motion.div>
						<motion.p
							className="text-slate-600 dark:text-slate-400 mt-4"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							transition={{ delay: 0.8 }}
						>
							セキュリティ対策や高速化技術に興味を持ち、常に新しい技術を学び続けています
						</motion.p>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
