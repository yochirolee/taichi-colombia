export const NewProductForm = ({ categories, subcategories }) => {
	return (
		<div className=" p-6  lg:rounded-xl b">
			<div className="mt-10 sm:mt-0">
				<div className="md:grid md:grid-cols-3 md:gap-6">
					<div className="md:col-span-1">
						<div className="px-4 sm:px-0">
							<h3 className="text-lg font-medium leading-6 text-gray-900">
								Nuevo Producto o Equipo
							</h3>
							<p className="mt-1 text-sm text-gray-600">
								Cree un nuevo producto o equipo para su catalogo de productos
							</p>
						</div>
					</div>
					<div className="mt-5 md:col-span-2 md:mt-0">
						<form action="#" method="POST">
							<div className="overflow-hidden shadow sm:rounded-md">
								<div className="bg-white px-4 py-5 sm:p-6">
									<div className="grid grid-cols-6 gap-6">
										<div className="col-span-6 sm:col-span-3">
											<label htmlFor="country" className="block text-sm font-medium text-gray-700">
												Categorias
											</label>
											<select
												id="subcategories"
												name="subcategories"
												autoComplete="categories-name"
												className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
											>
												{subcategories?.map((subcategory) => (
													<option key={subcategory.id}>{subcategory.name}</option>
												))}
											</select>
										</div>
										<div className="col-span-6 sm:col-span-3">
											<label htmlFor="country" className="block text-sm font-medium text-gray-700">
												Categorias
											</label>
											<select
												id="categories"
												name="categories"
												autoComplete="categories-name"
												className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
											>
												{categories?.map((category) => (
													<option key={category.CategoryId}>{category.CategoryName}</option>
												))}
											</select>
										</div>

										<div className="col-span-6 sm:col-span-3">
											<label
												htmlFor="first-name"
												className="block text-sm font-medium text-gray-700"
											>
												Marca
											</label>
											<input
												type="text"
												name="first-name"
												id="first-name"
												autoComplete="given-name"
												className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
											/>
										</div>

										<div className="col-span-6 sm:col-span-3">
											<label
												htmlFor="last-name"
												className="block text-sm font-medium text-gray-700"
											>
												Modelo
											</label>
											<input
												type="text"
												name="last-name"
												id="last-name"
												autoComplete="family-name"
												className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
											/>
										</div>
										<div className="col-span-6 sm:col-span-3">
											<label
												htmlFor="last-name"
												className="block text-sm font-medium text-gray-700"
											>
												Fabricante
											</label>
											<input
												type="text"
												name="last-name"
												id="last-name"
												autoComplete="family-name"
												className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
											/>
										</div>
										<div className="col-span-6 sm:col-span-3">
											<label
												htmlFor="company-website"
												className="block text-sm font-medium text-gray-700"
											>
												Imagen Url
											</label>
											<div className="mt-1 flex rounded-md shadow-sm">
												<span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-sm text-gray-500">
													http://
												</span>
												<input
													type="text"
													name="company-website"
													id="company-website"
													className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
													placeholder="www.example.com"
												/>
											</div>
										</div>
									</div>
									<div className="mt-6">
										<label htmlFor="about" className="block text-sm font-medium text-gray-700">
											Descripcion del Producto o Equipo
										</label>
										<div className="mt-1">
											<textarea
												id="about"
												name="about"
												rows={3}
												className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
												placeholder=""
												defaultValue={""}
											/>
										</div>
									</div>
								</div>
								<div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
									<button
										type="submit"
										className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
									>
										Save
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
