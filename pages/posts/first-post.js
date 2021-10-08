import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";

const FirstPost = () => {
	return (
		<Layout>
			<Head>
				<title>First Post</title>
			</Head>

			<h1>First Post</h1>
			<Image
				src="/assets/images/apel.jpg"
				alt="apel"
				height={300}
				width={300}
			/>
			<Link href="/">
				<a>Back to home</a>
			</Link>
		</Layout>
	);
};

export default FirstPost;
