# PoweredBy

Componente de atribución de marca en el pie de página: enlace al sitio del proyecto padre (`escalatunegocioconia.com`).

## Ubicación

- Código: [`src/components/ui/PoweredBy.tsx`](../../../src/components/ui/PoweredBy.tsx)
- Uso actual: importado en [`src/components/Footer.tsx`](../../../src/components/Footer.tsx), fila inferior junto al copyright.

## Comportamiento

- Enlace externo con `target="_blank"` y `rel="noopener noreferrer"`.
- Texto visible en sentence case: “Desarrollado por” + “Escala tu negocio con IA” (marca en negrita semibold).
- Icono `ExternalLink` de `lucide-react` (abre en nueva pestaña, coherente con el comportamiento).
- Estados de color: reposo `text-slate-500` / `dark:text-slate-400`; hover `group-hover:text-orange-500` en texto e icono, con `transition-colors duration-300`.
- Sin `title` ni `aria-label` en el enlace: la etiqueta accesible es el texto visible. Comportamiento de nueva pestaña: `<span className="sr-only">(abre en nueva pestaña)</span>` al final del contenido del enlace.

## Política de `rel` y `nofollow`

- **Subdominios o dominios propios de la plantilla:** mantener `rel="noopener noreferrer"`.
- **Deploy en sitio de un tercero (fork/cliente):** el enlace puede actuar como backlink desde un dominio ajeno. En ese caso, según la política SEO del proyecto, añadir **`nofollow`** al `rel` (por ejemplo `noopener noreferrer nofollow`).

El componente en este repositorio usa solo `noopener noreferrer`. Quien despliegue una variante para un cliente debe ajustar el `rel` en el código fuente del fork o en una futura parametrización.

## Integración en otros subdominios

### Requisitos previos del proyecto destino

- React 18+
- Tailwind CSS con clases de color `slate-500`, `orange-500` y utilidades de borde (`border`, etc.) disponibles, o equivalentes en el tema
- `lucide-react` instalado (icono `ExternalLink`)

### Pasos

1. Copiar `src/components/ui/PoweredBy.tsx` al proyecto destino en la misma ruta relativa (`src/components/ui/`).
2. En el componente de footer del proyecto destino, importar y colocar `<PoweredBy />` en la fila inferior.
3. Si el proyecto usa otro sistema de temas (por ejemplo variables CSS en lugar de clases Tailwind directas), adaptar las clases de color manteniendo el contrato visual: texto secundario en reposo, naranja en hover, transición suave.
4. Si el deploy es en un dominio de terceros (no subdominio propio), agregar `nofollow` al `rel` del enlace según la política documentada arriba.

### Otros frameworks (Astro, Vue, etc.)

Replicar la misma estructura HTML y clases Tailwind en el formato nativo del framework. El bloque es un solo `<a>` con icono y texto, sin estado ni efectos; la portabilidad es directa.

## Estado

Implementado y alineado con el footer actual.
