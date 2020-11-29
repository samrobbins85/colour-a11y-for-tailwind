import Head from "next/head";
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
			<div>
				<h1 className="text-center">Hello, World </h1>
			</div>
		</>
	);
}
