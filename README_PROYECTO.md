# 📋 Documentación del Proyecto FitCoach - Dirrok

## 🎯 Resumen del Proyecto

Sitio web profesional de entrenador personal fitness, despersonalizado y listo para vender.

---

## 📍 Estado Actual

### URLs del Sitio
- **URL actual (activa):** https://cristhiaaaaaaaan.github.io/dirrok/
- **URL personalizada (en proceso):** https://dirrok.is-a.dev/ (PR pendiente de aprobación)
- **Pull Request is-a.dev:** https://github.com/is-a-dev/register/pull/31467

### Repositorio
- **GitHub:** https://github.com/cristhiaaaaaaaan/dirrok
- **Branch principal:** main
- **Archivos locales:** `C:\Users\etzio\Desktop\dirrok`

### Hosting
- **Plataforma:** GitHub Pages
- **Costo:** GRATIS para siempre
- **Límites:** Sin límite de ancho de banda
- **HTTPS:** Automático y seguro

---

## 🛠️ Historial de Cambios Realizados

### 1. Problema Inicial con Netlify
**Fecha:** 11 enero 2026

**Problema:**
- Sitio en Netlify se suspendió por alcanzar límite mensual de uso (100 GB)
- Error "Forbidden" al intentar hacer deploy
- Mensaje: "Sitio no disponible - Este sitio se suspendió al alcanzar su límite de uso"

**Solución:**
- Migración completa a GitHub Pages (sin límites de ancho de banda)

### 2. Agregar Video
**Intentos:**
- Se agregó video.mp4 (2 MB) del escritorio
- Problema: Video vertical no se veía bien en el diseño
- Decisión: Eliminar sección de video completamente

**Archivos modificados:**
- `index.html` - Eliminada sección completa de video
- `css/styles.css` - Ajustes de video (ya no se usan)
- `images/video.mp4` - Eliminado

### 3. Despersonalización del Sitio
**Objetivo:** Preparar el sitio para venta

**Cambios realizados:**

#### Información de Contacto Removida:
- ❌ Email: `Dirroks@gmail.com` → ✅ `TUEMAIL@ejemplo.com` y `tucoach@fitness.com`
- ❌ WhatsApp: `50671300416` → ✅ `50612345678` (placeholder)
- ❌ TikTok: `@dirroks26` → ✅ `@tucoachfitness`
- ❌ Instagram: `@dirroks26` → ✅ `@tucoachfitness`
- ❌ Calendly: `/dirroks/` → ✅ `/TU_USUARIO/`

#### Archivos Eliminados:
- `HISTORIAL_PROYECTO.md` - Contenía información personal y de GitHub

#### Archivos Creados:
- `INSTRUCCIONES_PERSONALIZACION.md` - Guía para el comprador

### 4. Migración a GitHub Pages
**Proceso:**
1. Verificación de Git (ya estaba inicializado)
2. Repositorio existente: `fitness-coach` renombrado a `dirrok`
3. Eliminación de video.mp4
4. Commit y push de cambios
5. GitHub Pages ya estaba activo

**Commits realizados:**
```bash
# Commit 1: Optimización
"Optimizar sitio para GitHub Pages"

# Commit 2: Despersonalización
"Despersonalizar sitio para venta"

# Commit 3: Instrucciones
"Agregar instrucciones de personalización para el comprador"

# Commit 4: Dominio personalizado
"Add custom domain dirrok.is-a.dev"
```

### 5. Configuración de Dominio Personalizado is-a.dev

**Proceso:**
1. Fork del repositorio: https://github.com/is-a-dev/register
2. Creación de archivo `dirrok.json`:
```json
{
  "owner": {
    "username": "cristhiaaaaaaaan",
    "email": "craguilarce@est.utn.ac.cr"
  },
  "record": {
    "CNAME": "cristhiaaaaaaaan.github.io"
  }
}
```
3. Pull Request creado: https://github.com/is-a-dev/register/pull/31467
4. Archivo CNAME agregado al repositorio principal
5. **Estado:** Pendiente de aprobación (1-48 horas estimado)

**Verificar estado del PR:**
```bash
gh pr view 31467 --repo is-a-dev/register
```

---

## 📁 Estructura del Proyecto

```
dirrok/
├── index.html              # Página principal (despersonalizada)
├── css/
│   └── styles.css          # Estilos CSS
├── js/
│   └── main.js             # JavaScript
├── images/
│   ├── dirrok.jpeg         # Foto del entrenador (placeholder)
│   └── .gitkeep
├── CNAME                   # Configuración dominio personalizado
├── README.md               # Documentación original del template
├── INSTRUCCIONES_PERSONALIZACION.md  # Guía para comprador
└── README_PROYECTO.md      # Este archivo (contexto completo)
```

---

## 🔧 Tecnologías Utilizadas

- **HTML5** - Estructura
- **CSS3** - Estilos (responsive)
- **JavaScript** - Interactividad
- **Font Awesome** - Iconos
- **Google Fonts** - Tipografías (Montserrat, Poppins)
- **AOS Library** - Animaciones de scroll
- **FormSubmit** - Formularios de contacto

---

## 💰 Precios Actuales (Placeholders)

- Rutinas PDF: ₡12,000
- Asesoría Online: ₡25,000
- Plan Mensual: ₡75,000

---

## 🎨 Características del Sitio

### Secciones:
1. **Hero** - Presentación con carrusel de imágenes
2. **Sobre Mí** - Información del entrenador
3. **Servicios** - 3 planes con precios
4. **Testimonios** - Reseñas de clientes
5. **Contacto** - Formulario + información

### Funcionalidades:
- ✅ Diseño responsive (móvil, tablet, desktop)
- ✅ Dark mode / Light mode
- ✅ Animaciones suaves
- ✅ Carrusel de imágenes 3D
- ✅ Formulario de contacto funcional
- ✅ Botón de WhatsApp flotante
- ✅ Scroll to top
- ✅ SEO optimizado

---

## 🚀 Opciones de Dominio

### Opción 1: is-a.dev (Actual - EN PROCESO)
- **URL:** dirrok.is-a.dev
- **Costo:** GRATIS para siempre
- **Estado:** Pendiente de aprobación
- **Ventajas:** Sin costo, confiable
- **Desventajas:** Subdominio, menos profesional

### Opción 2: GitHub Student Pack (FUTURO)
- **URL:** dirrok.me
- **Costo:** GRATIS por 1 año (luego $10-15/año)
- **Estado:** No solicitado aún
- **Ventajas:** Más profesional, dominio propio
- **Desventajas:** Requiere renovación anual

**Estrategia recomendada:**
1. Usar `dirrok.is-a.dev` ahora (gratis permanente)
2. Cuando se venda o haya presupuesto → solicitar `dirrok.me`
3. Después del año 1 del .me → volver a is-a.dev si no se renueva

---

## 📝 Personalización para Venta

El sitio está completamente despersonalizado. El comprador debe:

1. **Actualizar información de contacto:**
   - WhatsApp: Buscar `50612345678` en index.html
   - Email: Buscar `TUEMAIL@ejemplo.com` y `tucoach@fitness.com`
   - Redes: Buscar `@tucoachfitness`
   - Calendly: Buscar `/TU_USUARIO/`

2. **Actualizar precios:**
   - Buscar `₡12,000`, `₡25,000`, `₡75,000`

3. **Personalizar contenido:**
   - Nombre del entrenador
   - Testimonios
   - Foto personal (reemplazar `images/dirrok.jpeg`)

4. **Ajustar colores (opcional):**
   - Editar `css/styles.css` líneas 10-18

Ver archivo `INSTRUCCIONES_PERSONALIZACION.md` para más detalles.

---

## 🔄 Comandos Git Útiles

### Ver estado:
```bash
cd C:\Users\etzio\Desktop\dirrok
git status
```

### Hacer cambios:
```bash
git add .
git commit -m "Descripción del cambio"
git push
```

### Verificar PR de is-a.dev:
```bash
gh pr view 31467 --repo is-a-dev/register
```

---

## 🎯 Para Vender el Sitio

### Lo que incluye:
- ✅ Sitio web completo y funcional
- ✅ Hosting gratis en GitHub Pages (perpetuo)
- ✅ Dominio dirrok.is-a.dev (gratis perpetuo)
- ✅ Código fuente completo
- ✅ Instrucciones de personalización
- ✅ Fácil de transferir a otra cuenta GitHub

### Proceso de transferencia:
1. Transferir repositorio desde GitHub
2. El comprador conecta con su cuenta
3. Opcional: Configurar dominio personalizado propio

---

## 📊 Historial de Problemas y Soluciones

### Problema 1: Netlify suspendido
**Causa:** Límite de 100 GB/mes alcanzado (probablemente por el video de 2 MB)
**Solución:** Migración a GitHub Pages (sin límites)
**Resultado:** ✅ Resuelto

### Problema 2: Video vertical se ve mal
**Causa:** Video en formato vertical, diseño esperaba horizontal
**Solución:** Eliminar sección de video completamente
**Resultado:** ✅ Resuelto

### Problema 3: Información personal en el sitio
**Causa:** Sitio preparado para uso personal
**Solución:** Despersonalización completa con placeholders
**Resultado:** ✅ Resuelto

### Problema 4: Nombre de usuario en URL
**Causa:** GitHub Pages usa formato username.github.io
**Solución:** Dominio personalizado is-a.dev
**Resultado:** ⏳ En proceso de aprobación

---

## 🔐 Seguridad

### Datos públicos (no sensibles):
- Username GitHub: cristhiaaaaaaaan
- Email estudiante: craguilarce@est.utn.ac.cr
- Repositorio: Público

### Datos privados (seguros):
- Código fuente: Solo editable por propietario
- Contraseñas: No almacenadas en el sitio
- Datos de formularios: Manejados por FormSubmit (servicio externo)

### is-a.dev - Nivel de seguridad:
- ✅ HTTPS automático
- ✅ Solo configura DNS (no accede a archivos)
- ✅ No puede modificar el sitio
- ⚠️ Puede redirigir dominio (pero no cambiar contenido)

---

## 📞 Información Técnica

### Cuentas relacionadas:
- **GitHub:** cristhiaaaaaaaan
- **Email:** craguilarce@est.utn.ac.cr
- **Netlify:** Cuenta activa (sitio suspendido, no se usa más)
- **GitHub Student Pack:** Activo (usado para Copilot)

### Servicios externos usados:
- **FormSubmit:** Formularios de contacto
- **Unsplash:** Imágenes del carrusel
- **Font Awesome:** Iconos
- **Google Fonts:** Tipografías

---

## 🎓 Opciones Futuras

### Si quieres dominio .me:
1. Ir a: https://education.github.com/pack
2. Buscar "Namecheap"
3. Solicitar dominio .me gratis (1 año)
4. Configurar con GitHub Pages

### Si quieres migrar a Vercel:
- Similar a Netlify pero con mejores límites
- Comando: `vercel --prod`

### Si quieres vender en plataforma:
- Flippa.com (marketplace de sitios web)
- ThemeForest (si conviertes a template)
- Fiverr/Upwork (venta directa)

---

## ✅ Checklist del Proyecto

- [x] Sitio funcional en GitHub Pages
- [x] Información personal removida
- [x] Instrucciones para comprador creadas
- [x] Dominio personalizado solicitado (is-a.dev)
- [ ] Dominio is-a.dev aprobado (pendiente 1-48h)
- [ ] Solicitar dominio .me (cuando se necesite)
- [ ] Vender el sitio (cuando esté listo)

---

## 📅 Fechas Importantes

- **11 enero 2026:**
  - Problema con Netlify (suspendido)
  - Migración a GitHub Pages
  - Despersonalización del sitio
  - Solicitud de dominio is-a.dev (PR #31467)

---

## 🆘 Comandos de Emergencia

### Verificar estado del sitio:
```bash
curl -I https://cristhiaaaaaaaan.github.io/dirrok/
```

### Verificar PR is-a.dev:
```bash
gh pr view 31467 --repo is-a-dev/register --json state,title
```

### Revertir al estado anterior:
```bash
cd C:\Users\etzio\Desktop\dirrok
git log --oneline  # Ver commits
git reset --hard COMMIT_ID  # Volver a un commit específico
```

### Eliminar dominio personalizado (emergencia):
```bash
cd C:\Users\etzio\Desktop\dirrok
rm CNAME
git add CNAME
git commit -m "Remove custom domain"
git push
```

---

## 📚 Recursos Útiles

- **GitHub Pages Docs:** https://docs.github.com/es/pages
- **is-a.dev Register:** https://github.com/is-a-dev/register
- **FormSubmit Docs:** https://formsubmit.co/
- **Netlify Docs:** https://docs.netlify.com/ (por si vuelves)

---

## 💡 Notas Importantes

1. **GitHub Pages NO tiene límite de ancho de banda** (a diferencia de Netlify)
2. **is-a.dev es gratis PARA SIEMPRE** (mientras el proyecto exista)
3. **El sitio es transferible** a otra cuenta de GitHub fácilmente
4. **Los cambios tardan 1-2 minutos** en aparecer después del push
5. **SIEMPRE haz backup** antes de hacer cambios grandes

---

## 🎯 Próximos Pasos Sugeridos

1. ✅ Esperar aprobación de is-a.dev (1-48h)
2. Probar el sitio en dirrok.is-a.dev cuando esté aprobado
3. Decidir si solicitar dominio .me del GitHub Student Pack
4. Preparar estrategia de venta del sitio
5. Considerar agregar más features si el comprador lo pide

---

**Última actualización:** 11 enero 2026
**Mantenido por:** Claude Code AI Assistant
**Proyecto:** FitCoach - Dirrok (Sitio Web Fitness)
