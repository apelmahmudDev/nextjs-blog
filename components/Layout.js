import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";

const Layout = ({ children }) => {
	return (
		<div className={styles.container}>
			{children}
			<h1 className={utilStyles.heading2Xl}> Simple website</h1>
		</div>
	);
};

export default Layout;
