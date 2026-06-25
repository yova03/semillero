# Semillero — Kit de redes sociales

Logos y portadas listos para subir. **Sube siempre los PNG** (las redes no aceptan SVG).

## Archivos (carpeta `png/`)

| Archivo | Medida (px) | Úsalo en |
|---|---|---|
| `perfil-color.png` | 1080×1080 | Foto de perfil (fondo claro) · LinkedIn, FB, IG, X |
| `perfil-inversa.png` | 1080×1080 | Foto de perfil (fondo tinta) |
| `perfil-verde.png` | 1080×1080 | Foto de perfil (fondo verde) |
| `linkedin-perfil-portada.png` | 1584×396 | Portada de perfil personal de LinkedIn |
| `linkedin-pagina-portada.png` | 1128×191 | Portada de página/empresa de LinkedIn |
| `facebook-portada.png` | 820×312 | Portada de página de Facebook |
| `x-portada.png` | 1500×500 | Encabezado de X / Twitter |
| `generico-16x9.png` | 1920×1080 | YouTube, slides, banners 16:9 |

Los `.svg` (misma carpeta) son los **maestros vectoriales**: escalables sin pérdida y editables.

## Previsualizar y descargar
Abre `index.html` en el navegador: muestra cada pieza y tiene botón **Descargar PNG**.

## Regenerar los PNG
Si editas un `.svg`, vuelve a generar los PNG con:

```bash
node build-png.mjs
```

(Usa Microsoft Edge en modo headless para renderizar a medida exacta con las tipografías de la marca.)
