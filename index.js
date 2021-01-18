import Perceptron from './modules/Perceptron.js';

let entries = [1,2,3,4,5,6]

let activationThreshold= 1

let learningRate = 0.01;
let epochs = 25;
let weights = [activationThreshold,2,4,1,9,123]
let trainingSample = [-1,7,8,9,10,11];
let desiredValues = [2,3,6,2,3,4];

let perceptron = new Perceptron(
    entries,
    weights,
    activationThreshold,
    learningRate,
    trainingSample,
    desiredValues,
    epochs
);

console.log(perceptron.training());