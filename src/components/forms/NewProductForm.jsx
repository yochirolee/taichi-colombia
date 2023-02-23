import { supabase } from "@/lib/supabaseClient";
import { useState } from "react";
import { useForm } from "react-hook-form";

const createNewProduct = async (newProduct) => {
	const { data, error } = await supabase
		.from("products")
		.upsert(newProduct, { onConflict: "slug" })
		.select()
		.single();
	return { data, error };
};

export const NewProductForm = ({
	categories,
	subcategories,
	setOpen,
	cancelButtonRef,
	setProductsList,
}) => {
	const [isInserting, setIsInserting] = useState(false);
	const [isError, setIsError] = useState(false);
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		setIsInserting((prev) => (prev = true));
		data.slug = data.name;
		const { data: createdProduct, error } = await createNewProduct(data);
		if (error) setIsError((prev) => (prev = false));

		setIsInserting((prev) => (prev = false));
		setProductsList((prev) => [...prev, createdProduct]);
		setOpen((prev) => !prev);
		reset();
	};

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
						<form onSubmit={handleSubmit(onSubmit)}>
							<div className="overflow-hidden shadow sm:rounded-md">
								<div className="bg-white px-4 py-5 sm:p-6">
									<div className="grid grid-cols-6 gap-6">
										<div className="col-span-6 sm:col-span-3">
											<label htmlFor="country" className="block text-sm font-medium text-gray-700">
												Lineas de Taichi
											</label>
											<select
												{...register("subCategoryId")}
												className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
											>
												{subcategories?.map((subcategory, index) => (
													<option value={subcategory.subCategoryId} key={index}>
														{subcategory.name}
													</option>
												))}
											</select>
										</div>
										<div className="col-span-6 sm:col-span-3">
											<label htmlFor="country" className="block text-sm font-medium text-gray-700">
												Categorias
											</label>
											<select
												{...register("categoryId")}
												className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
											>
												{categories?.map((category, index) => (
													<option value={category.categoryId} key={index}>
														{category.categoryName}
													</option>
												))}
											</select>
										</div>

										<div className="col-span-6 sm:col-span-3">
											<label htmlFor="brand" className="block text-sm font-medium text-gray-700">
												Marca
											</label>
											<input
												{...register("brand", { required: true })}
												type="text"
												name="brand"
												id="brand"
												autoComplete="brand"
												className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
											/>
											{errors.brand && (
												<span className="block text-sm font-medium text-red-500 mt-2">
													Este Campo es Requerido
												</span>
											)}
										</div>

										<div className="col-span-6 sm:col-span-3">
											<label
												htmlFor="last-name"
												className="block text-sm font-medium text-gray-700"
											>
												Modelo
											</label>
											<input
												{...register("model", { required: true })}
												type="text"
												name="model"
												id="model"
												autoComplete="family-model"
												className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
											/>
											{errors.model && (
												<span className="block text-sm font-medium text-red-500 mt-2">
													Este Campo es Requerido
												</span>
											)}
										</div>
										<div className="col-span-6 sm:col-span-3">
											<label htmlFor="" className="block text-sm font-medium text-gray-700">
												Nombre Comercial
											</label>
											<input
												{...register("name", { required: true })}
												type="text"
												name="name"
												id="name"
												autoComplete="name"
												className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
											/>
											{errors.name && (
												<span className="block text-sm font-medium text-red-500 mt-2">
													Este Campo es Requerido
												</span>
											)}
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
													{...register("image")}
													type="text"
													name="image"
													id="image"
													className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
													placeholder="www.example.com/picture.png"
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
												{...register("description", { required: true })}
												id="description"
												name="description"
												rows={3}
												className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
												placeholder=""
												defaultValue={""}
											/>
											{errors.description && (
												<span className="block text-sm font-medium text-red-500 mt-2">
													Este Campo es Requerido
												</span>
											)}
										</div>
									</div>
								</div>
								<div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
									<button
										type="submit"
										disabled={isInserting}
										className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
									>
										{isInserting ? "Agregando..." : "Agregar Producto"}
									</button>
									<button
										type="button"
										className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
										onClick={() => setOpen(false)}
										ref={cancelButtonRef}
									>
										Cancel
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
