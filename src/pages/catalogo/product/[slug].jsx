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
			<div className=" items-center text-center xl:max-w-[80%]  mx-auto px-10 md:px-20">
				<Navbar />
			</div>
			<div class=" font-poppins bg-primary">
				
				<div className="bg-white">
					<ProductDetails productData={productData} />
				</div>
			</div>
		</Layout>
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
	const productData = getProductData(params.slug);
	return {
		props: {
			productData,
		},
	};
}
export default Product;
