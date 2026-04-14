# Blog de creador de contenido — demo escalatunegocioconia

SPA de blog para creadores de contenido, diseñada como plantilla de demostración pública en el ecosistema de [escalatunegocioconia.com](https://escalatunegocioconia.com).

Demo en producción: [creador-contenido.escalatunegocioconia.com](https://creador-contenido.escalatunegocioconia.com)

---

## Descripción

Aplicación de una sola página (SPA) orientada a creadores de contenido digital que necesitan una presencia web con blog, categorización de artículos y suscripción a newsletter. El contenido de ejemplo representa a "Alex Jensen", especialista en growth hacking y marketing B2B.

La arquitectura está pensada para ser reemplazable: todo el contenido mock está centralizado en `src/data/articles.ts`, lo que permite adaptar la plantilla a cualquier creador sin modificar la lógica de la aplicación.

---

## Stack técnico

| Área | Tecnología |
|---|---|
| Build | Vite 5 · TypeScript |
| UI | React 18 · React Router 6 |
| Estado remoto / caché | TanStack Query |
| Componentes | shadcn/ui · Radix UI |
| Estilos | Tailwind CSS |
| Deploy | Vercel |

---

## Funcionalidades

- Listado de artículos con categorías (Growth, Creativity)
- Vista de detalle por artículo con ruta semántica (`/article/:id`)
- Filtrado por categoría (`/creativity`, `/growth`)
- Sección "Casos de éxito" con métricas de resultado
- Formulario de suscripción a newsletter
- Toggle de modo oscuro/claro
- Páginas informativas: sobre el autor, guía de estilo, privacidad, términos

---

## Rutas

| Ruta | Descripción |
|---|---|
| `/` | Inicio con artículos destacados |
| `/article/:id` | Detalle de artículo |
| `/creativity` · `/growth` | Listados por categoría |
| `/about` · `/authors` · `/contact` | Páginas informativas |
| `/style-guide` | Referencia de UI |
| `/privacy` · `/terms` | Legales |

---

## Desarrollo local

```bash
git clone https://github.com/Nicolasgh91/remix-of-personal-blog
cd remix-of-personal-blog
npm install
npm run dev
```

Requiere Node.js 20 LTS o superior.

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo (Vite) |
| `npm run build` | Build de producción en `dist/` |
| `npm run preview` | Previsualiza el build estático |
| `npm run lint` | Análisis con ESLint |

---

## Despliegue

El build genera estáticos servibles desde cualquier CDN. En Vercel, `vercel.json` aplica un rewrite hacia `index.html` para que la SPA responda correctamente al refrescar URLs profundas.

> El `index.html` está configurado con `noindex, nofollow` dado que es una demo. Si el build pasa a ser el sitio canónico, revisar esa directiva y el campo `canonical`.

---

## Parte de

Este repositorio es uno de los subdominios de demostración de [escalatunegocioconia.com](https://escalatunegocioconia.com), una plataforma de servicios digitales para escalar negocios con IA.
