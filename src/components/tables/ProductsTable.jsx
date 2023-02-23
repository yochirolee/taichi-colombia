import { React, useEffect } from "react";
import Image from "next/image";

export const ProductsTable = ({ productsList }) => {
	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
			
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
