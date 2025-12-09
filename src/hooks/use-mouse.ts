import { useEffect, useState } from "react";

type MousePosition = {
	x: number;
	y: number;
};

export const useMouse = () => {
	const [pos, setPos] = useState<MousePosition>({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			setPos({ x: e.clientX, y: e.clientY });
		};

		document.addEventListener("mousemove", handleMouseMove);

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return pos;
};
