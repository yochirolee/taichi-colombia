import { Dialog } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MdClose } from "react-icons/md";

import { close, logo, menu } from "../../public/assets";
import { navLinks } from "../constants";

const Navbar = () => {
	const [active, setActive] = useState("Home");
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<nav className="w-full z-20 px-4  flex py-4 justify-between items-center ">
			<Link href="/">
				<Image src={logo} alt="taichi-logo" width={124} height={32} />
			</Link>
			<ul className="list-none lg:flex hidden justify-end items-center flex-1">
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
			<div className="flex lg:hidden">
				<button
					type="button"
					className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
					onClick={() => setMobileMenuOpen(true)}
				>
					<span className="sr-only">Open main menu</span>
					<FaBars className="h-6 w-6" aria-hidden="true" />
				</button>
			</div>

			<Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
				<Dialog.Panel
					focus="true"
					className="fixed inset-0 z-10 overflow-y-auto bg-primary px-6 py-6 lg:hidden"
				>
					<div className="flex items-center  justify-between">
						<Link href="#" className="-m-1.5 p-1.5">
							<span className="sr-only">Taichi</span>
							<Link href="/">
								<Image src={logo} alt="taichi-logo" width={124} height={32} />
							</Link>
						</Link>
						<button
							type="button"
							className="-m-2.5 rounded-md p-2.5 text-white"
							onClick={() => setMobileMenuOpen(false)}
						>
							<span className="sr-only">Close menu</span>
							<MdClose className="h-6 w-6" aria-hidden="true" />
						</button>
					</div>
					<div className="mt-6  flow-root">
						<div className="-my-6 divide-y divide-gray-500/10">
							<div className="space-y-2 py-6">
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
							</div>
							<div className="py-6 text-white">
								<a
									href="#"
									className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-6 text-white hover:bg-gray-400/10"
								>
									Log in
								</a>
							</div>
						</div>
					</div>
				</Dialog.Panel>
			</Dialog>
		</nav>
	);
};

export default Navbar;
