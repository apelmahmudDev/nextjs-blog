import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

const FirstPost = () => {
	return (
		<div>
			<Head>
				<title>first-post</title>
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
		</div>
	);
};

export default FirstPost;
