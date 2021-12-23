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
- Debe proveer de rutas para obtener todas las películas, según género y según la plataforma de visualización.
- Endpoints del servidor:

|Método|Endpoint         |Resultado                                                        |
|------|-----------------|-----------------------------------------------------------------|
|GET   |/api/v1/all      |Retorna todas las películas                                      |
|GET   |/api/v1/:platform|Retorna todas las películas que pueden verse en dicha plataforma |
|GET   |/api/v1/:genre   |Retorna todas las películas del género elegido                   |

### Frontend
- Debe permitir la búsqueda de películas según género, nombre, año de estreno, plataforma de visualización.
- Debe mostrar un catálogo separado por género. Cada sección de género contendrá como máximo 14 películas.
- Permitirá ver más películas del catálogo al final de estas.
- Mostrará un máximo de 4 géneros.
- Permitirá la opción de cargar más géneros al final de la lista.
- Cada película se mostrará con su título, imagen y año de estreno.
- Al ver el detalle de la película se podrá acceder a su título, descripción, puntuaciones, actores, directores, plataformas en las que se halla disponible.
