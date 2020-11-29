import Head from "next/head";
import { score, hex } from "wcag-contrast";
import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import Link from "next/link";
const colors = require("tailwindcss/colors");
export default function IndexPage() {
	const [enabled, setEnabled] = useState(false);
	const [background, setBackground] = useState("#fff");
	const [darkness, setDarkness] = useState(700);
	useEffect(() => {
		if (enabled) {
			setBackground("#000");
			setDarkness(400);
		} else {
			setBackground("#fff");
			setDarkness(700);
		}
	}, [enabled]);
	return (
		<div className={enabled && "bg-black text-white"}>
			<Head>
				<title>Colour Accessibility for Tailwind CSS</title>
				<meta
					name="Description"
					content="Colour Accessibility for Tailwind CSS"
				/>
			</Head>
			<div className={`pt-4 text-center ${enabled ? "dark" : undefined}`}>
				<h1 className="text-4xl font-semibold">
					Colour accessibility test for Tailwind CSS
				</h1>
				<h3 className="max-w-ch64 mx-auto py-4">
					This uses the{" "}
					<a
						className="text-blue-700 dark:text-blue-300 hover:underline"
						href="https://www.w3.org/TR/WCAG20/#contrast-ratiodef"
					>
						WCAG
					</a>{" "}
					accessibility ratings. You can switch between a white and
					black background using the toggle below and the scores will
					change for that background.
				</h3>
				<h3 className="py-2">
					<Link href="/about">
						<a className="text-blue-700 dark:text-blue-300 hover:underline">
							About this site
						</a>
					</Link>
				</h3>
				<div className="flex justify-center">
					<Switch.Group
						as="div"
						className="flex items-center space-x-4"
					>
						<Switch.Label>Switch to black</Switch.Label>
						<Switch
							as="button"
							checked={enabled}
							onChange={setEnabled}
							className={`${
								enabled ? "bg-indigo-600" : "bg-gray-200"
							} relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:shadow-outline`}
						>
							{({ checked }) => (
								<span
									className={`${
										checked
											? "translate-x-5"
											: "translate-x-0"
									} inline-block w-5 h-5 transition duration-200 ease-in-out transform bg-white rounded-full`}
								/>
							)}
						</Switch>
					</Switch.Group>
				</div>
			</div>
			<div className="container mx-auto py-6">
				{Object.keys(colors)
					.filter((color) => typeof colors[color] === "object")
					.map((color) => (
						<>
							<h2
								className="text-xl font-semibold"
								style={{ color: colors[color][darkness] }}
							>
								{color}
							</h2>
							<div className="grid  grid-cols-2 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-10 gap-y-6 py-4">
								{Object.keys(colors[color]).map((shade) => (
									<div className="flex justify-center flex-col">
										<div
											className="mx-4 w-20 h-10 text-center rounded self-center text-3xl font-bold"
											style={{
												color: colors[color][shade],
											}}
										>
											A
										</div>
										<div className="self-center pt-2 grid grid-cols-1">
											<span className="text-center">
												{shade}
											</span>
											<span>
												Score:{" "}
												{score(
													hex(
														background,
														colors[color][shade]
													)
												)}
											</span>
										</div>
									</div>
								))}
							</div>
						</>
					))}
			</div>
		</div>
	);
}
