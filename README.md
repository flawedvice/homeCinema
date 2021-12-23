# CinemaApp

La principal función de esta aplicación es permitirle a sus usuarios buscar películas y obtener no solo la información de estas, sino que también información de las plataformas que permiten su visualización.

## Herramientas
En la parte del servidor se utilizará:
- Node JS
- Express JS
- Conexión a APIs de películas
- MongoDB + Mongoose
- Axiom

Mientras que en el cliente se usarán las siguientes tecnologías:
- Axiom
- React JS
- React-Router
- React-Pagination
- Sass
- Gulp JS


## Especificaciones:
### Backend
- Se crearán cuentas de usuario que permitirán archivar las películas vistas y las que se desean ver.
- Endpoints del servidor:

|Método|Endpoint                   |Resultado                                                 |
|------|---------------------------|----------------------------------------------------------|
|GET   |/:username/account         |Retorna los datos de configuración de la cuenta.          |
|GET   |/:username/wishlist        |Retorna la lista de películas deseadas.                   |
|GET   |/:username/watched         |Retorna la lista de películas ya vistas.                  |
|POST  |/login                     |Permite ingresar a una cuenta.                            |
|POST  |/register                  |Permite crear una nueva cuenta.
|POST  |/:username/just-watched/:movie_id    |Crea un nuevo registro en las películas vistas. |
|POST  |/:username/add-wishlist/:movie_id     |Añade una película a la lista de deseadas.     |
|DELETE|/:username/remove-watched/:movie_id  |Elimina una película de las vistas.             |
|DELETE|/:username/remove-wishlist/:movie_id |Elimina una película de la lista de deseadas.   |
|DELETE|/:username/delete-account |Elimina la cuenta del usuario.                             |

### Frontend
- Debe permitir la búsqueda de películas según género, nombre, año de estreno, plataforma de visualización.
- Debe mostrar un catálogo separado por género. Cada sección de género contendrá como máximo 14 películas.
- Permitirá ver más películas del catálogo al final de estas.
- Mostrará un máximo de 4 géneros.
- Permitirá la opción de cargar más géneros al final de la lista.
- Cada película se mostrará con su título, imagen y año de estreno.
- Al ver el detalle de la película se podrá acceder a su título, descripción, puntuaciones, actores, directores, plataformas en las que se halla disponible.
