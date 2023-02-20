import Image from "next/image";
import Link from "next/link";
import { React, useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { chison, discount, mapa, tokiobg } from "../../public/assets";
import styles from "../style";
import Button from "./Button";
import Navbar from "./Navbar";

export const FeaturedProducts = () => {
	const [activeProduct, setActiveProduct] = useState(1);
	console.log(activeProduct, "active");
	return (
		<div class="relative isolate overflow-hidden bg-linear lg:rounded-t-xl  py-6 sm:py-10">
			<svg
				viewBox="0 0 1097 845"
				aria-hidden="true"
				class="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]"
			>
				<path
					fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)"
					fill-opacity=".2"
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
						<stop stop-color="#776FFF" />
						<stop offset="1" stop-color="#FF4694" />
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
					fill-opacity=".2"
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
						<stop stop-color="#776FFF" />
						<stop offset="1" stop-color="#FF4694" />
					</linearGradient>
				</defs>
			</svg>
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<h2 class="text-3xl text-center font-poppins font-bold tracking-tight text-white ">
					Productos Destacados
				</h2>

				<div
					class={`${activeProduct == 1 ? "" : "hidden"}  duration-700 ease-in-out`}
					data-carousel-item
				>
					<div className="grid  sm:grid-cols-2 xl:px-20 items-center sm:mx-10 lg:px-30 py-10">
						<div className="flex flex-col  items-center align-middle justify-center">
							<Image src={chison} alt="" width={400} height={400} />
						</div>
						<div className="flex flex-col gap-2 sm:gap-10 justify-center text-center">
							<h3 className="text-white font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px]	">
								Sono Eye
							</h3>
							<div className="inline-flex text-center gap-6 mx-auto">
								<h3 className="text-white  ss:text-[72px] text-[52px] leading-[75px]	">Chison</h3>
								<h3 className=" animate-pulse border rounded-lg   px-2 text-white font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px]">
									P3
								</h3>
							</div>

							<span
								className={`${styles.paragraph}  mx-auto max-w-[470px] mt-5 text-white text-center `}
							>
								Ecografo de mano portatil que podras transportar de manera sencilla y ultilizar en
								cualquier situacion
							</span>
						</div>
					</div>
				</div>
			</div>
			<button
				onClick={() =>
					setActiveProduct((prev) => {
						return prev > 1 ? prev - 1 : prev;
					})
				}
				type="button"
				className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-10 cursor-pointer group focus:outline-none"
				data-carousel-prev
			>
				<BsArrowLeftCircle className="text-3xl text-gray-100/40 hover:text-white" />
			</button>
			<button
				onClick={() =>
					setActiveProduct((prev) => {
						return prev < 2 ? prev + 1 : prev;
					})
				}
				type="button"
				className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-10 cursor-pointer group focus:outline-none"
				data-carousel-next
			>
				<BsArrowRightCircle className="text-3xl text-gray-100/40 hover:text-white" />
			</button>
		</div>
	);
};
