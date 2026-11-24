# MO-101 · Mercado Orbital: la tienda que reacciona

**Asignado por:** Nova, hangar de la Estación Umbral
**Archivo que tocas:** solo `src/App.jsx`
**Tiempo:** 35 minutos

Nova abrió un puesto de repuestos en la estación y ya funciona: el catálogo se pinta, el botón agrega al carrito y el panel lateral muestra lo que llevas. Le faltan tres detalles que viven fuera del JSX. Cada uno se resuelve con un `useEffect`.

## Arrancar

```bash
pnpm install
pnpm dev
```

Abre la consola del navegador (F12) y déjala abierta mientras trabajas.

> **¿Te salió `ERR_PNPM_IGNORED_BUILDS` al hacer `pnpm install`?**
> Es normal. pnpm bloquea por seguridad los scripts que traen los paquetes al instalarse, porque un paquete malicioso podría ejecutar código en tu computador. Si el paquete es de confianza (aquí es `esbuild`, que usa Vite), hay que darle permiso una vez:
>
> ```bash
> pnpm approve-builds
> ```
>
> Marca `esbuild` con la barra espaciadora, confirma con Enter y vuelve a correr `pnpm install`. Los avisos amarillos `[WARN]` de velocidad de descarga o de "Update available" se pueden ignorar.

## Tickets obligatorios

### Ticket 1 · La pestaña cuenta el carrito
La pestaña del navegador dice siempre "Mercado Orbital". Debe decir cuántas unidades hay en el carrito: `(3) Mercado Orbital`.

**Listo cuando:** agregas productos y el número de la pestaña sube. Al quitar uno del carrito, baja.

### Ticket 2 · El aviso se borra solo
Al agregar un producto aparece el aviso "Agregaste ... al carrito", pero se queda pegado. Debe desaparecer solo a los 2,5 segundos.

**Listo cuando:** agregas un producto, ves el aviso y a los 2,5 segundos se va. Si agregas un producto distinto antes de que se borre, el aviso cambia y espera 2,5 segundos más.

### Ticket 3 · Escape cierra el carrito
Abre el carrito con el botón de arriba a la derecha. La tecla Escape debe cerrarlo.

**Listo cuando:** abres el panel, presionas Escape y se cierra. Lo haces tres veces seguidas y sigue funcionando igual.

## Extra (opcional)
La tecla C abre el carrito si está cerrado y lo cierra si está abierto. Este efecto sí lee un estado: piensa qué va en el arreglo de dependencias.

## Pistas
Cada ticket tiene sus pistas en los comentarios de `src/App.jsx`. Los componentes de `src/components/` ya vienen listos: no hace falta abrirlos.

---

# MO-102 · Mercado Orbital: oferta relámpago y hora de la estación

**Asignado por:** Nova
**Dónde trabajas:** en tu Mercado Orbital de la clase (con los tickets de hoy resueltos)
**Tiempo estimado:** entre 40 y 50 minutos
**Puntaje:** 15 puntos

Nova quiere que el puesto se sienta vivo: una oferta con cuenta regresiva y la hora de la estación en el encabezado. Las dos cosas pasan con el tiempo, así que cada una lleva su `useEffect` con su cleanup. Los estilos ya están en `App.css`: solo usa las clases que se indican.

## Arrancar

```bash
pnpm install
pnpm dev
```

Abre la consola del navegador (F12) y déjala abierta mientras trabajas.

## Ticket 1 · Oferta relámpago (6 puntos)

Crea `src/components/OfertaRelampago.jsx` y muéstralo en `App.jsx` entre la bienvenida y el catálogo.

- Un estado `segundos` que empieza en 60.
- Mientras `segundos` sea mayor que 0, muestra:
  `<section className="oferta">` con el texto "Oferta relámpago: Propulsor turbo a 450 cr" y un `<span className="cuenta">` con "Termina en 60 s" (el número real).
- Cuando llegue a 0, muestra `<section className="oferta oferta-terminada">` con "La oferta del Propulsor turbo terminó."

**Listo cuando:** la cuenta baja de a un segundo (no de a dos) y al llegar a 0 aparece el mensaje de oferta terminada.

## Ticket 2 · Hora de la estación (5 puntos)

Crea `src/components/RelojEstacion.jsx` y ponlo dentro de `Encabezado.jsx`, debajo del subtítulo.

- Un estado `hora` que empieza en `new Date()`.
- Un efecto con `setInterval` cada 1000 ms que actualiza `hora` con `new Date()`, y su cleanup con `clearInterval`.
- Muestra `<p className="reloj">Hora de la estación: {hora.toLocaleTimeString()}</p>`.

**Listo cuando:** la hora avanza sola cada segundo.

## Ticket 3 · Prueba en consola (4 puntos)

1. En el efecto del reloj pon `console.log("Reloj encendido")` y en el cleanup `console.log("Reloj apagado")`.
2. Recarga la página y mira la consola.
3. Al final de este README, en una sección **"Lo que vi en la consola"**, escribe qué mensajes salieron, en qué orden y por qué (dos o tres líneas).
4. Borra los dos `console.log`: la consola debe quedar limpia.

## Lo que vi en la consola

Al recargar en desarrollo, apareció "Reloj encendido", luego "Reloj apagado" y otra vez "Reloj encendido".
Este orden sucede porque React Strict Mode ejecuta una comprobación adicional del efecto: monta el reloj, limpia la primera ejecución y vuelve a montarlo.

## Extra (sin puntos)

Mientras la oferta esté activa, la tarjeta del Propulsor turbo muestra 450 cr y se agrega al carrito a ese precio. Cuando termina, vuelve a 640 cr. Pista: el estado `segundos` tendría que subir a `App` para que la tarjeta y la oferta lo compartan.

## Entrega

Sube el proyecto a tu repo y pega el enlace en la tabla del curso.

| Ticket | Puntos |
| --- | --- |
| 1 · Oferta relámpago | 6 |
| 2 · Hora de la estación | 5 |
| 3 · Prueba en consola | 4 |
| **Total** | **15** |
