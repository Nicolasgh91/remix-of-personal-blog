# Demo blog / landing — Escalá tu negocio con IA

Aplicación **SPA** (React + Vite) para contenido por categorías, alineada a la demo pública:

**[https://demo.escalatunegocioconia.com/](https://demo.escalatunegocioconia.com/)**

## Arquitectura y stack

| Área | Tecnología |
|------|------------|
| Build | [Vite 5](https://vitejs.dev/) · TypeScript |
| UI | [React 18](https://react.dev/) · [React Router 6](https://reactrouter.com/) |
| Estado remoto / caché | [TanStack Query](https://tanstack.com/query) |
| Componentes | [shadcn/ui](https://ui.shadcn.com/) · [Radix UI](https://www.radix-ui.com/) |
| Estilos | [Tailwind CSS](https://tailwindcss.com/) |

Los artículos y metadatos de ejemplo están centralizados en `src/data/articles.ts` (fuente única para el contenido mock del demo).

No se requieren variables de entorno para ejecutar el proyecto. Si se incorporan claves públicas (`VITE_*`), documentarlas en `.env.example` y excluir secretos del repositorio.

## Requisitos

- **Node.js** 20 LTS o superior (compatible con la versión de Vite declarada en el proyecto).

## Desarrollo local

```sh
git clone <URL_DEL_REPOSITORIO>
cd <DIRECTORIO_CLONADO>
npm install
npm run dev
```

Sustituye `<URL_DEL_REPOSITORIO>` por la URL **HTTPS o SSH** que muestra la página del repositorio en GitHub (*Code*).

### Scripts

| Comando | Descripción |
|--------|-------------|
| `npm run dev` | Servidor de desarrollo (Vite). |
| `npm run build` | Salida de producción en `dist/`. |
| `npm run build:dev` | Build en modo `development`. |
| `npm run preview` | Previsualiza el build estático. |
| `npm run lint` | Análisis con ESLint. |

## Enrutamiento

Rutas definidas en `src/App.tsx`:

| Ruta | Descripción |
|------|-------------|
| `/` | Inicio |
| `/article/:id` | Detalle de artículo |
| `/wellness` · `/travel` · `/creativity` · `/growth` | Listados por categoría |
| `/about` · `/authors` · `/contact` | Páginas informativas |
| `/style-guide` | Referencia de UI |
| `/privacy` · `/terms` | Legales |

## Despliegue

El build (`npm run build`) genera estáticos servibles desde cualquier CDN u host estático. En **Vercel**, `vercel.json` aplica un rewrite de rutas hacia `index.html` para que la SPA responda correctamente al refrescar URLs profundas (comportamiento esperado con `BrowserRouter`).

En `index.html`, la meta `robots` está configurada como `noindex, nofollow` para un despliegue de **demo** que no deba competir en buscadores con el dominio principal. Si este build pasa a ser el sitio canónico, revisa esa directiva y el `canonical`.

## Mantenimiento

- Mantener el README alineado con los scripts de `package.json` y las rutas reales.
- Evitar incluir identificadores internos de herramientas de prototipado o cuentas personales en metadatos expuestos al cliente (`index.html`, Open Graph, etc.).
