import styles from "../style";
import { blurCyan, mapa } from "../../public/assets";
import Button from "./Button";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
	return (
		<div className="grid h-screen md:grid-cols-2 p-6 gap-10  xl:px-40 items-center sm:mx-10 lg:px-30 py-24 md:py-10">
			<div className="flex flex-col gap-2  sm:gap-10 justify-center p-2 rounded-lg text-center">
				<div class="relative mt-10 text-center  ">
					<Image
						alt=""
						src={blurCyan}
						width={530}
						height={530}
						decoding="async"
						data-nimg="1"
						class="absolute bottom-full right-full -mr-72 -mb-56 opacity-50"
					/>
					<div class="relative">
						<p class="inline font-poppins font-semibold bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
							Taichi
							<span className="text-gradient md:mx-6  animate-pulse border rounded-lg   p-2 text-white font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px]">
								Holdings
							</span>{" "}
							Colombia.
						</p>
						<p class="mt-10  text-2xl tracking-tight text-white">
							Somos una compania especializada en el comercio Internacional de equipos y productos
							medicos japoneses. Combinamos alta calidad con precios competitivos.
						</p>
						<div class="mt-8 items-center  flex gap-4 justify-center ">
							<div className="mt-6">
								<Link
									href="catalogo"
									className="border  py-4 px-10 text-white font-bold hover:bg-gray-50/20  rounded-lg font-poppins"
								>
									Conozca Nuestro Catalogo
								</Link>
							</div>
						</div>
					</div>
					<div class="relative lg:static xl:pl-10">
						<div class="absolute inset-x-[-50vw] -top-32 -bottom-48 [mask-image:linear-gradient(transparent,white,white)] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:left-[calc(50%+14rem)] lg:right-0 lg:-top-32 lg:-bottom-32 lg:[mask-image:none] lg:dark:[mask-image:linear-gradient(white,white,transparent)]"></div>
					</div>
				</div>
			</div>
			<div className="md:flex flex-col  text-center items-center align-middle justify-center">
				<Image src={mapa} alt="" width={800} height={800} className="hidden mt-20 md:block" />
				<div className="">
					<span className="text-white text-center z font-bold text-xl">Nuestro Valores</span>
					<div className="flex flex-row justify-center  flex-wrap gap-4 p-10">
						<h1 className="text-3xl font-bold border-r pr-2 text-white">Amistad</h1>
						<h1 className="text-3xl font-bold text-white border-r pr-2">Calidad</h1>
						<h1 className="text-3xl font-bold text-white">Compromiso</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
