var inputField = document.querySelector('.input-field');
var contentBox = document.querySelector('.content-box');
var typingTest = document.querySelector('.typing-test p');
var Spans = typingTest.getElementsByTagName('span')
var content = document.querySelector('.content');
var resultDetails = document.querySelector('.result-details');
var time = document.querySelector('.time');
var mistake = document.querySelector('.mistake');
var wpm = document.querySelector('.wpm');
var cpm = document.querySelector('.cpm');
var button = document.querySelector('button');



// immediately invoked function in javascript
// (function loadPara(){
    //     var paragraph = ['Hello Mr. Hemant','Hey! mr. singh','hi mr. rajput','ram ram babu bhai'];
    //     var  randomIndex = Math.floor(Math.random()*paragraph.length);
    //     typingTest.innerHTML = paragraph[randomIndex];
    //     button.addEventListener("click",()=>{window.location.reload()})
    // })();
    function loadParagraph(){
        var paragraph = ['Hello Mr. Hemant','Hey! mr. singh','hi mr. rajput','ram ram babu bhai'];
        var  randomIndex = Math.floor(Math.random()*paragraph.length);
        for (const char of paragraph[randomIndex]){
            typingTest.innerHTML += `<span>${char}</span>`;
        }
}
loadParagraph();
console.log(Spans[0].classList.add("added"));
for (var span of Spans){
    span.addEventListener("click",()=>{alert("hello")});
}