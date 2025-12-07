"use client";

import { motion } from "motion/react";
import { Logo } from "@/components/logo";
import GameOfLife from "@/components/game-of-life";

const HomePage = () => {
	return (
		<main className="flex flex-col items-center justify-center w-svw h-svh relative">
			<GameOfLife className="absolute -z-40 opacity-50!" />
			<Logo size={200} />
			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.8, duration: 1 }}
				className="text-3xl tracking-tighter -translate-y-2"
			>
				overburrow
			</motion.p>
		</main>
	);
};

export default HomePage;
