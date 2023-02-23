import { React, useEffect, useRef, useState } from "react";
import Layout from "@/components/layout/Layout";
import { supabase } from "@/lib/supabaseClient";
import CreateProductModal from "@/components/modals/createProductModal";
import { ProductsTable } from "@/components/tables/ProductsTable";
import { getAllProductsData } from "@/constants/products_Catalog";
import { BsSearch } from "react-icons/bs";
const NewProduct = ({ categories, subCategories, productsListData }) => {
	const [open, setOpen] = useState(false);
	const cancelButtonRef = useRef(null);
	const [productsList, setProductsList] = useState(productsListData);

	return (
		<Layout>
			<div className="flex flex-col h-screen overflow-y-auto p-2 bg-white lg:rounded-lg lg:p-6 gap-6">
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
				<div className="flex items-center justify-between pb-4 bg-white ">
					<label for="table-search" className="sr-only">
						Buscar
					</label>
					<div className="relative">
						<div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
							<BsSearch className="text-gray-500" />
						</div>
						<input
							type="text"
							id="table-search-products"
							className="block p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
							placeholder="Buscar Producto"
						/>
					</div>
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
