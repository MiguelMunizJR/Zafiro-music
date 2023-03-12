import "./globals.css";
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

const RootLayout = ({
	children,
}: {
  children: React.ReactNode
}) => {
	return (
		<html lang="en">
			<body className="w-screen min-h-screen bg-body text-gray-100 font-poppins">
				<Header />
				<Navbar />
				{children}
			</body>
		</html>
	);
};

export default RootLayout;
