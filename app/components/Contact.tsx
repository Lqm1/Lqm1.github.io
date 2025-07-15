"use client";
import {
	faGithub,
	faInstagram,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mail, Send } from "lucide-react";
import { useState } from "react";

const socialLinks = [
	{
		name: "GitHub",
		icon: <FontAwesomeIcon icon={faGithub} className="w-5 h-5" />,
		url: "https://github.com/Lqm1",
		color: "hover:text-gray-900 dark:hover:text-gray-100",
	},
	{
		name: "Instagram",
		icon: <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />,
		url: "https://www.instagram.com/kohnoselami/",
		color: "hover:text-pink-600",
	},
	{
		name: "LinkedIn",
		icon: <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5" />,
		url: "https://www.linkedin.com/in/KohnoseLami/",
		color: "hover:text-blue-700",
	},
	{
		name: "Email",
		icon: <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5" />,
		url: "mailto:info@lami.zip",
		color: "hover:text-indigo-600",
	},
];

export default function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// 実際の実装ではここでAPIに送信
		setTimeout(() => {
			alert("メッセージを送信しました！");
			setFormData({ name: "", email: "", message: "" });
			setIsSubmitting(false);
		}, 1000);
	};

	return (
		<section id="contact" className="py-20 px-6">
			<div className="max-w-4xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
						お問い合わせ
					</h2>
					<p className="text-lg text-slate-600 dark:text-slate-400">
						お仕事の話でも、技術の話でも、何でも気軽に話しかけてください
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-12">
					<div>
						<h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4">
							連絡先
						</h3>
						<p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
							新しいプロジェクトに挑戦することを常に楽しみにしています。
							一緒に素敵なものを作りましょう！
						</p>

						<div className="space-y-4">
							<a
								href="mailto:info@lami.zip"
								className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
							>
								<Mail size={20} />
								info@lami.zip
							</a>
						</div>

						<div className="flex gap-4 mt-8">
							{socialLinks.map((link) => (
								<a
									key={link.name}
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									className={`p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 ${link.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
								>
									{link.icon}
								</a>
							))}
						</div>
					</div>

					<form onSubmit={handleSubmit} className="space-y-6">
						<div>
							<label
								htmlFor="name"
								className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
							>
								お名前
							</label>
							<input
								type="text"
								id="name"
								value={formData.name}
								onChange={(e) =>
									setFormData({ ...formData, name: e.target.value })
								}
								required
								className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
								placeholder="山田太郎"
							/>
						</div>

						<div>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
							>
								メールアドレス
							</label>
							<input
								type="email"
								id="email"
								value={formData.email}
								onChange={(e) =>
									setFormData({ ...formData, email: e.target.value })
								}
								required
								className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
								placeholder="example@email.com"
							/>
						</div>

						<div>
							<label
								htmlFor="message"
								className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
							>
								メッセージ
							</label>
							<textarea
								id="message"
								value={formData.message}
								onChange={(e) =>
									setFormData({ ...formData, message: e.target.value })
								}
								required
								rows={4}
								className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
								placeholder="お問い合わせ内容をご記入ください"
							/>
						</div>

						<button
							type="submit"
							disabled={isSubmitting}
							className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{isSubmitting ? (
								"送信中..."
							) : (
								<>
									<Send size={20} />
									送信する
								</>
							)}
						</button>
					</form>
				</div>

				<div className="text-center mt-12">
					<p className="text-sm text-slate-500 dark:text-slate-400">
						通常24時間以内にご返信いたします
					</p>
				</div>
			</div>
		</section>
	);
}
