import Image from "next/image";
import { React, useState } from "react";
import { chison, dentoncbct, discount, featuredbg, tokiobg } from "../../public/assets";
import styles, { layout } from "../style";
import Button from "./Button";

export const Products = () => {
	const [activeProduct, setActiveProduct] = useState(1);
	console.log(activeProduct, "active");
	return (
		<div id="controls-carousel" class="relative" data-carousel="static">
			<div class="relative bg-featured  overflow-hidden rounded-lg ">
				<div
					class={`${activeProduct == 2 ? "" : "hidden"}  duration-700 ease-in-out`}
					data-carousel-item
				>
					<div className="grid  sm:grid-cols-2 xl:px-40 items-center sm:mx-10 lg:px-30 py-10">
						<div className="flex flex-col  items-center align-middle justify-center">
							<Image src={chison} alt="" width={400} height={400} />
							<span className=" flex  items-center gap-4 mt-10 px-6  py-2 sm:mt-6 bg-gray-100/80  rounded-xl ">
								<Image src={discount} alt="" width={30} height={30} />
								<p
									className={`${styles.paragraph} text-gray-700 font-semibold  mx-auto max-w-[470px]   text-center `}
								>
									Tablet y Estuche incluido
								</p>
							</span>
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
							<div className="mt-6">
								<Button />
							</div>
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
				</div>
				<div
					class={`${activeProduct == 1 ? "" : "hidden"}  duration-700 ease-in-out`}
					data-carousel-item
				>
					<div className="grid  sm:grid-cols-2 xl:px-40 items-center sm:mx-10 lg:px-30 py-10">
						<div className="flex flex-col  items-center align-middle justify-center">
							<Image
								src={dentoncbct}
								alt=""
								width={400}
								height={400}
								className="max-h-[400px] object-contain"
							/>
							<span className=" flex  items-center gap-4 mt-10 px-6  py-2 sm:mt-6 bg-gray-100/80  rounded-xl ">
								<Image src={discount} alt="" width={30} height={30} />
								<p
									className={`${styles.paragraph} text-gray-700 font-semibold  mx-auto max-w-[470px]   text-center `}
								>
									Text and Other
								</p>
							</span>
						</div>
						<div className="flex flex-col gap-2 sm:gap-10 justify-center text-center">
							<h3 className="text-white font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100.8px] leading-[75px]	">
								Denton Cbct
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
								Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
								Ipsum has been the
							</span>
							<div className="mt-6">
								<Button />
							</div>
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
				</div>
			</div>
			<button
				onClick={() =>
					setActiveProduct((prev) => {
						return prev > 1 ? prev - 1 : prev;
					})
				}
				type="button"
				class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
				data-carousel-prev
			>
				<span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white  group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
					<svg
						aria-hidden="true"
						class="w-6 h-6 text-white dark:text-gray-800"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 19l-7-7 7-7"
						></path>
					</svg>
					<span class="sr-only">Previous</span>
				</span>
			</button>
			<button
				onClick={() =>
					setActiveProduct((prev) => {
						return prev < 2 ? prev + 1 : prev;
					})
				}
				type="button"
				class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
				data-carousel-next
			>
				<span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white  group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
					<svg
						aria-hidden="true"
						class="w-6 h-6 text-white dark:text-gray-800"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 5l7 7-7 7"
						></path>
					</svg>
					<span class="sr-only">Next</span>
				</span>
			</button>
		</div>
	);
};
