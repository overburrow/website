"use client";

import { ComponentProps, memo, useCallback, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import { useMouse } from "@/hooks/use-mouse";

export const algorithmMap = {
	0: (age, neighbors) => (age > 0 ? neighbors === 2 : neighbors === 3),
	1: (age, neighbors) => (age > 0 ? neighbors < 6 : neighbors > 3),
	2: (age, neighbors) => (age > 0 ? neighbors === 4 : neighbors === 2),
} satisfies Record<number, (age: number, neighbors: number) => boolean>;

export type Algorithm = keyof typeof algorithmMap;

type GameOfLifeProps = {
	fps?: number;
	charSet?: string;
	invertColor?: boolean;
	cellSize?: number;
	fontSize?: number;
	initialLifeChance?: number;
	revivalChance?: number;
	opacity?: number;
	algorithm?: keyof typeof algorithmMap;
	mouseRange?: number;
} & ComponentProps<"div">;

export const GameOfLife = memo(
	({
		invertColor = false,
		fps = 30,
		charSet = " ·+#",
		cellSize = 20,
		fontSize = 14,
		initialLifeChance = 0.2,
		revivalChance = 0,
		opacity = 1,
		mouseRange = 20,
		algorithm = 0,
		className,
	}: GameOfLifeProps) => {
		const containerRef = useRef<HTMLDivElement>(null);
		const canvasRef = useRef<HTMLCanvasElement>(null);
		const matrixRef = useRef<number[][]>([]);
		const { theme } = useTheme();
		const mouse = useMouse();

		const draw = useCallback(
			(currentMatrix: number[][]) => {
				const canvas = canvasRef.current;
				const container = containerRef.current;
				if (!canvas || !container || currentMatrix.length === 0) return;

				const { width, height } = container.getBoundingClientRect();
				const dpr = window.devicePixelRatio || 1;

				if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
					canvas.width = width * dpr;
					canvas.height = height * dpr;
					canvas.style.width = `${width}px`;
					canvas.style.height = `${height}px`;
					const ctx = canvas.getContext("2d");
					if (ctx) ctx.scale(dpr, dpr);
				}

				const ctx = canvas.getContext("2d");
				if (!ctx) return;

				const style = getComputedStyle(container);
				const textColor = style.getPropertyValue(
					invertColor ? "--background" : "--foreground",
				);

				ctx.clearRect(0, 0, width, height);
				ctx.font = `${fontSize}px Iosevka`;
				ctx.fillStyle = textColor;
				ctx.textAlign = "center";
				ctx.textBaseline = "middle";

				for (let y = 0; y < currentMatrix.length; y++) {
					for (let x = 0; x < currentMatrix[y].length; x++) {
						const age = currentMatrix[y][x];
						if (age > 0) {
							const character = charSet[age] ?? charSet[charSet.length - 1];
							const centerX = x * cellSize + cellSize / 2;
							const centerY = y * cellSize + cellSize / 2;
							ctx.fillText(character, centerX, centerY);
						}
					}
				}
			},
			[cellSize, charSet, fontSize, invertColor],
		);

		// initial draw
		useEffect(() => {
			const container = containerRef.current;
			if (!container) return;

			const { width, height } = container.getBoundingClientRect();
			const rows = Math.ceil(height / cellSize);
			const cols = Math.ceil(width / cellSize);

			matrixRef.current = Array.from({ length: rows }, () =>
				Array.from({ length: cols }, () =>
					Math.random() < initialLifeChance
						? Math.floor(Math.random() * charSet.length)
						: 0,
				),
			);

			draw(matrixRef.current);
		}, [cellSize, initialLifeChance, charSet.length, draw]);

		// game loop
		useEffect(() => {
			const interval = 1000 / fps;
			const loop = setInterval(() => {
				const prevMatrix = matrixRef.current;
				if (prevMatrix.length === 0) return;

				const nextMatrix = prevMatrix.map((row) => [...row]);

				for (let y = 0; y < prevMatrix.length; y++) {
					for (let x = 0; x < prevMatrix[0].length; x++) {
						const age = prevMatrix[y][x];
						const neighbors = countNeighbors(prevMatrix, x, y);
						const isLive =
							Math.random() < revivalChance ||
							algorithmMap[algorithm](age, neighbors);

						nextMatrix[y][x] = isLive
							? Math.min(charSet.length - 1, age + 1)
							: Math.max(0, age - 1);
					}
				}

				matrixRef.current = nextMatrix;
				draw(nextMatrix);
			}, interval);

			return () => clearInterval(loop);
		}, [fps, revivalChance, algorithm, charSet.length, draw]);

		// track mouse
		useEffect(() => {
			const canvas = canvasRef.current;
			if (!canvas || matrixRef.current.length === 0) return;

			const { x: canvasX, y: canvasY } = canvas.getBoundingClientRect();
			let changed = false;
			const currentMatrix = matrixRef.current;

			for (let y = 0; y < currentMatrix.length; y++) {
				for (let x = 0; x < currentMatrix[y].length; x++) {
					const location = {
						x: canvasX + cellSize * x + mouseRange / 2,
						y: canvasY + cellSize * y + mouseRange / 2,
					};
					const distFromMouse = Math.sqrt(
						Math.pow(mouse.x - location.x, 2) +
							Math.pow(mouse.y - location.y, 2),
					);

					if (distFromMouse < mouseRange) {
						currentMatrix[y][x] = Math.min(
							charSet.length - 1,
							currentMatrix[y][x] + 1,
						);
						changed = true;
					}
				}
			}

			if (changed) draw(currentMatrix);
		}, [mouse, cellSize, mouseRange, charSet.length, draw]);

		return (
			<motion.div
				ref={containerRef}
				key={theme}
				initial={{ opacity: 0 }}
				animate={{ opacity }}
				transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
				className={className}
			>
				<canvas ref={canvasRef} />
			</motion.div>
		);
	},
);

GameOfLife.displayName = "GameOfLife";

const countNeighbors = (matrix: number[][], x: number, y: number) => {
	let count = 0;

	for (let dx = -1; dx <= 1; dx++) {
		for (let dy = -1; dy <= 1; dy++) {
			if (dx === 0 && dy === 0) continue;

			const nx = x + dx,
				ny = y + dy;

			if (nx >= 0 && nx < matrix[0].length && ny >= 0 && ny < matrix.length) {
				if (matrix[ny][nx] > 0) count++;
			}
		}
	}

	return count;
};
