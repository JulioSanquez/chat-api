
[x]-Manejar Usuarios
[x]-Inicio de sesion
[x]-Crear conversaciones
[x]-Leer las conversaciones de las cuales son miembros
[x]-Crear grupos de conversacion
[x]-Enviar mensajes
[x]-Eliminar mensajes

-Confirmacion de lectura del mensaje
-Manejar fotos de perfil
-Reenviar un mensaje
-Crear link de invitacion

![Database Diagram](https://i.imgur.com/IHhtWv2.png)

Autenticacion:
    - Log In
    - Sign In

Cuando hacemos un login recibimoslo siguiente:
    - Email
    - Password

Validar si el usuario existe:
    - Vamos a buscar el usuario al que le pertenezca el correo electoronico que recibimos

Validar si lacontraseña es correcta:
    - Validar la contraseña que recibimos con la contraseña que está en mi base de datos

Generar una respuesta con el token

# Autenticacion por tokens

1. Recibimos el token

2. Ese token lo desencriptamos

3. Una vez el token desencriptado, tenemos que ver si pertenece a un usuario de mi app
    - Esto se logra haciendo una validacion buscando en mi db si existe x usuario con el id que viene en el token

4. Damos paso a la peticion si es que es un usuario real o generamos un error en caso de que no lo sea