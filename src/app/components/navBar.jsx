import Link from "next/link"
const NavBar = () => {
    return (
        <div>
            <ul>
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
