

const button1 = document.querySelector("#yolo");
button1.addEventListener("click", function(){
    const solvedquestion = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]
let randomequeset = new Array;
for(let i=0; i<10; i++){
    randomequeset[i] = solvedquestion[Math.floor(Math.random()* solvedquestion.length)];
}

let result = randomequeset.toString();
// console.log(result);
document.getElementById('result').innerHTML = result;
});