import About from "./components/About";
import Contact from "./components/Contact";
import Hero3D from "./components/Hero3D";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function Home() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
			<Hero3D />
			<About />
			<Projects />
			<Skills />
			<Contact />
		</div>
	);
}
