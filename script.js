const scoreEl = document.querySelector(".score");
const questionEl = document.querySelector(".question");
const  answerEl = document.querySelector("#answer");
const submitEl = document.querySelector(".submit");



function multiply(){

  let num1 = Math.ceil(Math.random()*9) + 1;
  let num2= Math.ceil(Math.random()*9) + 1;

  const question = ` What is ${num1} multiply by ${num2} ?`;
  questionEl.textContent = question;

  let multi = num1 * num2;
  
  let score =   JSON.parse(localStorage.getItem('your-score'));

if(!score){
  score = 0;
}


submitEl.addEventListener("click", ()=>{
      
  let youranswer = +answerEl.value;

  
   if(youranswer == multi){
    score = score + 1;

    localStorage.setItem('your-score', JSON.stringify(score));
    let yourscore = localStorage.getItem('your-score');
     
    scoreEl.innerText =  `score : ${yourscore} `;
   
   }else{
    if(score > 0){
      score = score - 1;
      localStorage.setItem('your-score', JSON.stringify(score));
      let yourscore = localStorage.getItem('your-score');
      scoreEl.innerText =  `score : ${yourscore} `;
    }else{
      score = 0;

      localStorage.setItem('your-score', JSON.stringify(score));
      let yourscore = JSON.parse(localStorage.getItem('your-score'));
      scoreEl.innerText =  `score : ${yourscore} `;
    }
    
   
    }
   
    answerEl.value = ""

})
  
  
}

multiply();