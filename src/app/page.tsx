"use client";

import { motion } from "motion/react";
import { Logo } from "@/components/logo";
import { useTheme } from "next-themes";

const HomePage = () => {
	const { theme } = useTheme();
	return (
		<main className="flex flex-col items-center justify-center w-svw h-svh relative">
			<Logo size={200} />
			<div className="text-center -translate-y-2">
				<motion.h1
					key={theme + "h1"}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.8, duration: 1 }}
					className="text-3xl font-light tracking-tighter leading-none"
				>
					overburrow
				</motion.h1>
				{
					// <motion.p
					// 	key={theme + "p"}
					// 	initial={{ opacity: 0 }}
					// 	animate={{ opacity: 1 }}
					// 	transition={{ delay: 1.2, duration: 1 }}
					// 	className="text-muted-foreground"
					// >
					// 	overdigging gophers
					// </motion.p>
				}
			</div>

			<div className="sr-only">
				<p>
					Project overburrow is created by two college students studying
					Computer Science, Ethan (Taehoon) Lee and Taeeun Kim. We are
					passionate in cloud-native technologies, including Kubernetes, Docker,
					k3s, cilium, etc. We also love the Go programming language, and the
					name of the project is derived from gophers' primary habitat, a
					burrow.
				</p>
				<p>
					This website is an entrypoint to the project overburrow, containing
					various links and documentations regarding the project.
				</p>
				<p>
					Overburrow is a Kubernetes homelab running on a pair of Raspberry Pis,
					running various services including this website.
				</p>
			</div>
		</main>
	);
};

export default HomePage;
