import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { close, logo, menu } from "../../public/assets";
import { navLinks } from "../constants";

const Navbar = () => {
	const [active, setActive] = useState("Home");
	const [toggle, setToggle] = useState(false);

	return (
		<nav className="w-full z-20   flex py-4 justify-between items-center ">
			<Link href="/">
				<Image src={logo} alt="taichi-logo" width={124} height={32} />
			</Link>
			<ul className="list-none sm:flex hidden justify-end items-center flex-1">
				{navLinks.map((nav, index) => (
					<li
						key={nav.id}
						className={`font-poppins font-normal cursor-pointer text-[16px] ${
							active === nav.title ? "text-white" : "text-dimWhite"
						} ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
						onClick={() => setActive(nav.title)}
					>
						<a href={`#${nav.id}`}>{nav.title}</a>
					</li>
				))}
			</ul>

			<div className="sm:hidden z-20 flex flex-1 justify-end items-center">
				<Image
					src={toggle ? close : menu}
					alt="menu"
					width={28}
					height={28}
					onClick={() => setToggle(!toggle)}
				/>

				<div
					className={`${
						!toggle ? "hidden" : "flex"
					} p-6  absolute  right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
				>
					<ul className="list-none flex justify-end items-start flex-1 flex-col">
						{navLinks.map((nav, index) => (
							<li
								key={nav.id}
								className={`font-poppins  font-medium cursor-pointer text-[16px] ${
									active === nav.title ? "text-white" : "text-dimWhite"
								} ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
								onClick={() => setActive(nav.title)}
							>
								<a href={`#${nav.id}`}>{nav.title}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
