# Examen 1er trimestre LMSGI

1º de DAM en ESCAV Granada

Nombre: Javier Camarero López

Fecha: 21/12/2023

## Descripción del examen

Esta página web consta de tres secciones cada una con la clase que en css lo organiza de forma que esté todo centrado y cada una con su respectivo contenido:
```
    <section id="primera_seccion" class="Orientacion">
        <h1>Hola Mundo</h1>
    </section>
```
La primera sección únicamente tiene un heading de nivel 1.
```
    <section id="segunda_seccion" class="Orientacion">
        <h2>Mi foto</h2>
        <img src="Carlos_el_topo_que_gira.jpg" alt="Carlitos">
        <p>Carlos el topo que gira</p>
    </section>
```
La segunda sección tiene un heading de nivel 2 con una imagen y un pie de imagen.
```
    <section id="tercera_seccion" class="Orientacion">
        <p id="info">Pulsa el botón</p>
        <button onclick="contadorClicks()">Click</button>
    </section>
```
Por último la tercera sección consta de un texto con información y un botón que irá pulsando el usuario.

Para terminar el botón de la última sección funciona mediante una función en JavaScript que comprueba el valor de la variable cada vez que se pulsa cambiando el texto con información.

[Enlace a CodePen](https://codepen.io/Javier-Camarero-L-pez/pen/mdobZWB?editors=0010)