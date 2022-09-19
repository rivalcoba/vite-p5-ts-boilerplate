/// @ts-check
/// <reference path="../node_modules/@types/p5/global.d.ts" />
// import p5 from "p5";

// Importando estilos
import './style.css'
// Importando P5
import { p5i, P5I } from 'p5i';
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
function draw() {
    
}

// Event Listeners
function mousePressed() {
  let x = map(mouseX, 0, width, 0, 1);
  let y = map(mouseY, 0, height, 1, 0);

  let point = createVector(x, y);
  data.push(point as Vector);

}


// Montando p5.js en el div
const { map, mouseX, mouseY, height, width, createVector } = p5i({ setup, draw, mousePressed }, document.getElementById('canvas') as HTMLDivElement);