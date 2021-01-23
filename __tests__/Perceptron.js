import Perceptron from '../src/Perceptron.js';

describe('Perceptron test', () => {


  it('Classification Testing', () => {

    let learningRate = 0.1;
    let epochs = 1000;
    let activationThreshold = -1;
    let desiredValues = [1, -1, -1, 1]
    
    let trainingSample = [[0.1, 0.4, 0.7], 
    [0.3, 0.7, 0.2], 
    [0.6, 0.9, 0.8], 
    [0.5, 0.7, 0.1]]

    let perceptron = new Perceptron(
        activationThreshold,
        learningRate,
        desiredValues,
        epochs
    );
    
    perceptron.training(trainingSample);
    perceptron.classification(trainingSample[0]);
    perceptron.classification(trainingSample[1]);
    perceptron.classification(trainingSample[2]);
    perceptron.classification(trainingSample[3]);

    let {groupA,groupB} = perceptron.getClassificationGroups();

    //expect(groupA).toMatchObject([trainingSample[1],trainingSample[2]])
    //expect(groupB).toMatchObject([trainingSample[0],trainingSample[3]])

  })
})