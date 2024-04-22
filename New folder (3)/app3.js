
// <--------------------------Function relace: heading.--------------------------------->
// var h1 = document.getElementById('heading');
// var input1 = document.getElementById('input1');
// var input2 = document.getElementById('input2');



// function replace(){

    // var value = h1.innerText;
    // var input1Value = input1.value;
    // var input2Value = input2.value;

    // value = value.replace(input1Value, input2Value);
    // h1.innerText = value;

// }
                // <------------------------------------------------------------->


// <------------- Function abc: heading.------------------------->

// var h1 = document.getElementById('heading');
// var userinput = document.getElementById('userinput');

// function abc(){
    // console.log(userinput.value);
    // h1.innerText = userinput.value;
    // userinput.value ="";

// }
//              <------------------------------------------------------------------>
//  <----------------------------------function see info----------------------->
var para = document.getElementById('para');
var wordCount = document.getElementById('wordCount');

function seeInfo() {
    var value = para.value;
    var totalWords = value.split('').length;
    var totalLetters = value.length;
    wordCount.innerText = "Total Words" + totalWords + " Total Letters " + totalLetters;

}
            //  <-------------------------------------------------------------------------->
// <-----------------------------function box.style.backgroundColor-------------------->
// var box = document.getElementById('box');


// console.log(box.style);

// function changeRed(){

    // box.style.backgroundColor = 'red';
// }

// function changeBlue(){
    
    // box.style.backgroundColor = 'blue';
// }

// function changeYellow(){
    
    // box.style.backgroundColor = 'yellow';
// }

// function changePurple(){
    
    // box.style.backgroundColor = 'purple';
// }

// function changeOrange(){
    
    // box.style.backgroundColor = 'orange';
// }

