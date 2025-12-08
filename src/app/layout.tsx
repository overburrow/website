import "./globals.css";
import type { Metadata } from "next";
import { iosevka } from "./_fonts";
import { ThemeProvider } from "next-themes";
import GameOfLife from "@/components/game-of-life";

export const metadata: Metadata = {
	title: "Overburrow | Kubernetes homelab made by overdigging gophers",
	description:
		"K3s running on a pair of Raspberry Pis. We break things and learn the hard way to fix them.",
	keywords: [
		"overburrow",
		"kubernetes",
		"docker",
		"go",
		"cloud",
		"cloud-native",
		"gopher",
		"web",
		"internet",
		"web",
		"project",
		"raspberry pi",
		"homelab",
		"networking",
		"college",
		"computer",
		"server",
	],
};

const HomeLayout = ({ children }: LayoutProps<"/">) => {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${iosevka.className} antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<GhostText />
					<GameOfLife
						invertColor
						fps={10}
						cellSize={20}
						fontSize={8}
						initialLifeChance={0.1}
						revivalChance={0.01}
						opacity={0.2}
						className="fixed right-0 top-0 size-full -z-40"
					/>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
};

export default HomeLayout;

const GhostText = () => {
	return (
		<div className="sr-only">
			<h1>Overburrow, a kubernetes homelab made by overdigging gophers</h1>
			<p>
				Project overburrow is created by two college students studying Computer
				Science, Ethan (Taehoon) Lee and Taeeun Kim. We are passionate in
				cloud-native technologies, including Kubernetes, Docker, k3s, cilium,
				etc. We also love the Go programming language, and the name of the
				project is derived from gophers' primary habitat, a burrow.
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
	);
};
