import activation from '../modules/pickActivationFunction.js'

class Perceptron {

    max=1;
    min=-1;

    somatory = 0;

    //limite de ativação - Bias
    activationThreshold = 0;
    weights = []
    learningRate = 0;
    desiredValues = []
    epochs = 0;

    constructor(
        activationThreshold=-1,
        learningRate=0.15,
        desiredValues,
        epochs=100
    ) {

        this.learningRate = learningRate;
        this.activationThreshold = activationThreshold;
        this.desiredValues = Array.from(desiredValues);
        this.epochs = epochs;

        this.fillWeightArray(desiredValues.length)

    }

    fillWeightArray(size){

        let i=0;

        while(i<size){
            this.weights.push(Math.random() * (this.max - this.min) + this.min);
            i++;
        }

        this.weights[0]=this.activationThreshold;        
    
    }

    //U limiar de ativação
    activationPotential(trainingSample) {
         
        let sum=0;
        
        trainingSample.forEach((element, index) => {
            sum += this.weights[index]*element;
        });

        return sum;
    }

    training(trainingSample) {
    
        /*this.weights.forEach((element,index) => {
            
            this.activationThreshold=   this.activationThreshold+this.learningRate*(this.desiredValues[index]-this.activationFunction())*(-1);
            this.weights[index] = this.weights[index] + this.learningRate*(this.desiredValues[index]-this.activationFunction())*this.trainingSample[index];

        });*/

        trainingSample.forEach((_,index)=>{
            trainingSample[index].unshift(-1);
        })

        let error = false;
        let i = 0;
        let y = 0;
        let u = 0;

        let { activationFunctionTanh } = activation('tanh')

        while (i < this.epochs && !error) {

            this.desiredValues.forEach((elem, index) => {
                
                    let error=0;
                    u = this.activationPotential(trainingSample[index]);
                    
                    y = activationFunctionTanh(u);
                    
                    if (y != this.desiredValues[index]) {
                        
                        for (let j = 0; j < this.weights.length; j++) {
                                error=this.desiredValues[index] - y;
                                this.weights[j] = this.weights[j] + this.learningRate * error * trainingSample[index][j];
                        }

                      error = true;
                    }
                })
            i++;
        }
    
    }

    classification(sample) {
       
        let y = 0;
        let u = 0;
       
        let { activationFunctionTanh} = activation()

        sample.unshift(this.activationThreshold);
      
        u = this.activationPotential(sample);
        y = activationFunctionTanh(u);
       
        return y;

    }

    //Foward and Backard are related only to multilayer Perceptron
    
    forward(inputs){
       
        let fowardSum=0;
        fowardSum = this.activationPotential(inputs);
        return fowardSum;   

    }

    backward(I,Y){

        let  delta = [];

        let { activationFunctionTanh,derivativeActivationFunction} = activation()

        this.desiredValues.forEach((elem,index)=>{

            delta[index]= (elem - Y[index])*(derivativeActivationFunction(I[index],activationFunctionTanh))

        })

        this.weights.forEach((elem,index)=>{
            this.weights[index] = elem*this.learningRate*delta[index]*Y[index]
        })

    }
}

export default Perceptron;
