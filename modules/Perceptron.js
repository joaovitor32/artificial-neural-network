import transposeArray from '../utils/TransposeArray.js'

class Perceptron {

    somatory = 0;

    //limite de ativação
    activationThreshold = 0;
    weights = []
    entries = []
    learningRate = 0;
    trainingSample = []
    desiredValues = []
    epochs = 0;

    constructor(
        entries,
        weights,
        activationThreshold,
        learningRate,
        trainingSample,
        desiredValues,
        epochs
    ) {

        this.learningRate = learningRate;
        this.activationThreshold = activationThreshold;
        this.trainingSample = [...trainingSample];
        this.desiredValues = [...desiredValues];
        this.weights = [...weights];
        this.entries = [...entries];
        this.epochs = epochs;

        if (entries.length != weights.length) {
            throw new Error('Entries array differ from weights array in size')
        }

        entries.forEach((element, index) => {
            this.somatory += element * weights[index];
        });

    }

    //u
    activationPotential() {

        return this.somatory - this.activationThreshold;

    }

    //y=g(u)
    activationFunction() {

        let result;

        //Função Degrau sendo utilizada
        if (this.activationPotential() >= 0) {
            result = 1;
        } else {
            result = -1
        }

        return result;

    }

    training() {

        /*this.weights.forEach((element,index) => {
            
            this.activationThreshold=   this.activationThreshold+this.learningRate*(this.desiredValues[index]-this.activationFunction())*(-1);
            this.weights[index] = this.weights[index] + this.learningRate*(this.desiredValues[index]-this.activationFunction())*this.trainingSample[index];

        });*/

        let error = false;
        let i = 0;
        let y = 0;

        while (!error) {

            while (i < this.epochs) {

                for (let k = 0; k < this.desiredValues.length - 1; k++) {

                    y = this.activationFunction();

                    if (y != this.desiredValues[k]) {

                        for (let j = 0; j < this.weights.length - 1; j++) {

                            this.weights[j] = this.weights[j] + this.learningRate * (this.desiredValues[k] - this.activationFunction()) * this.trainingSample[k];

                        }

                        error = true;

                    }
                }

                i++;
            }
        }

        console.log(this.activationThreshold);
        console.log(this.weights);

    }

}

export default Perceptron;