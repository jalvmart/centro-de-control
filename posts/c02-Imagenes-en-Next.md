---
title: 'Imagenes en Next.js (Componente y Optimización)'
date: '2022-06-11'
---

## Componente de Imagen y Optimización con Next.js

Next.js se encarga de servir archivos estáticos que se encuentran disponibles en la carpeta `public`. En dicha carpeta puedes colocar las imagenes, el favicon.ico, el archivo robots.txt, Google Site Verification y cualquier otro archivo estático. 

El código puede hacer referencia a estos archivos a partir de la URL base ( /). Por ejemplo:

---
```
import Image from 'next/image';

const YourComponent = () => (
  <Image
    src="/images/profile.jpg" 
    height={144}  
    width={144} 
    alt="Your Name"
  />
);
```
---

Documentación: Componente [`<Image ...>](https://nextjs.org/docs/api-reference/next/image) 

### Notas relevantes: ###

El componente `Image` solo carga las imagenes cuando estas ingresan a la ventana gráfica. Optimiza las imagenes a pedido a medida que el usuario las solicita. Además, las imagenes se cargan de forma diferida.  

Además te permite cambiar el tamaño de la imagen, optimizar y servir imagenes en multiples formatos, entre ellos el `WebP`.   
