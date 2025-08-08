# 📦 Enviopack Challenge Frontend

Este proyecto es la resolución del **challenge de Frontend React** para Enviopack.  
Se trata de una aplicación web que simula una tienda e-commerce, desarrollada en **React + TypeScript** usando **Vite**.

## 🎯 Objetivo del challenge
- Replicar el diseño y las pantallas provistas en las capturas de referencia.
- Implementar **Catálogo**, **Carrito** y **Estado de compra**.
- Aplicar filtrado, ordenamiento y paginación.
- Manejar el estado global con Redux Toolkit.

---

## 🖥️ Tecnologías utilizadas
- ⚛ **React 19** con **TypeScript**
- ⚡ **Vite** como bundler
- 🗂 **Redux Toolkit** + **React Redux** para manejo de estado global
- 🧭 **React Router DOM** para ruteo
- 🎨 **Styled Components** para estilos
- 🧪 **Jest** + **Testing Library** para testing
- ✨ **ESLint** + **Prettier** para linting y formateo

---

## 📋 Funcionalidades

### 1️⃣ Catálogo
- Listado de productos (6 por página) con **paginación**.
- **Filtro** por nombre en tiempo real.
- **Ordenamiento** por precio (ascendente y descendente).
- Botón **"Agregar al carrito"** o **"Ver carrito"** según corresponda.
- Barra de navegación con:
  - Nombre de usuario.
  - Cantidad de productos en el carrito.
  - Crédito disponible.

### 2️⃣ Carrito
- Visualización de productos agregados.
- Eliminación individual de productos.
- Cálculo automático del total.
- Botones para **volver al catálogo** o **finalizar compra**.
- Visualización de carrito vacio.

### 3️⃣ Estado de la compra
- **Éxito:** si el crédito disponible es suficiente, se descuenta el total, se vacía el carrito y se muestra mensaje de éxito.
- **Error:** si el crédito es insuficiente, se muestra mensaje de error y opción para volver al carrito.

---

## 🚀 Instalación y ejecución

1. **Clonar** el repositorio:
   git clone https://github.com/tu-usuario/enviopack-challenge-frontend.git
   cd enviopack-challenge-frontend

2. **Instalar** dependencias:
  npm install

3. **Ejecutar** en modo desarrollo:
  npm run dev

4. **Compilar** para producción:
  npm run build

5. **Previsualizar** la build:
  npm run preview

## 🧪 Testing
Ejecutar tests en modo watch:
npm run test

## 📄 Requisitos originales
El challenge original fue provisto por Enviopack e incluía el desarrollo de las pantallas y funcionalidades detalladas en el documento oficial.