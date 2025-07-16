"use client";
import {
	faGithub,
	faInstagram,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, type Variants } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactSchema = z.object({
	name: z.string().min(2, "お名前は2文字以上で入力してください"),
	email: z.email("有効なメールアドレスを入力してください"),
	message: z.string().min(10, "メッセージは10文字以上で入力してください"),
	captcha: z.string().min(1, "認証を完了してください"),
});

type ContactData = z.infer<typeof contactSchema>;

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
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<
		"idle" | "success" | "error"
	>("idle");
	const captchaRef = useRef<HCaptcha>(null);

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
		setValue,
	} = useForm<ContactData>({
		resolver: zodResolver(contactSchema),
		mode: "onChange",
		defaultValues: {
			captcha: "",
		},
	});

	const onSubmit = async (data: ContactData) => {
		setIsSubmitting(true);
		setSubmitStatus("idle");

		const formData = new FormData();
		formData.append("access_key", "d1707fd1-b3d6-4449-bb69-84e3b492b381");
		formData.append("name", data.name);
		formData.append("email", data.email);
		formData.append("message", data.message);
		formData.append("h-captcha-response", data.captcha);

		try {
			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: formData,
			});

			const result = await response.json();

			if (result.success) {
				setSubmitStatus("success");
				reset();
				captchaRef.current?.resetCaptcha();
			} else {
				setSubmitStatus("error");
			}
		} catch {
			setSubmitStatus("error");
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleCaptchaVerify = (token: string) => {
		setValue("captcha", token);
	};

	const handleCaptchaExpire = () => {
		setValue("captcha", "");
	};

	const containerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants: Variants = {
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

	const formVariants: Variants = {
		hidden: { opacity: 0, x: 50 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: "spring",
				stiffness: 100,
				damping: 10,
				delay: 0.3,
			},
		},
	};

	return (
		<section id="contact" className="py-20 px-6">
			<div className="max-w-4xl mx-auto">
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
						お問い合わせ
					</motion.h2>
					<motion.p
						className="text-lg text-slate-600 dark:text-slate-400 auto-phrase"
						variants={itemVariants}
					>
						お仕事の話でも、技術の話でも、何でも気軽に話しかけてください
					</motion.p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-12">
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={itemVariants}
					>
						<motion.h3
							className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4"
							variants={itemVariants}
						>
							連絡先
						</motion.h3>
						<motion.p
							className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed auto-phrase"
							variants={itemVariants}
						>
							新しいプロジェクトに挑戦することを常に楽しみにしています。
							一緒に素敵なものを作りましょう！
						</motion.p>

						<div className="space-y-4">
							<motion.a
								href="mailto:info@lami.zip"
								className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
								whileHover={{ x: 5 }}
								transition={{ type: "spring", stiffness: 300 }}
							>
								<Mail size={20} />
								info@lami.zip
							</motion.a>
						</div>

						<div className="flex gap-4 mt-8">
							{socialLinks.map((link, index) => (
								<motion.a
									key={link.name}
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									className={`p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 ${link.color} transition-all duration-300 hover:scale-110 hover:shadow-lg`}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.1 * index }}
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
								>
									{link.icon}
								</motion.a>
							))}
						</div>
					</motion.div>

					<motion.form
						onSubmit={handleSubmit(onSubmit)}
						className="space-y-6"
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={formVariants}
					>
						<motion.div variants={itemVariants}>
							<label
								htmlFor="name"
								className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
							>
								お名前
							</label>
							<input
								type="text"
								id="name"
								{...register("name")}
								className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
								placeholder="山田 太郎"
							/>
							{errors.name && (
								<p className="text-red-500 text-sm mt-1">
									{errors.name.message}
								</p>
							)}
						</motion.div>

						<motion.div variants={itemVariants}>
							<label
								htmlFor="email"
								className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
							>
								メールアドレス
							</label>
							<input
								type="email"
								id="email"
								{...register("email")}
								className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
								placeholder="example@email.com"
							/>
							{errors.email && (
								<p className="text-red-500 text-sm mt-1">
									{errors.email.message}
								</p>
							)}
						</motion.div>

						<motion.div variants={itemVariants}>
							<label
								htmlFor="message"
								className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
							>
								メッセージ
							</label>
							<textarea
								id="message"
								{...register("message")}
								rows={4}
								className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
								placeholder="お問い合わせ内容をご記入ください"
							/>
							{errors.message && (
								<p className="text-red-500 text-sm mt-1">
									{errors.message.message}
								</p>
							)}
						</motion.div>

						<motion.div variants={itemVariants}>
							<HCaptcha
								ref={captchaRef}
								sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
								onVerify={handleCaptchaVerify}
								onExpire={handleCaptchaExpire}
							/>
							{errors.captcha && (
								<p className="text-red-500 text-sm mt-1">
									{errors.captcha.message}
								</p>
							)}
						</motion.div>

						{submitStatus === "success" && (
							<motion.div
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-400 dark:border-green-600 text-green-700 dark:text-green-300 rounded-lg"
							>
								メッセージが正常に送信されました！24時間以内にご返信いたします。
							</motion.div>
						)}

						{submitStatus === "error" && (
							<motion.div
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-400 dark:border-red-600 text-red-700 dark:text-red-300 rounded-lg"
							>
								メッセージの送信に失敗しました。もう一度お試しください。
							</motion.div>
						)}

						<motion.button
							type="submit"
							disabled={isSubmitting}
							className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							variants={itemVariants}
						>
							{isSubmitting ? (
								"送信中..."
							) : (
								<>
									<Send size={20} />
									送信する
								</>
							)}
						</motion.button>
					</motion.form>
				</div>
			</div>
		</section>
	);
}
