import { Navbar, Products } from "@/components";
import { getAllProductsData, products } from "../../constants/products_Catalog";
import Layout from "@/components/layout/Layout";
import { React } from "react";
import Link from "next/link";

const Catalogo = ({ productsList }) => {
	return (
		<Layout>
			<div className=" items-center text-center xl:max-w-[80%]  mx-auto px-10 md:px-20">
				<Navbar />
			</div>
			<Products />
			<div className="my-10 p-6">Categorias</div>
			{productsList.map((product) => (
				<div key={product.id}>
					<Link href={`catalogo/product/${product.slug}`}>{product.name}</Link>
				</div>
			))}
		</Layout>
	);
};
export async function getStaticProps({ params }) {
	const productsList = getAllProductsData();
	return {
		props: {
			productsList,
		},
	};
}

export default Catalogo;
