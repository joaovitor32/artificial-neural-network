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


    groupA = [];
    groupB = [];

    constructor(
        activationThreshold=-1,
        learningRate=0.15,
        desiredValues,
        epochs=100
    ) {

        this.learningRate = learningRate;
        this.activationThreshold = activationThreshold;
        this.desiredValues = [...desiredValues];
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

    //y=g(u) - Sign function being utilized
    activationFunction(u) {

        let result;
       
        if (u >= 0) {
            result = 1;
        } else {
            result = -1
        }
   
        return result;

    }

    //y = g'(u) - Derivative sign function being utilized
    derivativeActivationFunction(u) {

        //Using math definition of derivative
        var h = 0.00000001;
        return (this.activationFunction(u + h) - this.activationFunction(u)) /h;
      
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

        while (i < this.epochs && !error) {

            this.desiredValues.forEach((elem, index) => {
                
                    let error=0;
                    u = this.activationPotential(trainingSample[index]);
                    y = this.activationFunction(u);
                    
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
       
        sample.unshift(-1);
      
        u = this.activationPotential(sample);
        y = this.activationFunction(u);
       
        return y;

    }

    
    forward(inputs){

        let inputSum=0;
        let output = 0

        inputSum = this.activationPotential(inputs);
        output = this.activationFunction(inputSum);

        return {output,inputSum};


    }

    backward(inputs){

        let gradienteDescendente = 0;
        let sumInputs = this.activationPotential(inputs);
        let I = this.derivativeActivationFunction(sumInputs)
        
        let y = this.classification(inputs);
    
        this.desiredValues.forEach((elem)=>{
            gradienteDescendente += (elem-y)*I
        })
        
        this.weights.forEach((elem,index)=>{
            this.weights[index] = this.weights[index]*this.learningRate*gradienteDescendente*inputs[index]
        })
    }

}

export default Perceptron;
