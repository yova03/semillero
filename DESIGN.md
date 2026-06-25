---
version: 1.0
name: Semillero de Investigación
description: "Sistema visual para el Semillero de Investigación: espacio de investigación multidisciplinar donde cualquier pregunta germina y se ramifica hacia todas las ramas del saber. Identidad editorial en tinta verde-negra con un único acento verde brote, tipografía dual serif + grotesca y el símbolo de la semilla ramificada como firma constante. Parte de la familia visual Daril Yovani."
updated: 2026-06-24

colors:
  ink:            "#16241F"   # tinta — texto principal, línea fuerte, fondo inverso
  paper:          "#FFFFFF"   # papel — fondo base (debe dominar)
  soft:           "#F3F6F4"   # suave — tarjetas, fondos alternos
  border:         "#D8E0DB"   # línea divisoria suave
  muted:          "#5E6F68"   # apagado — metadatos, captions
  mutedLight:     "#9fb0a9"   # muy apagado — texto secundario sobre fondos oscuros
  brote:          "#1F9C7C"   # verde brote — único acento (≤10%)
  broteProfundo:  "#157A60"   # hover / activo
  inverseSurface: "#16241F"   # fondo inverso (igual a ink)
  inverseText:    "#FFFFFF"

typography:
  display:
    fontFamily: "Fraunces"
    fontSize: "clamp(2.6rem, 9vw, 6rem)"
    fontWeight: 500
    lineHeight: 0.95
    letterSpacing: "-0.01em"
  headline-lg:
    fontFamily: "Space Grotesk"
    fontSize: "clamp(1.8rem, 4vw, 2.4rem)"
    fontWeight: 700
    lineHeight: 1.08
    letterSpacing: "-0.02em"
  headline-md:
    fontFamily: "Space Grotesk"
    fontSize: "1.4rem"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  headline-sm:
    fontFamily: "Space Grotesk"
    fontSize: "1.1rem"
    fontWeight: 600
    lineHeight: 1.2
  body-lg:
    fontFamily: "Inter"
    fontSize: "1.1rem"
    fontWeight: 400
    lineHeight: 1.65
  body-md:
    fontFamily: "Inter"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "Inter"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
  label-caps:
    fontFamily: "IBM Plex Mono"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1
    letterSpacing: "0.16em"
    textTransform: "uppercase"
  archive-note:
    fontFamily: "IBM Plex Mono"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "0.02em"
  caption:
    fontFamily: "Inter"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.45

rounded:
  none: 0px
  xs:   2px
  sm:   4px
  md:   8px
  lg:   14px
  xl:   24px
  full: 9999px

spacing:
  base:        8px
  xs:          4px
  sm:          8px
  md:          16px
  lg:          24px
  xl:          40px
  xxl:         64px
  section:     96px
  container:   1080px
  gutter:      24px
  cardPadding: 24px

components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor:       "{colors.paper}"
    typography:      "{typography.label-caps}"
    rounded:         "{rounded.full}"
    padding:         "12px 24px"
    height:          44px
  button-primary-hover:
    backgroundColor: "{colors.brote}"
    textColor:       "{colors.paper}"
  button-secondary:
    backgroundColor: "transparent"
    textColor:       "{colors.ink}"
    typography:      "{typography.label-caps}"
    rounded:         "{rounded.full}"
    padding:         "12px 24px"
    height:          44px
    border:          "1.5px solid {colors.ink}"
  card-editorial:
    backgroundColor: "{colors.paper}"
    textColor:       "{colors.ink}"
    rounded:         "{rounded.lg}"
    padding:         24px
    border:          "1px solid {colors.border}"
  card-soft:
    backgroundColor: "{colors.soft}"
    textColor:       "{colors.ink}"
    rounded:         "{rounded.lg}"
    padding:         24px
  card-accent:
    backgroundColor: "{colors.paper}"
    textColor:       "{colors.ink}"
    rounded:         "{rounded.lg}"
    padding:         24px
    borderLeft:      "4px solid {colors.brote}"
  card-inverse:
    backgroundColor: "{colors.inverseSurface}"
    textColor:       "{colors.inverseText}"
    rounded:         "{rounded.lg}"
    padding:         28px
  skill-chip:
    backgroundColor: "{colors.soft}"
    textColor:       "{colors.ink}"
    typography:      "{typography.label-caps}"
    rounded:         "{rounded.full}"
    padding:         "8px 16px"
  chip-accent:
    backgroundColor: "{colors.brote}"
    textColor:       "{colors.paper}"
    typography:      "{typography.label-caps}"
    rounded:         "{rounded.full}"
    padding:         "8px 16px"
---

# DESIGN.md — Semillero de Investigación · v1.0

> **Sembrar preguntas, ramificar conocimiento.**
> Tinta verde-negra, un solo acento verde brote y la semilla ramificada como firma visual.

Sistema visual del **Semillero de Investigación** — espacio multidisciplinar donde una pregunta se siembra y se ramifica hacia todas las ramas del saber: ciencia, humanidades, método y comunidad. Parte de la familia visual **Daril Yovani**: comparte la disciplina de acento único (≤10%) y la tipografía dual, pero su diferenciador es el **verde brote** y el símbolo botánico de la semilla.

---

## 1. Overview

La identidad debe sentirse como una **libreta de laboratorio abierta**: clara, rigurosa y acogedora. Funciona igual para un experimento de biología que para un estudio de historia — porque lo que une al semillero no es un tema, es **una forma de pensar**.

**Idea rectora:** *Sembrar preguntas, ramificar conocimiento.*

**La marca NO debe parecer:** ligada a una sola disciplina · corporativa fría · infantil · sobrecargada de íconos · solapada con una facultad concreta · intercambiable con Daril Yovani (misma familia, vida propia).

**Regla madre:** el Semillero no representa una disciplina; representa el **método**. La identidad debe sentirse universal, no atada a un solo campo.

---

## 2. Color

Paleta de **tinta verde-negra y papel blanco** con grises funcionales y **un único acento**: el verde brote.

### 2.1 Paleta base

| Token | Hex | Uso |
|---|---|---|
| `ink` | `#16241F` | Texto principal, línea, fondo inverso — verde-negro bosque |
| `paper` | `#FFFFFF` | Fondo base — **debe dominar** |
| `soft` | `#F3F6F4` | Tarjetas, fondos alternos, secciones |
| `border` | `#D8E0DB` | Línea divisoria suave |
| `muted` | `#5E6F68` | Metadatos, captions, texto secundario |
| `mutedLight` | `#9fb0a9` | Texto secundario sobre fondos oscuros (portadas, inverso) |

### 2.2 El acento: verde brote `#1F9C7C`

**Justificación botánica.** El verde es el color de la germinación: lo que nace, lo que crece, el conocimiento naciente. Por eso es el único acento: tiene significado, no es un capricho cromático.

**Reglas de disciplina (no negociables):**
- **Uno solo.** No existe otro acento. Nada de azul, rojo, naranja, tierra, gradientes ni neón.
- **≤ 10% de la pieza.** El brote marca: una palabra clave, el punto de firma, un nodo, un botón, la barra superior de portadas.
- **Nunca como relleno** de grandes superficies (salvo el punto y micro-marcas).
- **Jerarquía primero sin color:** resolver con escala, peso, espacio y contraste. El brote es el remate, no el arranque.
- Variante `broteProfundo #157A60` solo para hover/activo.

> El rojo almagre es exclusivo de **Daril Yovani**. El verde brote es exclusivo del **Semillero**. Nunca mezclar ambos en una misma pieza.

---

## 3. Tipografía — sistema dual

| Familia | Rol | Cuándo |
|---|---|---|
| **Fraunces** (serif display) | Titular / alma editorial | Heroes, portadas, frases de marca, grandes citas, punto de firma |
| **Space Grotesk** (grotesca) | Sistema / datos | Títulos de sección, navegación, etiquetas, cifras, botones, chips |
| **Inter** (sans humanista) | Cuerpo | Textos largos, bajadas, descripciones |
| **IBM Plex Mono** (mono) | Ficha / kicker | Registros, referencias, kickers de sección, lema en portadas |

**Principios:**
- El titular grande va en **Fraunces** (editorial, serif cálido). El sistema y los datos en **Space Grotesk**.
- Kickers y fichas siempre en mono, mayúsculas, tracking amplio (+16%).
- Nunca mezclar dos serifs ni dos grotescas. El sistema es cerrado.

---

## 4. El símbolo — la semilla ramificada

El logo es una **semilla sólida** (punto de partida) de la que brota un tallo que se **ramifica en tres nodos**: las distintas ramas del saber. El nodo superior — el que florece — va siempre en **verde brote**.

**Anatomía:** semilla circular sólida (abajo) → tallo recto → dos ramas en espejo + eje central → tres nodos (laterales abiertos en contorno, superior sólido en brote). Monoline de grosor constante, simétrico respecto al eje vertical.

**Barra verde:** toda portada o banner lleva una franja de **5–7px** en verde brote en la parte superior. Es la firma de la marca en formatos rectangulares.

**El punto `.`:** cierra cada frase de marca en verde brote. *Un punto = una posición tomada.* Recurso heredado de la familia Daril.

**Versiones autorizadas:** principal (tinta sobre papel) · inversa (blanco sobre tinta) · verde (blanco sobre brote) · monocroma tinta.

---

## 5. Layout

- **Contenedor:** 1080px. **Base:** escala de 8px. **Secciones:** 96px (desktop).
- **Espacio negativo = identidad.** Si una pantalla parece llena, quitar antes de añadir.
- **Una idea principal por bloque.** Grillas de 2 columnas para narrativa+visual; 3–4 para tarjetas breves.
- **Numeración tipo expediente:** `[00]`, `[01]`, `[02]`… refuerza el rigor metodológico.
- **Profundidad conceptual, no decorativa:** contraste, bordes finos, escala y posición. Sin sombras dramáticas, glassmorphism, gradientes ni texturas.

---

## 6. Elevation & Depth

**Usar:** contraste ink/paper · bordes 1px en tarjetas de apoyo · borde izquierdo 4px brote para card-accent · escala tipográfica · posición y espacio negativo.

**Evitar:** sombras dramáticas · glassmorphism · gradientes cromáticos · efectos 3D · texturas naturalistas.

---

## 7. Shapes

- Botones: `rounded.full` — píldora, cálido y accesible.
- Tarjetas: `rounded.lg`.
- Chips: `rounded.full`.
- Marcos de logo: sin radio en portadas; `rounded.md` en tarjetas de interfaz.
- Línea del símbolo: monoline de grosor constante — **no afinar ni engrosar nunca**.

---

## 8. Componentes

### Nav
Logo (símbolo ~26px + texto `SEMILLERO`) izquierda. Links en Space Grotesk 500. Hover por subrayado o peso. Fondo paper.

### Hero editorial
- Kicker en IBM Plex Mono (categoría · versión · nombre).
- Titular Fraunces `clamp(2.6rem, 9vw, 6rem)`.
- Bajada Inter body-lg, máx. 58ch.
- Chips: `INVESTIGACIÓN` · `CIENCIA` · `HUMANIDADES` · `MÉTODO` · `DIVULGACIÓN` · `COMUNIDAD`.
- CTA en botones full pill.

### Section header
Número `[01]` en IBM Plex Mono (muted) + título Space Grotesk headline-lg. Borde superior fino.

### Cards (4 variantes)
- `card-editorial`: paper, borde suave, título Space Grotesk, meta mono.
- `card-soft`: fondo suave, sin borde, para bloques de apoyo.
- `card-accent`: borde izquierdo 4px brote — para notas y reglas destacadas.
- `card-inverse`: fondo tinta, texto blanco — citas y cierres de sección.

### Chips
Mono, mayúsculas, `rounded.full`. Sin color por defecto; `chip-accent` (brote) solo para lo excepcional.

### Botones
- Primary: pill tinta, texto paper. Hover: fondo brote.
- Secondary: pill transparente, borde tinta. Hover: inversión cromática.
- Etiquetas: `VER INVESTIGACIÓN` · `UNIRME AL SEMILLERO` · `LEER NOTA` · `EXPLORAR PROYECTOS`.

### Poster de feed (4:5)
Cita (fondo tinta, Fraunces) · Dato (paper, número grande) · Convocatoria (brote, CTA) · Explainer (símbolo + nodos). Barra verde + logo siempre presentes.

### Portadas de redes
Barra verde 5px arriba. Símbolo centrado arriba. Texto centrado debajo. **Sin solapamiento ícono/texto** (patrón: ícono arriba, texto debajo, igual que x-portada y genérico 16:9).

| Pieza | Medida | Red |
|---|---|---|
| `facebook-portada` | 820 × 312 | Facebook página |
| `linkedin-perfil-portada` | 1584 × 396 | LinkedIn perfil |
| `linkedin-pagina-portada` | 1128 × 191 | LinkedIn página |
| `x-portada` | 1500 × 500 | X / Twitter |
| `generico-16x9` | 1920 × 1080 | YouTube, slides |
| `perfil-*` | 1080 × 1080 | Todas las redes |

---

## 9. Tipos de publicación

| Tipo | Propósito | Clave visual |
|---|---|---|
| **Dato / Cifra** | Hallazgo estadístico con fuente | Número grande Fraunces, fuente en mono |
| **Convocatoria** | Inscripciones, talleres, reuniones | Fecha y CTA en brote; acción clara |
| **Reseña de paper** | Pregunta → método → hallazgo | Layout 3 pasos, lenguaje sencillo |
| **Explainer / Hilo** | Concepto paso a paso | Ideal carruseles; esquema de nodos |
| **Video / Reel** | Portada de video | Titular Fraunces sobre fondo tinta |
| **Cita / Veredicto** | Frase potente de investigador | Fraunces grande, cierre con punto brote |

---

## 10. Voz & Microcopy

Curiosa, rigurosa y cercana. Explica sin condescender; celebra la duda y el método. Habla a estudiantes de **cualquier carrera**: sin jerga innecesaria, todo con respaldo.

**Frases modelo:**
- «Toda rama empieza por una semilla.»
- «No sabemos todavía — y eso es emocionante.»
- «La evidencia antes que la opinión.»
- «Investigar también es aprender a dudar.»
- «Una pregunta bien hecha ya es media respuesta.»
- «Sembrar preguntas, ramificar saber.»

**Evitar:** «Somos los mejores.» · afirmaciones sin fuente · tono solemne o aburrido · lenguaje exclusivo de una disciplina · promesas vacías.

---

## 11. Do's & Don'ts

### Do
- Mantener tinta y papel como base; verde brote solo como remate (≤10%).
- Usar el símbolo de la semilla como firma constante en todas las piezas de marca.
- Hablar a todas las ramas, no a una sola disciplina.
- Citar la fuente de cada dato o estudio.
- Cerrar con un punto verde. Un punto = una posición.
- Numeración de secciones tipo expediente `[00]`, `[01]`…

### Don't
- Usar más de un acento o rellenar de verde.
- Usar el rojo almagre (es de Daril Yovani, no del Semillero).
- Atarse a íconos de una única disciplina.
- Saturar con texto, sombras o fondos recargados.
- Publicar afirmaciones sin evidencia.
- Sonar corporativo, infantil o solemne.
- Imitar Semilleros de Arqueología (usa Archivo Black y sin acento; son marcas distintas).

---

## 12. Tests de consistencia

Antes de aprobar una pieza:
1. **Reconocimiento:** ¿se siente parte del Semillero de Investigación?
2. **Reducción:** ¿se puede simplificar más sin perder el concepto?
3. **Claridad:** ¿la idea principal se entiende rápido?
4. **Tono:** ¿curiosa, rigurosa y cercana?
5. **Disciplina cromática:** ¿solo tinta + papel + brote ≤10%?
6. **Símbolo presente:** ¿aparece la semilla como firma en portadas y piezas de marca?

> Pregunta final: **¿esto se vería como Semillero de Investigación aunque no tuviera nombre?**

---

## 13. Implementation Checklist

- [ ] Guardar este archivo como `semillero/DESIGN.md` en el repo.
- [ ] Configurar fondo paper `#FFFFFF` como superficie principal.
- [ ] Verificar que verde brote `#1F9C7C` no supere el 10% en ninguna pieza.
- [ ] Crear componentes base: nav, hero, section-header, cards ×4, chips, poster, portadas.
- [ ] Validar contraste WCAG AA entre `#16241F` y `#FFFFFF`.
- [ ] Verificar barra verde 5px en todas las portadas de redes.
- [ ] Confirmar que el símbolo de la semilla aparezca en todas las piezas de marca.
- [ ] Revisar que ícono y texto no se solapen en portadas (ver `facebook-portada`).
- [ ] Pregunta final: ¿esto se vería como Semillero de Investigación aunque no tuviera logo?

---

## 14. Prompt breve para agente de código

```
Usa este DESIGN.md como fuente visual principal del Semillero de Investigación. Diseña una interfaz editorial multidisciplinar para el espacio de investigación. La identidad no pertenece a una disciplina; representa el método, la evidencia y la comunidad. Usa tinta verde-negra (#16241F) y papel (#FFFFFF) como base; verde brote (#1F9C7C) como único acento ≤10%. Tipografía: Fraunces (titulares/display), Space Grotesk (sistema/datos), Inter (cuerpo), IBM Plex Mono (kickers/fichas). El símbolo es una semilla ramificada: semilla sólida abajo, tallo recto, dos ramas en espejo, tres nodos (nodo superior en verde brote). Toda portada lleva barra verde de 5px arriba. Toda frase de marca cierra con un punto en verde brote. La interfaz debe sentirse como una libreta de laboratorio abierta: clara, rigurosa y acogedora.
```

---

## 15. Diferencias clave respecto a DESIGN.md — Daril Yovani

| Dimensión | Daril Yovani | Semillero de Investigación |
|---|---|---|
| Escala | Personal | Comunidad / programa |
| Voz | Reflexiva, primera persona | Curiosa, colectiva, formativa |
| Tinta base | `#0A0A0A` negro puro | `#16241F` verde-negro bosque |
| Acento | Rojo almagre `#B23A2E` | Verde brote `#1F9C7C` |
| Tipografía display | Space Grotesk 700 | Fraunces 500 (serif editorial) |
| Motivo visual | Monoline editorial libre | Símbolo semilla ramificada (fijo) |
| Fondo base | `#FFFFFF` | `#FFFFFF` + `#F3F6F4` |
| Botones | `rounded.sm` | `rounded.full` (píldora) |
| Chips | `rounded.full` | `rounded.full` |
| Punto de firma | Punto almagre `.` | Punto brote `.` |
| Portadas | Sin patrón específico | Barra brote 5px + ícono arriba |

## 16. Archivos del sistema

- `semillero/index.html` — guía de identidad visual completa (fundamento, logo, color, tipografía, publicaciones, plantillas, voz).
- `semillero/manual-marca.html` — manual del símbolo (grilla de construcción, lockups, versiones, usos correctos).
- `semillero/logo.html` — marca del logo aislada.
- `semillero/assets/semillero.css` — tokens CSS y componentes del sistema.
- `semillero/assets/logo.svg` — símbolo maestro.
- `semillero/assets/favicon.svg` — favicon.
- `semillero/redes/` — kit de portadas y logos para redes sociales (SVG maestros + PNG exportados).
- `semillero/DESIGN.md` — este documento (fuente de verdad).
