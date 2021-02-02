import Perceptron from './Perceptron.js';

"use strict";

export default class MultilayerPerceptron {
    activationThreshold = 0;
    weights = []
    learningRate = 0;
    desiredValues = []
    epochs = 0;
    precision = 0;
    neuralNetwork = []
    trainingSamples;

    constructor(
        activationThreshold = -1,
        learningRate = 0.15,
        desiredValues,
        epochs = 100,
        trainingSamples,
        rows = 0,
        cols = 0,
        precision

    ) {

        this.learningRate = learningRate;
        this.activationThreshold = activationThreshold;
        this.desiredValues =  Array.from(desiredValues);
        this.epochs = epochs;
        this.trainingSamples = Array.from(trainingSamples);
        this.precision = precision;
        this.rows = rows;
        this.cols = cols;

        for (let i = 0; i < this.rows; i++) {
            this.neuralNetwork[i] = []
            for (let j = 0; j < this.cols; j++) {
                this.neuralNetwork[i][j] = new Perceptron(
                    this.activationThreshold,
                    this.learningRate,
                    this.desiredValues,
                    this.epochs
                );
            }

        }

    }

    trainingMLP() {

        let epc = 0;
        let error = 20;
        let oldError = 100
        let outputs = [];
        let newOutputs=[]
        let Y = 0;

        newOutputs[0]= this.trainingSamples[0]

        while (epc < this.epochs) {
           
            this.desiredValues.forEach((elem, index) => {

                /*-------- Foward ----------*/
                for (let j = 0; j < this.rows; j++) {               
                
                    for (let i = 0; i < this.cols; i++) {
                    
                        Y = this.neuralNetwork[j][i].forward(newOutputs); 
                        newOutputs[i]=Y

                        /*----------- Backpropagation is going in to the wrong direction ------------
                        this.neuralNetwork[j][i].backward(inputs);  
                        ---------------------------*/  
                         
                        
                        if(j===this.cols-1){
                            oldError=Object.freeze(error);
                            error +=  (elem - Y)^2;
                            error =(1 / 2)*error; 
                            error = (1/outputs.length)*error;     
                        }
                          
                    }
                    outputs.push(newOutputs)             
                    newOutputs=[]
                }
    
            })
            
            if(Math.abs(error-oldError)<=this.precision){
                break;
            }
    
            epc++;
        }

    }


}