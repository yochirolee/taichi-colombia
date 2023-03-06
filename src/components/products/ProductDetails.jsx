import { React } from "react";
import Image from "next/image";

export const ProductDetails = ({ productData }) => {
	return (
		<div className="mx-auto grid max-w-2xl  grid-cols-1 gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
			<div className=" flex flex-col items-center aspect-w-1 bg-white aspect-h-1 w-full overflow-hidden rounded-lg  xl:aspect-w-7 xl:aspect-h-8">
				<Image
					src={productData?.image}
					placeholder="blur"
					blurDataURL="https://image-component.nextjs.gallery/placeholder"
					alt="Product Image"
					className="max-h-96  w-full object-scale-down group-hover:opacity-75"
					height={500}
					width={500}
				/>
				<button className="border bg-green-50 max-w-42 px-2 m-4 rounded-lg h-12 text-green-500 inset-0 focus:outline-none">Cotizar</button>
			</div>
			<div>
				<h2 className="text-3xl font-bold font-poppins tracking-tight text-white sm:text-4xl">
					Especificaciones Tecnicas
				</h2>
				<p className="mt-4 text-white font-poppins">{productData?.model}</p>

				<dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
					<div className="border-t border-gray-200 pt-4">
						<dt className="font-medium text-gray-100">Modelo:</dt>
						<dd className="mt-2 text-sm text-gray-200">{productData?.model}</dd>
					</div>

					<div className="border-t border-gray-200 pt-4">
						<dt className="font-medium text-gray-100">Categoria</dt>
						<dd className="mt-2 text-sm text-white">{productData?.categories?.categoryName}</dd>
					</div>

					<div className="border-t border-gray-200 pt-4">
						<dt className="font-medium text-gray-100">Fabricante</dt>
						<dd className="mt-2 text-sm text-gray-200">{productData?.brand}</dd>
					</div>
					<div className="border-t border-gray-200 pt-4">
						<dt className="font-medium text-gray-100">Descripcion</dt>
						<dd className="mt-2 text-sm text-gray-200">{productData?.description}</dd>
					</div>
				</dl>
			</div>
		</div>
	);
};
