import Image from "next/image";
import { blurCyan, chison, mapa } from "public/assets";
import { React } from "react";
export const FeaturedCard = () => {
	return (
		<div class="relative bg-gray-900/80 my-10 isolate overflow-hidden px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
			<svg
				viewBox="0 0 1024 1024"
				class="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
				aria-hidden="true"
			>
				<circle
					cx="512"
					cy="512"
					r="512"
					fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
					fillOpacity="0.7"
				/>
				<defs>
					<radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
						<stop stopColor="#fff" />
						<stop offset="1" stopColor="#fff" />
					</radialGradient>
				</defs>
			</svg>
			<div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
				<h2 class="text-3xl font-poppins font-bold tracking-tight text-white sm:text-4xl">
					Taichi Holdings Colombia.
				</h2>
				<p class="mt-6 text-lg leading-8 text-gray-300">
					Ecografo de Mano portatil, asdf as sad f sadf asdfasdf asdf asdfas dfasdfsadfsadf asdf.
				</p>
				<div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
					<a
						href="#"
						class="rounded-md bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
					>
						Contacto
					</a>
					<a href="#" class="text-base font-semibold leading-7 text-white">
						Ver Mas <span aria-hidden="true">→</span>
					</a>
				</div>
			</div>

			<Image
				class=" object-scale-down hidden lg:block top-0 left-0 w-[57rem] max-w-none rounded-md"
				src={mapa}
				alt="feature product"
				width={100}
				height={100}
			/>
		</div>
	);
};
