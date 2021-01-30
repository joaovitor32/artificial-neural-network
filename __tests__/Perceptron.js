import Perceptron from '../src/Perceptron.js';

describe('Perceptron test', () => {


  it('Classification Testing - 1', () => {

    let learningRate = 0.1;
    let epochs = 1000;
    let activationThreshold = -1;
    let desiredValues = [1, -1, -1, 1]

    const A = [0.1, 0.4, 0.7];
    const B = [0.3, 0.7, 0.2];
    const C =  [0.6, 0.9, 0.8];
    const D =  [0.5, 0.7, 0.1];
    
    let trainingSample = [A,B,C,D]

    let perceptron = new Perceptron(
        activationThreshold,
        learningRate,
        desiredValues,
        epochs
    );
    
    
    perceptron.training(trainingSample);
 
    expect(perceptron.classification([0.1, 0.4, 0.7])).toBe(1);
    expect(perceptron.classification([0.3, 0.7, 0.2])).toBe(-1);
    expect(perceptron.classification([0.6, 0.9, 0.8])).toBe(-1);
    expect(perceptron.classification([0.5, 0.7, 0.1])).toBe(1);

  })
})