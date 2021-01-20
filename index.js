import Perceptron from './modules/Perceptron.js';

//limite de ativação - Bias
let activationThreshold= 1

let learningRate = 0.01;
let epochs = 50;
let weights = [activationThreshold,2,4,1,9,123]
let desiredValues = [1,-1,-1,1,1,-1];


let trainingSample = [
    [-1,7,8,9,10,11],
    [-1,5,6,1,2,31],
    [-1,4,2,1,4,5],
    [-1,2,3,1,120,113],
    [-1,25,63,14,21,311],
    [-1,412,221,1123,214,53],
]

let classifyArray = [1,2,3,6,5,4]

let perceptron = new Perceptron(
    weights,
    activationThreshold,
    learningRate,
    desiredValues,
    epochs
);

perceptron.training(trainingSample);

let groupA,groupB = perceptron.classification(classifyArray);
console.log(groupA,groupB)