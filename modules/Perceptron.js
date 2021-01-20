class Perceptron {

    somatory = 0;

    //limite de ativação - Bias
    activationThreshold = 0;
    weights = []
    learningRate = 0;
    desiredValues = []
    epochs = 0;

    constructor(
        weights,
        activationThreshold,
        learningRate,
        desiredValues,
        epochs
    ) {

        this.learningRate = learningRate;
        this.activationThreshold = activationThreshold;
        this.desiredValues = [...desiredValues];
        this.weights = [...weights];
        this.epochs = epochs;

    }

    //u

    sum(trainingSample) {
       
        let sum=0;
        
        if(!trainingSample){
            return;
        }

        trainingSample.forEach((element, index) => {
            sum += element * this.weights[index];
        });

        return sum;
    }

    activationPotential(trainingSample) {
        return this.sum(trainingSample) - this.activationThreshold;
    }

    //y=g(u)
    activationFunction(u) {

        let result;

        //Função Degrau sendo utilizada
        if (u >= 0) {
            result = 1;
        } else {
            result = -1
        }
   
        return result;

    }

    training(trainingSample) {

        /*this.weights.forEach((element,index) => {
            
            this.activationThreshold=   this.activationThreshold+this.learningRate*(this.desiredValues[index]-this.activationFunction())*(-1);
            this.weights[index] = this.weights[index] + this.learningRate*(this.desiredValues[index]-this.activationFunction())*this.trainingSample[index];

        });*/

        let error = false;
        let i = 0;
        let y = 0;
        let u = 0;

        while (i < this.epochs) {

            while (!error) {

                this.desiredValues.forEach((elem, index) => {

                    if(this.desiredValues.length!=trainingSample[index].length){
                        throw new Error('Incompatible arrays in size')
                    }
                    
                    u = this.activationPotential(trainingSample[index]);
                    y = this.activationFunction(u);

                    if (y != this.desiredValues[index]) {
                        for (let j = 0; j < this.weights.length; j++) {
                               
                                this.weights[j] = this.weights[j] + this.learningRate * (this.desiredValues[index] - y) * trainingSample[index][j];
                    
                        }

                        error = true;
                    }

                })
            }
            i++;
        }
    }

    classification(sample) {

        let y = 0;
        let u = 0;
        let groupA = [];
        let groupB = [];

        this.weights.forEach((element, index) => {
            u += element * sample[index];
        });

        y = this.activationFunction(u);

        if (y == -1) {
            groupA.push(sample)
        } else if (y == 1) {
            groupB.push(sample)

        }

        return { groupA, groupB }
    }

}

export default Perceptron;
