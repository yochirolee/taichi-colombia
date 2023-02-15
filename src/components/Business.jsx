import Image from "next/image";
import { features } from "../constants";
import styles, { layout } from "../style";

const FeatureCard = ({ icon, title, content, index, color }) => (
	<div
		className={`relative flex flex-row sm:flex-col items-center gap-10 ${
			index !== features.length - 1 ? "mb-10 " : "mb-0"
		} feature-card`}
	>
		<div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-[${color}]`}>
			<Image src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
		</div>
		<div className="flex-1 flex flex-col ml-3 md:text-center">
			<h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
				{title}
			</h4>
			<div className="absolute z-[3] w-[50%] h-[90%] right-20 bottom-20 blue__gradient from-slate-50 to-slate-500 blur-xl" />

			<p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">{content}</p>
		</div>
	</div>
);

const ServiceCard = ({ icon, title, content, index, color }) => (
	<div className="flex flex-row items-center gap-2 hover:border p-2 rounded-lg">
		<span class={`flex w-3 h-3 ${color} animate-pulse rounded-full mx-4  ring-white ring-1`}></span>
		<button>{title}</button>
	</div>
);

const Business = () => (
	<section id="features" className=" bg-gray-900/60 p-4 rounded-lg  text-white ">
		<div className={`${layout.sectionImg} grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10  `}>
			{features.map((feature, index) => (
				<ServiceCard key={feature.id} {...feature} index={index} />
			))}
		</div>
	</section>
);

export default Business;
