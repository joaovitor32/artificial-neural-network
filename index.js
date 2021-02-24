import MultilayerPerceptron from './src/MLP.js';

const A = [0.1, 0.4, 0.7];
const B = [0.3, 0.7, 0.2];
const C =  [0.6, 0.9, 0.8];
const D =  [0.5, 0.7, 0.1];

let trainingSample = [A,B,C,D]

let MLP = new MultilayerPerceptron(
    -1,
    0.01,
    [1,-1,-1,1],
    1000,
    trainingSample,
    4,
    4,
    0.001,    
)

MLP.trainingMLP();

