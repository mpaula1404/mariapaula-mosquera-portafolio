import ProgressBar from "../atoms/ProgressBar";
import Tag from "../atoms/Tag";
import Text from "../atoms/Text";
import Title from "../atoms/Title";
import SidebarSection from "../molecules/SidebarSection";

const contactItems = [
  { icon: "📍", text: "Medellín, Colombia" },
  { icon: "📱", text: "+57 3133225517" },
  { icon: "📧", text: "mpaula.mosquera@udea.edu.co" },
  {
    icon: "🔗",
    text: "www.linkedin.com",
    href: "https://www.linkedin.com/in/maria-paula-mosquera-alvarez-8b0443375/",
  },
];

const languages = [
  { name: "Español", percentage: 100 },
  { name: "Inglés", percentage: 65 },
];

const programmingLanguages = [
  { name: "JavaScript", percentage: 90 },
  { name: "TypeScript", percentage: 88 },
  { name: "Python", percentage: 88 },
  { name: "C#", percentage: 65 },
];

const softSkills = [
  "Trabajo en equipo",
  "Resolución de problemas",
  "Comunicación",
  "Adaptabilidad",
  "Liderazgo",
  "Pensamiento crítico",
];

export default function Sidebar() {
  return (
    <aside className="mx-auto w-full max-w-[360px] rounded-[30px] border border-[var(--border)] bg-[var(--card)] p-6 shadow-[0_25px_60px_var(--shadow-soft)] backdrop-blur-sm lg:sticky lg:top-6 lg:h-fit">

      {/* PERFIL */}
      <div className="flex flex-col items-center text-center">
        <div className="mb-5 flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border-4 border-[var(--primary)] bg-[var(--beige-soft)] text-3xl font-bold text-[var(--brown)] shadow-[0_12px_30px_rgba(181,139,68,0.2)]">
          <img src="/mi_imagen.jpeg" alt="Foto de perfil" className="h-full w-full object-cover" />
        </div>

        <Title className="text-2xl font-bold tracking-tight text-[var(--foreground)] sm:text-3xl">
          Maria Paula Mosquera
        </Title>
        <Text className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[var(--brown)] sm:text-xs">
          Estudiante de Ingeniería de Sistemas
        </Text>
      </div>

      {/* SECCIONES */}
      <div className="mt-6 flex flex-col gap-5">

        <SidebarSection title="Contacto">
          <div className="space-y-3">
            {contactItems.map((item) => (
              <div
                key={item.text}
                className="flex items-start gap-2 text-sm text-[var(--foreground)]"
              >
                <span className="flex-shrink-0">{item.icon}</span>

                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="break-all transition-colors hover:text-[var(--primary)]"
                  >
                    {item.text}
                  </a>
                ) : (
                  <span>{item.text}</span>
                )}
              </div>
            ))}
          </div>
        </SidebarSection>

        {/* IDIOMAS */}    
        <SidebarSection title="Idiomas">
          <div className="space-y-4">
            {languages.map((language) => (
              <div key={language.name}>
                <div className="mb-1 flex items-center justify-between text-sm font-medium text-[var(--foreground)]">
                  <span>{language.name}</span>
                  <span>{language.percentage}%</span>
                </div>
                <ProgressBar percentage={language.percentage} />
              </div>
            ))}
          </div>
        </SidebarSection>

        {/* LENGUAJES DE PROGRAMACIÓN */}    
        <SidebarSection title="Lenguajes">
          <div className="space-y-4">
            {programmingLanguages.map((language) => (
              <div key={language.name}>
                <div className="mb-1 flex items-center justify-between text-sm font-medium text-[var(--foreground)]">
                  <span>{language.name}</span>
                  <span>{language.percentage}%</span>
                </div>
                <ProgressBar percentage={language.percentage} />
              </div>
            ))}
          </div>
        </SidebarSection>

        {/* HABILIDADES EXTRA */}
        <SidebarSection title="Habilidades extra">
          <div className="flex flex-wrap gap-2">
            {softSkills.map((skill) => (
              <Tag key={skill}>{skill}</Tag>
            ))}
          </div>
        </SidebarSection>
      </div>  
    </aside>
  );
}
