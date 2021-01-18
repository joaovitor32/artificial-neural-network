import Perceptron from './modules/Perceptron.js';

let activationThreshold= 1

let learningRate = 0.01;
let epochs = 50;
let weights = [activationThreshold,2,4,1,9,123]
let desiredValues = [1,-1,-1,1,1,-1];

let trainingSample1 = [-1,7,8,9,10,11];
let trainingSample2 = [-1,5,6,1,2,31];

let perceptron = new Perceptron(
    weights,
    activationThreshold,
    learningRate,
    desiredValues,
    epochs
);

perceptron.training(trainingSample1);
perceptron.training(trainingSample1);

let groupA,groupB = perceptron.operationPhase(trainingSample2[2]);
console.log(groupA,groupB)