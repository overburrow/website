import "./globals.css";
import type { Metadata } from "next";
import { iosevka } from "./_fonts";
import { ThemeProvider } from "next-themes";
import { ThemeAnimation, ThemeBackground } from "@/components/theme";

export const metadata: Metadata = {
	title: "overburrow",
	description: "overdigging gophers",
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

const RootLayout = ({ children }: LayoutProps<"/">) => {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${iosevka.className} antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem>
					<ThemeBackground />
					<ThemeAnimation />
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
};

export default RootLayout;
