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
				<li>{user.name}</li>
			))}
		</div>
	);
};

export default UsersPages;
