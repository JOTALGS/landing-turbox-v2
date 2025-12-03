"use client";

import { useState } from "react";

const sectores = [
	'Actividades al Aire Libre',
	'Agencia de Viajes',
	'Productos Naturales',
	'Alojamiento',
	'Terapias Alternativas',
	'Transporte',
	'Artesanías',
	'Servicios Personales',
	'Gastronomía',
	'Vinicultura',
	'Cultura',
	'Moda',
	'Tienda de Artículos',
	'Deportes',
	'Entretenimiento',
	'Cursos y Talleres',
	'Experiencias Turísticas',
	'Otros',
];

function Divider() {
	return (
		<div className="relative h-14 bg-transparent px-4 sm:px-6 lg:px-8 overflow-hidden">
			<div
				className="absolute inset-0 opacity-20 pointer-events-none"
				style={{
					backgroundImage: `repeating-linear-gradient(
            -45deg,
            #212121ff 0px,
            #070707ff 2px,
            transparent 1px,
            transparent 4px
          )`,
				}}
			></div>
		</div>
	);
}

export default function WaitlistPage() {
	const [form, setForm] = useState({
		nombre: "",
		email: "",
		empresa: "",
		numero: "",
		pais: "",
		localidad: "",
		rubro: "",
	});

	const [loading, setLoading] = useState(false);
	const [success, setSuccess] = useState("");
	const [error, setError] = useState("");

	const handleChange = (e: any) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const validateEmail = (email: string) => {
		// Simple email regex validation
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
	};

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		setError("");
		setSuccess("");

		// Validation: all fields required
		for (let key in form) {
			if (form[key as keyof typeof form].trim() === "") {
				setError("Debes completar todos los campos");
				return;
			}
		}

		// Email validation
		if (!validateEmail(form.email)) {
			setError("Debes ingresar un email válido");
			return;
		}

		setLoading(true);

		try {
			const res = await fetch("/api/waitlist", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(form),
			});

			const data = await res.json();

			if (res.ok) {
				setSuccess("¡Te has unido a la lista de espera!");
				setForm({
					nombre: "",
					email: "",
					empresa: "",
					numero: "",
					pais: "",
					localidad: "",
					rubro: "",
				});
			} else {
				if (data.error && data.error.includes("Unique constraint failed")) {
					setSuccess("El email ya está registrado.");
				} else {
					setError(data.error || "No se pudo registrar en la lista de espera.");
				}
			}
		} catch (err) {
			console.error("Error:", err);
			setError("Error de red. Intenta nuevamente.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<section className="bg-blue-800/20 h-[calc(100vh)] flex items-center px-4 sm:px-6 lg:px-8 mx-auto overflow-hidden">
			<div className="absolute top-20 left-0 right-0 mb-8 w-full overflow-hidden">
				<Divider />
			</div>


			<div className="flex z-10 flex-col bg-blue-800/20 border border-gray-500 rounded-xl backdrop-blur-[4px] sm:w-[85%] h-[85%] px-12 py-16 mx-auto lg:flex-row gap-12  items-start">
				{/* Left side - Form */}
				<div className="flex-1 w-full">
					<div className="space-y-4">
						<div>
							<label className="block text-gray-700 font-medium mb-1">Nombre</label>
							<input
								type="text"
								name="nombre"
								value={form.nombre}
								onChange={handleChange}
								className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none bg-[#1e3a5f] text-white placeholder:text-gray-300"
								placeholder="Tu nombre"
							/>
						</div>

						<div>
							<label className="block text-gray-700 font-medium mb-1">Email</label>
							<input
								type="email"
								name="email"
								value={form.email}
								onChange={handleChange}
								className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none bg-[#1e3a5f] text-white placeholder:text-gray-300"
								placeholder="tu@email.com"
							/>
						</div>

						<div>
							<label className="block text-gray-700 font-medium mb-1">Teléfono</label>
							<input
								type="text"
								name="numero"
								value={form.numero}
								onChange={handleChange}
								className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none bg-[#1e3a5f] text-white placeholder:text-gray-300"
								placeholder="Ej: 123456789"
							/>
						</div>

						<div>
							<label className="block text-gray-700 font-medium mb-1">Localidad</label>
							<input
								type="text"
								name="localidad"
								value={form.localidad}
								onChange={handleChange}
								className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none bg-[#1e3a5f] text-white placeholder:text-gray-300"
								placeholder="Ej: Mar del Plata"
							/>
						</div>

						<div>
							<label className="block text-gray-700 font-medium mb-1">País</label>
							<input
								type="text"
								name="pais"
								value={form.pais}
								onChange={handleChange}
								className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none bg-[#1e3a5f] text-white placeholder:text-gray-300"
								placeholder="Ej: Argentina"
							/>
						</div>

						<div>
							<label className="block text-gray-700 font-medium mb-1">Nombre del Negocio</label>
							<input
								type="text"
								name="empresa"
								value={form.empresa}
								onChange={handleChange}
								className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none bg-[#1e3a5f] text-white placeholder:text-gray-300"
								placeholder="Ej: Teatro Estrella Gomez"
							/>
						</div>

						<div>
							<label className="block text-gray-700 font-medium mb-1">Rubro</label>
							<select
								name="rubro"
								value={form.rubro}
								onChange={handleChange}
								className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none bg-[#1e3a5f] text-white"
							>
								<option value="" className="text-gray-300 mx-4 text-lg font-semibold italic">
									Selecciona un rubro
								</option>
								{sectores.map((s) => (
									<option key={s} value={s}>
										{s}
									</option>
								))}
							</select>
						</div>
					</div>
				</div>

				{/* Right side - Text and Button */}
				<div className="flex-1 w-full lg:pl-8">
					<div className="lg:sticky lg:top-8">
						<div className="text-center lg:text-left mb-8">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
								Únete a la{" "}
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#258fbf] to-[#51608f]">
									Lista de Espera
								</span>
							</h2>
							<p className="text-lg text-gray-600 mb-8">
								Sé el primero en recibir novedades y acceso exclusivo a la versión de prueba.
								Te notificaremos en tu casilla de email el momento en que puedas ingresar.
							</p>
						</div>

						{error && <p className="text-red-500 text-center lg:text-left mb-4">{error}</p>}
						{success && <p className="text-green-600 text-center lg:text-left mb-4">{success}</p>}

						<button
							type="button"
							disabled={loading}
							onClick={handleSubmit}
							className="w-full bg-gradient-to-r from-[#258fbf] to-[#51608f] text-white px-6 py-3 rounded-lg font-semibold text-lg shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50"
						>
							{loading ? "Enviando..." : "Unirme a la Lista"}
						</button>
					</div>
				</div>
			</div>

			<div className="absolute bottom-20 left-0 right-0 mt-10 z-0 w-full overflow-hidden">
				<Divider />
			</div>
		</section>
	);
}