"use client";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
	return (
		<section id="projects" className="py-20 px-6">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
						制作物
					</h2>
					<p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
						これまでに携わったプロジェクトたち。技術で人々の生活を少しでも便利にするための挑戦の記録です。
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8">
					{projects.map((project) => (
						<div
							key={project.title}
							className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
						>
							<div className="p-8">
								<div className="flex items-start justify-between mb-4">
									<div className="text-4xl">{project.emoji}</div>
									<div className="flex gap-2">
										{project.repository && (
											<a
												href={project.repository}
												target="_blank"
												rel="noopener noreferrer"
												className="p-2 text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
											>
												<FontAwesomeIcon icon={faGithub} size="lg" />
											</a>
										)}
										{project.website && (
											<a
												href={project.website}
												target="_blank"
												rel="noopener noreferrer"
												className="p-2 text-slate-600 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400 transition-colors"
											>
												<FontAwesomeIcon icon={faExternalLink} size="lg" />
											</a>
										)}
									</div>
								</div>

								<h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-3">
									{project.title}
								</h3>

								<p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
									{project.description}
								</p>

								<div className="flex flex-wrap gap-2">
									{project.tech.map((tech) => (
										<span
											key={tech}
											className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full text-sm font-medium"
										>
											{tech}
										</span>
									))}
								</div>
							</div>

							<div className="h-1 bg-gradient-to-r from-indigo-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
						</div>
					))}
				</div>

				<div className="text-center mt-12">
					<a
						href="https://github.com/Lqm1"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
					>
						<FontAwesomeIcon icon={faGithub} size="lg" />
						もっと見る
					</a>
				</div>
			</div>
		</section>
	);
}
