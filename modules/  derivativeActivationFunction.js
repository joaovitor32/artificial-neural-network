import activationFunction from './activationFunction.js';

//y = g'(u) - Derivative sign function being utilized
const derivativeActivationFunction = (u) => {

    //Using math definition of derivative
    var h = 0.1;
    return (activationFunction(u + h) - activationFunction(u)) /h;
  
}

export default derivativeActivationFunction;