> > ## PROYECTO FINAL - CODERHOUSE - BACKEND:

# OLDBOX: LIMITED FOOTBALL CLOTHING

En principio, decidí hacer este proyecto con NodeJS y React para el front-end, lo cual, según mi experiencia, facilita y dinamiza
mucho el tema de las vistas, haciendo el proyecto mucho más escalable y fácil de mantener.
Al ser un proyecto relativamente corto, decidí simplemente separar nuestro server en las capas MVC.
Los controladores del server incluyen funciones que hablan por sí solas y son utilizadas en sus rutas correspondientes. 

En el server decidí usar las siguientes dependencias:

> Bcrypt: para encriptar nuestra contraseña
> Braintree: para procesar un pseudo pago con tarjeta de débito/crédito
## IMPORTANTE: a la hora de pagar nuestra orden, colocar en el número de tarjeta "4242 4242 4242 4242" y una fecha de expiración mayor a 2023 para no tener ningún inconveniente.
> CORS: para que los recursos del sitio web sean accesibles desde otros dominios de manera controlada y segura.
> DOTENV
> EXPRESS
> EXPRESS-FORMIDABLE: para manejar la carga de archivos adjuntos (en este caso, la foto de los productos).
> JSON WEBTOKEN: para generar nuestro token.
> MONGOOSE
> MORGAN
> NODEMAILER
> NODEMON
> SLUGIFY: para formatear las categorías y crear urls más amigables. 


# RECOMENDACIONES

# /MERN E-COMMERCE/server --> npm start
# /MERN E-COMMERCE/client --> npm start

> Seguir las rutas configuradas (empezando por "auth") para trazar el camino del proyecto.

> Para registrar un usuario, debemos respetar el schema de MongoDB.

> Para registrar un usuario normal desde Postman:
- name
- email
- password
- address

- Colocar el token generado en los headers: Authorization = token generado

> Para registrar un admin desde Postman
- name
- email
- password
- address
- role (COLOCAR "1" para generar un usuario admin y poder acceder al dashboard en el que podemos manejar el CRUD de productos, categorías, y órdenes)

Para hacer acciones modificadoras (POST, PUT, DELETE) es necesario estar logeado y ser admin. Son los middlewares que deben ser respetados.

# SERVER DEPLOY:
https://mern-ecommerce-3ngx.onrender.com/

# REACT APP DEPLOY:
https://oldboxlfc-lautarxtomas.vercel.app/cart

       





