# Tarea 1 -- Conociendo Angular

## 📌 Descripción

Este proyecto fue desarrollado como parte del **Módulo 1 -- Unidad 1**
del curso *Desarrollo en Angular*.

El objetivo de la actividad fue:

-   Crear un proyecto Angular utilizando Angular CLI.
-   Comprender la estructura generada por el framework.
-   Modificar el componente principal.
-   Implementar interpolación.
-   Agregar recursos estáticos (imágenes).
-   Documentar el proyecto en GitHub.

------------------------------------------------------------------------

## 🚀 Tecnologías utilizadas

-   Angular CLI 21
-   Angular Standalone Components
-   Signals
-   SSR (Server Side Rendering)
-   TypeScript
-   HTML5
-   CSS3

------------------------------------------------------------------------

## 🗂️ Estructura del proyecto

    modulo-1-tarea-1/
    │
    ├── public/
    │   └── favicon.ico
    │
    ├── src/
    │   ├── app/
    │   │   ├── components/
    │   │   │   ├── header/
    │   │   │   │   ├── header.css
    │   │   │   │   ├── header.html
    │   │   │   │   ├── header.spec.ts
    │   │   │   │   └── header.ts
    │   │   │   │
    │   │   │   └── footer/
    │   │   │       ├── footer.css
    │   │   │       ├── footer.html
    │   │   │       ├── footer.spec.ts
    │   │   │       └── footer.ts
    │   │   │
    │   │   ├── app.config.server.ts
    │   │   ├── app.config.ts
    │   │   ├── app.css
    │   │   ├── app.html
    │   │   ├── app.routes.server.ts
    │   │   ├── app.routes.ts
    │   │   ├── app.spec.ts
    │   │   └── app.ts
    │   │
    │   ├── assets/
    │   │   ├── angular-cool-logo.png
    │   │   ├── angular-icon.svg
    │   │   └── home.jpg
    │   │
    │   ├── environments/
    │   │
    │   ├── index.html
    │   ├── main.server.ts
    │   ├── main.ts
    │   ├── server.ts
    │   └── styles.css
    │
    ├── angular.json
    ├── package.json
    └── README.md

------------------------------------------------------------------------

## 📂 Explicación de archivos principales

### 🔹 `src/app/app.ts`

Componente raíz de la aplicación.\
Utiliza **Signals** para manejar el estado (`title` y `mensaje`).

### 🔹 `src/app/app.html`

Plantilla principal donde se implementa:

-   Interpolación `{{ title() }}`
-   Interpolación `{{ mensaje() }}`
-   Inclusión de `<app-header>` y `<app-footer>`

------------------------------------------------------------------------

## 🧠 Conceptos aplicados

-   Arquitectura basada en componentes
-   Interpolación
-   Separación de responsabilidades (Header / Footer / Main)
-   Manejo de assets

------------------------------------------------------------------------

## 🖼️ Captura de pantalla

La siguiente imagen documenta el funcionamiento de la aplicación y los puntos solicitados en la consigna:

### Vista Home
![Home](/modulo-1-tarea-1/src/assets/home.jpg)

La captura muestra:

-   VS Code abierto
-   Navegador en http://localhost:4200
-   Interfaz con Header, contenido principal y Footer

------------------------------------------------------------------------

## ⚙️ Instalación y ejecución

### 1️⃣ Clonar el repositorio

git clone https://github.com/argenisjpinto/tareas-diplomatura-angular-999201565.git

### 2️⃣ Instalar dependencias

npm install

### 3️⃣ Ejecutar el proyecto

ng serve

Abrir en el navegador:

http://localhost:4200

------------------------------------------------------------------------

## 👨‍🎓 Autor

Argenis Pinto\
Curso: Desarrollo en Angular\
Módulo 1 -- Unidad 1

------------------------------------------------------------------------

## 📚 Bibliografía

-   Angular. (s.f.). What is Angular? https://angular.dev
-   Angular CLI Documentation. https://angular.dev/tools/cli
-   TypeScript Documentation. https://www.typescriptlang.org/docs/
-   Material del curso UTN -- Centro de e-Learning

------------------------------------------------------------------------

## ✅ Cumplimiento de la consigna

✔ Proyecto creado con Angular CLI\
✔ Aplicación ejecutándose correctamente\
✔ Modificación del componente principal\
✔ Implementación de interpolación\
✔ Uso de imágenes estáticas\
✔ Estructura documentada\
✔ README completo con instrucciones