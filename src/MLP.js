import Perceptron from './Perceptron.js';
import activationFunction from '../modules/activationFunction.js';

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
    
        let I = [];
        let Y = [];

        while (epc < this.epochs) {
           
            this.desiredValues.forEach((elem, index) => {
    
                for (let j = 0; j < this.rows; j++) {               
                
                    I[j] = [];
                    Y[j] = [];

                    for(let i = 0; i<this.cols;i++){
                
                        /* --------- Foward ------------- */
                        
                        I[j][i] = this.neuralNetwork[j][i].forward(i==0?this.trainingSamples[j]:Y[j]);
                        Y[j][i] = activationFunction(I[j][i])

                        if(i===this.cols-1){
                            Y[j].unshift(-1);
                        }
               

                        /* ---------------- Backward ---------------------- */

                    }
                 
                }
    
            })
            
            if(Math.abs(error-oldError)<=this.precision){
                break;
            }
    
            epc++;
        }

    }


}