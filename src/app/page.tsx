"use client";

import { motion } from "motion/react";
import { Logo } from "@/components/logo";
import { ComponentProps } from "react";
import Link from "next/link";
import { ChartBarIcon, CodeBracketIcon } from "@heroicons/react/24/solid";
import { useTheme } from "next-themes";

const HomePage = () => {
	return (
		<main className="min-h-svh flex flex-col justify-center">
			<Hero />
		</main>
	);
};

export default HomePage;

const Hero = ({ className }: ComponentProps<"div">) => {
	const { setTheme } = useTheme();
	const toggleTheme = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	};

	return (
		<div className={`${className} flex flex-col items-center`}>
			<Logo size={200} animated onClick={toggleTheme} />

			<div className="text-center -translate-y-2">
				<motion.h1
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.8, duration: 1 }}
					className="text-3xl font-light tracking-tighter leading-tight"
				>
					overburrow
				</motion.h1>
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
					</Link>
					<Link href="https://github.com/overburrow">
						<CodeBracketIcon className="size-4" />
					</Link>
				</motion.div>
			</div>
		</div>
	);
};
