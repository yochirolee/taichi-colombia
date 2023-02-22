import { Billing, Hero, FeaturedProducts, CardDeal, CTA, Clients } from "@/components";

import Head from "next/head";
import Image from "next/image";
import { blurCyan } from "public/assets";
import Layout from "../components/layout/Layout";
import { Services } from "@/components/Services";
import { About } from "@/components/About";

export default function Home() {
	return (
		<div className="bg-linear">
			<div className=" relative    ">
				<Head>
					<title>Taichi Holding Colombia</title>
					<meta name="description" content="Taichi Holdings Colombia" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Layout>
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
					<Hero />
					<FeaturedProducts />
					<Services />
					<About />
				</Layout>
			</div>
		</div>
	);
}
