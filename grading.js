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

function setQuestion3() {
    let input1 = document.getElementById("twt-1-a").checked;
    let input2 = document.getElementById("twt-2-a").checked;

    sessionStorage.setItem("q3a", input1);
    sessionStorage.setItem("q3b", input2);

    window.location.href("/question4.html");
}

function setQuestion4() {
    let input = document.getElementById("vid-a").checked;

    sessionStorage.setItem("q4", input);

    window.location.href("/survey.html");
}