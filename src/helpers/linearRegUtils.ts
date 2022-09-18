import neural from './percepetron';
import { IOptimizationResults } from './appInterfaces'

export default {
  // Función perdida
  loss(y: number, y_hat: number) {
    return ((y_hat - y) ** 2) / 2.0;
  },
  // Cost Function
  cost(dataset: number[][], w0: number, w1: number) {
    let sum = dataset.reduce((previousValue, currentValue) => previousValue + this.loss(currentValue[1], neural(w0, w1, currentValue[0])), 0);
    let cost = sum / (dataset.length)
    return cost;
  },
  // Derivadas
  dJdw0(dataset: number[][], w0: number, w1: number) {
    let sum = dataset.reduce((previousValue, currentValue) => previousValue + (neural(w0, w1, currentValue[0]) - currentValue[1]), 0);
    let cost = sum / dataset.length;
    return cost
  },
  dJdw1(dataset: number[][], w0: number, w1: number) {
    let sum = dataset.reduce((previousValue, currentValue) => previousValue + (neural(w0, w1, currentValue[0]) - currentValue[1]) * currentValue[0], 0);
    let cost = sum / dataset.length;
    return cost
  },
  getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min; 
  },
  dJdWjMagnitude(djdw0: number, djdw1: number) {
    return Math.sqrt(djdw0 ** 2 + djdw1 ** 2);
  },
  optimize(dataset: number[][], w0: number, w1: number, sigma: number, alpha: number): IOptimizationResults {
    let it = 0;
    let dJdWj: number;
    do {
      // 1 Se calculan las derivadas
      let dJdw0 = this.dJdw0(dataset, w0, w1)
      let dJdw1 = this.dJdw1(dataset, w0, w1);;
      // 2 Se calcula la magnitud de la derivada
      dJdWj = this.dJdWjMagnitude(dJdw0, dJdw1);
      // 3 Se calcula nueva w0
      let nw0 = w0 - alpha * dJdw0
      // 4 Se calcula nueva w1
      let nw1 = w1 - alpha * dJdw1
      // 5 Se actualizan w0 y w1
      w0 = nw0;
      w1 = nw1;
      // 6 Se Incrementa interacion
      it++;
    } while (dJdWj > sigma)
    // 7 Se calcula costo
    const j = this.cost(dataset, w0, w1);
    // 8 Se retornan resultados de optimización
    return {
      iterations: it,
      dJdWjMagnitude: dJdWj,
      w0: w0,
      w1: w1,
      cost: j
    }
  }
}