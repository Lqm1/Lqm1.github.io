"use client";

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
	return (
		<section
			id="skills"
			className="py-20 px-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm"
		>
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
						スキル
					</h2>
					<p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
						日々学び続ける技術たち。新しいことに挑戦することが好きです。
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{Object.entries(skills).map(([category, items]) => (
						<div
							key={category}
							className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
						>
							<h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-4 capitalize">
								{category === "languages"
									? "言語"
									: category === "frontend"
										? "フロントエンド"
										: category === "backend"
											? "バックエンド"
											: "ツール"}
							</h3>

							<div className="space-y-4">
								{items.map((skill) => (
									<div key={skill.name} className="space-y-2">
										<div className="flex items-center justify-between">
											<div className="flex items-center gap-2">
												<span className="text-lg">{skill.icon}</span>
												<span className="font-medium text-slate-700 dark:text-slate-300">
													{skill.name}
												</span>
											</div>
											<span className="text-sm text-slate-500 dark:text-slate-400">
												{skill.level}%
											</span>
										</div>
										<div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
											<div
												className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
												style={{ width: `${skill.level}%` }}
											></div>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>

				<div className="mt-12 text-center">
					<div className="bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-2xl p-8">
						<h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
							学習中の技術
						</h3>
						<div className="flex flex-wrap gap-3 justify-center">
							{["AWS", "GraphQL", "Transformers", "PyTorch"].map((tech) => (
								<span
									key={tech}
									className="px-4 py-2 bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 rounded-full font-medium shadow-sm"
								>
									{tech}
								</span>
							))}
						</div>
						<p className="text-slate-600 dark:text-slate-400 mt-4">
							セキュリティ対策や高速化技術に興味を持ち、常に新しい技術を学び続けています
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
