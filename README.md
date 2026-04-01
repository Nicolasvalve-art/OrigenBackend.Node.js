OrigenBackend Node.js

Backend desarrollado con Node.js, Express y MySQL para la gestión de usuarios y carrito de compras.

Tecnologías utilizadas

* Node.js
* Express
* MySQL
* Thunder Client (para pruebas)

Estructura del proyecto

```
app/
 ├── config/
 ├── controllers/
 ├── routes/
index.js
package.json
```

Funcionalidades

Usuarios

* Crear usuario
* Listar usuarios
* Obtener usuario por ID

Carrito

* Crear carrito
* Listar carritos
* Obtener carrito por ID
* Actualizar carrito
* Eliminar carrito

Endpoints principales

### Usuarios

* GET /api/usuarios
* GET /api/usuarios/:id
* POST /api/usuarios
* PUT /api/usuarios/:id
* DELETE /api/usuarios/:id

### Carrito

* GET /api/carrito
* GET /api/carrito/:id
* POST /api/carrito
* PUT /api/carrito/:id
* DELETE /api/carrito/:id

 Cómo ejecutar el proyecto

1. Instalar dependencias:

```
npm install
```

2. Ejecutar el servidor:

```
node index.js
```

3. El servidor correrá en:

```
http://localhost:3000
```



Configurar la conexión a MySQL en el archivo `db.js` con tus credenciales locales.
