import Link from "next/link";
import Head from "next/head";
export default function About() {
	return (
		<>
			<Head>
				<title>About | Colour Accessibility for Tailwind CSS</title>
				<meta
					name="Description"
					content="Colour Accessibility for Tailwind CSS"
				/>
			</Head>
			<div className="py-4">
				<Link href="/">
					<a className="px-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							class="h-10 w-10 inline-block text-gray-600"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
							/>
						</svg>
						<span>Home</span>
					</a>
				</Link>

				<div className="prose mx-auto">
					<h1>About this site</h1>
					<p>
						This site is in no way connected or endorsed by Tailwind
						Labs Inc.
					</p>
					<p>
						This project is open source and you can see the
						repository{" "}
						<a href="https://github.com/samrobbins85/colour-a11y-for-tailwind">
							here
						</a>
					</p>
					<p>
						If you like the site, I have a{" "}
						<a href="https://www.buymeacoffee.com/samrobbins">
							Buy me a coffee
						</a>
						, so you can contribute towards paying for a domain name
						for this site
					</p>
					<p>
						This site was made by{" "}
						<a href="https://github.com/samrobbins85">
							Sam Robbins
						</a>{" "}
						with Tailwind CSS and Next.js
					</p>
				</div>
			</div>
		</>
	);
}
