import Head from "next/head";
import { score, hex } from "wcag-contrast";
import { useState, useEffect } from "react";
import { Switch } from "@headlessui/react";
import Link from "next/link";
const colors = require("tailwindcss/colors");
export default function IndexPage() {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [darkness, setDarkness] = useState(700);
	const [lightBackgroundHex, setLightBackgroundHex] = useState("#ffffff");
	const [darkBackgroundHex, setDarkBackgroundHex] = useState("#000000");
	useEffect(() => {
		if (isDarkMode) {
			setDarkness(400);
		} else {
			setDarkness(700);
		}
	}, [isDarkMode]);
	return (
		<div className={`px-2 ${isDarkMode &&  "text-white"}`} style={{ backgroundColor: isDarkMode ? darkBackgroundHex : lightBackgroundHex }}>
			<Head>
				<title>Colour Accessibility for Tailwind CSS</title>
				<meta
					name="Description"
					content="Colour Accessibility for Tailwind CSS"
				/>
			</Head>
			<div className={`pt-4 text-center ${isDarkMode ? "dark" : undefined}`}>
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
				<div className="flex flex-col sm:flex-row gap-4 justify-center">
					<HexColourInput backgroundColour={lightBackgroundHex} setBackgroundColour={setLightBackgroundHex} />
					<DarkModeSwitch isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
					<HexColourInput backgroundColour={darkBackgroundHex} setBackgroundColour={setDarkBackgroundHex} />
				</div>
			</div>
			<div className="container mx-auto py-6">
				{Object.keys(colors)
					.filter((color) => typeof colors[color] === "object")
					.map((color) => (
						<>
							<h2
								className="text-3xl sm:text-2xl font-semibold"
								style={{ color: colors[color][darkness] }}
							>
								{color}
							</h2>
							<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-10 gap-y-6 py-4">
								{Object.keys(colors[color]).map((shade) => (
									<div className="flex justify-center flex-col">
										<div
											className="mx-4 w-20 h-10 text-center rounded self-center text-3xl font-bold"
											style={{
												color: colors[color][shade],
											}}
										>
											CSS
										</div>
										<div className="self-center pt-2 grid grid-cols-1">
											<span className="text-center">
												{shade}
											</span>
											<span>
												Score:{" "}
												<span className="font-semibold">
													{score(
														hex(
															isDarkMode ? darkBackgroundHex : lightBackgroundHex,
															colors[color][shade]
														)
													)}
												</span>
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

function HexColourInput({ backgroundColour, setBackgroundColour }) {
	return (
		<div className="h-10 flex justify-between gap-2 border items-center border-slate-300 bg-white rounded-md py-1 pl-4 pr-2 focus:border-blue-500 text-black focus:outline-none focus-within:ring-2 focus-within:ring-blue-500">
			<input className="w-24 focus:outline-none"
				value={backgroundColour}
				onChange={(e) => setBackgroundColour(e.target.value)}
			/>
			<input type="color" className="h-6 w-6 cursor-pointer"
				value={backgroundColour}
				onChange={(e) => setBackgroundColour(e.target.value)}
			/>
		</div>
	);
}

function DarkModeSwitch({ isDarkMode, setIsDarkMode }) {
	return (
		<Switch.Group
			as="div"
			className="flex items-center space-x-4"
		>
			<Switch.Label>Switch to dark mode</Switch.Label>
			<Switch
				as="button"
				checked={isDarkMode}
				onChange={setIsDarkMode}
				className={`${
					isDarkMode ? "bg-indigo-600" : "bg-gray-200"
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
	);
}
