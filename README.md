## guia paso a paso del tutorial
https://nextjs.org/learn/dashboard-app/getting-started

## video referente al tutorial
https://www.youtube.com/watch?v=jMy4pVZMyLM&ab_channel=midulive

## cusro de react
https://github.com/midudev/aprendiendo-react

-
  npm run dev
    Starts the development server.

  npm run build
    Builds the app for production.

  npm start
    Runs the built app in production mode.
-

# verificar la instalacion
- npm run
Lifecycle scripts included in undefined:
  start
    next start

available via `npm run-script`:
  build
    next build
  dev
    next dev
  prettier
    prettier --write --ignore-unknown .
  prettier:check
    prettier --check --ignore-unknown .


# Inatalar Node.js en windows
1. desde el sitio oficial descargar el instalador y ejecutarlo: https://nodejs.org/en/download/current
2. En el proceso de instalación, te preguntará si quiere instalar automaticamente las herramientas necesarias, debe marcar esta opción.
3. Instalar Next: npm install next

# Actualizar a la version actual
- desde el sitio oficial descargar el instalador de Node.js e instalarlo
- desde la terminal

# verificar la version
- node -v (version de node.js)
- npm -v (version de npm)
- choco -v (version de chocolaty)

# actualizar chocolaty
- npm install -g npm@latest

# limpiar cache de npm
- npm install -g npm@latest

# instalar ultima version de npm
- npm install -g npm@latest


# como crar un proyecto
- abrimos una terminal y navegamos hasta la carpeta donde qeuremos que se inicie el proyecto

´´´
npx create-next-app@latest nextjs-dashboard --use-npm --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example"
´´´

## utilizar bNext y Vercel (https://nextjs.org/)
- es necesario tener una cuenta en github (repositorio) y en vercel (base de datos)

- crear una base de datos en Storage
- copiar los archivos de conexion en .env
- importar por consola las dependencias de vercel
- npm install @vercel/postgres

# crear datos en la tabla par apruebas
- existe el archivo /scrtips/seed.js
-agregar esta linea en package.json, dentro de "scripts" :: "seed": "node -r dotenv/config ./scripts/seed.js"