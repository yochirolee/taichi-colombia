export const products = [
	{
		id: 0,
		name: "Product 0",
		description: "This is a product",
		price: 100,
		slug: "product-0",
	},
	{ id: 1, name: "Product 1", description: "This is a product", price: 100, slug: "product-1" },
	{ id: 2, name: "Product 2", description: "This is a product", price: 100, slug: "product-2" },
	{ id: 3, name: "Product 3", description: "This is a product", price: 100, slug: "product-3" },
	{ id: 4, name: "Product 4", description: "This is a product", price: 100, slug: "product-4" },
	{ id: 5, name: "Product 5", description: "This is a product", price: 100, slug: "product-5" },
	{ id: 6, name: "Product 6", description: "This is a product", price: 100, slug: "product-6" },
];

export const getAllProductsIds = () => {
	return products.map((product) => {
		return {
			params: {
				slug: product.slug,
			},
		};
	});
};

export const getProductData = (slug) => {
	console.log(slug);
	let result = products.find((product) => product.slug == slug);
	return result;
};

export const getAllProductsData = () => {
	return products;
};
