import activationFunction from './activationFunction.js';

//y = g'(u) - Derivative sign function being utilized
const derivativeActivationFunction = (u,f) => {

    //Using math definition of derivative
    var h = 0.00001;
    return (f(u + h) - f(u)) /h;
  
}

export default derivativeActivationFunction;