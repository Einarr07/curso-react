# 🚀 Iniciar un Proyecto React con Vite

Este documento explica paso a paso cómo crear un nuevo proyecto de **React** utilizando **Vite**, así como los comandos
más importantes para ejecutarlo y estructurarlo.

---

## 📦 Requisitos Previos

Asegúrate de tener instalado:

* **Node.js** (versión 16 o superior)
* **npm** o **yarn** o **pnpm**

Puedes comprobarlo con:

```bash
node -v
npm -v
```

---

## 🛠️ Crear un Proyecto con Vite

Ejecuta el siguiente comando en tu terminal:

```bash
npm create vite@latest nombre-de-tu-proyecto -- --template react
```

> Si prefieres TypeScript:

```bash
npm create vite@latest nombre-de-tu-proyecto -- --template react-ts
```

---

## 📥 Instalar Dependencias

Una vez creado el proyecto, entra en la carpeta:

```bash
cd nombre-de-tu-proyecto
```

Instala las dependencias:

```bash
npm install
```

---

## ▶️ Ejecutar el Servidor de Desarrollo

Para iniciar el proyecto en modo desarrollo:

```bash
npm run dev
```

Luego abre en el navegador:

```
http://localhost:5173
```

---

## 🏗️ Construir para Producción

Para generar la versión optimizada del proyecto:

```bash
npm run build
```

Los archivos finales se generan en la carpeta `/dist`.

Para visualizar lo que se construyo dentro de la carpeta `/dist`

```bash
npm run preview
```

---

## 📁 Estructura Básica del Proyecto

```
├── node_modules
├── public
├── src
│   ├── App.jsx
│   ├── main.jsx
│   └── assets
├── index.html
├── package.json
└── vite.config.js
```

---

## 🔧 Scripts Disponibles

* `npm run dev` → Inicia el servidor de desarrollo
* `npm run build` → Genera la compilación para producción
* `npm run preview` → Sirve la compilación para revisar cómo quedará en producción

---

## 📚 Recursos Recomendados

* Documentación de Vite: [https://vitejs.dev](https://vitejs.dev)
* Documentación de React: [https://react.dev](https://react.dev)

---

## ✔️ Listo

Ya tienes todo para comenzar a desarrollar tu aplicación React con Vite 🚀
