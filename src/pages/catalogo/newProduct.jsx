import { React, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { NewCategoryForm, NewLineForm, NewProductForm } from "@/components";
import { supabase } from "@/lib/supabaseClient";
const NewProduct = ({ categories, subCategories }) => {
	const handleCreateProduct = (product) => {
		console.log(product);
	};
	return (
		<Layout>
			<div className="flex flex-col bg-white rounded-lg lg:p-6 gap-6">
				<NewCategoryForm />
				<NewLineForm />
				<NewProductForm categories={categories} subcategories={subCategories} />
			</div>
		</Layout>
	);
};

export async function getStaticProps() {
	let { data: categories } = await supabase.from("Categories").select("*");
	let { data: subCategories } = await supabase.from("SubCategories").select("*");

	return {
		props: {
			categories: categories,
			subCategories: subCategories,
		},
	};
}
export default NewProduct;
