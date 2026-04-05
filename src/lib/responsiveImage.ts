/** Props extra para <img> cuando la URL es de Unsplash (srcset + sizes). */
export function unsplashImgProps(
  imageUrl: string,
  sizes: string,
  defaultWidth = 1200
): { src: string; srcSet?: string; sizes?: string } {
  if (!imageUrl.includes("images.unsplash.com")) {
    return { src: imageUrl };
  }
  try {
    const u = new URL(imageUrl);
    const q = u.searchParams.get("q") ?? "80";
    const fm = u.searchParams.get("fm") ?? "webp";
    const path = `${u.origin}${u.pathname}`;
    const widths = [400, 800, 1200, 1600];
    const srcSet = widths.map((w) => `${path}?w=${w}&q=${q}&fm=${fm} ${w}w`).join(", ");
    const src = `${path}?w=${defaultWidth}&q=${q}&fm=${fm}`;
    return { src, srcSet, sizes };
  } catch {
    return { src: imageUrl };
  }
}
