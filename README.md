# Proyecto de Gestión de Usuarios en Node.js

Este proyecto es una API RESTful desarrollada con **Node.js** y diseñada para gestionar usuarios de una plataforma. Implementa autenticación basada en **Bearer Token** y protege la mayoría de sus endpoints con validación de sesión.

## Funcionalidades

### Registro y Autenticación

- `POST /register` → Permite a nuevos usuarios registrarse en la plataforma.
- `POST /login` → Permite a los usuarios autenticarse y recibir un token de sesión.

### Gestión de Usuarios (Requiere autenticación)

- `POST users/` → Crea un nuevo usuario en la plataforma.
- `GET users/` → Obtiene la lista de todos los usuarios registrados.
- `GET users/:username` → Obtiene la información de un usuario específico por su nombre de usuario.
- `PATCH users/:id` → Actualiza los datos de un usuario identificado por su ID.
- `DELETE users/:id` → Elimina un usuario identificado por su ID.

## Seguridad

- Se utiliza **validación de sesión** (`validateSession`) para restringir el acceso a todas las rutas, excepto **login y register**.
- El sistema emplea **Bearer Token** para la autenticación de los usuarios.

## Tecnologías utilizadas

- **Node.js** con **Express.js** para el desarrollo del servidor.
- **Middleware de autenticación** para validar sesiones y proteger las rutas.
- **Base de datos relacional o NoSQL**, dependiendo de la implementación.
