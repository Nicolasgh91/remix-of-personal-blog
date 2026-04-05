# ArticleCard

Tarjeta de artículo con imagen de portada (URL importada por Vite o Unsplash desde `articles`).

## Props

| Prop | Tipo | Descripción |
| --- | --- | --- |
| `id` | `string` | Identificador del artículo (enlace a `/article/:id`). |
| `title` | `string` | Título; se usa en `alt` de la imagen. |
| `category` | `string` | Categoría para la clase de tag. |
| `date` | `string` | Fecha mostrada en chip. |
| `image` | `string` | URL de la imagen (asset o Unsplash). |
| `size` | `"small"` \| `"large"` | Opcional; tamaño de card en grillas. |

## Imágenes y rendimiento

- **`loading="lazy"`** y **`decoding="async"`** en el `<img>` (la grilla no es LCP de la home).
- Si la URL es Unsplash, se aplican **`srcSet`** + **`sizes`** vía `unsplashImgProps` (ver [`src/lib/responsiveImage.ts`](../../src/lib/responsiveImage.ts)).
- Si es un asset empaquetado (`/assets/...`), solo se usa `src` sin `srcSet` (un único WebP/JPG optimizado en datos).

## Deuda / extensiones

- Para assets locales con varios anchos habría que generar variantes y ampliar el tipo de dato o un helper similar al de Unsplash.
