# Panadería Campos — Sistema Web Comercial & SSGST 🥖⚙️

> Plataforma web integral desarrollada para la gestión comercial y del Sistema de Seguridad y Salud en el Trabajo (SSGST) de la tradicional Panadería Campos de Cajamarca.

---

## 📋 Descripción General
**Panadería Campos Web System** es una solución digital de doble enfoque diseñada para cubrir tanto las necesidades del público general (*Guest View*) como el control operativo interno del personal y administradores (*Backend & SST Management*). El sistema combina la historia, catálogo de productos artesanales y sección de pedidos con un panel técnico completo enfocado en la normativa de seguridad industrial, control de riesgos y gestión de equipos de protección personal (EPP).

---

## 🚀 Características Principales

### 🛒 Módulo Comercial y Público (Frontend / Guest)
* **Historia y Tradición:** Sección dedicada a los más de 100 años de trayectoria de la panadería en Cajamarca (fundada en 1923 por Basilio Campos Rojas) y su presencia en ferias nacionales como "Perú, Mucho Gusto".
* **Catálogo de Productos Artesanales:** Vitrina interactiva detallada de especialidades (Pie de Manzana, Pie de Piña, Cachitos, Duquesas, Roscas y Pan de Yema).
* **Sección Institucional:** Misión, visión, información de contacto directa y enlaces a redes sociales.

### 🛡️ Módulo de Seguridad y Salud en el Trabajo (SSGST Dashboard)
* **Gestión de Documentación SST:** Repositorio digital interactivo con matrices y registros clave:
  * Matriz IPERC (Identificación de Peligros, Evaluación de Riesgos y Medidas de Control).
  * Diagramas binitarios y árboles de causas.
  * Matrices de Checklist y control de EPPs.
  * Kárdex de control de suministros y recursos de SST.
  * Fichas técnicas, objetivos del SSGST, planos de la empresa y normativas legales vigentes.
* **Implementación de Seguridad Industrial:** Secciones dinámicas para identificación de riesgos, evaluación, control, prevención y programas de capacitación para el personal.

---

## 🛠️ Tecnologías Utilizadas
* **HTML5:** Estructura semántica avanzada para la maquetación de la interfaz comercial y los dashboards técnicos.
* **CSS3:** Diseño personalizado, paletas de colores corporativas y estéticas diferenciadas (interfaz limpia clásica para clientes y diseño oscuro de consola industrial para el módulo de SST).
* **JavaScript:** Interactividad en formularios de pedidos, navegación por pestañas y control de vistas según el tipo de usuario (Guest / Personal).

---

## 📂 Estructura del Proyecto
```text
panaderia-campos-system/
│
├── index.html            # Página comercial principal (Historia, Productos, Logros, Contacto)
├── sst-dashboard.html    # Panel de control interno SSGST y documentación técnica
├── style.css             # Estilos globales y diseños visuales adaptados
└── assets/               # Imágenes históricas, productos y recursos gráficos
