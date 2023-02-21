import Image from "next/image";
import Link from "next/link";
import { React } from "react";

export const ProductCard = ({ product }) => {
	return (
		<Link href={`/catalogo/product/${product.slug}`} class="group">
			<div class="aspect-w-1  aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
				<Image
					src={product.url}
					width={500}
					height={500}
					alt="Hand holding black machined steel mechanical pencil with brass tip and top."
					class="max-h-72 w-full object-top object-scale-down group-hover:opacity-75"
				/>
			</div>
			<p class="mt-1 text-sm text-white rounded-lg p-2 text-center bg-medical ">{product.category}</p>
			<h3 class="mt-4 text-lg font-medium text-gray-900 ">{product.name}</h3>
			<p class="mt-1 text-sm text-gray-700 ">{product.categories.categoryName}</p>
		</Link>
	);
};
