import Image from "next/image";
import Link from "next/link";
import { React } from "react";

export const ProductCard = ({ product }) => {
	if (!product) return <div>No Products</div>;
	return (
		<Link href={`/catalogo/product/${product.productId}`} className="group">
			<div className=" w-full overflow-hidden rounded-lg bg-transparent xl:aspect-w-7 xl:aspect-h-8">
				<Image
					src={product.image}
					width={250}
					height={250}
					alt={product.name}
					className="max-h-52 min-h-64 w-full  object-scale-down group-hover:opacity-75"
				/>
			</div>
			<p className="mt-1 text-sm text-white rounded-lg p-2 text-center bg-medical ">
				{product.subCategories.name}
			</p>
			<h3 className="mt-4 text-lg font-medium text-gray-900 ">{product.name}</h3>
			<p className="mt-1 text-sm text-gray-700 ">{product.categories.categoryName}</p>
		</Link>
	);
};
