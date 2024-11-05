1 Crear paquete npm 

nos situamos en la carpeta del proyecto y ejecutamos

$ npm init

respondemos a sus preguntas ( key words para buscar el paquete en el buscador ) ,con las respuestas que demos se genera un archivo package.json
en el que se contendrá toda esta info.

2 En la raiz creamos nuestro archivo server.js ( que anteriormente definimos como valor en la key main del package.json )

3 Instalamos Express

$ npm i express

4 esto genera un node_modules ( locación en la que se almacena los paquetes npm que instalemos ) , también un package-lock.json y declarará 
  esta librería instalada en las dependencias de package.json


5 para arrancar nuestro server

$ node server

( veo que este comando no tiene un hot reload ,si hacemos un cambio en el código hay que volver a ejecutarlo )

6 instalar nodemon para evitar este incoveniente instalamos nodemon a nivel global con -g

$ npm i -g nodemon

7 iniciamos nodemon

$ nodemon server

ahora el servidor también escuchará por nuestros cambios

8 Body parser ( paquete para trabajar el body de una petición de forma sencilla )

$ npm i body-parser