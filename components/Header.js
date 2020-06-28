import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
	const router = useRouter();
	return (
		<header className="navbar">
			<div className="logo">
				<h1>EC</h1>
			</div>
			<nav className="menu">
				<ul>
					<li>
						<Link href="/">
							<a className={router.pathname === "/" ? "active" : ""}>Shop</a>
						</Link>
					</li>

					<li>
						<Link href="/about">
							<a className={router.pathname === "/about" ? "active" : ""}>
								About
							</a>
						</Link>
					</li>

					<li>
						<Link href="/contact">
							<a className={router.pathname === "/contact" ? "active" : ""}>
								Contact
							</a>
						</Link>
					</li>
				</ul>
			</nav>
			<Link href="/cart">
				<a>Cart</a>
			</Link>
		</header>
	);
};

export default Header;
