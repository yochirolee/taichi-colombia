import Image from "next/image";
import Link from "next/link";
import { React, useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { chison, discount, mapa, tokiobg } from "../../public/assets";

const Hero = () => {
	return (
		<div className="grid grid-row-2 md:grid-cols-2 mx-auto  items-center gap-10  mt-10 mb-28">
			<div className="flex flex-col ml-6 gap-2  justify-center text-center">
				<div class="relative">
					<p class="inline text-left font-poppins font-semibold bg-gradient-to-r p-2 from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent">
						Taichi
						<span className="text-gradient mx-2  animate-pulse  rounded-lg   p-2 text-white font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px]">
							Holdings
						</span>{" "}
						Colombia.
					</p>
					<p class="mt-10 md:px-10 text-xl text-left tracking-tight text-white">
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
			</div>
			<div className="md:flex flex-col    text-center items-center align-middle justify-center">
				<Image src={mapa} alt="" width={800} height={800} className=" rounded-full animate-pulse mt-20 " />
				<div className="">
					<span className="text-white text-center  font-bold text-xl">Nuestro Valores</span>
					<div className="flex flex-row justify-center  flex-wrap gap-4 p-10">
						<h1 className="text-xl font-bold border-r pr-2 text-white">Amistad</h1>
						<h1 className="text-xl font-bold text-white border-r pr-2">Calidad</h1>
						<h1 className="text-xl font-bold text-white">Compromiso</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
