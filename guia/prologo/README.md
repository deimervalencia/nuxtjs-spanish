# Introducción
::: tip
¿Quieres echar un vistazo a nuestra nueva documentación? Nuestra [nueva documentación](https://nuxtjs.org/guides/get-started/installation) están ahora en versión beta. ¡Que te diviertas!
:::

_Nuxt es un marco progresivo basado en Vue.js para crear aplicaciones web modernas. Se basa en las bibliotecas oficiales de Vue.js (vue, vue-router y vuex) y potentes herramientas de desarrollo (webpack, Babel y PostCSS). El objetivo de Nuxt es hacer que el desarrollo web sea potente y eficaz con una gran experiencia de desarrollador en mente._

# ¿Qué es NuxtJS?
Nuxt es un marco diseñado para brindarle una arquitectura sólida siguiendo las pautas oficiales de Vue. De adopción incremental, se puede utilizar para crear todo, desde páginas de destino estáticas hasta complejas aplicaciones web listas para empresas.

Versátil por naturaleza, admite diferentes objetivos (servidor, sin servidor o estático) y la representación del lado del servidor es intercambiable.

Ampliable con un sólido ecosistema de módulos, facilita la conexión de sus puntos finales REST o GraphQL, CMS favoritos, marcos CSS y más. La compatibilidad con PWA y AMP está a solo un módulo de su proyecto Nuxt.

NuxtJS es la columna vertebral de su proyecto Vue.js, lo que le brinda la estructura para construir su proyecto con confianza mientras es flexible.

# Caracteristicas

- Escribir archivos Vue (* .vue)
- División automática de código
- Representación del lado del servidor(SSR)
- Potente sistema de enrutamiento con datos asincrónicos
- Servicio de archivos estáticos
- ES2015 + Transpilación
- Agrupación y minimización de su JS y CSS
- Gestión del elemento ```<head>``` (```<title>```, ```<meta>```, etc.)
- Reemplazo de módulo en caliente en desarrollo
- Preprocesador: Sass, Less, Stylus, etc.
- Encabezados push HTTP / 2 listos
- Ampliación con arquitectura modular

# Cómo funciona

Nuxt.js incluye lo siguiente para crear un desarrollo de aplicaciones web enriquecido:

- [Vue 2](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/en/)
- [Vuex](https://vuex.vuejs.org/en/) (incluido solo cuando se usa la [opción de tienda](https://nuxtjs.org/guide/vuex-store))
- [Vue Server Renderer](https://ssr.vuejs.org/en/) (excluido cuando se usa el [modo: 'spa'](https://nuxtjs.org/api/configuration-mode))
- [Vue Meta](https://github.com/nuxt/vue-meta)

Un total de solo **57kB min + gzip** (60kB con Vuex).

::: tip
Debajo del capó usamos [webpack](https://github.com/webpack/webpack) con [vue-loader](https://github.com/vuejs/vue-loader) y [babel-loader](https://github.com/babel/babel-loader) para agrupar, dividir código y minificar su código.
:::


# Esquema

Este esquema muestra lo que llama Nuxt.js cuando se llama al servidor o cuando el usuario navega por la aplicación a través de ```<nuxt-link>```:

![Esquema nuxt](/img/nuxt-schema.svg)


# Procesado por servidor (SSR universal)

Puede usar Nuxt.js como marco para manejar toda la representación de la interfaz de usuario de su proyecto.

Al iniciar nuxt, iniciará un servidor de desarrollo con recarga en caliente y [Vue Server Renderer](https://ssr.vuejs.org/en/) configurado para renderizar automáticamente su aplicación.


# Aplicaciones de una sola página (SPA)
Si, por alguna razón, prefiere no utilizar la representación del lado del servidor o necesita un alojamiento estático para sus aplicaciones, simplemente puede usar el modo SPA usando <span style="color:red">nuxt --spa</span>. En combinación con la función de generación, le brinda un poderoso mecanismo de implementación de SPA sin la necesidad de usar un tiempo de ejecución de Node.js ni ningún manejo especial del servidor.

Eche un vistazo a [los comandos](https://nuxtjs.org/guide/commands) para obtener más información sobre su uso.

Si ya tiene un servidor, puede conectar Nuxt.js usándolo como middleware. No hay ninguna restricción al usar Nuxt.js para desarrollar sus aplicaciones web universales. Consulte la guía [Uso de Nuxt.js mediante programación](https://nuxtjs.org/api/nuxt).

# Estático generado (pre-renderizado)
Para generar su sitio como un sitio estático, debe usar el comando <span style="color:red">nuxt generate</span>, así como establecer el destino en el valor de static en su archivo de configuración nuxt si usa Nuxt> = 2.13.

Al construir su aplicación, generará el HTML para cada una de sus rutas y lo almacenará en un archivo.

Por ejemplo, la siguiente estructura de archivos:

```
-| pages/
----| about.vue
----| index.vue
```

Generará:
```
-| dist/
----| about/
------| index.html
----| index.html
```

¡Con esto, puede alojar su aplicación web generada en cualquier alojamiento estático!

El mejor ejemplo es este sitio web. Se genera y se aloja en Netlify, consulte nuestro código fuente o Cómo implementar Nuxt.js en Netlify desde Vue School.

No queremos generar manualmente la aplicación cada vez que actualizamos el repositorio de documentos, se activa un enlace a Netlify que:

1. Clona el [repositorio de nuxtjs.org](https://github.com/nuxt/nuxtjs.org)
2. Instala las dependencias a través de <span style="color:red;">npm install</span>
3. Ejecuta <span style="color:red;">nuxt generate</span>
4. Sirve al directorio <span style="color:red;">dist</span>

Ahora tenemos una aplicación web generada estática automatizada :)

El nuevo módulo estático completo que está disponible desde v2.13 genera sus activos html y estáticos en el momento de la compilación, lo que significa que todo ya está generado y, por lo tanto, no solo es excelente para SEO, sino que también se puede alojar de forma gratuita en cualquiera de los alojamientos estáticos. proveedores.

Nuxt v2.13 también viene con un rastreador instalado que rastreará las etiquetas de sus enlaces y generará sus rutas dinámicas basadas en estos enlaces, lo que significa que ya no es necesario generar manualmente sus enlaces dinámicos.

El objetivo estático funciona guardando las llamadas a su API en archivos payload.js en una carpeta estática. Estas cargas útiles se almacenan en caché para un mejor rendimiento y soporte fuera de línea y, como su API ya no se llama en la navegación del lado del cliente (cuando se llama usando asyncData y fetch), también significa que no tiene que exponer su API al público.

Cuando se genera su sitio, se genera su html con todo su contenido y, en la navegación del lado del cliente, estas páginas se reconstruyen utilizando los archivos de carga útil para sus datos de API. Al separar el código del contenido, puede volver a generar fácilmente su contenido sin la necesidad de reconstruir todo su sitio. Eso significa que una vez que su sitio está construido y solo desea cambiar su contenido, aún puede llamar a <span style="color:red;">nuxt generate</span>, pero esta vez volverá a generar su contenido solo a medida que la compilación se almacenará en caché y el contenido no necesita pasar. webpack significa que la regeneración de contenido es muy rápida.

Si desea generar sitios estáticos, utilizando Nuxt> = v2.13, deberá agregar <span style="color:red;">static</span> como <span style="color:red;">target</span> en su archivo <span style="color:red;">nuxt.config</span>. El valor predeterminado para el <span style="color:red;">target</span> es servidor.

<span style="color:red">nuxt.config.js</span>

```js
export default {
  target: 'static'
}
```

Para obtener más información sobre el nuevo objetivo estático, consulte nuestro artículo
::: tip
Consulte [¿Cómo hacer despliegue en Netlify?](https://nuxtjs.org/faq/netlify-deployment) para obtener más detalles sobre cómo implementar en Netlify.
:::