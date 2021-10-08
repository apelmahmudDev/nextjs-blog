import Link from "next/link";
const FirstPost = () => {
	return (
		<>
			<h1>First Post</h1>
			<Link href="/">
				<a>Back to home</a>
			</Link>
		</>
	);
};

export default FirstPost;
