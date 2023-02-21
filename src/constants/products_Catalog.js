import { supabase } from "@/lib/supabaseClient";

export const productsListOld = [
	{
		id: 0,
		name: "ASR-4000E",
		manufacturer: "ANKE",
		url: "https://drive.google.com/uc?export=view&id=1M69UilEDlaVpAClMLR74zePirEj3dQE3",
		description:
			"Mamografo digital, en respaldo de la combinacion de tecnologfa y aspecto。humano, le provee una experiencia de manejo comodo. Estacion detrabajo profesional “E-Wew” *Estacion de trabajo para Adquisicion Integrada Inteligente",
		price: 0,
		category: "Medicina Humana",
		subcategory: "X-Ray",
		slug: "ASR-4000E",
	},
	{
		id: 1,
		name: "ASR-6850P",
		manufacturer: "ANKE",
		url: "https://drive.google.com/uc?export=view&id=1vXCuQyMTmB9YAHuPvNcFicFSUD5CGmXM",
		price: 0,
		description:
			"Funcionamiento inteligente Vinculación inteligente, Seguimiento sincrónico Potente estación de posprocesamiento de imágenes 1.Mejora dinámica inteligente de la imagen 2.Ajuste de la curva LUT multipunto 3.Equilibrio organizativo adaptativo 4.Supresión de ruido adaptativa",
		category: "Medicina Humana",
		subcategory: "X-Ray",
		slug: "ASR-6850P",
	},

	{
		id: 2,
		name: "OPENAMKR-5000",
		manufacturer: "ANKE",
		url: "https://drive.google.com/uc?export=view&id=1HGw92POxyaZ31-XW_mqKqrBnBfOtk_jW",
		price: 0,
		description:
			"Imagenes de alta calidad con una dosis baja y de poco consumo Plataforma tecnologica de précision lider en el mundo, Plataforma de 128 cortes",
		category: "Medicina Humana",
		subcategory: "X-Ray",
		slug: "OPENAMKR-5000",
	},
	{
		id: 3,
		name: "OPENAMKR-4000",
		manufacturer: "ANKE",
		url: "https://drive.google.com/uc?export=view&id=1HGw92POxyaZ31-XW_mqKqrBnBfOtk_jW",
		price: 0,
		description:
			"Es 0.4T MRI desarrollado por ANKE y ANALOGIC con esfuerzos conjuntos, se ha logrado un gran avance en el rendimiento, lo que hace que sus imágenes de alta calidad sean comparables a la MRI de alto campo.",
		category: "Medicina Humana",
		subcategory: "X-Ray",
		slug: "OPENAMKR-4000",
	},

	{
		id: 4,
		name: "Product 4",
		url: "https://drive.google.com/uc?export=view&id=1myRe7DIIlgMeXRqCB7AMnShhA8vlW5yK",
		category: "Medicina Humana",
		description: "This is a product",
		price: 100,
		slug: "product-4",
	},
	{
		id: 5,
		name: "Product 5",
		url: "https://drive.google.com/uc?export=view&id=1myRe7DIIlgMeXRqCB7AMnShhA8vlW5yK",
		category: "Medicina Humana",
		description: "This is a product",
		price: 100,
		slug: "product-5",
	},
	{
		id: 6,
		name: "Product 6",
		url: "https://drive.google.com/uc?export=view&id=1myRe7DIIlgMeXRqCB7AMnShhA8vlW5yK",
		category: "Medicina Humana",
		description: "This is a product",
		price: 100,
		slug: "product-6",
	},
];

export const getAllProductsIds = async () => {
	const { data: products } = await supabase.from("products").select("*");
	return products.map((product) => {
		return {
			params: {
				slug: product.slug,
			},
		};
	});
};

export const getProductData = async (slug) => {
	let { data: productData } = await supabase
		.from("products")
		.select("*,categories(*)")
		.eq("slug", slug)
		.single();
	return productData;
};

export const getAllProductsData = async () => {
	let { data: products, error } = await supabase.from("products").select("*,categories(*)");
	console.log(products, error, "roducts");
	return products;
};
