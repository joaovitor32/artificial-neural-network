import Perceptron from './Perceptron.js';

export default class MultilayerPerceptron{
  
    activationThreshold = 0;
    weights = []
    learningRate = 0;
    desiredValues = []
    epochs = 0;
    precision;
    sizeLayers=[];
    
    constructor(
        activationThreshold=-1,
        learningRate=0.15,
        desiredValues,
        epochs=100,
        sizeLayers,
    ) {

        this.learningRate = learningRate;
        this.activationThreshold = activationThreshold;
        this.desiredValues = [...desiredValues];
        this.epochs = epochs;
        this.sizeLayers = sizeLayers;



    }

    training(){

        let erro = 0;

    }
    

}