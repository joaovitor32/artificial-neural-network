import Perceptron from './Perceptron.js';

export default class MultilayerPerceptron{
  
    activationThreshold = 0;
    weights = []
    learningRate = 0;
    desiredValues = []
    epochs = 0;
    precision;
    sizeLayers=[];
    numInputs = 0;
    numHidden = 0;
    numOutput = 0;
    
    constructor(
        activationThreshold=-1,
        learningRate=0.15,
        desiredValues,
        epochs=100,
        numInputs,
        numHidden,
        numOutput,

        input = [],
        hidden = [],
        output = []
        
    ) {

        this.learningRate = learningRate;
        this.activationThreshold = activationThreshold;
        this.desiredValues = [...desiredValues];
        this.epochs = epochs;
        
        this.numInputs=numInputs;
        this.numHidden=numHidden;
        this.numOutput=numOutput;


    }

    training(){

        let erro = 0;

    }
    

}