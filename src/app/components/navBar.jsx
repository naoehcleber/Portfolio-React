import Link from "next/link"
import styles from "./navbar.module.css"
const NavBar = () => {
    return (
        <div className={styles.navbar}>
            <ul className={styles.navList}>
                <li>
                    <Link href={"/"}> Home </Link>
                </li>
                <li>
                    <Link href={"/game"}> Jogo </Link>
                </li>
            </ul>
        </div>
    );
}

export default NavBar;
