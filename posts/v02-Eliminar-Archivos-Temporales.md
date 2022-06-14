---
title: 'Mantenimiento del disco duro: eliminar archivos temporales al codificar'
date: '2022-06-13'
---



Mantenimiento 

Eliminar archivos generados en el cache de yarn
antes 50.8 Gb 

---
```
$> yarn cache clean
$> npm cache clean --force
```
---

Resultados: 
- yarn cache: 50.8 Gb - 50.1 Gb = 0.70 GB recuperados
- npm cache: 50.1 Gb - 49.2 Gb = 0.90 GB recuperados
