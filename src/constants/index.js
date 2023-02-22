import { BsBoxArrowDownRight, BsHeart, BsInstagram, BsFacebook, BsLinkedin } from "react-icons/bs";
import {
	people01,
	people02,
	people03,
	facebook,
	instagram,
	linkedin,
	twitter,
	airbnb,
	binance,
	coinbase,
	dropbox,
	send,
	shield,
	star,
} from "../../public/assets";

export const navLinks = [
	{
		id: "/",
		title: "Inicio",
	},
	{
		id: "/catalogo",
		title: "Productos",
	},
	{
		id: "/catalogo/newProduct",
		title: "Crear Producto",
	},
	{
		id: "clients",
		title: "Clientes",
	},
];

export const features = [
	{
		id: "feature-1",
		icon: <BsHeart />,
		title: "Medicina Humana",
		content: "The best credit cards offer some tantalizing combinations of promotions and prizes",
		color: "bg-red-600",
	},
	{
		id: "feature-2",
		icon: <BsBoxArrowDownRight />,
		title: "Medicina Veterinaria",
		content: "We take proactive steps make sure your information and transactions are secure.",
		color: "bg-blue-500",
	},
	{
		id: "feature-3",
		icon: <BsHeart />,
		title: "Odontologia",
		content: "A balance transfer credit card can save you a lot of money in interest charges.",
		color: "bg-green-500",
	},
	{
		id: "feature-4",
		icon: <BsHeart />,
		title: "Simulacion",
		content: "A balance transfer credit card can save you a lot of money in interest charges.",
		color: "bg-yellow-600",
	},
	{
		id: "feature-5",
		icon: <BsHeart />,
		title: "Soporte Tecnico",
		content: "A balance transfer credit card can save you a lot of money in interest charges.",
		color: "bg-orange-600",
	},
];

export const feedback = [
	{
		id: "feedback-1",
		content:
			"Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
		name: "Herman Jensen",
		title: "Founder & Leader",
		img: people01,
	},
	{
		id: "feedback-2",
		content: "Money makes your life easier. If you're lucky to have it, you're lucky.",
		name: "Steve Mark",
		title: "Founder & Leader",
		img: people02,
	},
	{
		id: "feedback-3",
		content:
			"It is usually people in the money business, finance, and international trade that are really rich.",
		name: "Kenn Gallagher",
		title: "Founder & Leader",
		img: people03,
	},
];

export const stats = [
	{
		id: "stats-1",
		title: "Presentes en",
		value: "23",
	},

	{
		id: "stats-3",
		title: "Equipos Medicos Instalados en LATAM",
		value: "+5500",
	},
];

export const footerLinks = [
	{
		title: "Datos de Contacto",
		links: [
			{
				name: "Direccion: Cra. 15 No. 93A-62 OF: 304-305 | Bogota, Colombia",
				link: "/",
			},
			{
				name: "Telefono: +57 (601)-627-2586",
				link: "",
			},
			{
				name: "Email: taichi-colombia@anabas.co.jp",
				link: "#",
			},
		],
	},
	{
		title: "Casa Matriz",
		links: [
			{
				name: "Taichi Holdings SAS",
				link: "https://www.taichi-holdings.com/es/",
			},
		],
	},
];

export const socialMedia = [
	{
		id: "social-media-1",
		icon: instagram,
		link: "https://www.instagram.com/taichi.colombia/",
	},
	{
		id: "social-media-2",
		icon: facebook,
		color: "bg-blue-600",
		link: "https://www.facebook.com/taichiholdingscolombia/",
	},
	{
		id: "social-media-3",
		icon: twitter,
		link: "https://www.twitter.com/",
	},
	{
		id: "social-media-4",
		icon: linkedin,
		link: "https://co.linkedin.com/company/taichi-holdings-sas-colombia",
	},
];

export const clients = [
	{
		id: "client-1",
		logo: airbnb,
	},
	{
		id: "client-2",
		logo: binance,
	},
	{
		id: "client-3",
		logo: coinbase,
	},
	{
		id: "client-4",
		logo: dropbox,
	},
];
