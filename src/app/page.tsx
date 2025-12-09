"use client";

import { motion } from "motion/react";
import { Logo } from "@/components/logo";
import { useState } from "react";
import Link from "next/link";
import { ChartBarIcon, CodeBracketIcon } from "@heroicons/react/24/solid";
import { GameOfLife, Algorithm, algorithmMap } from "@/components/game-of-life";

const HomePage = () => {
	const [algorithm, setAlgorithm] = useState(0);

	const changeAlgorithm = () => {
		const entries = Object.entries(algorithmMap);
		setAlgorithm((prev) => (prev + 1) % entries.length);
	};

	return (
		<main className="min-h-svh flex flex-col justify-center">
			<GameOfLife
				fps={8}
				cellSize={20}
				fontSize={12}
				initialLifeChance={0}
				opacity={0.15}
				algorithm={algorithm as Algorithm}
				className="fixed right-0 top-0 size-full -z-30"
			/>

			<div className={`flex flex-col items-center`}>
				<Logo size={200} animated onClick={changeAlgorithm} />

				<div className="text-center -translate-y-2">
					<motion.h2
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.8, duration: 1 }}
						className="text-3xl font-light tracking-tighter leading-tight"
					>
						overburrow
					</motion.h2>
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1.2, duration: 1 }}
						className="text-muted-foreground"
					>
						overdigging gophers
					</motion.p>

					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1.5 }}
						className="text-muted-foregrOund *:hover:text-foreground *:transition-colors mt-5 flex gap-4 justify-center"
					>
						<Link href="/stats">
							<ChartBarIcon className="size-4" />
							<span className="sr-only">stats</span>
						</Link>
						<Link href="https://github.com/overburrow">
							<CodeBracketIcon className="size-4" />
							<span className="sr-only">github</span>
						</Link>
					</motion.div>
				</div>
			</div>
		</main>
	);
};

export default HomePage;
