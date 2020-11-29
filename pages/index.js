import Head from "next/head";
const colors = require("tailwindcss/colors");
export default function IndexPage() {
	console.log(colors);
	return (
		<>
			<Head>
				<title>Next.js Template</title>
				<meta
					name="Description"
					content="A template Next.js application"
				/>
			</Head>
			<div className="pt-4 text-center">
				<h1 className="text-4xl font-semibold">
					Colour accessibility test for Tailwind CSS
				</h1>
				<h2 className="text-gray-600">
					In no way associated with Tailwind Labs, apart from using
					their product
				</h2>
			</div>
			<div className="container mx-auto">
				{Object.keys(colors)
					.filter((color) => typeof colors[color] === "object")
					.map((color) => (
						<>
							<h2
								className="text-xl font-semibold"
								style={{ color: colors[color][700] }}
							>
								{color}
							</h2>
							<div className="grid grid-cols-10">
								{Object.keys(colors[color]).map((shade) => (
									<span
										style={{ color: colors[color][shade] }}
									>
										{shade}
									</span>
								))}
							</div>
						</>
					))}
			</div>
		</>
	);
}
