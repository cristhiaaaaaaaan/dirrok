# 💪 FitCoach - Sitio Web de Entrenador Personal

Sitio web profesional y moderno para vender servicios de entrenamiento fitness, incluyendo rutinas PDF, asesorías online y planes de entrenamiento mensual.

## 🎨 Características

- ✅ **Diseño Moderno y Profesional** - Dark theme con acentos vibrantes
- ✅ **Totalmente Responsive** - Optimizado para móvil, tablet y desktop
- ✅ **Animaciones Suaves** - Efectos de scroll, hover y transiciones
- ✅ **SEO Optimizado** - Meta tags y estructura semántica
- ✅ **Alto Rendimiento** - Carga rápida sin frameworks pesados
- ✅ **Botón WhatsApp Flotante** - Contacto directo e inmediato
- ✅ **Formulario de Contacto** - Integrable con múltiples servicios
- ✅ **Secciones Completas** - Hero, Sobre mí, Servicios, Testimonios, Contacto

## 📁 Estructura del Proyecto

```
dirrok/
├── index.html          # Página principal
├── css/
│   └── styles.css      # Estilos CSS
├── js/
│   └── main.js         # JavaScript
├── images/             # Carpeta para tus imágenes
│   └── .gitkeep
└── README.md           # Este archivo
```

## 🚀 Personalización

### 1. Información Personal

Edita `index.html` y reemplaza:

- **Título del sitio** (línea 15): `<title>Entrenador Personal Profesional | Transforma Tu Cuerpo</title>`
- **Tu nombre** en el meta tag autor (línea 7)
- **Logo y nombre** (línea 32-35): Cambia "FITCOACH" por tu marca
- **Sección Sobre Mí** (líneas 106-170): Escribe tu historia y experiencia
- **Testimonios** (líneas 272-350): Añade testimonios reales de tus clientes
- **Footer** (líneas 461-520): Actualiza enlaces de redes sociales

### 2. Servicios y Precios

Edita `index.html` en la sección de servicios (líneas 173-269):

```html
<!-- Service 1 - Rutinas PDF -->
<div class="service-price">
    <span class="price">$29.99</span>  <!-- Cambia el precio aquí -->
    <span class="price-period">/ rutina</span>
</div>
```

### 3. Información de Contacto

**WhatsApp:**
- Busca `50612345678` y reemplázalo con tu número de WhatsApp (formato internacional sin +)
- Aparece en 2 lugares: línea 522 (botón flotante) y línea 410 (sección contacto)

**Email:**
- Línea 429: Cambia `tucoach@fitness.com` por tu email real

**Redes Sociales:**
- Instagram (línea 442): `@tucoachfitness`
- Enlaces del footer (líneas 498-509)

### 4. Imágenes

Coloca tus imágenes en la carpeta `images/` y actualiza las referencias:

**Foto de perfil:**
```html
<!-- Reemplaza esto (línea 119-123): -->
<div class="about-img-placeholder">
    <i class="fas fa-user"></i>
    <p>Tu Foto Aquí</p>
</div>

<!-- Por esto: -->
<img src="images/tu-foto.jpg" alt="Tu Nombre - Entrenador Personal">
```

**Fotos de testimonios:**
```html
<!-- Reemplaza los avatares de íconos (líneas 277, 298, 319) por: -->
<img src="images/cliente1.jpg" alt="Cliente">
```

### 5. Colores del Sitio

Edita `css/styles.css` (líneas 13-19):

```css
:root {
    --primary-color: #ff6b35;      /* Color principal (naranja) */
    --primary-dark: #e85a28;       /* Variante oscura */
    --secondary-color: #004e89;    /* Color secundario (azul) */
    --accent-color: #1a759f;       /* Color de acento */

    /* Cambia estos valores a tus colores preferidos */
}
```

### 6. Integrar Formulario de Contacto

Edita `js/main.js` (líneas 161-210) y descomenta una de estas opciones:

#### **Opción A: FormSubmit (Recomendado - Gratis)**

1. Descomenta las líneas 181-192
2. Reemplaza `TU_EMAIL@ejemplo.com` con tu email
3. Los mensajes llegarán directamente a tu email

```javascript
fetch('https://formsubmit.co/tucorreo@ejemplo.com', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(formData)
});
```

#### **Opción B: Google Forms**

1. Crea un Google Form
2. Obtén la URL del formulario
3. Descomenta líneas 171-177 y añade la URL

#### **Opción C: Redirección a WhatsApp**

Descomenta líneas 197-203. Los datos del formulario se enviarán directamente a WhatsApp.

### 7. Integrar Calendly (Opcional)

Para agendar llamadas:

1. Crea una cuenta gratuita en [Calendly](https://calendly.com)
2. Obtén tu enlace de reserva
3. En `index.html` línea 457, reemplaza:

```html
<a href="https://calendly.com/TU_USUARIO" target="_blank">
```

## 🌐 Despliegue GRATIS

### OPCIÓN 1: GitHub Pages (Recomendado)

#### Paso 1: Crear repositorio en GitHub

1. Ve a [GitHub](https://github.com) y crea una cuenta (si no tienes)
2. Haz clic en "New repository"
3. Nombre: `mi-sitio-fitness` (o el que prefieras)
4. Marca como "Public"
5. Haz clic en "Create repository"

#### Paso 2: Subir archivos

**Opción A - Interfaz web de GitHub:**

1. En tu repositorio, haz clic en "uploading an existing file"
2. Arrastra todos los archivos y carpetas del proyecto
3. Haz clic en "Commit changes"

**Opción B - Git desde la terminal:**

```bash
# Navega a la carpeta del proyecto
cd C:\Users\etzio\Desktop\dirrok

# Inicializa Git
git init

# Agrega todos los archivos
git add .

# Crea el primer commit
git commit -m "Mi sitio web de entrenador personal"

# Conecta con GitHub (reemplaza con tu URL)
git remote add origin https://github.com/TU_USUARIO/mi-sitio-fitness.git

# Sube los archivos
git branch -M main
git push -u origin main
```

#### Paso 3: Activar GitHub Pages

1. En tu repositorio, ve a "Settings"
2. En el menú lateral, haz clic en "Pages"
3. En "Source", selecciona "main" branch
4. Haz clic en "Save"
5. Espera 2-3 minutos
6. Tu sitio estará disponible en: `https://TU_USUARIO.github.io/mi-sitio-fitness/`

#### Paso 4: Dominio personalizado (Opcional)

1. Compra un dominio (ej: Namecheap, GoDaddy, Google Domains)
2. En la configuración de GitHub Pages, agrega tu dominio personalizado
3. Configura los DNS de tu proveedor:
   - Tipo: `A`
   - Host: `@`
   - Valor: `185.199.108.153`
   - Agrega también: `185.199.109.153`, `185.199.110.153`, `185.199.111.153`

### OPCIÓN 2: Netlify (Más rápido)

#### Método Drag & Drop:

1. Ve a [Netlify](https://www.netlify.com/) y crea una cuenta
2. Haz clic en "Sites" → "Add new site" → "Deploy manually"
3. Arrastra la carpeta completa del proyecto
4. ¡Listo! Tu sitio estará online en segundos
5. URL automática: `nombre-aleatorio.netlify.app`

#### Conectar con GitHub:

1. Sube tu proyecto a GitHub (ver pasos anteriores)
2. En Netlify: "Add new site" → "Import from Git"
3. Conecta tu cuenta de GitHub
4. Selecciona tu repositorio
5. Haz clic en "Deploy site"
6. Netlify desplegará automáticamente cada vez que hagas cambios

#### Dominio personalizado en Netlify:

1. Ve a "Site settings" → "Domain management"
2. Haz clic en "Add custom domain"
3. Sigue las instrucciones para configurar DNS

### OPCIÓN 3: Vercel

1. Ve a [Vercel](https://vercel.com/) y crea una cuenta
2. Haz clic en "New Project"
3. Importa tu repositorio de GitHub
4. Haz clic en "Deploy"
5. URL automática: `nombre-proyecto.vercel.app`

## 📱 Optimizaciones Adicionales

### SEO

1. **Google Search Console**: Verifica tu sitio
2. **Sitemap**: Crea un archivo `sitemap.xml`
3. **robots.txt**: Permite la indexación
4. **Imágenes**: Usa alt tags descriptivos

### Performance

1. **Optimiza imágenes**: Usa [TinyPNG](https://tinypng.com/) o [Squoosh](https://squoosh.app/)
2. **Formato WebP**: Convierte imágenes a WebP para mejor compresión
3. **Lazy Loading**: Ya implementado en el código

### Analytics

**Google Analytics 4:**

1. Crea una propiedad en [Google Analytics](https://analytics.google.com/)
2. Obtén tu ID de medición (G-XXXXXXXXXX)
3. Añade al `<head>` de `index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🔧 Funcionalidades Opcionales

### 1. Blog

Agrega una sección de blog para SEO:
- Crea una carpeta `blog/`
- Añade archivos HTML para cada artículo
- Enlaza desde el menú de navegación

### 2. Galería de Transformaciones

Muestra resultados antes/después de clientes:
- Usa [Lightbox](https://lokeshdhakar.com/projects/lightbox2/)
- O implementa un modal personalizado

### 3. Sistema de Pagos

Para vender directamente desde tu sitio:
- **Stripe**: [https://stripe.com](https://stripe.com)
- **PayPal**: [https://paypal.com](https://paypal.com)
- **Mercado Pago**: [https://mercadopago.com](https://mercadopago.com)

### 4. Chat en Vivo

- **Tawk.to**: Chat gratuito - [https://tawk.to](https://tawk.to)
- **Crisp**: Alternativa moderna - [https://crisp.chat](https://crisp.chat)

## 📊 Checklist de Lanzamiento

Antes de publicar, verifica:

- [ ] Toda la información personal está actualizada
- [ ] Precios de servicios son correctos
- [ ] Número de WhatsApp funciona correctamente
- [ ] Email de contacto es válido
- [ ] Enlaces de redes sociales funcionan
- [ ] Imágenes están optimizadas
- [ ] Formulario de contacto está configurado
- [ ] Sitio se ve bien en móvil, tablet y desktop
- [ ] No hay enlaces rotos
- [ ] Meta tags de SEO están completos
- [ ] Favicon agregado (opcional)

## 🎯 Próximos Pasos

Después del lanzamiento:

1. **Promociona tu sitio**:
   - Comparte en redes sociales
   - Agrega a bio de Instagram
   - Envía a clientes actuales
   - Usa en tarjetas de presentación

2. **Mide resultados**:
   - Instala Google Analytics
   - Monitorea conversiones
   - Identifica secciones más visitadas

3. **Mejora continua**:
   - Actualiza testimonios regularmente
   - Agrega nuevos servicios
   - Publica contenido en blog
   - Optimiza según feedback

## 💡 Consejos Profesionales

1. **Actualiza contenido regularmente** - Sitios actualizados rankean mejor en Google
2. **Usa fotos reales** - Evita imágenes de stock, usa tus propias fotos
3. **Testimonios con nombres reales** - Mayor credibilidad
4. **Responde rápido** - Configura notificaciones de WhatsApp/Email
5. **Mide todo** - Usa analytics para tomar decisiones basadas en datos
6. **Mobile First** - La mayoría visitará desde el móvil
7. **Call to Actions claros** - Facilita que te contraten
8. **Muestra resultados** - Fotos antes/después generan confianza

## 🆘 Soporte

### Problemas Comunes:

**El sitio no se ve bien en móvil:**
- Verifica que el viewport meta tag esté presente
- Prueba en diferentes dispositivos

**WhatsApp no funciona:**
- Asegúrate de usar formato internacional sin espacios ni símbolos
- Formato correcto: `50612345678` (país + número)

**Formulario no envía emails:**
- Verifica la configuración de FormSubmit
- Revisa la consola del navegador (F12) para errores

**Cambios no se reflejan en el sitio:**
- Limpia caché del navegador (Ctrl + Shift + R)
- Espera unos minutos si usas GitHub Pages

## 📝 Licencia

Este proyecto es de uso personal. Personalízalo libremente para tu negocio de fitness.

## ✨ Créditos

- **Fuentes**: Google Fonts (Montserrat, Poppins)
- **Iconos**: Font Awesome
- **Animaciones**: AOS (Animate On Scroll)

---

**¡Mucha suerte con tu negocio de fitness! 💪🔥**

Si tienes preguntas o necesitas ayuda, consulta la documentación de:
- [GitHub Pages](https://docs.github.com/es/pages)
- [Netlify Docs](https://docs.netlify.com/)
- [Vercel Docs](https://vercel.com/docs)
