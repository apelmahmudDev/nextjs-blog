import Link from "next/link";

export const getStaticProps = async (context) => {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const users = await res.json();
	return {
		props: { users },
	};
};

const UsersPages = ({ users }) => {
	return (
		<div>
			<h2>Users</h2>
			{users.map((user) => (
				<div>
					<Link href={"/users/" + user.id}>
						<a>{user.name}</a>
					</Link>
				</div>
			))}
		</div>
	);
};

export default UsersPages;
