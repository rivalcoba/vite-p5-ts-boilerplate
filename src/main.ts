// Importando estilos
import './style.css'
// Importando P5
import { p5i, P5I } from 'p5i';
// Importando Json
import dataset from './assets/cent2FahrDataset.json';
// Importando funciones de regresion lineal
import linearRegression from './helpers/linearRegUtils';
// Imporntado interface
// import { IOptimizationResults } from './helpers/appInterfaces';

// Creando parametros
const ALPHA = 0.0002;
const SIGMA = 1E-10;
let w0 = 0.0//getRandomArbitrary(-500,500); // 32
console.log(`Initial: w0: ${w0}`);
let w1 = 0.0//getRandomArbitrary(-500,500); // 1.8
console.log(`Initial: w1: ${w1}`);

// Optimizando
let results = linearRegression.optimize(dataset, w0, w1, SIGMA, ALPHA)
console.log('-----------------');
console.log('🌟 RESULTS 🌟');
console.log('-----------------');
console.log(`Iterations = ${results.iterations}`);
console.log(`Derivative = ${results.dJdWjMagnitude}`);
console.log(`w0 = ${results.w0}`);
console.log(`w1 = ${results.w1}`);
console.log(`J = ${results.cost}`);
console.log('-----------------');

let y = 100;

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
  let x = 0;
}


// Montando p5.js en el div
p5i({ setup, draw, mousePressed }, document.getElementById('canvas') as HTMLDivElement);