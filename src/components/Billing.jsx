import Image from "next/image";
import { apple, bill, google } from "../../public/assets";
import styles, { layout } from "../style";
import { BsMailbox, BsVoicemail, BsWhatsapp } from "react-icons/bs";

const Billing = () => (
	<section id="product " className={`${layout.sectionReverse} `}>
		
		<div className={layout.sectionImgReverse}>
			<Image src={bill} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />
			{/* gradient start */}
			<div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
			<div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
			{/* gradient end */}
		</div>

		<div className={layout.sectionInfo}>
			<h2 className={styles.heading2}>
				Presencia <br className="sm:block hidden" /> en el todo as asdfasd Mundo
			</h2>
			<p className={`${styles.paragraph} text-left max-w-[470px] mt-5`}>
				Hoy en día, las oficinas en el extranjero están establecidas en Medio Oriente, África, Asia,
				América del Norte, Central y del Sur.
			</p>

			<div className="flex flex-row flex-wrap gap-10 sm:mt-10 mt-6">
				<button className="inline-flex w-full lg:w-40  justify-center bg-green-600/80  items-center gap-4 text-white border p-4 rounded-lg hover:bg-green-700">
					<BsWhatsapp className="text-xl " />
					<span>Whatsapp</span>
				</button>
				<button className="inline-flex w-full lg:w-40   justify-center bg-gray-600/80  items-center gap-4 text-white border p-4 rounded-lg hover:bg-gray-700">
					<BsMailbox className="text-xl" />
					<span>Email</span>
				</button>
			</div>
		</div>
	</section>
);

export default Billing;
