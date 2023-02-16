import { BsBoxArrowDownRight, BsHeart } from "react-icons/bs";
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
		id: "home",
		title: "Inicio",
	},
	{
		id: "products",
		title: "Productos",
	},
	{
		id: "news",
		title: "Noticias",
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
		title: "Useful Links",
		links: [
			{
				name: "Content",
				link: "#",
			},
			{
				name: "How it Works",
				link: "#",
			},
			{
				name: "Create",
				link: "#",
			},
			{
				name: "Explore",
				link: "#",
			},
			{
				name: "Terms & Services",
				link: "#",
			},
		],
	},
	{
		title: "Community",
		links: [
			{
				name: "Help Center",
				link: "#",
			},
			{
				name: "Partners",
				link: "#",
			},
			{
				name: "Suggestions",
				link: "#",
			},
			{
				name: "Blog",
				link: "#",
			},
			{
				name: "Newsletters",
				link: "#",
			},
		],
	},
	{
		title: "Partner",
		links: [
			{
				name: "Our Partner",
				link: "#",
			},
			{
				name: "Become a Partner",
				link: "#",
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
