function quadratic(){
    let a = Number(prompt("Enter A"));
    let b = Number(prompt("Enter B"));
    let c = Number(prompt("Enter C"));

    let sqrRoot = Math.sqrt((b**2)-(4*a*c)); // (b^2 -4ac)^1/2

    const answerArray = []; // array created to store the two answers 

    answerArray[0] = ((-1*b)+sqrRoot)/(2*a); // (-b + (b^2 - 4ac)^1/2)/2a
    answerArray[1] = ((-1*b)-sqrRoot)/(2*a); // (-b - (b^2 - 4ac)^1/2)/2a

    // changes the answers to have only 4 decimal places 
    // does not change the answer to have 4 decimal places if it is a whole number (integer)

    if (!Number.isInteger(answerArray[0])){
        answerArray[0] = answerArray[0].toFixed(4);
    }

    if (!Number.isInteger(answerArray[1])){
        answerArray[1] = answerArray[1].toFixed(4);
    }

    document.getElementById("numbers").innerHTML = `Your inputs were: ${a}, ${b}, ${c}`;

    document.getElementById("answer").innerHTML = `The answer is: ${answerArray[0]}, ${answerArray[1]}`;
}