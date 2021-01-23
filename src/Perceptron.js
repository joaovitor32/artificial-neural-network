class Perceptron {

    max=1;
    min=-1

    somatory = 0;

    //limite de ativação - Bias
    activationThreshold = 0;
    weights = []
    learningRate = 0;
    desiredValues = []
    epochs = 0;
    
    groupA = [];
    groupB = [];

    constructor(
        activationThreshold,
        learningRate,
        desiredValues,
        epochs
    ) {

        this.learningRate = learningRate;
        this.activationThreshold = activationThreshold;
        this.desiredValues = [...desiredValues];
        this.epochs = epochs;

        this.weights.unshift(this.activationThreshold);
        desiredValues.forEach((_,index)=>{
            if(index>0){
                this.weights[index] = Math.random() * (this.max - this.min) + this.min;
            }
        })

    }

    activationPotential(trainingSample) {
         
        let sum=0;
        
        trainingSample.forEach((element, index) => {
            sum += element * this.weights[index];
        });

        return sum;
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
        
        trainingSample[0].forEach((_,index)=>{
            trainingSample[index].unshift(-1);
        })
        
        let error = false;
        let i = 0;
        let y = 0;
        let u = 0;

        while (i < this.epochs) {

            while (!error) {

                this.desiredValues.forEach((elem, index) => {

                    
                    u = this.activationPotential(trainingSample[index]);
                    y = this.activationFunction(u);

                    if (y != this.desiredValues[index]) {
                        for (let j = 0; j < trainingSample[index].length; j++) {
                               
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

        sample.forEach((element, index) => {
            u += element * this.weights[index];
        });

        y = this.activationFunction(u);
        
        if (y == 1) {
            this.groupA.push(sample)
        } else if (y == -1) {
            this.groupB.push(sample)

        }
    }

    getClassificationGroups(){
        return { groupA:this.groupA,groupB: this.groupB }
    }

}

export default Perceptron;
