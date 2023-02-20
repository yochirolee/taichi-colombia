import { React } from "react";
import Image from "next/image";

export const ProductDetails = ({ productData }) => {
	return (
		<div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
			<div class="aspect-w-1  aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
				<Image
					src={productData.url}
					alt="Hand holding black machined steel mechanical pencil with brass tip and top."
					class=" w-full object-top object-scale-down group-hover:opacity-75"
					height={500}
					width={500}
				/>
			</div>
			<div>
				<h2 class="text-3xl font-bold font-poppins tracking-tight text-white sm:text-4xl">
					Especificaciones Tecnicas
				</h2>
				<p class="mt-4 text-white font-poppins">{productData.description}</p>

				<dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
					<div class="border-t border-gray-200 pt-4">
						<dt class="font-medium text-gray-100">Modelo:</dt>
						<dd class="mt-2 text-sm text-gray-200">{productData.name}</dd>
					</div>

					<div class="border-t border-gray-200 pt-4">
						<dt class="font-medium text-gray-100">Categoria</dt>
						<dd class="mt-2 text-sm text-white">{productData.subcategory}</dd>
					</div>

					<div class="border-t border-gray-200 pt-4">
						<dt class="font-medium text-gray-100">Fabricante</dt>
						<dd class="mt-2 text-sm text-gray-200">{productData.manufacturer}</dd>
					</div>
				</dl>
			</div>
		</div>
	);
};
