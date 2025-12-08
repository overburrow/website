"use client";

import { Logo } from "@/components/logo";
import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const RoutesLayout = ({ children }: LayoutProps<"/">) => {
	const pathname = usePathname();
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.3, duration: 0.5 }}
				className="border-b h-10 py-2"
			>
				<div className="container mx-auto px-2 border-x h-full flex items-center">
					<Link href="/" className="flex gap-2 items-center">
						<Logo size={20} animated />
						<span className="font-light tracking-tighter">overburrow</span>
					</Link>
				</div>
			</motion.div>

			<motion.div
				key={pathname}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.6, duration: 0.5 }}
				className="min-h-[calc(100svh-40px)] py-2 container mx-auto *:border-x *:w-full flex"
			>
				{children}
			</motion.div>
		</>
	);
};

export default RoutesLayout;
