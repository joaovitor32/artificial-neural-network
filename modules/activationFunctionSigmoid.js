//y=g(u) - Sign function being utilized
const activationFunctionSigmoid = (u) => {

    return 1/(1+Math.pow(Math.E, -u));

}

export default activationFunctionSigmoid;