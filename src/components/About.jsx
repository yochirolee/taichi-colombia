import Image from "next/image";
import { blurCyan } from "public/assets";

const stats = [
	{ name: "Oficinas en el mundo", value: "25" },
	{ name: "Equipos Instalados en LATAM", value: "5500+" },
	{ name: "Soporte Tecnico", value: "24/7" },
];

export const About = () => {
	return (
		<div className="relative isolate overflow-hidden bg-linear shadow lg:rounded-b-2xl py-24 sm:py-32">
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
			<svg
				viewBox="0 0 1097 845"
				aria-hidden="true"
				class="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]"
			>
				<path
					fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)"
					fillOpacity=".2"
					d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
				/>
				<defs>
					<linearGradient
						id="10724532-9d81-43d2-bb94-866e98dd6e42"
						x1="1097.04"
						x2="-141.165"
						y1=".22"
						y2="363.075"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#776FFF" />
						<stop offset="1" stopColor-color="#FF4694" />
					</linearGradient>
				</defs>
			</svg>
			<svg
				viewBox="0 0 1097 845"
				aria-hidden="true"
				class="absolute left-1/2 -top-52 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0"
			>
				<path
					fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)"
					fillOpacity=".2"
					d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
				/>
				<defs>
					<linearGradient
						id="8ddc7edb-8983-4cd7-bccb-79ad21097d70"
						x1="1097.04"
						x2="-141.165"
						y1=".22"
						y2="363.075"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor-color="#776FFF" />
						<stop offset="1" stopColor-color="#FF4694" />
					</linearGradient>
				</defs>
			</svg>
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
						Trabaje con Nosotros
					</h2>
					<p className="mt-6 text-lg leading-8 text-gray-300">
						Unete a nuestra gran familia, Taichi Holdings Colombia es mas que una empresa.
					</p>
				</div>
				<div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
					<dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
						{stats.map((stat) => (
							<div key={stat.name} className="flex flex-col-reverse">
								<dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
								<dd className="text-2xl font-bold leading-9 tracking-tight text-white">
									{stat.value}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
};
