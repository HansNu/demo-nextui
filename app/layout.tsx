'use client'

import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import React from "react";
import { Providers } from "./providers";
import {Breadcrumbs, BreadcrumbItem} from "@nextui-org/breadcrumbs";
import { Navbar } from "@/components/navbar";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const [currentPage, setCurrentPage] = React.useState("home");
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen">
						<Navbar />
						<main className="container mx-auto max-w-7xl pt-2 px-6 flex-grow">
						<Breadcrumbs  className="pl-2" underline="active" onAction={(key) => setCurrentPage(key as any)}>
							<BreadcrumbItem key="home" isCurrent={currentPage === "home"}>
								Home
							</BreadcrumbItem>
							<BreadcrumbItem key="W" isCurrent={currentPage === "W"}>
								W
							</BreadcrumbItem>
							<BreadcrumbItem key="E" isCurrent={currentPage === "E"}>
								E
							</BreadcrumbItem>
							<BreadcrumbItem key="D" isCurrent={currentPage === "D"}>
								D
							</BreadcrumbItem>
							<BreadcrumbItem key="O1" isCurrent={currentPage === "O1"}>
								O
							</BreadcrumbItem>
							<BreadcrumbItem key="O2" isCurrent={currentPage === "O2"}>
								O
							</BreadcrumbItem>
							<BreadcrumbItem key="X" isCurrent={currentPage === "X"}>
								X
							</BreadcrumbItem>
						</Breadcrumbs>
							{children}
						</main>
						<footer className="w-full flex items-center justify-center py-3">
							<Link
								isExternal
								className="flex items-center gap-1 text-current"
								href="https://nextui-docs-v2.vercel.app?utm_source=next-app-template"
								title="nextui.org homepage"
							>
								<span className="text-default-600">Powered by</span>
								<p className="text-primary">OPPAI</p>
							</Link>
						</footer>
					</div>
				</Providers>
			</body>
		</html>
	);
}
