import { Footer, Navbar } from "@/components";
import { React } from "react";
export const Layout = ({ children }) => {
	return (
		<div className=" w-full overflow-hidden bg-primary  ">
			<main>{children}</main>
			<div className=" items-center text-center xl:max-w-[80%]  mx-auto px-10 md:px-20">
				<Footer />
			</div>
		</div>
	);
};
