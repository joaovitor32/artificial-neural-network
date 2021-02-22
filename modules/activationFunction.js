//y=g(u) - Sign function being utilized
const activationFunction = (u) => {

    let result;
   
    if (u >= 0) {
        result = 1;
    } else {
        result = -1
    }

    return result;

}

export default activationFunction;