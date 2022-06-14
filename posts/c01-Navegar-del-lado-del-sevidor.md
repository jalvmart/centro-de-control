---
title: 'Navegar entre páginas (Componente Link)'
date: '2022-06-10'
---

## **1. Creación de Páginas**

### Puntos claves:
- Sistema de enrutamiento de archivos
- Componente 'Link' para habilitar la navegación entre páginas del lado del cliente.
- División del código y prefetching. 

Aprende más: [Routing](https://nextjs.org/docs/routing/introduction)

### Navegación entre Páginas:

- Crea una carpeta `pages` y todo archivo JS que crees se va a convertir en la ruta URL. Es decir, cada archivo será una página web que corresponde a un compente React.

Ejemplo:
- `pages/index.js`  corresponde a la ruta: `'/'`
- `pages/blog/post1.js` corresponde a la ruta: `/blog/post1` 
- `authors/john-m.js` corresponde a la ruta: `/authors/john-m` 


### Contenido Básico del archivo JS para una página web:

Dentro de cada archivo JS que corresponde a una página web debe tener una función que comience con: `export default`. El nombre del componente puede ser cualquiera pero debes exportarlo. ´

Así que el componente se puede llamar top10BestMovies y el archivo besMovies.js y va a funcionar igual. Por supuesto, puedes utilizar el mismo nombre tanto para el archivo como para el componente. Aquí hay un ejemplo práctico: 

#### Código base para crear una página web 
##### código: `pages/movies/bestMovies.js`
---
``` 
export default function top10BestMovies() {
  return <h1>Las 10 Películas que amaras por siempre</h1>;
} 
``` 
---
Ruta (URL) en el navegador:
- URL: `http://localhost:3000/movies/bestMovies`

Nota: Al crear el nombre del archivo, el programa diferencia entre las minúsculas y mayúsculas. No es igual llamar a la página en la URL con el nombre `bestMovies` que `bestmovies`. La página `bestmovies` no existe, su nombre verdadero tiene una letra `M` mayúscula. Así que tenlo en cuenta.  

>Correcto:
>`http://localhost:3000/movies/bestMovies` 

>Incorrecto:
>`http://localhost:3000/movies/bestmovies`

  > (404 | This page could not be found.)

## Componente Link para navegar del lado del cliente

El componente `Link` de Next.js se utiliza para navegar entre páginas del lado del cliente. En la parte superior del archivo, incluye el siguiente código para importar el componente `Link`.

---
```
import Link from 'next/link'
```
---

Ahora, utiliza el componente para enlazar la página y acceder a dicha página. Por ejemplo, quieres enlazar desde la página de inicio a la página de las peliculas y viceversa. 

##### Página de Inicio: /pages/index.js
http://localhost:3000/

---
```
Movies{' '}
  <Link href="/movies/bestMovies">
    <a>Las 10 Películas que Amaras por Siempre</a>
  </Link>
```
---

##### Página enlazada: /pages/movies/bestMovies.js
http://localhost:3000/movies/bestMovies

---
```
import Link from 'next/link';
...    
  ...
    <Link href="/">
      <a>← Back to home</a>
    </Link>
  ...
```
---

Esto permitirá navegar desde la página de inicio hasta la página de las películas y regresar de nuevo a la página principal.

**Nota:** Para navegar a otra página web fuera de la aplicación, utiliza la etiqueta html `<a href="...">`. No utilices el componente `Link`, este es solo para las páginas del proyecto.  

---
```
  ...
    ¡Aprende <a href="https://nextjs.org">Next.js!</a>
  ...
```
---

## Navegación del Lado del CLiente

Cuando se utiliza el componente `Link` la navegación entre dos páginas del lado del cliente es más rápida. Esto se debe a que el componente `<Link href="...">` utiliza JavaScript en lugar de la navegación estandar realizada por el navegador. El navegador de manera predeterminada se encarga de actualizar de manera completa la página al usar la etiqueta `<a href="...">`.

### División de Código y Prefetching

Con el componente `Link` de Next.js se logra mejorar el rendimiento, gracias a:

- No emplea bibliotecas de enrutamiento, los enlaces se crean como archivos.
- Code Splitting: La división de código. Con Next.js la página solo carga lo que necesita y de esta manera carga más rápido.
- Client-side navigation: La navegación se realiza del lado del servidor.
- Prefetching: La carga previa se efectua en segundo plano (en producción) de acuerdo a los otros componentes `Link` para que la transición se realice casi de inmediato.















