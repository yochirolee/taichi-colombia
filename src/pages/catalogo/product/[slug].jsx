import { getAllProductsIds, getProductData } from "@/constants/products_Catalog";
import Link from "next/link";
import { React } from "react";
const Product = ({ productData }) => {
	return (
		<>
			<div className="bg-gray-800 h-screen p-16 text-gray-100">
				<Link href="/catalogo">Back to catalog</Link>
				<div className="text-center font-bold text-3xl">{productData.name}</div>
				<div className="text-justify my-8 text-gray-200">{productData.description}</div>
			</div>
		</>
	);
};

export const getStaticPaths = async () => {
	const paths = getAllProductsIds();
	console.log(paths, "paths");

	return {
		paths,
		fallback: false,
	};
};

export async function getStaticProps({ params }) {
	console.log(params, "PARAMS");
	const productData = getProductData(params.slug);
	return {
		props: {
			productData,
		},
	};
}
export default Product;
