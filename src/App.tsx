import React from "react";
import {
	Mail,
	Phone,
	MapPin,
	Tractor,
	Plane as Plant,
	Users,
	Brain,
	Send,
	Target,
	Eye,
	Heart,
	MessageSquare,
	User,
	AtSign,
} from "lucide-react";

function App() {
	const team = [
		{
			name: "Luisa",
			role: "Coordinadora de proyetos y relaciones comerciales",
			image:
				"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300",
			description:
				"Experta en el sector Agricola y Tecnologías de la Información",
		},
		{
			name: "Jonathan Cruz",
			role: "Desarrollador de software especializado en soluciones para el sector agricola",
			image: "/jonathan.jpg",
			description: "Especialista en desarrollador full stack",
		},
		{
			name: "David Crux",
			role: "Diseñador y especialista en experiencia de usuario UI/UX",
			image: "/David.jpg",
			description: "Disenador de interfaces de usuario",
		},
	];

	const projects = [
		{
			title: "SmartIrrigation",
			description: "Sistema inteligente de riego basado en sensores IoT",
			image:
				"https://images.unsplash.com/photo-1463123081488-789f998ac9c4?auto=format&fit=crop&q=80&w=500",
		},
		{
			title: "CropMonitor",
			description: "Monitoreo de cultivos mediante drones y análisis de datos",
			image:
				"https://images.unsplash.com/photo-1563514227147-6d2ff665a6a0?auto=format&fit=crop&q=80&w=500",
		},
		{
			title: "FarmTrack",
			description:
				"Plataforma de gestión integral para explotaciones agrícolas",
			image:
				"https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=500",
		},
	];

	const values = [
		{
			title: "Innovación",
			description:
				"Apostamos por soluciones tecnologicas de vanguardia que se adapten a las necesidaddes del sector agricola.",
		},
		{
			title: "Sostenibilidad",
			description:
				"Promovemos el crecimiento agricola responsable y respetuoso con el medio ambiente.",
		},
		{
			title: "Colaboración",
			description:
				"Creemos en el trabajo conjunto con el sector agrario para desarrollar soluciones efectivas y de alto impacto.",
		},
		{
			title: "Excelencia",
			description:
				"Entregamos productos confiables y eficientes para constribuir al desarrollo tecnologico del campo.",
		},
	];

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Aquí iría la lógica del formulario
	};

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<header
				className="relative h-screen flex items-center justify-center bg-cover bg-center"
				style={{
					backgroundImage:
						'url("https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80&w=1920")',
				}}
			>
				<div className="absolute inset-0 bg-black bg-opacity-50"></div>
				<div className="relative text-center text-white px-4">
					<h1 className="text-5xl md:text-6xl font-bold mb-6">AgroCode</h1>
					<p className="text-xl md:text-2xl mb-8">
						Transformando el campo con tecnología innovadora
					</p>
					<a
						href="#contact"
						className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full text-lg transition duration-300"
					>
						Contáctanos
					</a>
				</div>
			</header>

			{/* Misión, Visión y Valores Section */}
			<section className="py-20 px-4">
				<div className="max-w-6xl mx-auto">
					<div className="grid md:grid-cols-2 gap-12 mb-20">
						<div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-green-600">
							<div className="flex items-center mb-4">
								<Target className="w-8 h-8 text-green-600 mr-3" />
								<h2 className="text-3xl font-bold">Misión</h2>
							</div>
							<p className="text-gray-600 text-lg">
								Desarrollar soluciones tecnológicas innovadoras que impulsen el
								crecimiento del sector agrícola, proporcionando herramientas
								digitales accesibles y eficientes para agricultores y empresas
								rurales.
							</p>
						</div>
						<div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-green-600">
							<div className="flex items-center mb-4">
								<Eye className="w-8 h-8 text-green-600 mr-3" />
								<h2 className="text-3xl font-bold">Visión</h2>
							</div>
							<p className="text-gray-600 text-lg">
								Ser un referente en la digitalización del sector agrícola,
								facilitando la adopción tecnológica y contribuyendo al
								desarrollo sostenible del campo, mejorando la productividad y la
								competitividad de nuestros clientes.
							</p>
						</div>
					</div>
					<div className="text-center mb-12">
						<div className="flex items-center justify-center mb-4">
							<Heart className="w-8 h-8 text-green-600 mr-3" />
							<h2 className="text-3xl font-bold">Valores</h2>
						</div>
						<div className="grid md:grid-cols-4 gap-6 mt-8">
							{values.map((value, index) => (
								<div
									key={index}
									className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
								>
									<h3 className="text-xl font-semibold text-green-600 mb-3">
										{value.title}
									</h3>
									<p className="text-gray-600">{value.description}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Diferencial Section */}
			<section className="py-20 px-4 bg-gray-50">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl font-bold text-center mb-16">
						¿Por qué AgroCode?
					</h2>
					<div className="grid md:grid-cols-3 gap-12">
						<div className="text-center">
							<div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
								<Brain className="w-8 h-8 text-green-600" />
							</div>
							<h3 className="text-xl font-semibold mb-4">
								Innovación Constante
							</h3>
							<p className="text-gray-600">
								Desarrollamos soluciones tecnológicas adaptadas a las
								necesidades específicas del sector agrícola.
							</p>
						</div>
						<div className="text-center">
							<div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
								<Tractor className="w-8 h-8 text-green-600" />
							</div>
							<h3 className="text-xl font-semibold mb-4">
								Experiencia en el Campo
							</h3>
							<p className="text-gray-600">
								Combinamos conocimiento agrícola con expertise tecnológico para
								resultados óptimos.
							</p>
						</div>
						<div className="text-center">
							<div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
								<Plant className="w-8 h-8 text-green-600" />
							</div>
							<h3 className="text-xl font-semibold mb-4">Sostenibilidad</h3>
							<p className="text-gray-600">
								Promovemos prácticas agrícolas sostenibles mediante tecnología
								de vanguardia.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Projects Section */}
			<section className="py-20 px-4">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl font-bold text-center mb-16">
						Nuestros Proyectos
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						{projects.map((project, index) => (
							<div
								key={index}
								className="bg-white rounded-lg overflow-hidden shadow-lg"
							>
								<img
									src={project.image}
									alt={project.title}
									className="w-full h-48 object-cover"
								/>
								<div className="p-6">
									<h3 className="text-xl font-semibold mb-2">
										{project.title}
									</h3>
									<p className="text-gray-600">{project.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section className="py-20 px-4 bg-gray-50">
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl font-bold text-center mb-16">
						Nuestro Equipo
					</h2>
					<div className="grid md:grid-cols-3 gap-8">
						{team.map((member, index) => (
							<div
								key={index}
								className="bg-white rounded-lg overflow-hidden shadow-lg p-6 text-center"
							>
								<img
									src={member.image}
									alt={member.name}
									className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
								/>
								<h3 className="text-xl font-semibold mb-2">{member.name}</h3>
								<p className="text-green-600 mb-3">{member.role}</p>
								<p className="text-gray-600">{member.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section
				id="contact"
				className="py-20 px-4 bg-gradient-to-br from-green-50 to-green-100"
			>
				<div className="max-w-6xl mx-auto">
					<h2 className="text-4xl font-bold text-center mb-4">Contáctanos</h2>
					<p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
						¿Tienes alguna pregunta o te gustaría conocer más sobre nuestras
						soluciones? Estamos aquí para ayudarte a transformar tu agricultura
						con tecnología de vanguardia.
					</p>

					<div className="grid md:grid-cols-2 gap-12 items-start">
						<div className="bg-white rounded-2xl shadow-xl p-8">
							<h3 className="text-2xl font-semibold mb-6 text-green-600">
								Información de Contacto
							</h3>
							<div className="space-y-6">
								<div className="flex items-center p-4 bg-green-50 rounded-lg">
									<Mail className="w-6 h-6 text-green-600 flex-shrink-0" />
									<div className="ml-4">
										<p className="text-sm font-medium text-gray-500">Email</p>
										<p className="text-gray-700">contacto@agrocode.com</p>
									</div>
								</div>
								<div className="flex items-center p-4 bg-green-50 rounded-lg">
									<Phone className="w-6 h-6 text-green-600 flex-shrink-0" />
									<div className="ml-4">
										<p className="text-sm font-medium text-gray-500">
											Teléfono
										</p>
										<p className="text-gray-700">+57 310 123 4562</p>
									</div>
								</div>
								<div className="flex items-center p-4 bg-green-50 rounded-lg">
									<MapPin className="w-6 h-6 text-green-600 flex-shrink-0" />
									<div className="ml-4">
										<p className="text-sm font-medium text-gray-500">
											Ubicación
										</p>
										<p className="text-gray-700">Villavicencio, Meta</p>
									</div>
								</div>
							</div>
						</div>

						<form
							onSubmit={handleSubmit}
							className="bg-white rounded-2xl shadow-xl p-8"
						>
							<h3 className="text-2xl font-semibold mb-6 text-green-600">
								Envíanos un mensaje
							</h3>
							<div className="space-y-6">
								<div className="relative">
									<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
										<User className="h-5 w-5 text-gray-400" />
									</div>
									<input
										type="text"
										id="name"
										placeholder="Tu nombre"
										className="pl-11 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
										required
									/>
								</div>

								<div className="relative">
									<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
										<AtSign className="h-5 w-5 text-gray-400" />
									</div>
									<input
										type="email"
										id="email"
										placeholder="Tu email"
										className="pl-11 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
										required
									/>
								</div>

								<div className="relative">
									<div className="absolute top-3 left-4 pointer-events-none">
										<MessageSquare className="h-5 w-5 text-gray-400" />
									</div>
									<textarea
										id="message"
										rows={4}
										placeholder="Tu mensaje"
										className="pl-11 w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-200"
										required
									></textarea>
								</div>

								<button
									type="submit"
									className="w-full bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition duration-300 shadow-lg hover:shadow-xl"
								>
									Enviar Mensaje
									<Send className="w-5 h-5" />
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-gray-900 text-white py-8">
				<div className="max-w-6xl mx-auto px-4 text-center">
					<p>
						&copy; {new Date().getFullYear()} AgroCode. Todos los derechos
						reservados.
					</p>
				</div>
			</footer>
		</div>
	);
}

export default App;
