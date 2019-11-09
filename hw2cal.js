function plus(a,b) {
    return a+b;
}
function minus(a,b) {
    return a-b; 
}
function divided(a,b) {
    return a/b;    
}
function multiplied(a,b) {
    return a*b;
}
const calculator = {plus,
                    minus,
                    divided,
                    multiplied};
module.exports = calculator;