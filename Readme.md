# GALERÍA DE IMÁGENES RESPONSIVA

- **Autores:** Marcos Alarcón Alguacil  
- **Asignatura:** Desarrollo de Interfaces Web (DIW) 
- **Curso:** S2DAW  
- **Fecha de entrega:** 26/01/2025 

## 1. Descripción de la práctica.
El objetivo de esta práctica es desarrollar una galería de imágenes completamente responsiva y optimizada para dispositivos modernos. Esto incluye redimensionar imágenes a diferentes tamaños y densidades de píxeles, servir las imágenes óptimas según el dispositivo del usuario y proporcionar una experiencia interactiva al explorar las imágenes en la galería.

## 2. Desarrollo de la práctica.
La práctica consta de los siguientes pasos principales:

### **2.1. Obtención de imágenes:**
- Selección de al menos 8 o 9 fotos diferentes en alta resolución desde plataformas como Pexels, Unsplash o Pixabay.
- Cada imagen representa un concepto o temática distinta y cuenta con un texto descriptivo asociado.

### **2.2. Redimensionamiento y optimización de imágenes:**
- Se utilizó el script avanzado con Sharp para redimensionar las imágenes a múltiples tamaños:
  - **Tamaños:** small, medium, large, xlarge.
  - **Densidades de píxeles:** 1x y 2x.
- Las imágenes redimensionadas y optimizadas se organizaron en carpetas de trabajo.

### **2.3. Construcción de la galería:**
- La galería es responsiva, adaptándose a:
  - **Tamaño del navegador** (ancho del viewport).
  - **Densidad de píxeles del dispositivo** (1x, 2x, etc.).
- Implementación de elementos HTML `<picture>` y atributos `srcset` para servir las imágenes adecuadas según el dispositivo.

### **2.4. Interactividad con modal:**
- Al hacer clic en una imagen, esta se muestra en tamaño completo en una ventana modal.
- La versión mostrada en el modal es la de mayor resolución disponible para el dispositivo del usuario.

### **2.5. Opcional (puntos extra):**
- Generar dinámicamente la galería utilizando JavaScript.
- Mostrar el texto descriptivo de cada imagen junto a ella (como pie de foto o en el modal).

## 3. Puntos clave.
- **Optimización:** Todas las imágenes están optimizadas y se sirven en los tamaños y densidades necesarios para maximizar el rendimiento y minimizar el uso de ancho de banda.
- **Adaptabilidad:** La galería se adapta automáticamente al tamaño del navegador y a la densidad de píxeles del dispositivo.
- **Interactividad:** La experiencia de usuario mejora con la posibilidad de visualizar imágenes en alta calidad en un modal interactivo.

## 4. Enlaces de interés.

- [Despliegue en Github pages](https://noniqu.github.io/galeria-fotos/)
- [Plataformas de imágenes utilizadas:](https://www.pexels.com/)
