import styles from "../style";
import { mapa } from "../../public/assets";
import Button from "./Button";
import Image from "next/image";

const Hero = () => {
	return (
		<div className="grid h-screen sm:grid-cols-2 xl:px-40 items-center sm:mx-10 lg:px-30 py-24 md:py-10">
			<div className="flex flex-col gap-2 sm:gap-10 justify-center text-center">
				<h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
					Taichi <br className="sm:block hidden" />{" "}
					<span className="text-gradient  animate-pulse border rounded-lg   p-2 text-white font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px]">
						Holdings
					</span>
				</h1>
				<h1 className="font-poppins  font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
					Colombia.
				</h1>
			</div>
			<div className="flex flex-col  items-center align-middle justify-center">
				<Image src={mapa} alt="" width={400} height={400} className='hidden sm:block' />
				<span className=" flex  items-center gap-4 mt-10 px-6  py-2 sm:mt-6 bg-gray-100/50  rounded-xl ">
					<p
						className={`${styles.paragraph} text-gray-700 font-semibold  mx-auto max-w-[470px]   text-center `}
					>
								Tecnologia Japonesa al servicio de la Gran Colombia
			
					</p>
				</span>
			
			</div>

			{/* <div className="text-center mx-10 py-10 flex flex-col bg-gray-900/30 rounded-xl z-40">
						<span
							className={`${styles.paragraph} hidden lg:block  mx-auto max-w-[470px] mt-5 text-white text-center `}
						>
							Fecuencia Base: 2.5 MHz
						</span>
						<span
							className={`${styles.paragraph} hidden lg:block  mx-auto max-w-[470px] mt-5 text-white text-center `}
						>
							Modos: B, C, PW, M, CPA, DPD, 2B
						</span>
						<span
							className={`${styles.paragraph} hidden lg:block  mx-auto max-w-[470px] mt-5 text-white text-center `}
						>
							Auto EF - IMT- PW -AutoTrace
						</span>
					</div> */}
		</div>

		/* <section id="home" className="relative flex md:flex-row flex-col pb-20  ">
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
		</section> */
	);
};

export default Hero;
