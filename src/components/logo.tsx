"use client";

import { Variants, motion } from "motion/react";
import { ComponentProps } from "react";

type LogoProps = {
	size: number;
	animated?: boolean;
} & ComponentProps<"div">;

export const Logo = ({ size, animated = false, ...props }: LogoProps) => {
	return (
		<div
			{...props}
			style={{ width: size, height: size }}
			className="group relative"
		>
			{animated ? <LogoAnimated /> : <LogoOriginal />}
		</div>
	);
};

const LogoOriginal = () => {
	return (
		<svg viewBox={`-80 -86 160 160`} className="cursor-pointer">
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

			<circle
				r="72"
				mask="url(#logo-outer-mask)"
				className="group-hover:scale-103 transition-transform duration-500 fill-foreground"
			/>
			<circle
				cy="24"
				r="48"
				mask="url(#logo-inner-mask)"
				className="group-hover:scale-108 transition-transform duration-400 fill-foreground"
			/>
		</svg>
	);
};

const LogoAnimated = () => {
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

	return (
		<motion.svg
			viewBox={`-80 -86 160 160`}
			initial="hidden"
			animate="visible"
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
	);
};
