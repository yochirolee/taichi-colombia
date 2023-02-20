import Image from "next/image";
import Link from "next/link";
import { React, useState } from "react";
import {

	BsArrowLeftCircle,
	BsArrowRightCircle,
	
} from "react-icons/bs";
import { chison, discount, mapa, tokiobg } from "../../public/assets";
import styles from "../style";
import Button from "./Button";

export const FeaturedProducts = () => {
	const [activeProduct, setActiveProduct] = useState(1);
	console.log(activeProduct, "active");
	return (
		<div id="controls-carousel" class="relative" data-carousel="static">
			<div class="relative bg-transparent my-10 overflow-hidden rounded-t-lg ">
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
				className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
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
				className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
				data-carousel-next
			>
				<BsArrowRightCircle className="text-3xl text-gray-100/40 hover:text-white" />
			</button>
		</div>
	);
};
