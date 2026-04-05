# Página de artículo (`Article.tsx`) — imágenes

## Hero superior (full width)

- Actúa como **LCP en la ruta `/article/:id`**.
- **`fetchPriority="high"`**, sin `loading="lazy"`.
- **`decoding="async"`**.
- **`srcSet` / `sizes`** cuando la portada es Unsplash (`unsplashImgProps(article.image, "100vw", 1600)`).
- Assets estáticos solo usan `src` único.
- **`width` / `height`** (1600×900) como hint de layout.

## Imagen inline (tras la intro)

- Solo si `content.inlineHeroAfterIntroduction` es verdadero.
- **`loading="lazy"`** y **`decoding="async"`** (misma URL que el hero; no compite por LCP al estar debajo del pliegue).

## Avatar del autor

- **`loading="lazy"`** y **`decoding="async"`**.
- **`width` / `height`** 56px para coincidir con `w-14 h-14`.
