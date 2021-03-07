// set question 1
function setQuestion1() {
    let output = document.getElementById("math-1-d").checked;
    console.log(output);
    sessionStorage.setItem("q1", output);
    window.location.href("/question2.html");
}

function setQuestion2() {
    // get the checked value in the correct answer
    let output = document.getElementById("math-2-a").checked;
    // debug to delete later
    console.log(output);
    // use of session storage to 
    sessionStorage.setItem("q2", output);
    // redirect to the next question
    window.location.href("/question3.html");
}
