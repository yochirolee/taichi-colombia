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
					Technical Specifications
				</h2>
				<p class="mt-4 text-white font-poppins">
					The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The
					powder coated steel divider separates active cards from new ones, or can be used to
					archive important task lists.
				</p>

				<dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
					<div class="border-t border-gray-200 pt-4">
						<dt class="font-medium text-gray-100">Origin</dt>
						<dd class="mt-2 text-sm text-gray-200">Designed by Good Goods, Inc.</dd>
					</div>

					<div class="border-t border-gray-200 pt-4">
						<dt class="font-medium text-gray-100">Material</dt>
						<dd class="mt-2 text-sm text-gray-500">
							Solid walnut base with rare earth magnets and powder coated steel card cover
						</dd>
					</div>

					<div class="border-t border-gray-200 pt-4">
						<dt class="font-medium text-gray-100">Dimensions</dt>
						<dd class="mt-2 text-sm text-gray-200">6.25&quot; x 3.55&quot; x 1.15&quot;</dd>
					</div>

					<div class="border-t border-gray-200 pt-4">
						<dt class="font-medium text-gray-100">Finish</dt>
						<dd class="mt-2 text-sm text-gray-200">Hand sanded and finished with natural oil</dd>
					</div>

					<div class="border-t border-gray-200 pt-4">
						<dt class="font-medium text-gray-100">Includes</dt>
						<dd class="mt-2 text-sm text-gray-200">Wood card tray and 3 refill packs</dd>
					</div>

					<div class="border-t border-gray-200 pt-4">
						<dt class="font-medium text-gray-100">Considerations</dt>
						<dd class="mt-2 text-sm text-gray-200">
							Made from natural materials. Grain and color vary with each item.
						</dd>
					</div>
				</dl>
			</div>
		</div>
	);
};
