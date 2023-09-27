var fact = function factorial (n) {
    if (n==0) {
        return 1;
    } else {
        return factorial(n-1)*n;
    }
}

var fact1 = fact(5);

console.log(fact1);