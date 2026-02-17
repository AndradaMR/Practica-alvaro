# Bienvenido al repositorio oficial del equipo

Este documento detalla cómo configurar el entorno de desarrollo y la estructura del proyecto.

## 🚀 Instalación y Configuración

Para colaborar en este proyecto, recomendamos usar SSH para clonar el repositorio.

### Requisitos previos
- Tener Git instalado.
- Tener una clave SSH configurada en tu cuenta de GitHub/GitLab.

### Clonar el repositorio (SSH)
Abre tu terminal y ejecuta el siguiente comando:

```bash
git clone git@github.com:TU-USUARIO-O-GRUPO/PRACTICA-ALVARO.git

## 📂 Estructura del Proyecto

El proyecto se ha reorganizado para separar la lógica, los estilos y la vista, mejorando la mantenibilidad del código.

```text
/
├── index.html          # Página principal (Punto de entrada)
├── css/                # [NUEVO] Contiene todos los estilos del proyecto
│   └── style.css       # Hoja de estilos global
├── js/                 # Lógica de la aplicación (Scripts)
│   └── app.js          # Funcionalidad principal
├── assets/             # Imágenes, iconos y recursos estáticos
└── README.md           # Documentación de instalación y uso