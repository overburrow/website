"use client";

import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { ComponentProps } from "react";
import { motion } from "motion/react";

export const ThemeButton = ({ className }: ComponentProps<"button">) => {
	const { theme, setTheme } = useTheme();

	const toggleTheme = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
		console.log(theme);
	};

	return (
		<button
			onClick={toggleTheme}
			className={`${className} size-6 cursor-pointer`}
		>
			{theme === "light" ? (
				<MoonIcon className="text-foreground" />
			) : (
				<SunIcon className="text-foreground" />
			)}
		</button>
	);
};

export const ThemeBackground = () => {
	const { theme } = useTheme();
	return (
		<motion.div
			id="theme-background"
			key={theme}
			initial={{ background: "var(--foreground)" }}
			animate={{ background: "var(--background)" }}
			transition={{ delay: 1 }}
			className="fixed top-0 left-0 size-full -z-40"
		/>
	);
};

export const ThemeAnimation = () => {
	const { theme } = useTheme();
	return (
		<motion.div
			id="theme-animation"
			key={theme}
			initial={{ scale: 0 }}
			animate={{ scale: 1 }}
			transition={{ delay: 0.1, duration: 1, ease: "circInOut" }}
			className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-[calc(50%-10px)] size-[200vh] rounded-full -z-40 bg-background"
		/>
	);
};
