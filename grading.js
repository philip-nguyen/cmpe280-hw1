// set question 1
function setQuestion1() {
    let output = document.getElementById("math-1-d").checked;
    console.log(output);
    sessionStorage.setItem("q1", output);
    window.location.assign('question2.html');
}

function setQuestion2() {
    // get the checked value in the correct answer
    let output = document.getElementById("math-2-a").checked;
    // debug to delete later
    console.log(output);
    // use of session storage to 
    sessionStorage.setItem("q2", output);
    // redirect to the next question
    window.location.assign("question3.html");
}

function setQuestion3() {
    let input1 = document.getElementById("twt-1-a").checked;
    let input2 = document.getElementById("twt-2-a").checked;

    sessionStorage.setItem("q3a", input1);
    sessionStorage.setItem("q3b", input2);

    window.location.assign("question4.html");
}

function setQuestion4() {
    let input = document.getElementById("vid-a").checked;

    sessionStorage.setItem("q4", input);

    window.location.assign("survey.html");
}

function clearSelection(name) {
    event.preventDefault();
    var ele = document.getElementsByName(name);
    for(var i=0; i < ele.length; i++)
        ele[i].checked = false;
}

function calcGrade() {
    var q1 = sessionStorage.getItem("q1");
    var q2 = sessionStorage.getItem("q2");
    var q3a = sessionStorage.getItem("q3a");
    var q3b = sessionStorage.getItem("q3b");
    var q4 = sessionStorage.getItem("q4");

    var mathScore = 0, readingScore = 0, avScore = 0, mathQs = 0;

    if(q1) {
        mathScore++;
        
    }
    else mathQs++;
    if(q2) {
        mathScore++;
    }
    else mathQs++;
    if(q3a) readingScore++;
    if(q3b) readingScore++;
    if(q4) avScore++;

    document.getElementById("math-1").innerHTML = mathQs == 0 ? 2 : mathQs;
    document.getElementById("math-2").innerHTML = mathScore;
    document.getElementById("math-3").innerHTML = mathScore * 50;

    document.getElementById("read-1").innerHTML = q3a && q3b ? 1 : 0;
    document.getElementById("read-2").innerHTML = readingScore / 2;
    document.getElementById("read-3").innerHTML = readingScore * 50;

    document.getElementById("av-1").innerHTML = avScore;
    document.getElementById("av-2").innerHTML = avScore;
    document.getElementById("av-3").innerHTML = avScore * 100;


    console.log(q1, q2, q3a, q3b, q4);
}