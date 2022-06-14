---
title: 'Referencia de la API'
date: '2022-06-01'
---

# Referencia de la API

1. **[CLI](https://nextjs.org/docs/api-reference/cli)**: La CLI de Next.js permite iniciar, compilar y exportar la aplicación.
    - **`next dev`**: Inicia la aplicación en modo de desarrollo.
    - **`next start`**: Inicia la aplicación en modo de producción.
    - **`next lint`**: Ejecuta ESLint para todos los archivos en los directorios: `pages`, `components` y `lib`. Además, proporciona una configuración guiada para instalar las dependencias requeridas cuando ESLint aún no está configurado en tu aplicación. 
    - **`next info`**: Imprime detalles relevantes sobre el sistema actual.

2. **[Create Next Api](https://nextjs.org/docs/api-reference/create-next-app)**: Para crear una nueva aplicación Next.js es con la herramienta: `create-next-app`.

    ---
    ```
    npx create-next-app@latest
    # or
    yarn create next-app
    # or
    pnpm create next-app
    ```
    ---

    Puede crear un proyecto TypeScript con --ts, --typescript:

    ---
    ```
    npx create-next-app@latest --ts
    # or
    yarn create next-app --typescript
    # or
    pnpm create next-app -- --ts
    ```
    ---

## Componentes:
1. Router:
2. Link 
3. Image
4. Script
5. Head
6. Amp
7. Server
8. Streaming

## Edge Runtime:
Data Fetching

## Static Optimization Indicator
next.config.js


