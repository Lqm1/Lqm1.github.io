export default function About() {
	return (
		<section
			id="about"
			className="py-20 px-6 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm"
		>
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
						私について
					</h2>
					<p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
						技術で人々の生活を少しでも便利にしたい、そんな思いでコードを書いています
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div className="space-y-6">
						<div className="prose prose-lg dark:prose-invert text-slate-700 dark:text-slate-300">
							<p className="text-lg leading-relaxed">
								こんにちは！Lamiです。Web開発が大好きなエンジニアです。
								高校生の頃にプログラミングに出会って以来、技術で人々の生活を豊かにすることに情熱を燃やしています。
							</p>

							<p className="text-lg leading-relaxed">
								TypeScriptとPythonが得意で、特にNext.jsでのフロントエンド開発と、FastAPIを使ったバックエンド開発に注力しています。
								最近はAIとWebの組み合わせに興味があり、新しい可能性を探っています。
							</p>

							<p className="text-lg leading-relaxed">
								K-POPとアニメが大好きです！IVEやaespaの曲を聴きながらコードを書くのが日課です。
								ヒロアカやSAOなどの熱い展開のアニメにもハマっています。
								チームでの開発も大好きで、誰かと一緒に作ることの楽しさを大切にしています。
							</p>
						</div>

						<div className="grid grid-cols-2 gap-4 mt-8">
							<div className="text-center p-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl">
								<div className="text-3xl font-bold text-indigo-600 dark:text-indigo-400">
									7+
								</div>
								<div className="text-sm text-slate-600 dark:text-slate-400">
									開発経験年数
								</div>
							</div>
							<div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl">
								<div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
									50+
								</div>
								<div className="text-sm text-slate-600 dark:text-slate-400">
									制作物数
								</div>
							</div>
						</div>
					</div>

					<div className="relative">
						<div className="aspect-square max-w-md mx-auto relative">
							<div className="absolute inset-0 bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 rounded-2xl transform rotate-6 opacity-80"></div>
							<div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl transform -rotate-3 opacity-90"></div>
							<div className="relative bg-white dark:bg-slate-800 rounded-2xl p-8 h-full flex items-center justify-center">
								<div className="text-center">
									<div className="text-6xl mb-4">👨‍💻</div>
									<div className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">
										プログラマー
									</div>
									<div className="text-slate-600 dark:text-slate-400">
										TypeScript • Python • Next.js
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
