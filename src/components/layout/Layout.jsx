import { Footer, Navbar } from "@/components";
import { React } from "react";
const Layout = ({ children }) => {
	return (
		<div className=" overflow-hidden bg-primary  ">
			<div className="bg-linear">
			<div className="max-w-7xl mx-auto px-2 md:px-10 ">
				<Navbar />
				<main className="">{children}</main>
				<Footer />
			</div>
		</div></div>
	);
};

export default Layout;
