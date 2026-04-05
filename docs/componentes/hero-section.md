# HeroSection

Imagen principal de la home (zona LCP en `/`).

## Comportamiento

- La foto es Unsplash (`fm=webp`, anchos vía `srcSet`).
- **`fetchPriority="high"`** y **`decoding="async"`** en el `<img>` para priorizar el LCP.
- **`width` / `height`** (1200×900) alineados al contenedor `aspect-[4/3]` para estabilidad de layout.
- `sizes` orientado a grid 50/50 en `md+`: `(max-width: 767px) 100vw, (max-width: 1536px) 45vw, 640px`.

## Helper

La lógica responsive compartida con cards y artículo está en [`src/lib/responsiveImage.ts`](../../src/lib/responsiveImage.ts) (`unsplashImgProps`).

## Fuentes

Las tipografías cargan vía `@fontsource` en `main.tsx` (sin Google Fonts en `index.html`). No se usa `<link rel="preload">` a un `.woff2` en `public/`: Vite ya empaqueta los woff2 con hash en `/assets/`; un preload duplicado a otra URL repetiría la descarga.
