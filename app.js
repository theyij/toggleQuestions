//toggle to show hidden text
let btns = document.querySelectorAll(".question-btn");

for (let btn of btns){
    btn.addEventListener("click", function(e){
        let question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle("show-text");
    })
}


//Read data form local .json File
//ref: https://howtocreateapps.com/fetch-and-display-json-html-javascript/
fetch('question.json')
    .then(function (response) {
    return response.json();
    })
    .then(function (data) {
    appendData(data);
    })
    .catch(function (err) {
    console.log(err);
    });

// let ans = document.querySelectorAll(".myAns");
// for (let a of ans){
//     ans.innerHTML = 'A:' + data[i].answer;
// }

//display data from json
function appendData(data) {
    let ans = document.querySelectorAll(".myAns");

    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = 'A:' + data[i].answer;
        mainContainer.appendChild(div);
    }
}
