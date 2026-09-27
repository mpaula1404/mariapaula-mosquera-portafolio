import Link from "next/link";
import Sidebar from "../../components/organisms/Sidebar";
import Button from "../../components/atoms/Button";

const portfolioItems = [
	{
		title: "Plataforma de Gestión Inmobiliaria",
		description:
			"Sistema para administrar propiedades, clientes y transacciones con panel administrativo.",
		stack: ["Java", "Javascript", "MariaDB", "Spring Boot"],
		link: "https://github.com/mpaula1404/Inmobiliaria.git",
	},
	{
		title: "Plataforma de Talento Humano",
		description:
			"Gestión de jornada laboral, permisos, nómina y evaluaciones de desempeño.",
		stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
		link: "https://dhuman.vercel.app/",
	},
	{
		title: "Aerolínea Virtual",
		description:
			"Simulación de una aerolínea virtual con reservas, vuelos y gestión de usuarios.",
		stack: ["Next.js", "TypeScript", "Stripe"],
		link: "https://github.com/mpaula1404/AerolineaVirtual.git",
	},
];

export default function PortfolioPage() {
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
							className="rounded-full px-4 py-2 text-sm font-semibold text-[var(--foreground)]/75 transition hover:bg-[var(--beige-soft)] hover:text-[var(--primary)]"
						>
							Sobre mí
						</Link>
						<Link
							href="/portafolio"
							className="rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-[#2f241d] shadow-[0_8px_20px_rgba(212,175,110,0.25)] transition"
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
							Portafolio
						</p>
						<h1 className="mt-4 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
							Proyectos desarrollados
						</h1>
						<p className="mt-4 max-w-2xl text-base leading-8 text-[var(--foreground)]/80">
							Algunos de los proyectos en los que he trabajado, enfocados en la
							funcionalidad, la experiencia de usuario y la solución de necesidades
							reales.
						</p>
					</header>

					<div className="space-y-5">
						{portfolioItems.map((item) => (
							<article
								key={item.title}
								className="rounded-[28px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[0_25px_60px_var(--shadow-soft)]"
							>
								<div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
									<div>
										<h2 className="text-2xl font-bold text-[var(--foreground)]">
											{item.title}
										</h2>
										<p className="mt-3 max-w-2xl text-base leading-7 text-[var(--foreground)]/80">
											{item.description}
										</p>
									</div>

									<a
										href={item.link}
										target="_blank"
										rel="noreferrer"
									>
										<Button>Ver proyecto</Button>
									</a>
								</div>

								<div className="mt-5 flex flex-wrap gap-2">
									{item.stack.map((tech) => (
										<span
											key={tech}
											className="rounded-full border border-[var(--primary)] bg-[var(--beige-soft)] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.12em] text-[var(--foreground)]"
										>
											{tech}
										</span>
									))}
								</div>
							</article>
						))}
					</div>
				</section>
			</div>
		</main>
	);
}
