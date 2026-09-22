# Guía de presencia digital: Google, Bing, Apple y asistentes de IA

Checklist para MaxDigitalCR y para cada cliente. Orden de prioridad real, según lo que hoy usan Google, ChatGPT, Perplexity, Claude, Copilot y Siri para recomendar negocios locales.

Actualizado: setiembre 2026.

---

## 0. La regla que lo gobierna todo

Los asistentes de IA no "leen" tu sitio y deciden recomendarte. Triangulan:

1. **El índice de Bing** (ChatGPT y Copilot) y **el índice de Google** (Gemini, AI Overviews, AI Mode).
2. **Perfiles de negocio** (Google Business Profile, Bing Places, Apple Business Connect, Foursquare, Yelp).
3. **Reseñas** (Google, Facebook, Yelp, Clutch para agencias).
4. **Menciones en terceros** (directorios, listas "mejores agencias en Costa Rica", Reddit, prensa local).
5. Una descripción del negocio **idéntica** en todos lados: nombre, teléfono, ciudad, qué hace.

Si el nombre, teléfono o dirección difieren entre el sitio y los perfiles, los modelos pierden confianza y no citan. Esto se llama consistencia NAP (Name, Address, Phone).

**Datos canónicos de MaxDigitalCR** (usar exactamente así en todos lados):

| Campo | Valor |
|---|---|
| Nombre | MaxDigitalCR |
| Teléfono | +506 8596 2438 |
| Correo | info@maxdigitalcr.com |
| Ubicación | La Fortuna, San Carlos, Alajuela, Costa Rica |
| Sitio | https://www.maxdigitalcr.com |
| Descripción corta | MaxDigitalCR es una agencia de diseño y desarrollo web en La Fortuna de San Carlos, Costa Rica. Crea landing pages, sitios catálogo y tiendas en línea para pequeños y medianos negocios, con entrega en 1 a 10 días hábiles y precios fijos desde ₡100.000. |
| Categoría principal | Diseñador de sitios web (Website designer) |
| Categorías secundarias | Servicio de marketing en internet, Empresa de software, Diseñador gráfico |

---

## 1. Google Business Profile (el más importante)

Es lo que alimenta Google Maps, el panel local de Google, AI Overviews y Gemini.

### Pasos

1. Entrá a https://business.google.com con la cuenta de Google de la empresa (no una personal que se pueda perder).
2. "Agregar negocio" → nombre exacto: **MaxDigitalCR**.
3. Tipo: **"Ofrezco productos y servicios a mis clientes"** (negocio de área de servicio). No mostrar dirección física.
4. Área de servicio: La Fortuna, San Carlos, Alajuela, Guanacaste, San José, Costa Rica (máximo 20 zonas).
5. Categoría principal: **Diseñador de sitios web**. Es la señal más fuerte para aparecer en "diseño web cerca de mí". No poner "Agencia de marketing" como principal.
6. Verificación: en Costa Rica suele pedir **verificación por video**. Tené a mano: cédula jurídica o patente (o factura de Hacienda), algo con el logo (tarjeta, laptop con sticker, camiseta), y mostrá herramientas de trabajo (computadora con el código de un sitio).
7. Después de verificar, completar **todo**:
   - Descripción (750 caracteres): usar la descripción corta canónica y ampliar con servicios y zona.
   - Servicios: Landing page, Sitio completo, Tienda en línea, Proyecto a la medida. Solo en Landing page poné "desde ₡100.000"; en los demás dejá el precio vacío.
   - Horario: lunes a viernes 8:00 a 18:00.
   - Teléfono, sitio web, enlace de WhatsApp como "enlace de citas".
   - Logo + mínimo 10 fotos: capturas de los sitios hechos (las de `/public/portfolio`), foto tuya trabajando, foto de La Fortuna.
   - Atributos: "Propiedad de latinos", "Citas en línea", "Servicio en línea".
8. **Reseñas**: pedir a cada cliente entregado (Can't Wait Travel, Natura Bungalows, EllaDay Homes, etc.). Enviá el enlace corto de reseña de GBP por WhatsApp el día que se publica el sitio. Respondé todas.
9. **Publicaciones semanales**: cada sitio nuevo publicado = una publicación con foto y enlace. Google premia la actividad.
10. Preguntas y respuestas: cargá vos mismo las 5 preguntas más comunes (precio, tiempo, qué incluye, dominio, mantenimiento) con sus respuestas.

### Enlazar desde el sitio

Cuando el perfil esté vivo, copiá la URL de Google Maps (formato `https://www.google.com/maps?cid=XXXXXXXX` o `https://maps.app.goo.gl/...`) y agregala al arreglo `sameAs` en `src/lib/schema.ts` y al footer.

---

## 2. Bing Places for Business

Bing alimenta a **Copilot** y a la búsqueda web de **ChatGPT**. Tenés que estar ahí.

1. Entrá a https://www.bingplaces.com (redirige a Bing for Business) con una cuenta Microsoft.
2. Elegí **"Importar desde Google Business Profile"**. Autorizá la cuenta de Google. Trae categorías, horario, fotos y descripción.
3. Activá la **sincronización automática** para que cualquier cambio en Google se copie a Bing.
4. Bing pide una dirección para negocios de área de servicio; podés ponerla y marcar **"ocultar dirección"**.
5. Tarda 10 a 14 días en aparecer. Las reseñas no se transfieren.

Además, reclamar **Foursquare** (https://business.foursquare.com): ChatGPT usa datos de Foursquare para negocios locales. Es gratis y toma 10 minutos.

---

## 3. Apple Business Connect

Alimenta Apple Maps, Siri y Apple Intelligence. Cada iPhone en Costa Rica consulta esto.

1. Entrá a https://businessconnect.apple.com con un Apple ID de la empresa.
2. "Agregar ubicación". Apple ahora acepta **negocios sin local físico** (perfil de marca). Si rechaza la ficha de mapa, creá solo el perfil de marca.
3. Mismos datos canónicos. Logo, fotos, horario, categoría "Diseño web".
4. Agregá el botón de acción "Sitio web" y "WhatsApp" si está disponible para la región.

---

## 4. Google Search Console

Sin esto no sabés si Google te indexa ni con qué te encuentran.

1. https://search.google.com/search-console → "Agregar propiedad" → tipo **Dominio** (`maxdigitalcr.com`). Verificación por registro TXT en el DNS (Cloudflare, GoDaddy o donde esté el dominio). Cubre www, sin www, http y https.
2. Como respaldo, agregá también la propiedad **Prefijo de URL** `https://www.maxdigitalcr.com` y verificá con la etiqueta HTML. Copiá el código (`google-site-verification=...`, solo el valor) y en Vercel: Settings → Environment Variables → `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` = ese valor. Redeploy. El sitio ya está preparado para leerlo (`src/app/layout.tsx`).
3. Sitemaps → enviar `https://www.maxdigitalcr.com/sitemap.xml`.
4. Revisar cada semana: **Rendimiento** (consultas que te traen clics) e **Indexación de páginas** (errores).
5. Usar "Inspección de URL" → "Solicitar indexación" cada vez que publiqués una página o artículo nuevo.

---

## 5. Bing Webmaster Tools e IndexNow

1. https://www.bing.com/webmasters → **"Importar desde Google Search Console"**. Se verifica solo y trae los sitemaps.
2. Si preferís verificar aparte: copiá el código de la etiqueta `msvalidate.01` y ponelo en Vercel como `NEXT_PUBLIC_BING_SITE_VERIFICATION`.
3. Revisar el informe **"AI Performance"** de Bing Webmaster: muestra cuándo Copilot cita tu sitio.
4. **IndexNow** (avisa a Bing al instante cuando publicás algo):
   - En Bing Webmaster → IndexNow → generar clave.
   - Crear `public/<clave>.txt` con la clave adentro y hacer deploy.
   - Cada vez que publiqués una página nueva, ejecutar:
     ```bash
     curl -X POST "https://api.indexnow.org/IndexNow" \
       -H "Content-Type: application/json" \
       -d '{"host":"www.maxdigitalcr.com","key":"<clave>","keyLocation":"https://www.maxdigitalcr.com/<clave>.txt","urlList":["https://www.maxdigitalcr.com/portafolio"]}'
     ```

---

## 6. Optimización para asistentes de IA (lo que ya quedó hecho en el sitio)

| Elemento | Estado | Dónde |
|---|---|---|
| robots.txt permite OAI-SearchBot, ChatGPT-User, Claude-SearchBot, PerplexityBot, Bingbot, Applebot, etc. | Hecho | `src/app/robots.ts` |
| JSON-LD de Organization + ProfessionalService con NAP, servicios y precios "desde" en CRC y USD | Hecho | `src/lib/schema.ts` |
| JSON-LD FAQPage con 12 preguntas reales (precio, tiempo, qué incluye, dominio, propiedad) | Hecho | home y servicios |
| JSON-LD ItemList del portafolio | Hecho | `src/lib/schema.ts` |
| Frase de entidad "MaxDigitalCR es una agencia de..." en el primer párrafo de Nosotros | Hecho | `AboutPage.tsx` |
| Respuestas directas en las 2 primeras frases de cada FAQ | Hecho | `src/lib/data.ts` |
| `llms.txt` con resumen, servicios, precios y sitios hechos | Hecho | `public/llms.txt` |
| hreflang es/en en sitemap y metadata | Hecho | `sitemap.ts`, `layout.tsx` |
| FAQ en HTML nativo (`<details>`) sin depender de JavaScript | Hecho | `FAQItem.tsx` |

**Pendiente que solo vos podés hacer:**

- Agregar las URLs de Google Maps, Bing y Apple a `sameAs` cuando existan.
- Crear un perfil de **LinkedIn** de empresa y una página personal tuya como fundador. Los modelos usan LinkedIn para verificar que la empresa es real. Después agregar un bloque `Person` (fundador) en `schema.ts` con tu nombre y enlace.
- Revisar el precio de partida (`SITE.fromPrice` en `src/lib/data.ts`) y el texto del FAQ de precios cada 3 meses.

---

## 7. Menciones en terceros (lo que más pesa para "mejor agencia web en Costa Rica")

Cuando alguien pregunta a ChatGPT o Perplexity "mejores agencias de diseño web en Costa Rica", los modelos sintetizan a partir de listas y directorios, no de tu sitio. En orden de impacto:

1. **Clutch** (https://clutch.co): crear perfil gratuito, pedir 3 reseñas verificadas a clientes (Clutch los entrevista). Es la fuente número uno que citan los modelos para agencias.
2. **DesignRush**, **GoodFirms**, **Sortlist**: perfiles gratuitos con los mismos datos canónicos.
3. **Facebook** (ya existe) y **LinkedIn**: reseñas y publicaciones con enlace al sitio.
4. **Directorios de Costa Rica**: Páginas Amarillas CR, Cámara de Comercio de San Carlos, directorio de la Cámara de Turismo de La Fortuna (tus clientes son de turismo; estar ahí te posiciona).
5. **Reddit**: responder con honestidad en r/costarica cuando alguien pregunta por páginas web. Sin spam, con valor real. Perplexity y Google AI citan Reddit muchísimo.
6. **Artículo de terceros**: conseguir que un blog local o un medio de San Carlos publique "agencias de diseño web en la zona norte" que te incluya.
7. **Testimonios con nombre y negocio** en tu propio sitio (siguiente paso de desarrollo): pedir una frase a cada cliente y publicarla con su nombre, cargo y logo. Los modelos ponderan reseñas con entidad identificable.

---

## 8. Rutina mensual (30 minutos)

- [ ] Preguntar a ChatGPT, Perplexity, Gemini y Copilot: "¿Qué agencia me recomendás para hacer una página web en La Fortuna, Costa Rica?" y "¿Cuánto cuesta una página web en Costa Rica?". Anotar qué fuentes citan. Ir a esas fuentes y conseguir estar ahí.
- [ ] Revisar Search Console: consultas nuevas, páginas con impresiones y pocos clics (mejorar título y descripción).
- [ ] Revisar Bing Webmaster → AI Performance.
- [ ] Publicar una novedad en Google Business Profile (sitio nuevo publicado, artículo nuevo).
- [ ] Pedir una reseña a cada cliente entregado ese mes.
- [ ] Un artículo de blog que responda una pregunta real con cifras y fuentes (por ejemplo "Cuánto cuesta una página web para un hotel en Costa Rica en 2026").

---

## 9. Checklist de entrega para cada cliente nuevo

Esto es lo que "Incluido en todos los planes" promete en el sitio. Hacerlo en la cuenta del cliente, nunca en la tuya:

- [ ] Google Business Profile creado o reclamado, categoría correcta, sitio enlazado, fotos, servicios con precio.
- [ ] Google Search Console verificado (propiedad de dominio), sitemap enviado.
- [ ] Google Analytics 4 instalado y verificado que registra visitas.
- [ ] Bing Places importado desde GBP; Bing Webmaster importado desde GSC.
- [ ] Apple Business Connect creado.
- [ ] JSON-LD de LocalBusiness / Hotel / TouristAttraction / RealEstateAgent según el tipo de negocio, con NAP idéntico al de los perfiles.
- [ ] FAQPage con las 5 a 10 preguntas que el negocio recibe por WhatsApp.
- [ ] robots.txt con los bots de IA permitidos.
- [ ] hreflang si el sitio es bilingüe.
- [ ] Enlace de reseñas de Google entregado al cliente con un mensaje modelo para pedirlas.
- [ ] Captura de pantalla del sitio guardada en `/public/portfolio` de maxdigitalcr y proyecto agregado a `src/lib/portfolio.ts`.
