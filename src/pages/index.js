import { Billing, Business, Hero, FeaturedProducts, CardDeal, CTA, Clients } from "@/components";

import Head from "next/head";
import Image from "next/image";
import { blurCyan } from "public/assets";
import Layout from "../components/layout/Layout";
import { FeaturedCard } from "@/components/FeatureCard";

export default function Home() {
	return (
		<div className="bg-linear">
			<Head>
				<title>Taichi Holding Colombia</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Layout>
				<div className=" relative    ">
					<Image
						alt=""
						src={blurCyan}
						width={530}
						height={530}
						decoding="async"
						data-nimg="1"
						class="absolute bottom-full top-40 right-10 -mb-56 opacity-50"
					/>
					<Image
						alt=""
						src={blurCyan}
						width={530}
						height={530}
						decoding="async"
						data-nimg="1"
						class="absolute left-top top-40 left-10 -m-56 opacity-50"
					/>
				</div>

				<Hero />
				<Business />
				<div className="bg-gray-900/40 rounded-lg p-10">
					<Billing />
				</div>
				<FeaturedProducts />
				<FeaturedCard />
				<Clients />
				<CardDeal />
			</Layout>
		</div>
	);
}
