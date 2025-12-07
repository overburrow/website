"use client";

import { Variants, motion } from "motion/react";
import { useTheme } from "next-themes";
import GameOfLife from "./game-of-life";

type LogoProps = {
	size: number;
};

export const Logo = ({ size }: LogoProps) => {
	const { theme, setTheme } = useTheme();
	const draw: Variants = {
		hidden: { r: 0, fill: "var(--background)" },
		visible: (r: number) => {
			return {
				r,
				fill: "var(--foreground)",
				transition: {
					r: {
						type: "spring",
						delay: 0.3,
						duration: 1,
						bounce: 0,
					},
				},
			};
		},
	};

	const toggleTheme = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
		console.log(theme);
	};

	return (
		<div style={{ width: size, height: size }} className="group relative">
			<motion.svg
				width={size}
				height={size}
				viewBox={`-80 -86 160 160`}
				initial="hidden"
				animate="visible"
				onClick={toggleTheme}
				className="cursor-pointer"
			>
				<defs>
					<mask id="logo-outer-mask">
						<rect x="-72" y="-72" width="144" height="135.5" fill="white" />
						<circle cy="16" r="60" fill="black" />
					</mask>
					<mask id="logo-inner-mask">
						<rect x="-72" y="-72" width="144" height="135.5" fill="white" />
						<circle cy="40" r="36" fill="black" />
					</mask>
				</defs>

				<motion.circle
					r="72"
					mask="url(#logo-outer-mask)"
					variants={draw}
					custom={72}
					className="group-hover:scale-103 transition-transform duration-500 fill-foreground"
				/>
				<motion.circle
					cy="24"
					r="48"
					mask="url(#logo-inner-mask)"
					variants={draw}
					custom={48}
					className="group-hover:scale-108 transition-transform duration-400 fill-foreground"
				/>
			</motion.svg>

			<GameOfLife className="absolute top-0 left-0 size-50 z-10 pointer-events-none" />
		</div>
	);
};
