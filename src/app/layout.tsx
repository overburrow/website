import "./globals.css";
import type { Metadata } from "next";
import { iosevka } from "./_fonts";

export const metadata: Metadata = {
	title: "overburrow",
	description: "overdigging gophers",
	keywords: [
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
	],
};

const RootLayout = ({ children }: LayoutProps<"/">) => {
	return (
		<html lang="en">
			<body className={`${iosevka.className} antialiased`}>{children}</body>
		</html>
	);
};

export default RootLayout;
