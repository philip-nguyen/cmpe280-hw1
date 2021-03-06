// set question 1
function setQuestion1() {
    let output = document.getElementById("math-1-d");
    console.log(output);
    sessionStorage.setItem("q1", $("#math-1-d").val());
}
