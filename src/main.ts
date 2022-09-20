// Importando estilos
import './style.css'
// Importando P5
import { p5i, P5I,  } from 'p5i';
import { Vector } from 'p5';

let data: Vector[] = [];

// funcion de configuración
function setup({
  createCanvas,
  background,
  stroke,
  frameRate,
  windowWidth,
  windowHeight
}: P5I) {
  // Creando el canvas
  createCanvas(windowWidth - 5, windowHeight - 5);
  // Estableciendo color de fondo
  background(51);
  stroke(255);
  frameRate(30);
}

// Función de dibujado
function draw({
  background,
  ellipse,
  width,
  height,
  map
}: P5I) {
  background(51);
  for (let i = 0; i < data.length; i++) {
    let x = map(data[i].x, 0, 1, 0, width);
    let y = map(data[i].y, 0, 1, height, 0);
    ellipse(x, y, 8, 8);
  }
}

// Event Listeners
function mousePressed({
  mouseX, mouseY, map, width, height, createVector }: P5I) {
  let x = map(mouseX, 0, width, 0, 1);
  let y = map(mouseY, 0, height, 1, 0);

  let point = createVector(x, y);
  data.push(point as Vector);
  console.log(mouseX);
  
}


// Montando p5.js en el div
p5i({ setup, draw, mousePressed }, document.getElementById('canvas') as HTMLDivElement);