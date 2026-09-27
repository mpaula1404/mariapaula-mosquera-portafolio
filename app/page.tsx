"use client";

import { useState } from "react";
import Button from "../components/atoms/Button";
import ButtonOutline from "../components/atoms/ButtonOutline";
import KnowledgeCard from "../components/atoms/KnowledgeCard";
import Text from "../components/atoms/Text";
import Title from "../components/atoms/Title";
import ProgressBar from "../components/atoms/ProgressBar";
import Sidebar from "../components/organisms/Sidebar";
import Modal from "../components/molecules/Modal";
import ProjectPortfolio from "../components/molecules/ProjectPortfolio";
import Link from "next/link";

// Componentes y hooks usados en la página

/** Porcentajes de habilidades (usados en ProgressBar) */
const skills = [
	{ name: "Diseño UX/UI", percentage: 82 },
	{ name: "React", percentage: 90 },
	{ name: "Next.js", percentage: 88 },
	{ name: "Node.js", percentage: 76 },
];

/** Lista de conocimientos — usa iconos guardados en /public */
const knowledge = [
	{
		title: "Desarrollo web",
		description: "Desarrollo de aplicaciones web modernas con React, Next.js y tecnologías frontend.",
		icon: <img src="/internet.png" alt="React" className="w-6 h-6" />,
	},
	{
		title: "Diseño UI/UX",
		description: "Diseño de interfaces intuitivas, limpias y con una excelente experiencia de usuario.",
		icon: <img src="/ux.png" alt="UX/UI" className="w-6 h-6" />,
	},
	{
		title: "Ciberseguridad",
		description: "Interés en seguridad informática, protección de sistemas y buenas prácticas digitales.",
		icon: <img src="/security.png" alt="Ciberseguridad" className="w-6 h-6" />,
	},
	{
		title: "Desarrollo backend",
		description: "Creación de APIs, lógica del servidor y conexión con bases de datos.",
		icon: <img src="/backend.png" alt="Backend" className="w-6 h-6" />,
	},
	{
		title: "Diseño responsivo",
		description: "Interfaces adaptables a distintos dispositivos, tamaños y resoluciones.",
		icon: <img src="/responsive.png" alt="Diseño responsivo" className="w-6 h-6" />,
	},
	{
		title: "Metodologías ágiles",
		description: "Trabajo colaborativo con Scrum, Kanban y entrega iterativa de valor.",
		icon: <img src="/agile.png" alt="Metodologías ágiles" className="w-6 h-6" />,
	},
];

/** Proyectos mostrados en la sección Portafolio */
const projects = [
	{
		title: "Plataforma de Gestión Inmobiliaria",
		description: "Sistema para administrar propiedades, clientes y transacciones con panel administrativo.",
		image: "/inmobiliaria.png",
		details: "Desarrollé una plataforma para gestionar propiedades, clientes y transacciones con un panel administrativo claro y enfocado en la productividad del equipo inmobiliario.",
		tech: ["Java", "Javascript", "MariaDB", "Spring Boot"],
		link: "https://github.com/mpaula1404/Inmobiliaria.git",
	},
	{
		title: "Plataforma de Talento Humano",
		description: "Gestionar procesos de talento humano, jornada laboral y evaluaciones de desempeño.",
		image: "/DHuman.png",
		details: "DHUMAN es una aplicación web desarrollada para facilitar la gestión de recursos humanos en organizaciones. Está pensada para que los colaboradores puedan registrar su jornada laboral, solicitar permisos o vacaciones, consultar su nómina y participar en procesos de capacitación y evaluación del desempeño.",
		tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
		link: "https://dhuman.vercel.app/",
	},
	{
		title: "Plataforma de Aerolínea Virtual",
		description: "Simulación de una aerolínea virtual con reservas, vuelos y gestión de usuarios.",
		image: "/aerolinea.png",
		details: "Desarrollé una aerolínea virtual que permite a los usuarios explorar destinos, reservar vuelos y gestionar su experiencia de viaje. La plataforma ofrece una interfaz intuitiva y funcionalidades avanzadas para simular la operación de una aerolínea.",
		tech: ["Next.js", "TypeScript", "Stripe"],
		link: "https://github.com/mpaula1404/AerolineaVirtual.git",
	},
];

/** Experiencias laborales*/
const experiences = [
	{
		icon: "</>",
		title: "Proyecto Académico",
		company: "Universidad de Antioquia",
		period: "Ago 2026 – Dic 2026",
		description: "Desarrollo de proyecto integrador en el que se aplicaran conocimientos de manejos de datos e inteligencia artificial para la creación de un sistema que permita predecir que animal es según fotos enviadas por el usuario, utilizando técnicas de aprendizaje automático y visión por computadora.",
	},
	{
		icon: "▣",
		title: "Desarrollo de Soluciones Digitales",
		company: "Cable Net Universat SAS",
		period: "Nov 2024 – Actualidad",
		description: "Desarrollo de soluciones digitales y trabajo en equipo para la implementación de sistemas.",
	},
	{
		icon: "👥",
		title: "Trabajo en Equipo",
		company: "Diversos proyectos universitarios",
		period: "2023 - Actualidad",
		description: "Colaboración en el desarrollo de aplicaciones web, bases de datos y análisis de requerimientos.",
	},
];

/** Enlaces sociales */
const socialLinks = [
	{ label: "GitHub", href: "https://github.com/", icon: "G" },
	{ label: "LinkedIn", href: "https://www.linkedin.com/", icon: "in" },
	{ label: "Correo", href: "mailto:mpaula.mosquera@udea.edu.co", icon: "@" },
];

// Página principal: Sidebar fijo, secciones principales y modal
export default function Home() {
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<main className="min-h-screen px-4 py-8 text-[var(--foreground)] sm:px-6 md:px-8 lg:px-12">
			<aside className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 lg:flex">
				<div className="flex flex-col gap-3 rounded-full border border-[var(--border)] bg-white/80 p-2 shadow-[0_18px_40px_rgba(70,50,38,0.12)] backdrop-blur-sm">
					{socialLinks.map((item) => (
						<a
							key={item.label}
							href={item.href}
							target={item.href.startsWith("http") ? "_blank" : undefined}
							rel={item.href.startsWith("http") ? "noreferrer" : undefined}
							aria-label={item.label}
							className="group flex h-11 w-11 items-center justify-center rounded-full border border-[var(--primary)] bg-[var(--beige-soft)] text-sm font-bold text-[var(--primary)] transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--primary)] hover:text-white"
						>
							<span className="transition group-hover:scale-105">{item.icon}</span>
						</a>
					))}
				</div>
			</aside>
			<div className="mx-auto grid w-full max-w-7xl grid-cols-[220px_minmax(0,1fr)] gap-4 sm:grid-cols-[250px_minmax(0,1fr)] sm:gap-5 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-8 md:items-start">
				<div className="w-full md:sticky md:top-6 md:self-start">
					<Sidebar />
				</div>

				<section className="mt-6 w-full min-w-0 space-y-6 md:mt-0">
					{/* HERO SECTION */}
					<header className="relative overflow-hidden rounded-[32px] border border-[var(--border)] bg-gradient-to-br from-[#2f241d] to-[#1a1410] p-8 shadow-[0_25px_60px_var(--shadow-soft)] backdrop-blur-sm sm:p-10 md:p-12">
						{/* Decorative elements */}
						<div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[var(--primary)]/10 to-transparent rounded-full blur-3xl -z-10"></div>
						
						<div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
							{/* LEFT: Información */}
							<div className="flex-1 text-center md:text-left">
								<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)] mb-3">
									Hoja de vida
								</p>
								<h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
									Hola, Soy Maria 
								</h1>
								<h1 className="text-4xl md:text-5xl font-bold text-[var(--primary)] mb-4">
									Paula Mosquera
								</h1>
								<p className="text-sm md:text-base text-gray-300 mb-2">
									Estudiante de Ingeniería de Sistemas
								</p>
								<div className="w-16 h-1 bg-[var(--primary)] mx-auto md:mx-0 my-4"></div>
								<p className="text-sm md:text-base text-gray-400 leading-relaxed max-w-lg mb-8">
									Apasionada por la tecnología, el desarrollo web
									y la creación de soluciones digitales que generan
									un impacto real.
								</p>
								{/* CTA: botón que abre modal y enlace para descargar CV */}
								<div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
									<ButtonOutline onClick={() => setModalOpen(true)}>
										Conoce más
									</ButtonOutline>
									{/* Enlace para descargar el CV (ruta API o archivo estático) */}
									<a
										href="/api/cv-pdf"
										className="flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold tracking-[0.08em] text-white shadow-[0_12px_30px_rgba(181,139,68,0.28)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--primary-dark)]"
										>
										Descargar CV
										<img
											src="/download.png"
											alt="Descargar"
											className="w-4 h-4"
										/>
									</a>
								</div>
							</div>

							{/* RIGHT: Foto circular */}
							<div className="flex-1 flex justify-center">
								<div className="relative w-64 h-64 md:w-80 md:h-80">
									{/* Border circular dorado */}
									<div className="absolute inset-0 rounded-full border-4 border-[var(--primary)] bg-white flex items-center justify-center overflow-hidden">
										<img 
											src="/mi_imagen.jpeg" 
											alt="María Paula Mosquera" 
											className="w-full h-full object-cover"
										/>
									</div>
									<div className="absolute bottom-0 right-0 w-24 h-24 border-b-4 border-r-4 border-[var(--primary)] rounded-br-full"></div>
								</div>
							</div>
						</div>
					</header>

					<section className="rounded-[32px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[0_25px_60px_rgba(70,50,38,0.08)] backdrop-blur-sm sm:p-8 md:p-10">
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
							Conocimientos
						</p>
						<h2 className="mt-4 text-4xl font-bold text-[var(--foreground)] md:text-2xl">
							Mis habilidades
						</h2>
						<div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
							{knowledge.map((item) => (
								<KnowledgeCard
									key={item.title}
									title={item.title}
									description={item.description}
									icon={item.icon}
								/>
							))}
						</div>
					</section>

					<section className="rounded-[32px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[0_25px_60px_rgba(70,50,38,0.08)] backdrop-blur-sm sm:p-8 md:p-10">
						<Title className="text-xl font-bold tracking-tight text-[var(--foreground)] sm:text-2xl">
							Educación
						</Title>

						<div className="mt-6 flex items-start gap-4">
							<img src="/Escudo-UdeA.svg" alt="Universidad de Antioquia" className="w-30 h-30 flex-shrink-0" />
							<div className="flex-1 border-l-2 border-[var(--primary)] pl-5">
								<p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--brown)] sm:text-xs">
									2023 - Actualidad
								</p>
								<h3 className="mt-2 text-lg font-bold text-[var(--foreground)] sm:text-xl">
									Universidad de Antioquia
								</h3>
								<Text className="mt-2 text-sm leading-7 text-[var(--foreground)]/80 sm:text-base sm:leading-8">
									Ingeniería de Sistemas, enfocado en desarrollo web, programación,
									arquitectura de software y metodologías ágiles.
								</Text>
							</div>
						</div>
					</section>

					{/* Sección de Portafolio */}
					<section className="rounded-[32px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[0_25px_60px_rgba(70,50,38,0.08)] backdrop-blur-sm sm:p-8 md:p-10">
						<Title className="text-xl font-bold tracking-tight text-[var(--foreground)] sm:text-2xl">
							Portafolio
						</Title>
						<p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--foreground)]/75 sm:text-base">
							Exploro soluciones digitales con enfoque en experiencia de usuario, funcionalidad y impacto real.
						</p>
						<ProjectPortfolio projects={projects} />
					</section>

					<section className="rounded-[32px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[0_25px_60px_rgba(70,50,38,0.08)] backdrop-blur-sm sm:p-8 md:p-10">
						<div className="flex items-center gap-3">
							<div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--primary)] bg-[var(--beige-soft)] text-2xl text-[var(--primary)]">
								🧳
							</div>
							<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)] sm:text-sm">
								Experiencia
							</p>
						</div>

						<h2 className="mt-6 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-2xl">
							Mi recorrido
						</h2>

						<div className="relative mt-10 ml-2 border-l-2 border-[var(--primary)]/60 pl-8">
							{experiences.map((item, index) => (
								<div key={item.title} className="relative mb-10 last:mb-0">
									<div className="absolute -left-[2.62rem] top-2 flex h-8 w-8 items-center justify-center rounded-full border-4 border-[#f3eadf] bg-[var(--primary)] text-sm text-white shadow-[0_0_0_2px_rgba(212,175,110,0.2)]">
										{index === 0 ? "</>" : index === 1 ? "▣" : "👥"}
									</div>
									<div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
										<div className="flex h-16 w-16 items-center justify-center rounded-full bg-[var(--beige-soft)] text-sm text-[var(--primary)]">
											{index === 0 ? "</>" : index === 1 ? "▣" : "👥"}
										</div>
										<div className="flex-1">
											<h3 className="text-xl font-bold text-[var(--foreground)]">
												{item.title}
											</h3>
											<p className="mt-1 text-xl text-[var(--foreground)]/85">
												{item.company}
											</p>
											<p className="mt-1 text-base text-[var(--foreground)]/75">
												{item.period}
											</p>
											<p className="mt-3 max-w-2xl text-lg leading-8 text-[var(--foreground)]/80">
												{item.description}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</section>	
					
				</section>
			</div>

			{/* MODAL: Conoce más */}
			<Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Sobre mí">
				<div className="space-y-6">
					{/* Introducción */}
					<div>
						<h3 className="text-xl font-bold text-[var(--primary)] mb-3">¡Hola! Soy María Paula</h3>
						<p className="text-base leading-relaxed">
							Soy estudiante de Ingeniería de Sistemas en la Universidad de Antioquia y me apasiona la tecnología, especialmente el desarrollo de soluciones web y la creación de proyectos que puedan convertirse en experiencias útiles, funcionales y visualmente atractivas.

							Durante mi formación he tenido la oportunidad de trabajar en diferentes proyectos relacionados con desarrollo web, programación, bases de datos, optimización y tecnologías cloud, lo que me ha permitido fortalecer tanto mis conocimientos técnicos como mi capacidad para enfrentar problemas y buscar soluciones.

							Me considero una persona creativa, curiosa, responsable y con muchas ganas de aprender. Disfruto explorar nuevas tecnologías y convertir una idea en un proyecto que pueda verse, utilizarse y seguir mejorándose.

							Actualmente continúo fortaleciendo mis conocimientos en desarrollo frontend, React, Next.js, TypeScript, Tailwind CSS y ciberseguridad, mientras sigo construyendo proyectos que me permitan crecer profesionalmente.

						</p>
					</div>

					{/* Motivación */}
					<div>
						<h3 className="text-xl font-bold text-[var(--primary)] mb-3">✨ Más allá del código</h3>
						<p className="text-base leading-relaxed">
							Para mí, la tecnología no se trata solamente de programar. También se trata de entender necesidades, crear soluciones y aprender constantemente.
							Este portafolio representa una parte de mi camino como estudiante y desarrolladora, y también las metas que tengo para seguir creciendo en el mundo de la tecnología.
						</p>
					</div>

					{/* Intereses */}
					<div>
						<h3 className="text-xl font-bold text-[var(--primary)] mb-3">Mis intereses 💡</h3>
						<ul className="space-y-2">
							<li className="flex items-start">
								<span className="text-[var(--primary)] mr-3">•</span>
								<span>Desarrollo web full-stack (React, Next.js, Node.js)</span>
							</li>
							<li className="flex items-start">
								<span className="text-[var(--primary)] mr-3">•</span>
								<span>Diseño UX/UI y experiencia del usuario</span>
							</li>
							<li className="flex items-start">
								<span className="text-[var(--primary)] mr-3">•</span>
								<span>Arquitectura de software y patrones de diseño</span>
							</li>
							<li className="flex items-start">
								<span className="text-[var(--primary)] mr-3">•</span>
								<span>Metodologías ágiles y trabajo en equipo</span>
							</li>
						</ul>
					</div>

					{/* Objetivo */}
					<div className="bg-[var(--primary)]/10 p-4 rounded-lg border border-[var(--primary)]/30">
						<h3 className="text-lg font-bold text-[var(--primary)] mb-2">Mi objetivo</h3>
						<p className="text-base">
							Entender primero el problema de la empresa para diseñar soluciones tecnológicas que realmente generen valor.
						</p>
					</div>

					{/* CTA */}
					<div className="pt-4 border-t border-[var(--primary)]/20">
						<p className="text-center text-sm text-gray-400">
							¿Te gustaría trabajar juntos? 
							<br />
							<br />
							<Button href="/contacto" className="mt-2">
								Contactame
							</Button>
						</p>
					</div>
				</div>
			</Modal>

			{/* Seccion Footer */}
			<footer className="mt-10 rounded-[32px] border border-[var(--border)] bg-gradient-to-r from-[#f8f2e9] via-[#f4e7d5] to-[#efe3d0] p-6 shadow-[0_25px_60px_rgba(70,50,38,0.08)] sm:p-8 md:p-10">
				<div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
					<div>
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--brown)]">
							Maria Paula Mosquera
						</p>
						<h3 className="mt-2 text-2xl font-bold text-[var(--foreground)]">
							Construyendo experiencias digitales
						</h3>
					</div>

					<div className="flex flex-wrap items-center gap-3">
						<ButtonOutline href="/">Inicio</ButtonOutline>
						<ButtonOutline href="/sobre-mi">Sobre mí</ButtonOutline>
						<ButtonOutline href="/portafolio">Portafolio</ButtonOutline>
						<ButtonOutline href="/contacto">Contacto</ButtonOutline>
					</div>
				</div>

				<div className="mt-8 flex flex-col gap-4 border-t border-[var(--border)] pt-6 md:flex-row md:items-center md:justify-between">
					<p className="text-sm text-[var(--foreground)]/70">
						© 2026 María Paula Mosquera. Todos los derechos reservados.
					</p>

					<div className="flex items-center gap-3">
						<a href="https://github.com/mpaula1404" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--primary)] bg-white text-[var(--primary)] transition hover:-translate-y-0.5">
							Gx
						</a>
						<a href="www.linkedin.com/in/maria-paula-mosquera-alvarez-8b0443375" target="_blank" rel="noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--primary)] bg-white text-[var(--primary)] transition hover:-translate-y-0.5">
							in
						</a>
						<a href="mailto:mpaula.mosquera@udea.edu.co" className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--primary)] bg-white text-[var(--primary)] transition hover:-translate-y-0.5">
							@
						</a>
					</div>
				</div>
			</footer>
		</main>
	);
}