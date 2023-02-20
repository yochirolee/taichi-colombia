import { FeaturedProducts, Navbar } from "@/components";
import { getAllProductsData } from "../../constants/products_Catalog";
import Layout from "@/components/layout/Layout";
import { React } from "react";
import { ProductCard } from "@/components/products/ProductCard";

const Catalogo = ({ productsList }) => {
	return (
		<Layout>
			
			<FeaturedProducts />

			<div class="bg-white border rounded-xl">
				<div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
					<h2 class="text-2xl font-bold tracking-tight text-gray-900">
						Nuestro Catalogo de Productos
					</h2>

					<div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
						{productsList.map((product) => (
							<ProductCard product={product} key={product.id} />
						))}
					</div>
				</div>

				<div class="grid grid-cols-1 gap-y-10 px-6 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
					  
				</div>
			</div>
		</Layout>
	);
};
export async function getStaticProps() {
	const productsList = getAllProductsData();
	return {
		props: {
			productsList,
		},
	};
}

export default Catalogo;
