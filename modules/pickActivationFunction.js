import activationFuntion from './activationFunction.js';
import activationFunctionTanh from './activationFunctionTanh.js';
import activationFunctionSigmoid from './activationFunctionSigmoid.js';

import derivativeActivationFunction from './derivativeActivationFunction.js';

const activation = () => {

    return {
        activationFuntion,
        derivativeActivationFunction,
        activationFunctionSigmoid,
        activationFunctionTanh
    }
}

export default activation;