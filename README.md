<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Henry

## Objetivos del Proyecto

- Construir una App JavaScript desde cero.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.
- Utilizar Metodologías Ágiles.
- Trabajar en equipo.

## Trabajo en Equipo

En este proyecto, van a trabajar en equipo de 6 personas.

Vamos a usar **GIT** para gestionar el código y **Trello** para gestionar el proyecto y facilitar la colaboración. Recomendamos el siguiente _workflow_ para una tarea dada:

- Crear una Card de Trello para una tarea.
- Asignar una persona para realizar la tarea.
- Hacer un `branch` por cada card de trello.
- Codear hasta completar la tarea.
- Pullear de developer a nuestra branch (para mergear código nuevo de developer).
- Pushear nuestra Branch a git y hacer un `PR` indicando la Card que cierra.
- Mover la Card de trello a `Review`.
- Minimo dos personas tienen que revisar y aprobar el `PR` para mergear a developer.
- Iterar hasta que no haya más comentarios:
  - Si hay un comentario, la persona debe codear de nuevo la solución y volver a subir el código a github.
  - Si no hay comentarios, se aprueba el `PR` y se mergea a developer.
- Mergear el `PR` a developer.
- Volver al punto 1 hasta terminar el proyecto.
- Al final del proyecto mergear a main.

## Horarios y Fechas

El proyecto dura cuatro semanas. El lunes siguiente al terminar el sprint se realiza una demo donde se muestra al TL el progreso de esa semana. La última semana tiene el `demo final` donde se muestra el proyecto a todo el cohorte.

El horario de trabajo lo elije cada persona.
Todos los días a un horario a definir por su HM habrá un STAND UP para revisar las tareas del día, el progreso y si están bloqueados y/o necesitan ayuda.

## Comenzando

Vamos iniciar creando el repo de Github que sera llamado: `PG-RGB-STORE`. Donde vamos a invitar a todos colaboradores del proyecto.

**IMPORTANTE:** Es necesario contar minimamente con la última versión estable de Node y NPM. Asegurarse de contar con ella para poder instalar correctamente las dependecias necesarias para correr el proyecto.

Para verificar que versión tienen instalada:

> node -v
>
> npm -v

## BoilerPlate

El boilerplate que vamos utilizar es el del PI, este cuenta con dos carpetas: `api` y `client` (re-nombradas a backend y frontend). En estas carpetas estará el código del back-end y el front-end respectivamente.

En `backend` vas a tener que crear un archivo llamado: `.env` que tenga la siguiente forma:

```
DB_USER=usuariodepostgres
DB_PASSWORD=passwordDePostgres
DB_HOST=localhost
```

Tenés que reemplazar `usuariodepostgres` y `passwordDePostgres` con tus propias credenciales para conectarte a postgres. Este archivo va ser ignorado por github, ya que contiene información sensible (las credenciales).

El contenido de `frontend` fue creado usando: Create React App.

### Requerimientos

La aplicación del e-commerce va a contar con los siguientes requerimientos:

### Usuarios no Autenticados (GUEST).

Un Visitante anónimo debería poder navegar tu e-commerce, ver y buscar productos.

###### Usuarios Autenticados

- PRODUCTOS:

  - ...ver la lista completa de productos (catálogo), para ver todo lo disponible para comprar.
  - ...refinar el listado por categorías, para poder ver los items en los que estoy interesado.
  - ...buscas productos, para poder encontrar rápido los productos que quiero comprar.
  - ...ver los detalles de un producto individual (incluida las fotos, descripciones, reviews, etc...), asi puede determinar si quiero ese producto o no.

- CARRITO:

  - ...poder agregar items a mi carrito de compras desde el listado o desde a página de detalles de un producto, para poder comprarlos despues.
  - ...sacar items de mi carrito, en caso que decida no quererlos.
  - ...editar cantidades de los items de mi carrito, en caso que quiera mas o menos cantidad de un item en particular.
  - ...refrescar la página, o irme y volver, y todavía tener mi carrito de compras (sin haberme creado una cuenta). (Podés usar sessionStorage, localStorage, cookies, o JWT).
  - ...poder crearme una cuenta, loguearme y seguir editando ese mismo carrito, asi no pierdo los items seleccionados.

- FAVORITOS:

  - ...poder agregar items a mis favoritos desde el listado o desde el detalle.
  - ...sacar items de mis favoritos.
  - ...refrescar la pagina, re-loguear o cuando vuelva a entrar otro dia, seguir teniendo mis favoritos.

- CHECKOUT:

  - ...poder editar las cantidades de los items.
  - ...poder comprar todos los items de un mi carrito.
  - ...recibir un email de confirmación que hice la compra.

- GESTION DE CUENTA:

  - ...poder crear una cuenta, asi puede hacer otras cosas como dejar un review.
  - ...poder logearme usando Google, para no tener que acordarme de un password nuevo.
  - ...poder desloguearme, asi nadie más pueda usar mi sesión.
  - ...ver el historial de ordenes previas, asi puede reever las ordenes que hice en el pasado.
  - ...ver los detalles de una orden que hice en el pasado, incluyendo:
    - Los items comprados, con sus cantidades.
    - Links a la página del producto comprado.
    - Fecha y hora de la compra.

- REVIEWS:
  - ...poder dejar reviews a los productos, que incluyan texto y un sistema de cinco estrellas.

### Admin

Los usuarios administradores pueden manejar el sitio, los productos que se listan y los items que están disponibles.

###### Como un administrador yo quiero...

- GESTION DE PRODUCTOS:

  - ...poder crear y editar productos, con nombre, descripción, precio y uno o más fotos, tal que los visitantes puedan ver la última información de lo que se vende.
  - ...poder crear categorías, para que los usuarios puedan filtrar los items.
  - ...poder agregar o sacar categorías de los items (los items deben poder aceptar múltiples categorías).
  - ...gestionar la disponibilidad de un item. (un item que no esta disponible, no deberá estar listado en la página, pero su detalle debe seguir siendo accesible desde el historial de compras o con su URL, pero debe mencionar que el item no está disponible).

- GESTION DE USUARIOS:
  - ...poder hacer que un usuario se convierta en admin.
  - ...bloquear a un usuario, asi no puedan logearse más.

### Validación de Datos

Cuando crees los modelos, debes considerar los tipos de datos que vas a recibir, qué cosas van a ser requeridas y cómo vas a devolver los errores a los usuarios.
Algunas constrains qué deberás implementar:

- Productos:
  - Deben tener `nombre`, `descripcion`, `precio`, `cantidad`
  - Deben pertenecer a por lo menos una categoría.
  - Deben tener una foto, si no tienen una foto, deben tener un placeholder de foto por defecto.
- Usuarios:
  - Deben tener una dirección de mail válida.
  - Su email debe ser único.
- Ordenes:
  - Una orden debe pertenecer a un usuario o a un guest (autenticado vs no autenticado).
  - Las ordenes deben tener línea de orden que contiene el `precio`, `productId`, y `cantidad`.
  - Si un usuario completa una orden, esa orden debe mantener el precio del item al momento de la compra, sin importar que el precio del producto cambie después.
- Reviews:
  - Todas las reviews deben pertenecer a un producto.
  - Todas las reviews deben pertenecer a un usuario.
  - Todas las reviews deben tener por lo menos x caractéres.

### Milestones

Este proyecto tiene muchas tareas para realizar, asi que es fácil sentirse abrumado. Estas son las features que esperamos que muestres en cada demo:

- Demo **1**: Catálogo de productos
  - Los usuarios pueden ver los productos y filtrar por categoría.
  - Los administradores pueden editar y agregar productos
- Demo **2**:
  - Los usuarios pueden buscar productos en el catálogo.
  - El catálogo está paginado.
  - Los usuarios tienen un carrito al que pueden agregar productos.
- Demo **3**:
  - Los usuarios pueden ver su historial de compras.
  - Los usuarios tienen su carrito en cualquier device al que se logueen.
- Demo **Final**:
  - Los usuarios pueden hacer el checkout.
  - Los admins pueden ver las ordenes pendientes.
  - Los usuarios reciben mails de notificaciones.
