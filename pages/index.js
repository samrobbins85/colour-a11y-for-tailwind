import Head from "next/head";
import { score, hex } from "wcag-contrast";
const colors = require("tailwindcss/colors");
export default function IndexPage() {
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
			<div className="container mx-auto py-6">
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
							<div className="grid grid-cols-6 lg:grid-cols-10 gap-y-6 py-4">
								{Object.keys(colors[color]).map((shade) => (
									<div className="flex justify-center flex-col">
										<div
											className="mx-4 w-20 h-10 text-center rounded self-center"
											style={{
												backgroundColor:
													colors[color][shade],
											}}
										></div>
										<div className="self-center pt-2 grid grid-cols-1">
											<span className="text-center">
												{shade}
											</span>
											<span>
												Score:{" "}
												{score(
													hex(
														"#fff",
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
		</>
	);
}
