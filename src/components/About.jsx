
const stats = [
	{ name: "Oficinas en el mundo", value: "25" },
	{ name: "Equipos Instalados en LATAM", value: "5500+" },
	{ name: "Soporte Tecnico", value: "24/7" },
];

export  const About=()=> {
	return (
		<div className="relative isolate overflow-hidden  py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Trabaje con Nosotros</h2>
					<p className="mt-6 text-lg leading-8 text-gray-300">
						Unete a nuestra gran familia, Taichi Holdings Colombia es mas que una empresa.
					</p>
				</div>
				<div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
					
					<dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
						{stats.map((stat) => (
							<div key={stat.name} className="flex flex-col-reverse">
								<dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
								<dd className="text-2xl font-bold leading-9 tracking-tight text-white">
									{stat.value}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
}
