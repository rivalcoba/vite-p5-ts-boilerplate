// Importando estilos
import './style.css'
// Importando P5
import { p5i, P5I } from 'p5i';

let y = 100;

// funcion de configuración
function setup({
  createCanvas,
  stroke,
  frameRate,
  windowWidth,
  windowHeight
}: P5I) {
  createCanvas(windowWidth-5, windowHeight-5);
  stroke(255);
  frameRate(30);
}

// Función de dibujado
function draw({background, line, height, width} : P5I) {
  background(0);
  y = y - 1;
  if (y < 0) {
    y = height;
  }
  line(0, y, width, y);
}

// Montando p5.js en el div
p5i({ setup, draw }, document.getElementById('canvas') as HTMLDivElement);