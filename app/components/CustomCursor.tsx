"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isHovering, setIsHovering] = useState(false);
	const [trail, setTrail] = useState<{ x: number; y: number }[]>([]);

	useEffect(() => {
		const updateMousePosition = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });

			// Add trail effect
			setTrail((prevTrail) => [
				{ x: e.clientX, y: e.clientY },
				...prevTrail.slice(0, 4),
			]);
		};

		const handleMouseEnter = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			if (
				target.tagName === "A" ||
				target.tagName === "BUTTON" ||
				target.closest("a, button")
			) {
				setIsHovering(true);
			}
		};

		const handleMouseLeave = () => {
			setIsHovering(false);
		};

		// Update trail positions
		const trailInterval = setInterval(() => {
			setTrail((prevTrail) =>
				prevTrail.map((pos) => ({
					x: pos.x + (mousePosition.x - pos.x) * 0.1,
					y: pos.y + (mousePosition.y - pos.y) * 0.1,
				})),
			);
		}, 16);

		document.addEventListener("mousemove", updateMousePosition);
		document.addEventListener("mouseover", handleMouseEnter);
		document.addEventListener("mouseout", handleMouseLeave);

		return () => {
			document.removeEventListener("mousemove", updateMousePosition);
			document.removeEventListener("mouseover", handleMouseEnter);
			document.removeEventListener("mouseout", handleMouseLeave);
			clearInterval(trailInterval);
		};
	}, [mousePosition]);

	return (
		<>
			{/* Hide default cursor */}
			<style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

			{/* Trail dots */}
			{trail.map((pos, index) => (
				<motion.div
					// biome-ignore lint/suspicious/noArrayIndexKey: This is a performance optimization for cursor trail
					key={index}
					className="fixed pointer-events-none z-[9999] rounded-full bg-gradient-to-r from-indigo-500/30 to-purple-500/30"
					style={{
						left: pos.x,
						top: pos.y,
						width: 8 - index * 1,
						height: 8 - index * 1,
						transform: "translate(-50%, -50%)",
					}}
					initial={{ opacity: 0, scale: 0 }}
					animate={{
						opacity: 0.6 - index * 0.1,
						scale: 1 - index * 0.1,
					}}
					transition={{ duration: 0.1 }}
				/>
			))}

			{/* Main cursor */}
			<motion.div
				className="fixed pointer-events-none z-[10000] rounded-full border-2 border-indigo-500 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 backdrop-blur-sm"
				style={{
					left: mousePosition.x,
					top: mousePosition.y,
					width: isHovering ? 40 : 32,
					height: isHovering ? 40 : 32,
					transform: "translate(-50%, -50%)",
				}}
				animate={{
					width: isHovering ? 40 : 32,
					height: isHovering ? 40 : 32,
					borderRadius: isHovering ? "50%" : "50%",
				}}
				transition={{
					type: "spring",
					stiffness: 500,
					damping: 28,
				}}
			>
				<motion.div
					className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600"
					animate={{
						scale: isHovering ? 0.5 : 0.3,
						opacity: isHovering ? 0.8 : 0.6,
					}}
					transition={{ duration: 0.2 }}
				/>
			</motion.div>

			{/* Cursor glow effect */}
			<motion.div
				className="fixed pointer-events-none z-[9998] rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-xl"
				style={{
					left: mousePosition.x,
					top: mousePosition.y,
					width: 80,
					height: 80,
					transform: "translate(-50%, -50%)",
				}}
				animate={{
					opacity: isHovering ? 0.4 : 0.2,
					scale: isHovering ? 1.2 : 1,
				}}
				transition={{ duration: 0.3 }}
			/>
		</>
	);
}
