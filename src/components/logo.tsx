"use client";

import { Variants, motion } from "motion/react";

type LogoProps = {
	size: number;
};

export const Logo = ({ size }: LogoProps) => {
	const draw: Variants = {
		hidden: { r: 0 },
		visible: (r: number) => {
			return {
				r,
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

	return (
		<motion.svg
			width={size}
			height={size}
			viewBox={`-80 -86 160 160`}
			initial="hidden"
			animate="visible"
			className="group"
		>
			<defs>
				<mask id="logo-outer-mask">
					<rect x="-72" y="-72" width="144" height="135.5" fill="white" />
					<motion.circle
						cy="16"
						r="60"
						fill="black"
						variants={draw}
						custom={60}
					/>
				</mask>
				<mask id="logo-inner-mask">
					<rect x="-72" y="-72" width="144" height="135.5" fill="white" />
					<motion.circle
						cy="40"
						r="36"
						fill="black"
						variants={draw}
						custom={36}
					/>
				</mask>
			</defs>

			<motion.circle
				r="72"
				fill="white"
				mask="url(#logo-outer-mask)"
				variants={draw}
				custom={72}
				className="group-hover:scale-103 transition-transform duration-500"
			/>
			<motion.circle
				cy="24"
				r="48"
				fill="white"
				mask="url(#logo-inner-mask)"
				variants={draw}
				custom={48}
				className="group-hover:scale-107 transition-transform duration-400"
			/>
		</motion.svg>
	);
};
