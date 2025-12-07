import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "overburrow",
	description: "gophers digging too far",
};

const RootLayout = ({ children }: LayoutProps<"/">) => {
	return (
		<html lang="en">
			<body className={`antialiased`}>{children}</body>
		</html>
	);
};

export default RootLayout;
