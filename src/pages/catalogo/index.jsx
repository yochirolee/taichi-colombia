import { Navbar, Products } from "@/components";
import Layout from "@/components/layout/Layout";
import { React } from "react";
const Catalogo = () => {
	return (
		<Layout>
			<div className=" items-center text-center xl:max-w-[80%]  mx-auto px-10 md:px-20">
				<Navbar />
			</div>
            <Products/>
		</Layout>
	);
};

export default Catalogo;
