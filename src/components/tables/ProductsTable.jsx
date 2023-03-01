import { React, useEffect, useState } from "react";
import Image from "next/image";
import { logo } from "public/assets";
import { MdDelete, MdEdit } from "react-icons/md";
import { supabase } from "@/lib/supabaseClient";

export const ProductsTable = ({ productsList, setProductsList, setSelectectProduct, setOpen }) => {
	const handleSelectedProduct = (product) => {
		setSelectectProduct(product);
		setOpen(() => true);
	};

	const handleDeleteProduct = async (product) => {
		const { data, error } = await supabase
			.from("products")
			.delete()
			.match({ productId: product.productId });
		if (error) {
			console.log(error);
		} else {
			setProductsList(productsList.filter((prod) => prod.productId !== product.productId));
		}
	};

	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
			<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
					<tr>
						<th scope="col" className="px-6 py-3">
							Producto
						</th>

						<th scope="col" className="px-6 py-3">
							Promocion
						</th>
						<th scope="col" className="px-6 py-3">
							Acciones
						</th>
					</tr>
				</thead>
				<tbody>
					{productsList?.map((product, index) => (
						<tr key={index} className="bg-white border-b  hover:bg-gray-50 ">
							<th
								scope="row"
								className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
							>
								<Image
									className="w-10 h-10 rounded-full"
									src={product?.image ? product?.image : logo}
									alt="Image"
									width={25}
									height={25}
								/>
								<div className="pl-3">
									<div className="text-base text-gray-600 font-semibold">{product?.model}</div>
									<div className="font-normal text-gray-500">{product?.brand}</div>
								</div>
							</th>
							<td className="px-6 py-4">
								<div className="flex items-center">
									<div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> En Promocion
								</div>
							</td>
							<td className="px-6 py-4 flex gap-4">
								<button
									onClick={() => handleSelectedProduct(product)}
									className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
								>
									<MdEdit />
								</button>
								<button
									onClick={() => handleDeleteProduct(product)}
									className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
								>
									<MdDelete />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
