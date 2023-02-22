import Layout from "@/components/layout/Layout";
import { ProductDetails } from "@/components/products/ProductDetails";
import { getAllProductsIds, getProductData } from "@/constants/products_Catalog";

import { React } from "react";

const Product = ({ productData }) => {
	return (
		<Layout>
			<blurCyan />
			<div className="">
				<ProductDetails productData={productData} />
			</div>
		</Layout>
	);
};

export const getStaticPaths = async () => {
	const paths = await getAllProductsIds();

	return { paths, fallback: "blocking" };
};

export async function getStaticProps({ params }) {
	const productData = await getProductData(params.slug);

	console.log(getProductData);
	return {
		props: {
			productData,
		},
		revalidate: 10,
	};
}
export default Product;
