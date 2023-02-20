import { React } from "react";
import { FaDog, FaNotesMedical, FaTooth, FaUserShield } from "react-icons/fa";
import { MdSupport } from "react-icons/md";

export const Services = () => {
	return (
		<div class="bg-white py-24 sm:py-32 ">
			<div class="mx-auto max-w-7xl px-6 lg:px-8">
				<div class="mx-auto max-w-2xl lg:text-center">
					<p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Nuestros Servicios
					</p>
					<p class="mt-6 text-lg leading-8 text-gray-600">
						Taichi Holdings Colombia tiene como mision ayudar al desarrolo de Colombia.
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
								La medicina humana es una disciplina que se enfoca en el estudio, diagnóstico y
								tratamiento de enfermedades y trastornos en seres humanos. Los equipos de
								diagnóstico son herramientas esenciales en este campo, ya que permiten a los
								profesionales de la salud obtener información precisa sobre la salud de sus
								pacientes, lo que es crucial para ofrecer un tratamiento efectivo y personalizado.
								Taichi cuenta con una amplia gamas de equipos de ultima generacion  y de excelente calidad
							</dd>
						</div>

						<div class="relative pl-16">
							<dt class="text-base font-semibold leading-7 text-gray-900">
								<div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-veterinary">
									<FaDog className="h-6 w-6 text-white" />
								</div>
								Veterinaria
							</dt>
							<dd class="mt-2 text-base leading-7 text-gray-600">
								Nuestros equipos cuentan con gran calidad y respaldo brindando soluciones no solo en
								su instalacion si no en la implementacion de proyectos de gran tamaño como lo son
								los centros de imagenes diagnósticas especializadas en medicina veterinaria.
							</dd>
						</div>

						<div class="relative pl-16">
							<dt class="text-base font-semibold leading-7 text-gray-900">
								<div class="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-odontology">
									<FaTooth className="h-6 w-6 text-white" />
								</div>
								Odontologia
							</dt>
							<dd class="mt-2 text-base leading-7 text-gray-600">
								Los equipos odontológicos son esenciales para el trabajo de los profesionales de la
								salud bucal, permitiendo llevar a cabo procedimientos de manera precisa y eficiente,
								mejorando la calidad de atención que se ofrece a los pacientes, Taichi posee equipos
								de ultima generacion a precios competitivos en el mercado.
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
								Contamos con ingenieros altamente calificados para ofrecerles soluciones y
								recomendaciones para mejorar su desempeño. Nuestros ingenieros pueden ayudarlo a
								instalar, configurar y mantener adecuadamente su tecnologia medica.
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
								La simulación médica es una técnica cada vez más utilizada en la formación de
								profesionales de la salud, debido a sus numerosas bondades y ventajas. En esta
								técnica, se recrean situaciones y escenarios clínicos mediante la utilización de
								maniquíes, simuladores y tecnología de última generación
							</dd>
						</div>
					</dl>
				</div>
			</div>
		</div>
	);
};
