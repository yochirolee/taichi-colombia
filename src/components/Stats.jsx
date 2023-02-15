import { stats } from "../constants";

const Stats = () => (
	<section className=' flex flex-col sm:flex-row flex-wrap sm:mb-20 mb-2'>
		{stats.map((stat) => (
			<div
				key={stat.id}
				className={`flex-1 z-20 flex justify-center items-center flex-row m-3 text-center bg-gray-900/70 rounded-lg px-6`}
			>
				<h4 className="font-poppins  font-semibold xs:text-[20.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white">
					{stat.value}
				</h4>
				<p className="font-poppins font-normal text-sx xs:text-[14 px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase ml-3">
					{stat.title}
				</p>
			</div>
		))}
	</section>
);

export default Stats;
