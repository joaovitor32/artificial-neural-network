import Perceptron from './Perceptron.js';

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
        this.desiredValues = [...desiredValues];
        this.epochs = epochs;
        this.trainingSamples = [...trainingSamples]
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
        let erro = 0;
        let inputs = new Array(3);
        let Y = 0;

        while (epc < this.epochs) {

            this.desiredValues.forEach((elem, index) => {

                /*-------- Foward ----------*/
                inputs = this.trainingSamples[index]               
                for(let j = 0; j < this.rows; j++){

                    for (let i = 0; i < this.cols ; i++) {

                        Y = this.neuralNetwork[j][i].forward(inputs);
                        inputs[j]=Y;
            
                    }
                   
                }

            })

            /*----------- Backward -----------*/


            epc++;
        }

    }


}