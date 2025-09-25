# 🏢 Pinares - Landing Page

Un moderno sitio web promocional para el desarrollo inmobiliario **Pinares**, diseñado para mostrar departamentos residenciales con un enfoque en tranquilidad y calidad de vida.

## 🌟 Características Principales

### ✨ Efectos Visuales Avanzados
- **Parallax Interactivo**: Efecto 3D con movimiento de elementos basado en la posición del mouse
- **Animaciones CSS**: Bordes punteados rotativos en botones y elementos de precio
- **Marquesina de Logos**: Carrusel infinito de instituciones crediticias
- **Transiciones Suaves**: Experiencia de usuario fluida y moderna

### 🎨 Diseño Responsivo
- **Mobile-First**: Optimizado para dispositivos móviles
- **Bootstrap Integration**: Grid system flexible
- **Componentes Modulares**: Arquitectura CSS organizada
- **Paleta de Colores Consistente**: Variables CSS personalizadas

### 🏗️ Secciones del Sitio
- **Hero Section**: Presentación principal con parallax
- **Información del Proyecto**: Detalles sobre el desarrollo
- **Amenidades**: Carrusel de espacios y servicios
- **Financiamiento**: Formulario de contacto y opciones crediticias
- **Footer**: Información legal y enlaces

## 🚀 Tecnologías Utilizadas

### Frontend
- **HTML5**: Estructura semántica
- **CSS3**: Estilos avanzados con variables y animaciones
- **JavaScript/jQuery**: Interactividad y efectos dinámicos
- **Bootstrap 5**: Framework CSS responsivo

### Herramientas de Desarrollo
- **Webpack**: Bundling y optimización de assets
- **Webpack Dev Server**: Desarrollo con hot reload
- **Copy Webpack Plugin**: Gestión de archivos estáticos
- **HTML Webpack Plugin**: Generación automática de HTML

### Librerías Externas
- **Owl Carousel**: Carrusel de imágenes
- **Boxicons**: Iconografía
- **Lite YouTube Embed**: Videos optimizados
- **Google Fonts**: Tipografía Montserrat

## 📁 Estructura del Proyecto

```
web-pinares/
├── 📁 css/
│   ├── custom.css          # Estilos principales
│   ├── guiar-menu.css      # Navegación
│   ├── lite-yt-embed.css   # Videos
│   └── widgets.css         # Componentes
├── 📁 img/
│   ├── 📁 guiar/          # Imágenes del proyecto
│   ├── 📁 logos/          # Logos crediticios
│   ├── 📁 page-start/     # Imágenes hero
│   ├── 📁 slider/         # Carrusel amenidades
│   └── 📁 muebles/        # Iconos SVG
├── 📁 js/
│   ├── scripts.js          # JavaScript principal
│   ├── guiar-nav.js        # Navegación
│   └── 📁 vendor/         # Librerías externas
├── 📁 views/
│   ├── index.html          # Página principal
│   ├── privacy.html        # Aviso de privacidad
│   ├── terms.html          # Términos y condiciones
│   └── 📁 layouts/        # Componentes reutilizables
├── 📁 contact-form/       # Formulario de contacto
├── package.json           # Dependencias
├── webpack.*.js           # Configuraciones Webpack
└── index.php              # Punto de entrada
```

## ⚙️ Instalación y Desarrollo

### Prerrequisitos
- Node.js (v14 o superior)
- npm o yarn
- Servidor web local (MAMP, XAMPP, etc.)

### Configuración del Entorno

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/nowyouwerkn/web-pinares.git
   cd web-pinares
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm start
   ```
   El sitio estará disponible en `http://localhost:8080`

4. **Para producción**
   ```bash
   npm run build
   ```

### Configuración del Servidor
- Coloca el proyecto en tu directorio web server
- Asegúrate de que PHP esté habilitado
- Configura el formulario de contacto en `/contact-form/`

## 🎯 Funcionalidades Destacadas

### Efecto Parallax Interactivo
```css
/* Activación automática basada en posición del viewport */
.page-start {
    perspective: 1000px;
    cursor: none;
}
```

### Animación de Bordes Punteados
```css
/* Anillo rotativo alrededor de botones */
.btn::before, .price-bubble::before {
    animation: rotateDots 20s linear infinite;
    border: 6px dashed var(--contrast);
}
```

### Marquesina de Créditos
```css
/* Movimiento infinito suave */
.credits-marquee-inner {
    animation: marquee 25s linear infinite;
}
```

## 🎨 Paleta de Colores

```css
:root {
    --main: #023629;        /* Verde principal */
    --secondary: #C8D400;   /* Verde lima */
    --contrast: #E28412;    /* Naranja */
    --light: #FFF3D8;       /* Crema */
    --white: #FFFFFF;       /* Blanco */
}
```

## 📱 Responsividad

### Breakpoints
- **Desktop**: > 992px
- **Tablet**: 768px - 992px
- **Mobile**: < 768px

### Características Móviles
- Navegación hamburguesa
- Parallax desactivado para performance
- Formularios optimizados para touch
- Imágenes adaptativas

## 🚀 Performance y SEO

### Optimizaciones
- **Lazy Loading**: Imágenes y videos
- **Minificación**: CSS y JavaScript
- **Compresión**: Assets optimizados
- **CDN**: Librerías externas

### SEO
- **Meta tags**: Título, descripción, keywords
- **Open Graph**: Compartir en redes sociales
- **Favicon**: Múltiples tamaños
- **Sitemap**: Estructura optimizada

## 📧 Formulario de Contacto

El sistema de contacto incluye:
- Validación client-side y server-side
- Integración con servicios de email
- Campos para información crediticia
- Respuestas automáticas

## 🔧 Personalización

### Modificar Colores
Edita las variables CSS en `/css/custom.css`:
```css
:root {
    --main: #tu-color-principal;
    --secondary: #tu-color-secundario;
    --contrast: #tu-color-contraste;
}
```

### Agregar Secciones
1. Crea el HTML en `/views/index.html`
2. Agrega estilos en `/css/custom.css`
3. Incluye JavaScript si es necesario

### Modificar Animaciones
Ajusta los tiempos y efectos en:
- Parallax: `/js/parallax-effect.js`
- Rotación: `@keyframes rotateDots`
- Marquesina: `@keyframes marquee`

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es propiedad de **Grupo GUIAR** y **Constructora Reyes Reyes S.A de C.V**. Todos los derechos reservados.
