import styles from "../style";
import { mapa } from "../../public/assets";
import Button from "./Button";
import Image from "next/image";

const Hero = () => {
	return (
		<section id="home" className="relative flex md:flex-row flex-col pb-20  ">
			<div className={`flex-1 flex-col text-left z-20  `}>
				<div className="flex flex-row items-start w-full mt-20">
					<h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
						Taichi <br className="sm:block hidden" />{" "}
						<span className="text-gradient">Holdings</span>{" "}
					</h1>
					<div className="ss:flex hidden md:mr-4 mr-0"></div>
				</div>

				<h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
					Colombia.
				</h1>
				<p
					className={`${styles.paragraph} hidden sm:block w-full sm:max-w-[470px] mt-5 text-white p-4 bg-gray-900/60 rounded-lg`}
				>
					Somos una compañía trasnacional japonesa especializada en el comercio internacional,
					enfocada en brindar soluciones médicas en diferentes áreas, con productos de alta
					tecnología y un amplio portafolio al servicio de Colombia y el mundo
				</p>
			</div>

			<div
				className={`flex-1 pt-10 items-center hidden justify-center  md:flex flex-col    md:my-0 my-20 mx-10 relative`}
			>
				
					<Image src={mapa} alt="map" className="" width={600} height={800} />
				
			</div>
		</section>
	);
};

export default Hero;
