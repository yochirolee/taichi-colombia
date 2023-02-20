import { React } from "react";
import {FaDog, FaNotesMedical, FaTooth, FaUserShield} from "react-icons/fa"
import {MdSupport} from "react-icons/md"

export const Services = () => {
	return (
		<div class="bg-white py-24 sm:py-32 ">
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<div class="mx-auto max-w-2xl lg:text-center">
					
					<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Nuestros Servicios
					</p>
					<p class="mt-6 text-lg leading-8 text-gray-600">
						Taichi Holdings Colombia tiene como mision ayudar al desarrolo.
					</p>
				</div>
				<div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
					<dl class="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
						<div class="relative pl-16">
							<dt class="text-base font-semibold leading-7 text-gray-900">
								<div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-medical">
									<FaNotesMedical className="h-6 w-6 text-white" />
								</div>
								Medicina Humana
							</dt>
							<dd class="mt-2 text-base leading-7 text-gray-600">
								Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi.
								Odio urna massa nunc massa.
							</dd>
						</div>

						<div class="relative pl-16">
							<dt class="text-base font-semibold leading-7 text-gray-900">
								<div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-veterinary">
									<FaDog className="h-6 w-6 text-white"/>
								</div>
								Veterinaria
							</dt>
							<dd class="mt-2 text-base leading-7 text-gray-600">
								Contamos con equipamiento especializado en veterinaria y tenemos un equipo de ingenieros con mas de 10 años de experiencia en el sector.  
							</dd>
						</div>

						<div class="relative pl-16">
							<dt class="text-base font-semibold leading-7 text-gray-900">
								<div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-odontology">
								<FaTooth className="h-6 w-6 text-white"/>
								</div>
								Odontologia
							</dt>
							<dd class="mt-2 text-base leading-7 text-gray-600">
								Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor
								congue commodo diam neque.
							</dd>
						</div>

						<div class="relative pl-16">
							<dt class="text-base font-semibold leading-7 text-gray-900">
								<div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-support">
									<MdSupport className="h-6 w-6 text-white" />
								</div>
								Soporte Tecnico
							</dt>
							<dd class="mt-2 text-base leading-7 text-gray-600">
								Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis.
								Id hac maecenas ac donec pharetra eget.
							</dd>
						</div>
						<div class="relative pl-16">
							<dt class="text-base font-semibold leading-7 text-gray-900">
								<div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-simulation">
									<FaUserShield className="h-6 w-6 text-white" />
								</div>
								Simulacion
							</dt>
							<dd class="mt-2 text-base leading-7 text-gray-600">
								Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis.
								Id hac maecenas ac donec pharetra eget.
							</dd>
						</div>
					</dl>
				</div>
			</div>
		</div>
	);
};
