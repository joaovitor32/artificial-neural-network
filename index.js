import Perceptron from './src/Perceptron.js';


let learningRate = 0.1;
let epochs = 1000;
let activationThreshold = -1;
let desiredValues = [1, -1, -1, 1]

let A = [0.1, 0.4, 0.7];
let B = [0.3, 0.7, 0.2];
let C =  [0.6, 0.9, 0.8];
let D =  [0.5, 0.7, 0.1];

let trainingSample = [A,B,C,D]

let perceptron = new Perceptron(
    activationThreshold,
    learningRate,
    desiredValues,
    epochs
);


perceptron.training(trainingSample);

perceptron.classification([0.1, 0.4, 0.7]);
perceptron.classification([0.3, 0.7, 0.2]);
perceptron.classification([0.6, 0.9, 0.8]);
perceptron.classification([0.5, 0.7, 0.1]);

let {groupA,groupB} = perceptron.getClassificationGroups();

//expect(groupA).toMatchObject([trainingSample[1],trainingSample[2]])
//expect(groupB).toMatchObject([trainingSample[0],trainingSample[3]])