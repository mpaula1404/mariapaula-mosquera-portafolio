import Link from "next/link";
import Sidebar from "../../components/organisms/Sidebar";
import ButtonOutline from "../../components/atoms/ButtonOutline";

const values = [
	{
		title: "Misión",
		text: "Crear soluciones digitales útiles, claras y con impacto real para las personas y las organizaciones.",
	},
	{
		title: "Visión",
		text: "Consolidarme como desarrolladora con capacidad para liderar proyectos web innovadores y sostenibles.",
	},
	{
		title: "Valores",
		text: "Aprendizaje continuo, responsabilidad, creatividad, trabajo en equipo y mejora constante.",
	},
];

export default function AboutPage() {
	return (
		<main className="min-h-screen px-4 py-8 text-[var(--foreground)] sm:px-6 md:px-8 lg:px-12">
			<div className="mx-auto max-w-7xl gap-8 lg:grid lg:grid-cols-[340px_minmax(0,1fr)]">
				<div className="w-full lg:sticky lg:top-6 lg:self-start">
					<Sidebar />
				</div>

				<section className="mt-6 w-full min-w-0 space-y-6 lg:mt-0">
					<div className="flex flex-wrap items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)]/90 p-2 shadow-[0_18px_40px_rgba(70,50,38,0.08)] backdrop-blur-sm">
						<Link
							href="/"
							className="rounded-full px-4 py-2 text-sm font-semibold text-[var(--foreground)]/75 transition hover:bg-[var(--beige-soft)] hover:text-[var(--primary)]"
						>
							Inicio
						</Link>
						<Link
							href="/sobre-mi"
							className="rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-[#2f241d] shadow-[0_8px_20px_rgba(212,175,110,0.25)] transition"
						>
							Sobre mí
						</Link>
						<Link
							href="/portafolio"
							className="rounded-full px-4 py-2 text-sm font-semibold text-[var(--foreground)]/75 transition hover:bg-[var(--beige-soft)] hover:text-[var(--primary)]"
						>
							Portafolio
						</Link>
						<Link
							href="/contacto"
							className="rounded-full px-4 py-2 text-sm font-semibold text-[var(--foreground)]/75 transition hover:bg-[var(--beige-soft)] hover:text-[var(--primary)]"
						>
							Contacto
						</Link>
					</div>

					<header className="rounded-[32px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[0_25px_60px_var(--shadow-soft)] sm:p-8 md:p-10">
						<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
							Sobre mí
						</p>
						<h1 className="mt-4 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
							Soy María Paula Mosquera
						</h1>
						<p className="mt-4 max-w-3xl text-base leading-8 text-[var(--foreground)]/80">
							Estudiante de Ingeniería de Sistemas con interés en el desarrollo
							web, el diseño de experiencias digitales y la construcción de
							 soluciones que realmente aporten valor. Me gusta aprender, explorar
							nuevas tecnologías y transformar ideas en productos útiles y
							funcionales.
						</p>
					</header>

					<section className="rounded-[32px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[0_25px_60px_var(--shadow-soft)] sm:p-8 md:p-10">
						<h2 className="text-3xl font-bold text-[var(--foreground)]">
							Mi forma de trabajar
						</h2>
						<div className="mt-6 grid gap-5 md:grid-cols-3">
							{values.map((item) => (
								<div
									key={item.title}
									className="rounded-[24px] border border-[var(--border)] bg-[#f8f2e9] p-5"
								>
									<h3 className="text-xl font-bold text-[var(--primary)]">
										{item.title}
									</h3>
									<p className="mt-3 text-base leading-7 text-[var(--foreground)]/80">
										{item.text}
									</p>
								</div>
							))}
						</div>
					</section>

					<section className="rounded-[32px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[0_25px_60px_var(--shadow-soft)] sm:p-8 md:p-10">
						<h2 className="text-3xl font-bold text-[var(--foreground)]">
							Intereses
						</h2>
						<div className="mt-5 flex flex-wrap gap-3">
							{[
								"React",
								"Next.js",
								"UX/UI",
								"Node.js",
								"Base de datos",
								"Ciberseguridad",
								"Trabajo en equipo",
								"Metodologías ágiles",
							].map((item) => (
								<span
									key={item}
									className="rounded-full border border-[var(--primary)] bg-[var(--beige-soft)] px-4 py-2 text-sm font-medium text-[var(--foreground)]"
								>
									{item}
								</span>
							))}
						</div>

						<div className="mt-8 flex flex-wrap gap-3">
							<ButtonOutline href="/portafolio">Ver portafolio</ButtonOutline>
							<ButtonOutline href="/contacto">Contacto</ButtonOutline>
						</div>
					</section>
				</section>
			</div>
		</main>
	);
}
