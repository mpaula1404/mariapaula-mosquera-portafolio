# Portafolio — Maria Paula Mosquera

Resumen breve
- Proyecto: portafolio personal y hoja de vida interactiva creado con Next.js y TypeScript.
- Objetivo: presentar perfil profesional, proyectos, conocimientos y permitir descargar la hoja de vida en PDF.

Propósito
- Mostrar una versión web del CV, permitir revisar conocimientos, experiencias, portafolio, contacto y ofrecer descarga del primer folio en PDF que replica la primera página del portafolio.

Tecnologías principales
- Next.js (App Router)
- React + TypeScript
- Tailwind CSS 
- reportlab + Pillow (scripts locales para generación de PDF)

Estructura del proyecto (resumen)
- `app/` — rutas del sitio: `page.tsx`, `sobre-mi`, `portafolio`, `contacto`.
- `components/` — componentes `atoms`, `molecules`, `organisms` (botones reutilizables, modal, sidebar, cards, etc.).
- `public/` — imágenes y activos públicos: `mi_imagen.jpeg`, `download.png`, `Escudo-UdeA.svg`, `CV-Maria-Paula-Mosquera.pdf`.
- `scripts/` — scripts auxiliares para generar el PDF: `generate_cv_pdf.py`.

## Instalación y ejecución 
Instalación y ejecución local
1. Instalar dependencias:

```bash
npm install
```

2. Ejecutar en desarrollo:

```bash
npm run dev
# o si usas pnpm/yarn
# pnpm dev
# yarn dev
```

Acceder en desarrollo (local): `http://localhost:3000`.

Despliegue en Vercel
- Opción 1 (recomendada): conectar el repositorio a Vercel (GitHub/GitLab/Bitbucket). Vercel detecta Next.js y ejecuta:

```bash
npm run build
npm run start
```

- Opción 2: usar Vercel CLI desde tu máquina:

```bash
npm i -g vercel
vercel login
vercel --prod
```

Notas:
- Asegúrate de empujar los cambios al repositorio remoto antes de crear el deploy en Vercel.
- Comando de build: `npm run build`. Vercel usa por defecto `.next` como salida para aplicaciones Next.js.

Generar / actualizar el PDF de la hoja de vida
- Hay un script que genera el PDF en `public/CV-Maria-Paula-Mosquera.pdf`.

Para regenerarlo localmente (requiere Python y las librerías `reportlab` y `Pillow`):

```bash
# crear un entorno virtual (opcional)
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt    # o instalar reportlab Pillow manualmente
python3 scripts/generate_cv_pdf.py
```

- Después de ejecutarlo, el archivo `public/CV-Maria-Paula-Mosquera.pdf` se actualizará.
- El botón "Descargar CV" en la página principal apunta a la ruta que sirve este archivo.

Notas sobre assets y rutas
- Imágenes y SVGs deben colocarse en `public/` para servirse en la app (ej.: `public/mi_imagen.jpeg`).
- Si sustituyes la foto o iconos, usa los mismos nombres o actualiza las referencias en los componentes.

API o ruta de descarga
- Actualmente la descarga está implementada como un enlace directo al PDF (`/CV-Maria-Paula-Mosquera.pdf`) o puede apuntar a una API server-side que genere el PDF bajo demanda (`/api/cv-pdf`). Revisa `app/page.tsx` para ver el enlace configurado.

Notas de desarrollo y pruebas
- Asegúrate de ejecutar el script de generación de PDF con la misma resolución/ratios si quieres reproducir la apariencia exacta.
- Si tu navegador abre el PDF en una pestaña en lugar de descargarlo, haz clic derecho -> "Guardar como..." o usa el atributo `download` en el enlace (ya se utiliza en la UI para el enlace estático).

Contribuir / Cambios rápidos
- Para cambiar textos y secciones principales edita `app/page.tsx` y las páginas en `app/`.
- Componentes reutilizables están en `components/` organizado por `atoms`, `molecules`, `organisms`.

Contacto
- Email: mpaula.mosquera@udea.edu.co

Licencia
- Contenido del repositorio: uso educativo y personal. Añade una licencia formal si deseas redistribuir.

Próximos pasos opcionales
- Puedo añadir `requirements.txt` y un script `npm run gen-cv` que ejecute la generación del PDF desde Node.
- Puedo ajustar el PDF para mayor fidelidad visual (tipografías y espaciado).
