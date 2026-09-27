import Link from "next/link";
import Sidebar from "../../components/organisms/Sidebar";
import Button from "../../components/atoms/Button";

export default function ContactPage() {
  return (
    <main className="min-h-screen px-4 py-8 text-[var(--foreground)] sm:px-6 md:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl gap-8 lg:grid lg:grid-cols-[340px_minmax(0,1fr)]">
        <div className="w-full lg:sticky lg:top-6 lg:self-start">
          <Sidebar />
        </div>

        <section className="mt-6 w-full min-w-0 space-y-6 lg:mt-0">
          <div className="flex flex-wrap items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)]/90 p-2 shadow-[0_18px_40px_rgba(70,50,38,0.08)] backdrop-blur-sm">
            <Link href="/" className="rounded-full px-4 py-2 text-sm font-semibold text-[var(--foreground)]/75 transition hover:bg-[var(--beige-soft)] hover:text-[var(--primary)]">
              Inicio
            </Link>
            <Link href="/sobre-mi" className="rounded-full px-4 py-2 text-sm font-semibold text-[var(--foreground)]/75 transition hover:bg-[var(--beige-soft)] hover:text-[var(--primary)]">
              Sobre mí
            </Link>
            <Link href="/portafolio" className="rounded-full px-4 py-2 text-sm font-semibold text-[var(--foreground)]/75 transition hover:bg-[var(--beige-soft)] hover:text-[var(--primary)]">
              Portafolio
            </Link>
            <Link href="/contacto" className="rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-semibold text-[#2f241d] shadow-[0_8px_20px_rgba(212,175,110,0.25)] transition">
              Contacto
            </Link>
          </div>

          <section className="rounded-[32px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[0_25px_60px_var(--shadow-soft)] sm:p-8 md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">Contacto</p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-[var(--foreground)] sm:text-5xl">
              Hablemos
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--foreground)]/80">
              Estoy abierta a nuevas oportunidades, proyectos y colaboraciones. Si quieres trabajar juntos o conversar sobre
              tecnología, diseño o desarrollo, puedes contactarme.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-[24px] border border-[var(--border)] bg-[#f8f2e9] p-5">
                <h2 className="text-xl font-bold text-[var(--foreground)]">Información</h2>
                <ul className="mt-5 space-y-3 text-base text-[var(--foreground)]/80">
                  <li>📍 Medellín, Colombia</li>
                  <li>📱 +57 3133225517</li>
                  <li>📧 mpaula.mosquera@udea.edu.co</li>
                  <li>🔗 linkedin.com/in/usuario</li>
                </ul>
              </div>

              <div className="rounded-[24px] border border-[var(--border)] bg-[#f8f2e9] p-5">
                <h2 className="text-xl font-bold text-[var(--foreground)]">Mensaje</h2>
                <form className="mt-5 space-y-4">
                  <input
                    type="text"
                    placeholder="Nombre"
                    className="w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none focus:border-[var(--primary)]"
                  />
                  <input
                    type="email"
                    placeholder="Correo"
                    className="w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none focus:border-[var(--primary)]"
                  />
                  <textarea
                    placeholder="Tu mensaje"
                    rows={4}
                    className="w-full rounded-xl border border-[var(--border)] bg-white px-4 py-3 text-sm outline-none focus:border-[var(--primary)]"
                  />
                  <Button className="w-full justify-center">Enviar mensaje</Button>
                </form>
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
