import { Suspense } from "react";
import "@/app/globals.css";
import NavbarComponent from "@/components/navbar/NavbarComponent";
import Loading from "./loading";
import Error from "./error";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";


import { Metadata } from "next";

export const metadata: Metadata ={
    title: "Susu Shop Home",
	description: "Susu shop is a web application for everone buying.",
	openGraph: {
		title: "Susu Shop Home",
		description: "Susu shop is a web application for everone buying.",
		images: 'https://store.istad.co/media/brand_images/skincare.webp'
	}
}


export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body >
				<header>
					<NavbarComponent />
				</header>
				<ErrorBoundary errorComponent={Error}>
					<Suspense fallback={<Loading />}>
						{children}
					</Suspense>
				</ErrorBoundary>
			</body>
		</html>
	);
}
