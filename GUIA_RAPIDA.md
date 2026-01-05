# 🚀 Guía Rápida de Personalización

## ⏱️ En 5 Minutos

### 1. Información Básica (index.html)

**Busca y reemplaza:**
- `FITCOACH` → Tu marca/nombre
- `50612345678` → Tu WhatsApp (sin + ni espacios)
- `tucoach@fitness.com` → Tu email
- `@tucoachfitness` → Tu Instagram

### 2. Precios (index.html, líneas ~228, ~261, ~294)

```html
<span class="price">$29.99</span>  <!-- Tu precio aquí -->
```

### 3. Sube Tus Fotos

Coloca en carpeta `images/`:
- `mi-foto.jpg` → Tu foto de perfil
- `cliente1.jpg, cliente2.jpg, cliente3.jpg` → Fotos de testimonios

Actualiza en HTML:
```html
<!-- Línea ~119, reemplaza el placeholder por: -->
<img src="images/mi-foto.jpg" alt="Tu Nombre" style="border-radius: 12px; width: 100%;">
```

### 4. Conectar Formulario

En `js/main.js` línea ~183, descomenta y agrega tu email:

```javascript
fetch('https://formsubmit.co/TUEMAIL@gmail.com', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify(formData)
});
```

### 5. Desplegar en Netlify

1. Ve a [netlify.com](https://netlify.com)
2. Arrastra la carpeta `dirrok`
3. ¡Listo! Sitio online en segundos

---

## 🎨 Cambiar Colores Rápidamente

En `css/styles.css` líneas 13-17:

```css
:root {
    --primary-color: #ff6b35;      /* Naranja → Cambia aquí */
    --secondary-color: #004e89;    /* Azul → Cambia aquí */
}
```

**Paletas sugeridas:**

**Energético (Rojo/Negro):**
```css
--primary-color: #e63946;
--secondary-color: #1d3557;
```

**Fresco (Verde/Azul):**
```css
--primary-color: #06ffa5;
--secondary-color: #0b3d91;
```

**Premium (Dorado/Negro):**
```css
--primary-color: #ffd700;
--secondary-color: #1a1a2e;
```

---

## 📝 Editar Contenido Principal

### Hero (Primera pantalla)

**Línea ~59:**
```html
<h1 class="hero-title">
    TU FRASE MOTIVACIONAL AQUÍ
</h1>
```

### Sobre Mí

**Líneas ~145-156:**
```html
<h3>Comprometido Con Tu Transformación</h3>
<p class="lead">
    TU DESCRIPCIÓN CORTA AQUÍ (1-2 oraciones)
</p>
<p>
    TU HISTORIA Y ENFOQUE (2-3 párrafos)
</p>
```

### Testimonios

**Líneas ~280+:**
```html
<h4>Nombre del Cliente</h4>
...
<p class="testimonial-text">
    "Testimonio completo aquí..."
</p>
...
<span class="result-badge">Resultado logrado</span>
```

---

## 🔗 Enlaces Importantes a Cambiar

| Elemento | Archivo | Línea Aprox | Qué Cambiar |
|----------|---------|-------------|-------------|
| WhatsApp flotante | index.html | 522 | Número de WhatsApp |
| WhatsApp contacto | index.html | 410 | Número de WhatsApp |
| Email contacto | index.html | 429 | Tu email |
| Instagram | index.html | 442 | @tu_usuario |
| Facebook footer | index.html | 501 | URL de Facebook |
| Instagram footer | index.html | 498 | URL de Instagram |
| YouTube footer | index.html | 504 | URL de YouTube |
| Calendly | index.html | 457 | URL de Calendly |

---

## ✅ Checklist Pre-Lanzamiento

```
□ Cambié "FITCOACH" por mi marca
□ Actualicé mi número de WhatsApp
□ Puse mi email real
□ Actualicé enlaces de redes sociales
□ Cambié los precios de servicios
□ Subí mi foto de perfil
□ Escribí mi historia en "Sobre mí"
□ Añadí testimonios reales
□ Configuré el formulario de contacto
□ Probé el sitio en móvil
□ Probé todos los enlaces
□ Optimicé las imágenes
```

---

## 🆘 Ayuda Rápida

**No se ve mi foto:**
```html
<!-- Asegúrate que la ruta sea correcta: -->
<img src="images/mi-foto.jpg" alt="Foto">
<!-- NO: -->
<img src="mi-foto.jpg" alt="Foto">
```

**WhatsApp no funciona:**
```
❌ INCORRECTO: +506 1234-5678
✅ CORRECTO: 50612345678
```

**Formulario no envía:**
1. Abre `js/main.js`
2. Busca línea ~183
3. Descomenta el código de FormSubmit
4. Reemplaza `TU_EMAIL@ejemplo.com`

**Cambios no se ven:**
- Presiona `Ctrl + Shift + R` (limpiar caché)
- En móvil: Cierra y abre el navegador

---

## 📞 Soporte

- **GitHub Pages**: [docs.github.com/pages](https://docs.github.com/pages)
- **Netlify**: [docs.netlify.com](https://docs.netlify.com)
- **FormSubmit**: [formsubmit.co](https://formsubmit.co)

---

**¡Tu sitio está listo para lanzar! 🚀**
