import { Navbar } from "@/components";
import Layout from "@/components/layout/Layout";
import { ProductDetails } from "@/components/products/ProductDetails";
import { getAllProductsIds, getProductData } from "@/constants/products_Catalog";
import Image from "next/image";
import Link from "next/link";
import { React } from "react";
import { blurCyan } from "../../../../public/assets";

const Product = ({ productData }) => {
	return (
		<Layout>
			<div className="">
				<ProductDetails productData={productData} />
			</div>
		</Layout>
	);
};

export const getStaticPaths = async () => {
	const paths = getAllProductsIds();

	return {
		paths,
		fallback: false,
	};
};

export async function getStaticProps({ params }) {
	const productData = getProductData(params.slug);
	return {
		props: {
			productData,
		},
	};
}
export default Product;
