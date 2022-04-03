function displayAdvice(response) {
    let adviceId = document.querySelector("#advice-no");
   let advice= document.querySelector("#advice");
   advice.innerHTML = response.data.slip.advice;
   adviceId.innerHTML = response.data.slip.id;
}
function getAdvice() {
  let url = "https://api.adviceslip.com/advice";
  axios.get(url).then(displayAdvice)
}


let getAdviceButton= document.querySelector("#die");
getAdviceButton.addEventListener("click",getAdvice);