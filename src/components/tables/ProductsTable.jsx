import { React, useEffect } from "react";
import { BsSearch } from "react-icons/bs";
import Image from "next/image";

export const ProductsTable = ({ productsList }) => {
	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
			<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
				<thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
					<tr>
						<th scope="col" className="px-6 py-3">
							Producto
						</th>
						<th scope="col" className="px-6 py-3">
							Linea Taichi
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
					{productsList?.map((product,index) => (
						<tr key={index} className="bg-white border-b  hover:bg-gray-50 ">
							<th
								scope="row"
								className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
							>
								<Image
									className="w-10 h-10 rounded-full"
									src={product?.image}
									alt="Image"
									width={25}
									height={25}
								/>
								<div className="pl-3">
									<div className="text-base text-gray-600 font-semibold">{product?.model}</div>
									<div className="font-normal text-gray-500">{product?.brand}</div>
								</div>
							</th>
							<td className="px-6 py-4">{product?.subCategories?.name}</td>
							<td className="px-6 py-4">
								<div className="flex items-center">
									<div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div> En Promocion
								</div>
							</td>
							<td className="px-6 py-4">
								<a
									href="#"
									className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
								>
									Editar
								</a>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
