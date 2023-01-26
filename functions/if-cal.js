function myFunction() {


    //Pulling plus,minus,times,devide symbols as variable 
    let htmlAction = document.getElementById('action').value;

    // Pulling numbers entered as varaiables 
    let htmlNumOne = parseFloat(document.getElementById('numInputOne').value);
    let htmlNumTwo = parseFloat(document.getElementById('numInputTwo').value);

    let answer;

    // Preforming calculations based on the action chosen
    if (htmlAction == '+') {
        answer = htmlNumOne + htmlNumTwo;
    }
    else if (htmlAction == '-') {
        answer = htmlNumOne - htmlNumTwo;
    }
    else if (htmlAction == '*') {
        answer = htmlNumOne * htmlNumTwo;
    }
    else {
        answer = htmlNumOne / htmlNumTwo;
    }

    // display the result
    document.getElementById('result').innerHTML +=  `${htmlNumOne}  ${htmlAction} ${htmlNumTwo} = ${answer}` ;
}






