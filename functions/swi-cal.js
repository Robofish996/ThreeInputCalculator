function myFunction() {
  // Setting variables of number A and B
  let numInputOne = parseFloat(document.getElementById('inputOne').value);
  let numInputTwo = parseFloat(document.getElementById('inputTwo').value);

  // Setting variable for plus,minus,devide and times. + - * / 
  let htmlAction = document.getElementById('action').value;

  //using switch statement to preform calculation
  let swiAnswer;
  switch (htmlAction) {
    case "+":
      swiAnswer = numInputOne * numInputTwo
      break;
    case "-":
      swiAnswer = numInputOne * numInputTwo
      break;
    case "/":
      swiAnswer = numInputOne * numInputTwo
      break;
    case "*":
      swiAnswer = numInputOne * numInputTwo
      break;
    default:
      swiAnswer = "Please enter the required information"



  }

  // display the result
  document.getElementById('result').innerHTML += `${numInputOne}  ${htmlAction} ${numInputTwo} = ${swiAnswer}`;

}
