import styles from "../style";
import { logo } from "../../public/assets";
import { footerLinks, socialMedia } from "../constants";
import Image from "next/image";

const Footer = () => (
	<section className={`${styles.flexCenter} ${styles.paddingY}  mx-6 flex-col`}>
		<div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
			<div className="flex-[1] flex flex-col justify-start mr-10 text-center">
				<Image src={logo} alt="taichi-logo" width={124} height={32} />

				<p className={`${styles.paragraph} mt-4 text-center max-w-[312px]`}>
					Bienvenidos a nuestra gran familia empresarial.
				</p>
			</div>

			<div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
				{footerLinks.map((footerlink) => (
					<div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
						<h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
							{footerlink.title}
						</h4>
						<ul className="list-none mt-4">
							{footerlink.links.map((link, index) => (
								<li
									key={link.name}
									onClick={() => window.open(link.link)}
									className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
										index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
									}`}
								>
									{link.name}
								</li>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>

		<div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#ffffff1c]">
			<p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
				Copyright Ⓒ 2023 Taichi Colombia. All Rights Reserved.
			</p>

			<div className="flex flex-row md:mt-0 mt-6">
				{socialMedia.map((social, index) => (
					<Image
						key={index}
						onClick={() => window.open(social.link)}
						src={social.icon}
						alt="star"
						className={`w-[50%] h-[50%] mx-4 cursor-pointer   `}
					/>
				))}
			</div>
		</div>
	</section>
);

export default Footer;
