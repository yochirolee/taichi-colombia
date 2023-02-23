import { React, useEffect, useRef, useState } from "react";
import Layout from "@/components/layout/Layout";
import { supabase } from "@/lib/supabaseClient";
import CreateProductModal from "@/components/modals/createProductModal";
import { ProductsTable } from "@/components/tables/ProductsTable";
import { getAllProductsData } from "@/constants/products_Catalog";
const NewProduct = ({ categories, subCategories, productsListData }) => {
	const [open, setOpen] = useState(false);
	const cancelButtonRef = useRef(null);
	const [productsList, setProductsList] = useState(productsListData);

	return (
		<Layout>
			<div className="flex flex-col h-screen overflow-y-auto bg-white rounded-lg lg:p-6 gap-6">
				<div className="flex justify-end gap-5">
					<button
						onClick={() => setOpen((prev) => !prev)}
						className="px-4 py-2 border rounded-lg text-sm hover:bg-gray-200"
					>
						Adicionar Producto
					</button>
					<button className="px-4 py-2 border rounded-lg text-sm">Crear Linea</button>
					<button className="px-4 py-2 border rounded-lg text-sm">Crear Categoria</button>
				</div>
				<ProductsTable productsList={productsList} />
				<CreateProductModal
					categories={categories}
					subCategories={subCategories}
					open={open}
					setOpen={setOpen}
					cancelButtonRef={cancelButtonRef}
					setProductsList={setProductsList}
				/>
			</div>
		</Layout>
	);
};

export async function getServerSideProps() {
	let { data: categories } = await supabase.from("categories").select("*");
	let { data: subCategories } = await supabase.from("subCategories").select("*");
	let productsListData = await getAllProductsData();
	return {
		props: {
			categories: categories,
			subCategories: subCategories,
			productsListData: productsListData,
		},
	};
}
export default NewProduct;
